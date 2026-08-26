"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const capabilities = [
  "Orbital TIG welding for consistent bead geometry",
  "Manual TIG on complex and custom geometries",
  "Sanitary tube & pipe systems (304L / 316L)",
  "Dairy, beverage & pharmaceutical piping",
  "Vessel fabrication with sanitary ports",
  "Electropolishing and passivation services",
  "Tri-clamp and sanitary fitting installation",
  "CIP/SIP compatible system design",
  "cGMP documentation and weld maps",
  "Borescope weld inspection",
  "Post-weld cleaning and purging",
  "Field installation and commissioning",
];

const standards = [
  { label: "3-A", desc: "Sanitary Standards for dairy and food equipment" },
  { label: "FDA 21 CFR", desc: "Food contact material compliance" },
  { label: "ASME BPE", desc: "Bioprocessing Equipment standard familiarity" },
  { label: "cGMP", desc: "Current Good Manufacturing Practice documentation" },
];

const process = [
  { step: "01", title: "Scope & Design Review", desc: "We review your P&ID drawings, specifications, and compliance requirements before any work begins." },
  { step: "02", title: "Material Certification", desc: "All base materials are certified to required grades (304L / 316L) with mill certs on file." },
  { step: "03", title: "Controlled Welding", desc: "Orbital or manual TIG welding performed under controlled conditions with argon back-purge to maintain internal weld quality." },
  { step: "04", title: "Inspection & Documentation", desc: "Weld maps, inspection records, borescope imagery, and passivation logs delivered with every project." },
];

export default function SanitaryPage() {
  return (
    <div>
      <section className="bg-[#1C2128] pt-[62px]">
        <style>{`@keyframes hero-text-in { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-5" style={{ animation: "hero-text-in 0.6s ease 0.05s both" }}>
            <Link href="/services" className="text-[11px] text-[#5A6270] hover:text-[#8A9098] transition-colors">Services</Link>
            <span className="text-[#2A3340]">/</span>
            <span className="text-[11px] text-[#2490B8]">Sanitary Welding</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight" style={{ animation: "hero-text-in 0.6s ease 0.18s both" }}>Sanitary Welding</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed mb-8" style={{ animation: "hero-text-in 0.6s ease 0.3s both" }}>
              FDA-compliant, 3-A certified hygienic welding for food processing, dairy, pharmaceutical, and beverage industries. Full regulatory documentation on every project.
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
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">What We Do</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#15191E] mb-5">Capabilities</h2>
              <p className="text-[14px] text-[#6A7280] leading-relaxed">
                Our sanitary welding team handles everything from small hygienic piping repairs to full process system installations. We work in environments where surface finish, weld integrity, and documentation are non-negotiable.
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
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#2490B8] uppercase mb-3">Compliance</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA]">Standards We Work To</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {standards.map(({ label, desc }) => (
              <div key={label} className="bg-[#232B33] border border-[#2A3340] rounded-lg p-5">
                <div className="text-[20px] font-black text-[#2490B8] mb-2">{label}</div>
                <p className="text-[12px] text-[#8A9098] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8E6E1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">How We Work</p>
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
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Need sanitary welding done right?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Send us your drawings and specifications. We'll review them and provide a detailed quote with timeline and compliance documentation plan.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
