"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Paperclip } from "lucide-react";
import {
  ATTACHMENT_ACCEPT,
  ATTACHMENT_TYPES,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  MAX_ATTACHMENT_BYTES,
  inquiryText,
  type Inquiry,
} from "@/lib/inquiry";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "invalid"; message: string }
  // Delivery isn't available (not configured, or the email service failed):
  // offer the visitor's own email app with everything filled in.
  | { kind: "fallback"; inquiry: Inquiry; hadAttachment: boolean };

const input =
  "w-full bg-white border border-mist-300 hover:border-ink-400 focus:border-azure-500 focus:ring-1 focus:ring-azure-500 rounded px-4 py-3 text-[15px] text-ink-900 placeholder-ink-400 outline-none transition-colors duration-150";
const label = "block text-[11px] font-semibold text-ink-500 uppercase tracking-[0.12em] mb-2";
const req = <span className="text-azure-500">*</span>;

const tel = CONTACT_PHONE.replace(/\D/g, "");

function mailtoHref(q: Inquiry) {
  const subject = `Project inquiry: ${q.company || q.name} (${q.location})`;
  // Keep well under the length mail clients accept in a mailto link.
  const body = inquiryText({ ...q, description: q.description.slice(0, 1500) });
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fileName, setFileName] = useState("");
  // What the visitor typed, so "Back to the form" doesn't wipe it. (The
  // attachment itself can't be restored; browsers don't allow that.)
  const [draft, setDraft] = useState<Partial<Inquiry>>({});

  function checkFile(file: File | undefined) {
    if (!file) return null;
    if (file.size > MAX_ATTACHMENT_BYTES) return "That file is over 4 MB. Please attach a smaller version.";
    if (file.type && !ATTACHMENT_TYPES.includes(file.type))
      return "Please attach a photo (JPG, PNG, HEIC) or a PDF drawing.";
    return null;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get("attachment");
    const fileError = checkFile(file instanceof File && file.size > 0 ? file : undefined);
    if (fileError) return setStatus({ kind: "invalid", message: fileError });

    const inquiry: Inquiry = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      location: String(data.get("location") ?? "").trim(),
      description: String(data.get("description") ?? "").trim(),
      schedule: String(data.get("schedule") ?? "").trim(),
    };
    const hadAttachment = file instanceof File && file.size > 0;
    setDraft(inquiry);

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (res.ok) {
        form.reset();
        setFileName("");
        setDraft({});
        return setStatus({ kind: "sent" });
      }
      if (res.status === 400)
        return setStatus({ kind: "invalid", message: "Please fill in the required fields." });
      if (res.status === 413 || res.status === 415)
        return setStatus({ kind: "invalid", message: checkFile(file as File) ?? "That attachment can't be sent." });
      setStatus({ kind: "fallback", inquiry, hadAttachment });
    } catch {
      setStatus({ kind: "fallback", inquiry, hadAttachment });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="bg-white border border-mist-200 rounded-lg p-10 text-center">
        <CheckCircle2 className="w-10 h-10 text-azure-500 mx-auto mb-4" />
        <h3 className="text-[21px] font-black text-ink-900 mb-2 tracking-tight">
          Project Details Sent
        </h3>
        <p className="text-[15px] text-ink-500 max-w-md mx-auto leading-relaxed">
          Thanks. We&apos;ll review the details and follow up to discuss the next step.
        </p>
      </div>
    );
  }

  if (status.kind === "fallback") {
    return (
      <div className="bg-white border border-mist-200 rounded-lg p-8 sm:p-10">
        <div className="flex items-start gap-3 mb-5">
          <AlertCircle className="w-5 h-5 text-azure-500 shrink-0 mt-0.5" />
          <h3 className="text-[19px] font-black text-ink-900 tracking-tight">
            We couldn&apos;t send this from the website
          </h3>
        </div>
        <p className="text-[15px] text-ink-500 leading-relaxed mb-6">
          Your details are still here. Open them in your email app and send them to us directly
          {status.hadAttachment ? ", and attach your photo or drawing there" : ""}, or call{" "}
          <a href={`tel:${tel}`} className="font-semibold text-ink-900 hover:text-azure-500">
            {CONTACT_PHONE}
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={mailtoHref(status.inquiry)}
            className="inline-flex items-center px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
          >
            Open in my email app
          </a>
          <button
            type="button"
            onClick={() => setStatus({ kind: "idle" })}
            className="px-6 py-3 border border-mist-300 hover:border-ink-400 text-ink-700 font-semibold text-[14px] rounded transition-colors duration-150"
          >
            Back to the form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" encType="multipart/form-data">
      {/* Honeypot for bots; hidden from people and screen readers. */}
      <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={label}>Name {req}</label>
          <input id="name" name="name" defaultValue={draft.name} required autoComplete="name" placeholder="Your name" className={input} />
        </div>
        <div>
          <label htmlFor="company" className={label}>Company</label>
          <input id="company" name="company" defaultValue={draft.company} autoComplete="organization" placeholder="Company name" className={input} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={label}>Email {req}</label>
          <input id="email" name="email" defaultValue={draft.email} type="email" required autoComplete="email" placeholder="you@company.com" className={input} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" defaultValue={draft.phone} type="tel" autoComplete="tel" placeholder="(555) 000-0000" className={input} />
        </div>
      </div>

      <div>
        <label htmlFor="location" className={label}>Facility Location {req}</label>
        <input id="location" name="location" defaultValue={draft.location} required placeholder="City and state, or facility name" className={input} />
      </div>

      <div>
        <label htmlFor="description" className={label}>Project Description {req}</label>
        <textarea
          id="description"
          name="description"
          defaultValue={draft.description}
          required
          minLength={10}
          rows={6}
          placeholder="What needs to be done, and where in the facility"
          className={`${input} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="schedule" className={label}>Desired Schedule</label>
        <input id="schedule" name="schedule" defaultValue={draft.schedule} placeholder="e.g. During the March shutdown, or within 60 days" className={input} />
      </div>

      <div>
        <span className={label}>Photo or Drawing (optional)</span>
        <label
          htmlFor="attachment"
          className="flex items-center gap-3 w-full bg-white border border-dashed border-mist-300 hover:border-azure-500 rounded px-4 py-3.5 cursor-pointer transition-colors duration-150"
        >
          <Paperclip className="w-4 h-4 text-azure-500 shrink-0" />
          <span className={`text-[14px] truncate ${fileName ? "text-ink-900" : "text-ink-400"}`}>
            {fileName || "Attach a JPG, PNG, HEIC or PDF, up to 4 MB"}
          </span>
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept={ATTACHMENT_ACCEPT}
          className="sr-only"
          onChange={(e) => {
            const f = e.target.files?.[0];
            setFileName(f?.name ?? "");
            const err = checkFile(f);
            setStatus(err ? { kind: "invalid", message: err } : { kind: "idle" });
          }}
        />
      </div>

      {status.kind === "invalid" && (
        <p className="flex items-center gap-2 text-[13.5px] text-red-700" role="alert">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {status.message}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="px-8 py-3.5 bg-azure-500 hover:bg-azure-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[14px] rounded transition-colors duration-150"
        >
          {status.kind === "sending" ? "Sending…" : "Submit Project Request"}
        </button>
      </div>
    </form>
  );
}
