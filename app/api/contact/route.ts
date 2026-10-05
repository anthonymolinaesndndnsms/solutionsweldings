import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  location?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !EMAIL_RE.test(email) || message.length < 20) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const submission = {
    name,
    email,
    company: body.company?.trim() || null,
    phone: body.phone?.trim() || null,
    location: body.location?.trim() || null,
    message,
    receivedAt: new Date().toISOString(),
  };

  // NOTE: delivery is not connected yet, so a submission currently goes
  // nowhere. To go live, send `submission` from here via an email provider
  // (Resend, SendGrid, Postmark, ...) and return 502 if that call fails so
  // the form shows its error state.
  //
  // Never log the submission itself: it holds names, emails, phone numbers
  // and project details, and server logs are retained and widely readable.
  // Log only non-identifying metadata.
  console.info("[contact] submission received", {
    receivedAt: submission.receivedAt,
    hasCompany: Boolean(submission.company),
    hasPhone: Boolean(submission.phone),
    hasLocation: Boolean(submission.location),
    messageLength: submission.message.length,
  });

  return NextResponse.json({ ok: true });
}
