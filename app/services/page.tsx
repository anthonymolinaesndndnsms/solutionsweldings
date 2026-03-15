"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    tag: "01", href: "/services/sanitary", title: "Sanitary Welding",
    headline: "FDA-compliant systems for regulated industries.",
    description: "We specialize in hygienic welding for food processing, dairy, pharmaceutical, and beverage manufacturing. Every weld is performed to 3-A sanitary standards with full documentation.",
    highlights: ["Orbital and TIG welding", "Stainless 304L / 316L", "Electropolishing & passivation", "cGMP process documentation", "Sanitary fittings and clamps", "Clean-room compatible practices"],
    industries: ["Food & Beverage", "Dairy Processing", "Pharmaceutical", "Biotech"],
  },
  {
    tag: "02", href: "/services/industrial", title: "Industrial Welding",
    headline: "Heavy fabrication built for demanding environments.",
    description: "Structural steel, pipe systems, pressure vessels, and custom fabrication for manufacturing plants, construction sites, and industrial facilities. Built to spec, built to last.",
    highlights: ["Structural steel fabrication", "Pipe and pressure systems", "MIG, TIG, stick, flux-core", "AWS D1.1 / D1.6 certified", "On-site field welding", "Emergency repair services"],
    industries: ["Manufacturing", "Construction", "Oil & Gas", "Mining"],
  },
  {
    tag: "03", href: "/services/ornamental", title: "Ornamental Fabrication",
    headline: "Custom metalwork built to impress and built to last.",
    description: "From custom entry gates and security fencing to architectural staircases and decorative panels — we bring precision craftsmanship to structural and aesthetic metalwork.",
    highlights: ["Custom gate & fence systems", "Staircases & railings", "Architectural metal panels", "Powder coat & finish options", "Wrought iron & mild steel", "Design-to-install service"],
    industries: ["Commercial Real Estate", "Hospitality", "Residential", "Government"],
  },
  {
    tag: "04", href: "/services/renovations", title: "Renovations",
    headline: "Full-scope renovation work, managed start to finish.",
    description: "Residential and commercial renovation projects handled under one roof. As a licensed general contractor, we coordinate every trade, manage the schedule, and deliver a finished product you can count on.",
    highlights: ["Residential & commercial", "Interior remodels", "Structural improvements", "Room additions", "Flooring & finish work", "Full project management"],
    industries: ["Residential", "Commercial", "Retail", "Healthcare"],
  },
  {
    tag: "05", href: "/services/electrical", title: "Electrical",
    headline: "Licensed electrical services — residential to industrial.",
    description: "New installs, panel upgrades, commercial buildouts, and industrial equipment hookups. All work is permitted, code-compliant, and backed by our general contracting expertise.",
    highlights: ["New installations", "Panel upgrades", "Commercial buildouts", "Industrial equipment hookups", "Troubleshooting & repair", "Permitted & code-compliant"],
    industries: ["Residential", "Commercial", "Industrial", "Manufacturing"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* ── Header — DARK ── */}
      <section className="bg-[#1C2128] pt-[62px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight">Services</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed">
              Five specialized service lines. One unified commitment to quality. From sanitary welding to full renovations and electrical — we deliver certified results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Blocks — alternating light/darker light ── */}
      {services.map((svc, i) => (
        <section key={svc.tag} className={`py-20 ${i % 2 === 0 ? "bg-[#F2F1EE]" : "bg-[#E8E6E1]"}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-black text-[#9A9EA4] tracking-widest">{svc.tag}</span>
                  <div className="w-8 h-px bg-[#D6D4CF]" />
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-[#157DA0] uppercase">Service</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#15191E] mb-3">{svc.title}</h2>
                <p className="text-[14px] text-[#157DA0] font-medium mb-5 italic">{svc.headline}</p>
                <p className="text-[14px] text-[#6A7280] leading-relaxed mb-8">{svc.description}</p>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[13px] rounded transition-colors duration-150"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-[#9A9EA4] uppercase mb-4">Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                    {svc.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#157DA0] shrink-0" />
                        <span className="text-[13px] text-[#3D4550]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-[#D6D4CF]">
                  <h4 className="text-[10px] font-bold tracking-widest text-[#9A9EA4] uppercase mb-3">Industries Served</h4>
                  <div className="flex flex-wrap gap-2">
                    {svc.industries.map((ind) => (
                      <span key={ind} className="px-3 py-1 text-[11px] font-medium text-[#6A7280] bg-white border border-[#D6D4CF] rounded">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA — DARK ── */}
      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Not sure which service fits your project?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Reach out and describe what you're working on. We'll point you in the right direction and provide a clear quote.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
