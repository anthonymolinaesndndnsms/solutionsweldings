"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  message: string;
};

const inputClass =
  "w-full bg-white border border-mist-300 hover:border-ink-400 focus:border-azure-500 focus:ring-1 focus:ring-azure-500 rounded px-4 py-3 text-[14px] text-ink-900 placeholder-ink-400 outline-none transition-colors duration-150";

const labelClass =
  "block text-[11px] font-semibold text-ink-500 uppercase tracking-[0.12em] mb-2";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "(980) 339-0527", sub: "Mon–Fri, 7am–6pm", href: "tel:9803390527" },
  { icon: Mail, label: "Email", value: "info@solutionswelding.com", sub: "We reply within one business day", href: "mailto:info@solutionswelding.com" },
  { icon: MapPin, label: "Based In", value: "Fort Mill, SC", sub: "Serving North & South Carolina", href: null },
  { icon: Clock, label: "Licensed", value: "SC CLG.127227.GC", sub: "NC L.108274", href: null },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-steel-900 steel-grain pt-[84px] border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-azure-400 uppercase mb-5 rise-in">
              Contact
            </p>
            <h1
              className="text-4xl sm:text-5xl font-black text-chrome-100 mb-7 leading-[1.1] tracking-tight rise-in"
              style={{ animationDelay: "0.14s" }}
            >
              Let&apos;s Talk About Your Project
            </h1>
            <div
              className="space-y-4 text-[15.5px] text-chrome-400 leading-relaxed rise-in"
              style={{ animationDelay: "0.26s" }}
            >
              <p>
                Have a renovation, facility improvement, or general contracting project that needs to
                move forward? Tell us what you&apos;re working on.
              </p>
              <p>
                Solutions Contracting Group works with industrial customers to evaluate project
                needs, develop scopes, coordinate qualified resources, and manage projects through
                completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="bg-mist-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <AnimateIn className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-white border border-mist-300 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-azure-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.18em] text-ink-400 uppercase mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-[13.5px] font-semibold text-ink-900 hover:text-azure-500 transition-colors duration-150 block break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-[13.5px] font-semibold text-ink-900">{value}</div>
                    )}
                    <div className="text-[11.5px] text-ink-400 mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}

              <p className="pt-6 border-t border-mist-200 text-[13px] text-ink-500 leading-relaxed">
                Whether you&apos;re addressing an immediate facility need or planning an upcoming
                improvement, we&apos;re ready to discuss the project and determine the best path
                forward.
              </p>
            </AnimateIn>

            <AnimateIn delay={110} className="lg:col-span-2">
              {status === "sent" ? (
                <div className="bg-white border border-mist-200 rounded-lg p-12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-azure-500 mx-auto mb-5" />
                  <h2 className="text-[21px] font-black text-ink-900 mb-3 tracking-tight">
                    Project Request Received
                  </h2>
                  <p className="text-[14px] text-ink-500 max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out. We&apos;ll review the details and get back to you within
                    one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <h2 className="text-[10px] font-bold tracking-[0.2em] text-ink-400 uppercase">
                    Project Information
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name <span className="text-azure-500">*</span>
                      </label>
                      <input
                        id="name"
                        {...register("name", { required: "Please enter your name" })}
                        placeholder="Your name"
                        className={inputClass}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1.5">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="company"
                        {...register("company")}
                        placeholder="Company name"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="(555) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-azure-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Please enter your email",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1.5">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className={labelClass}>
                      Project Location
                    </label>
                    <input
                      id="location"
                      {...register("location")}
                      placeholder="City, state, or facility name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell Us About Your Project <span className="text-azure-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message", {
                        required: "Please tell us about the project",
                        minLength: { value: 20, message: "A little more detail helps us respond accurately" },
                      })}
                      placeholder="What needs to get done, where it is, and any timing considerations..."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1.5">{errors.message.message}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded p-4">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-[13px] text-red-700 leading-relaxed">
                        Something went wrong sending your request. Please call{" "}
                        <a href="tel:9803390527" className="font-semibold underline">
                          (980) 339-0527
                        </a>{" "}
                        or email{" "}
                        <a href="mailto:info@solutionswelding.com" className="font-semibold underline">
                          info@solutionswelding.com
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-azure-500 hover:bg-azure-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-[14px] rounded transition-colors duration-150"
                    >
                      {isSubmitting ? "Sending..." : "Submit Project Request"}
                    </button>
                  </div>
                </form>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
