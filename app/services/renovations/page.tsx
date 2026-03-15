"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  "Full residential interior remodels",
  "Commercial tenant buildouts & fit-outs",
  "Bathroom and kitchen renovations",
  "Basement finishing and conversions",
  "Room additions and expansions",
  "Flooring installation and replacement",
  "Drywall, framing, and structural work",
  "Window and door replacement",
  "Painting and finish carpentry",
  "Deck and porch construction",
  "Roofing repairs and replacements",
  "Project management start to finish",
];

const projectTypes = [
  { label: "Residential", desc: "Full home renovations, room remodels, kitchen and bath upgrades" },
  { label: "Commercial", desc: "Office buildouts, retail spaces, and commercial facility upgrades" },
  { label: "Structural", desc: "Load-bearing modifications, additions, and foundation work" },
  { label: "Exterior", desc: "Siding, roofing, decks, windows, and exterior finish work" },
];

const process = [
  { step: "01", title: "Site Walk & Scope", desc: "We walk the project with you, document existing conditions, and define a clear scope of work before any commitment." },
  { step: "02", title: "Detailed Quote", desc: "A line-item estimate with materials, labor, and timeline — no vague lump sums. You know exactly what you're paying for." },
  { step: "03", title: "Managed Execution", desc: "We coordinate all trades, manage the schedule, and keep you informed at every phase of the project." },
  { step: "04", title: "Final Inspection", desc: "Walkthrough with the client before close-out. Every punch list item addressed before we consider the job done." },
];

export default function RenovationsPage() {
  return (
    <div>
      <section className="bg-[#1C2128] pt-[62px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/services" className="text-[11px] text-[#5A6270] hover:text-[#8A9098] transition-colors">Services</Link>
            <span className="text-[#2A3340]">/</span>
            <span className="text-[11px] text-[#2490B8]">Renovations</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight">Renovations</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed mb-8">
              Full-scope residential and commercial renovation work. Licensed general contractor — projects managed start to finish with no subcontractor surprises, nationwide.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F1EE] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">What We Do</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#15191E] mb-5">Capabilities</h2>
              <p className="text-[14px] text-[#6A7280] leading-relaxed">
                We handle the full renovation process — from initial scope through final inspection. As a licensed general contractor, we manage every phase in-house and are accountable for the result, wherever the project is.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#157DA0] shrink-0 mt-0.5" />
                  <span className="text-[13px] text-[#3D4550]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C2128] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#2490B8] uppercase mb-3">Project Types</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA]">What We Work On</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectTypes.map(({ label, desc }) => (
              <div key={label} className="bg-[#232B33] border border-[#2A3340] rounded-lg p-5">
                <div className="text-[18px] font-black text-[#2490B8] mb-2">{label}</div>
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
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Have a renovation project?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Tell us what you're working on — residential or commercial. We'll walk the site, put together a detailed scope, and give you a straight quote with a real timeline.
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
