"use client";

import Link from "next/link";
import { ArrowRight, Shield, Award, Clock, Users, CheckCircle2 } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const values = [
  { icon: Shield, title: "Integrity First",  text: "We do what we say and stand behind every job. No shortcuts, no excuses — honest work at a fair price." },
  { icon: Award,  title: "Craftsmanship",    text: "Every project reflects our commitment to quality. From the first pass to the final inspection, we hold the standard." },
  { icon: Clock,  title: "Reliability",      text: "Deadlines matter. We plan our work carefully, communicate proactively, and deliver on time, every time." },
  { icon: Users,  title: "Partnership",      text: "We work alongside our clients, not just for them. Understanding your operation is how we deliver the best solution." },
];

const certifications = [
  "SC GC License — CLG.127227.GC",
  "NC GC License — L.108274",
  "AWS D1.1 Structural Steel Certified",
  "AWS D1.6 Stainless Steel Certified",
  "3-A Sanitary Standards Compliant",
  "OSHA Safety Compliant",
  "Fully Licensed & Insured",
  "cGMP Documentation Capable",
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero — full-bleed photo background ── */}
      <section className="relative h-[520px] sm:h-[600px] overflow-hidden">
        <style>{`
          @keyframes hero-img-in {
            from { opacity: 0; transform: scale(1.07); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes hero-text-in {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio/5-star/PXL_20251028_145614273.jpg"
          alt="About hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          style={{ animation: "hero-img-in 1.4s cubic-bezier(0.25,0.46,0.45,0.94) forwards" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(28,33,40,0.82) 0%, rgba(28,33,40,0.28) 45%, rgba(20,26,32,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(21,125,160,0.07) 100%)",
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-[80px]">
          <p
            className="text-[11px] font-semibold tracking-[0.22em] text-[#38B6D9] uppercase mb-3 drop-shadow"
            style={{ animation: "hero-text-in 0.7s ease 0.3s both" }}
          >
            About the Company
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight drop-shadow-lg"
            style={{ animation: "hero-text-in 0.7s ease 0.45s both" }}
          >
            Built on Skill.<br />Run on Integrity.
          </h1>
          <p
            className="text-[16px] text-white/70 leading-relaxed max-w-2xl drop-shadow"
            style={{ animation: "hero-text-in 0.7s ease 0.6s both" }}
          >
            Solutions Welding & Fabrication, LLC has been delivering precision metalwork, renovations, and electrical services for over 20 years. Based in Fort Mill, SC — we bring certified expertise to projects nationwide.
          </p>
        </div>
      </section>

      {/* ── Values — LIGHT ── */}
      <section className="bg-[#F2F1EE] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">How We Operate</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#15191E]">Core Values</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, text }, i) => (
              <AnimateIn key={title} delay={i * 70} className="bg-white border border-[#D6D4CF] rounded-lg p-6">
                <Icon className="w-5 h-5 text-[#157DA0] mb-4" />
                <h3 className="text-[14px] font-bold text-[#15191E] mb-2">{title}</h3>
                <p className="text-[12px] text-[#6A7280] leading-relaxed">{text}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications — LIGHT ── */}
      <section className="bg-[#E8E6E1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <AnimateIn>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">Credentials</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#15191E] mb-5">Licenses &amp; Certifications</h2>
              <p className="text-[14px] text-[#6A7280] leading-relaxed">
                Licensed general contractor with over 20 years of experience. Our team holds current certifications across structural, sanitary, and specialty welding disciplines, with full documentation available for regulated industries nationwide.
              </p>
            </AnimateIn>
            <AnimateIn delay={100} className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-2.5 py-2 border-b border-[#D6D4CF] last:border-0">
                  <CheckCircle2 className="w-4 h-4 text-[#157DA0] shrink-0 mt-0.5" />
                  <span className="text-[13px] text-[#3D4550]">{cert}</span>
                </div>
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA — DARK ── */}
      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Ready to Work Together?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Reach out today and let's discuss your project requirements. We'll provide a clear scope and quote with no obligation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
