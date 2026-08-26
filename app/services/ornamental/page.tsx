"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const capabilities = [
  "Custom driveway and pedestrian gates",
  "Security and perimeter fencing",
  "Staircases — interior & exterior",
  "Handrails and balcony railings",
  "Architectural metal panels & screens",
  "Canopies and awning frames",
  "Wrought iron and mild steel",
  "Stainless steel decorative elements",
  "Powder coat and paint finishes",
  "Hot-dip galvanizing coordination",
  "Site measurement and CAD drawings",
  "Full design-to-installation service",
];

const finishOptions = [
  { name: "Powder Coat", desc: "Wide color range, durable UV-resistant finish. Industry standard for exterior metalwork." },
  { name: "Mill Finish", desc: "Natural metal appearance with protective clear coat. Clean, modern industrial look." },
  { name: "Patina / Blackened", desc: "Chemically treated dark finish for aged, rustic appearance. Popular for interior work." },
  { name: "Galvanized", desc: "Hot-dip zinc coating for maximum corrosion resistance in harsh outdoor environments." },
];

const process = [
  { step: "01", title: "Consultation & Measurement", desc: "We visit your site, take precise measurements, and discuss your design vision and functional requirements." },
  { step: "02", title: "Design & Approval", desc: "Shop drawings prepared for your review and sign-off before fabrication begins." },
  { step: "03", title: "Fabrication", desc: "Precision cutting, forming, and welding in our shop. Every piece built to spec." },
  { step: "04", title: "Finish & Install", desc: "Finishing applied, components transported to site, and professional installation completed." },
];

export default function OrnamentalPage() {
  return (
    <div>
      <section className="bg-[#1C2128] pt-[62px]">
        <style>{`@keyframes hero-text-in { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-5" style={{ animation: "hero-text-in 0.6s ease 0.05s both" }}>
            <Link href="/services" className="text-[11px] text-[#5A6270] hover:text-[#8A9098] transition-colors">Services</Link>
            <span className="text-[#2A3340]">/</span>
            <span className="text-[11px] text-[#2490B8]">Ornamental Fabrication</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight" style={{ animation: "hero-text-in 0.6s ease 0.18s both" }}>Ornamental Fabrication</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed mb-8" style={{ animation: "hero-text-in 0.6s ease 0.3s both" }}>
              Custom metalwork built for both function and appearance. From security gates to architectural staircases, we combine precision fabrication with design sensibility.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150" style={{ animation: "hero-text-in 0.6s ease 0.42s both" }}>
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F1EE] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <AnimateIn>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">What We Fabricate</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#15191E] mb-5">Capabilities</h2>
              <p className="text-[14px] text-[#6A7280] leading-relaxed">
                Every ornamental project starts with a conversation about what you need and ends with metalwork that holds up for decades. We work with commercial property owners, contractors, architects, and homeowners.
              </p>
            </AnimateIn>
            <AnimateIn delay={100} className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#157DA0] shrink-0 mt-0.5" />
                  <span className="text-[13px] text-[#3D4550]">{item}</span>
                </div>
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-[#1C2128] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#2490B8] uppercase mb-3">Finishes</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA]">Finish Options</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {finishOptions.map(({ name, desc }) => (
              <div key={name} className="bg-[#232B33] border border-[#2A3340] rounded-lg p-5">
                <h4 className="text-[14px] font-bold text-[#E4E7EA] mb-2">{name}</h4>
                <p className="text-[12px] text-[#8A9098] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8E6E1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">From Concept to Install</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#15191E]">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-white border border-[#D6D4CF] rounded-lg p-5">
                <div className="text-[11px] font-black text-[#9A9EA4] tracking-widest mb-4">{step}</div>
                <h4 className="text-[14px] font-bold text-[#15191E] mb-2">{title}</h4>
                <p className="text-[12px] text-[#6A7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Have a custom metalwork project?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Tell us what you have in mind. We'll visit the site, take measurements, and come back with a clear quote.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
