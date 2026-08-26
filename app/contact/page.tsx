"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimateIn } from "@/components/animate-in";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const serviceOptions = ["Sanitary Welding", "Industrial Welding", "Ornamental Fabrication", "Renovations", "Electrical", "Emergency Repair", "Other / Not Sure"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div>
      {/* ── Header — DARK ── */}
      <section className="bg-[#1C2128] pt-[62px]">
        <style>{`@keyframes hero-text-in { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3" style={{ animation: "hero-text-in 0.6s ease 0.05s both" }}>Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight" style={{ animation: "hero-text-in 0.6s ease 0.18s both" }}>Contact Us</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed" style={{ animation: "hero-text-in 0.6s ease 0.3s both" }}>
              Ready to start a project or have a question? Fill out the form and we'll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main — LIGHT ── */}
      <section className="bg-[#F2F1EE] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Sidebar */}
            <AnimateIn className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "(980) 339-0527", sub: "Mon–Fri, 7am–6pm", href: "tel:9803390527" },
                { icon: Mail, label: "Email", value: "info@solutionswelding.com", sub: "Response within 24 hours", href: "mailto:info@solutionswelding.com" },
                { icon: MapPin, label: "Location", value: "Fort Mill, SC", sub: "Nationwide Service", href: null },
                { icon: Clock, label: "Emergency", value: "24/7 Emergency Response", sub: "For critical repairs", href: "tel:9803390527" },
              ].map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-white border border-[#D6D4CF] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#157DA0]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-[#9A9EA4] uppercase mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-[13px] font-semibold text-[#15191E] hover:text-[#157DA0] transition-colors duration-150 block">{value}</a>
                    ) : (
                      <div className="text-[13px] font-semibold text-[#15191E]">{value}</div>
                    )}
                    <div className="text-[11px] text-[#9A9EA4] mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-[#D6D4CF]">
                <h4 className="text-[10px] font-bold tracking-widest text-[#9A9EA4] uppercase mb-4">Credentials</h4>
                {["SC GC Lic. CLG.127227.GC", "NC GC Lic. L.108274", "AWS Certified Welders", "Fully Licensed & Insured", "OSHA Safety Compliant"].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#157DA0] shrink-0" />
                    <span className="text-[12px] text-[#6A7280]">{cert}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn delay={120} className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-[#D6D4CF] rounded-lg p-10 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#157DA0] mx-auto mb-4" />
                  <h3 className="text-[20px] font-black text-[#15191E] mb-2">Message Received</h3>
                  <p className="text-[14px] text-[#6A7280] max-w-sm mx-auto">Thank you for reaching out. We'll review your request and respond within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6A7280] uppercase tracking-wider mb-2">
                        Full Name <span className="text-[#157DA0]">*</span>
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your name"
                        className="w-full bg-white border border-[#D6D4CF] hover:border-[#B0ADA8] focus:border-[#157DA0] rounded px-4 py-3 text-[14px] text-[#15191E] placeholder-[#B0ADA8] outline-none transition-colors duration-150"
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6A7280] uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#157DA0]">*</span>
                      </label>
                      <input
                        {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                        type="email"
                        placeholder="you@company.com"
                        className="w-full bg-white border border-[#D6D4CF] hover:border-[#B0ADA8] focus:border-[#157DA0] rounded px-4 py-3 text-[14px] text-[#15191E] placeholder-[#B0ADA8] outline-none transition-colors duration-150"
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6A7280] uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full bg-white border border-[#D6D4CF] hover:border-[#B0ADA8] focus:border-[#157DA0] rounded px-4 py-3 text-[14px] text-[#15191E] placeholder-[#B0ADA8] outline-none transition-colors duration-150"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6A7280] uppercase tracking-wider mb-2">
                        Service Needed <span className="text-[#157DA0]">*</span>
                      </label>
                      <select
                        {...register("service", { required: "Please select a service" })}
                        className="w-full bg-white border border-[#D6D4CF] hover:border-[#B0ADA8] focus:border-[#157DA0] rounded px-4 py-3 text-[14px] text-[#15191E] outline-none transition-colors duration-150 appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      {errors.service && <p className="text-[11px] text-red-500 mt-1">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#6A7280] uppercase tracking-wider mb-2">
                      Project Description <span className="text-[#157DA0]">*</span>
                    </label>
                    <textarea
                      {...register("message", { required: "Please describe your project", minLength: { value: 20, message: "Please provide at least 20 characters" } })}
                      rows={5}
                      placeholder="Describe your project, scope, timeline requirements, and any relevant specifications..."
                      className="w-full bg-white border border-[#D6D4CF] hover:border-[#B0ADA8] focus:border-[#157DA0] rounded px-4 py-3 text-[14px] text-[#15191E] placeholder-[#B0ADA8] outline-none transition-colors duration-150 resize-none"
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-[#157DA0] hover:bg-[#106480] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-[14px] rounded transition-colors duration-150"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    <p className="text-[11px] text-[#9A9EA4] mt-3">We respond to all inquiries within one business day.</p>
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
