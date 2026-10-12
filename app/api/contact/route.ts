import { NextResponse } from "next/server";
import {
  ATTACHMENT_TYPES,
  MAX_ATTACHMENT_BYTES,
  inquiryText,
  type Inquiry,
} from "@/lib/inquiry";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const field = (form: FormData, key: string, max = 200) =>
  String(form.get(key) ?? "").trim().slice(0, max);

/**
 * Project inquiries are emailed through Resend (https://resend.com), which
 * has a free tier. Delivery needs three environment variables:
 *
 *   RESEND_API_KEY      API key from the Resend dashboard
 *   CONTACT_TO_EMAIL    inbox that receives inquiries
 *   CONTACT_FROM_EMAIL  sender on a domain verified in Resend,
 *                       e.g. "SCG Website <website@solutionscontractinggroup.com>"
 *
 * Until they are set the route answers 503 and the form tells the visitor to
 * email or call instead. It never reports success for a message that went
 * nowhere.
 *
 * Submissions are never logged: they contain names, emails, phone numbers and
 * project details, and server logs are retained and widely readable.
 */
export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (field(form, "website")) return NextResponse.json({ ok: true });

  const inquiry: Inquiry = {
    name: field(form, "name"),
    company: field(form, "company"),
    email: field(form, "email"),
    phone: field(form, "phone", 40),
    location: field(form, "location"),
    description: field(form, "description", 5000),
    schedule: field(form, "schedule"),
  };

  if (!inquiry.name || !EMAIL_RE.test(inquiry.email) || !inquiry.location || inquiry.description.length < 10) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const upload = form.get("attachment");
  const file = upload instanceof File && upload.size > 0 ? upload : null;
  if (file && file.size > MAX_ATTACHMENT_BYTES) {
    return NextResponse.json({ error: "attachment_too_large" }, { status: 413 });
  }
  if (file && !ATTACHMENT_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "attachment_type" }, { status: 415 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json({ error: "delivery_not_configured" }, { status: 503 });
  }

  const attachments = file
    ? [
        {
          filename: file.name.replace(/[^\w.\- ]/g, "_").slice(0, 120) || "attachment",
          content: Buffer.from(await file.arrayBuffer()).toString("base64"),
        },
      ]
    : undefined;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: inquiry.email,
      subject: `Project inquiry: ${inquiry.company || inquiry.name} (${inquiry.location})`.slice(0, 200),
      text: inquiryText(inquiry),
      attachments,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    // Status only; the response body could echo the submission back.
    console.error("[contact] delivery failed", { status: res?.status ?? "network" });
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
