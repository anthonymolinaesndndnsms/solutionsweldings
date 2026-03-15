"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  "New electrical installations",
  "Panel upgrades and replacements",
  "Service entrance work",
  "Commercial tenant electrical buildouts",
  "Industrial equipment hookups",
  "Lighting design and installation",
  "Outlet and circuit additions",
  "GFCI and AFCI protection upgrades",
  "Emergency and backup power systems",
  "Conduit and raceway installation",
  "Electrical troubleshooting and repair",
  "Code compliance corrections",
];

const serviceTypes = [
  { label: "Residential", desc: "Home rewires, panel upgrades, circuits, lighting, and safety upgrades" },
  { label: "Commercial", desc: "Tenant buildouts, office wiring, lighting systems, and code corrections" },
  { label: "Industrial", desc: "Equipment connections, motor controls, conduit work, and high-voltage service" },
  { label: "Service & Repair", desc: "Troubleshooting, breaker replacement, outlet repair, and inspection corrections" },
];

const process = [
  { step: "01", title: "Evaluate & Plan", desc: "We assess your existing system, review load requirements, and determine the safest and most efficient approach." },
  { step: "02", title: "Permit & Code Review", desc: "All work is performed to code. We pull required permits and coordinate inspections — nothing is done under the table." },
  { step: "03", title: "Installation", desc: "Licensed electricians handle every part of the installation. Clean runs, proper labeling, and code-compliant terminations." },
  { step: "04", title: "Test & Sign-Off", desc: "Every circuit tested, every connection verified before we close anything up. Inspection-ready work from the start." },
];

export default function ElectricalPage() {
  return (
    <div>
      <section className="bg-[#1C2128] pt-[62px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/services" className="text-[11px] text-[#5A6270] hover:text-[#8A9098] transition-colors">Services</Link>
            <span className="text-[#2A3340]">/</span>
            <span className="text-[11px] text-[#2490B8]">Electrical</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight">Electrical</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed mb-8">
              Licensed electrical services for residential, commercial, and industrial clients nationwide. New installs, panel upgrades, and troubleshooting — all to code.
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
                From residential panel upgrades to full commercial buildouts and industrial equipment connections, we handle the full scope of electrical work. All projects are permitted, inspected, and code-compliant.
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
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#2490B8] uppercase mb-3">Service Types</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA]">Who We Work For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceTypes.map(({ label, desc }) => (
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
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Need electrical work done right?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Describe your project and we'll get back to you with a clear scope and price. Residential, commercial, or industrial — we handle it all, permitted and to code.
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
