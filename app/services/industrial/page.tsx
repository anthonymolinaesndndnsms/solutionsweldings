"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const capabilities = [
  "Structural steel fabrication (beams, columns, frames)",
  "Pipe welding — carbon steel, stainless, alloy",
  "Pressure vessel fabrication and repair",
  "Heavy plate welding up to 3\"",
  "MIG, TIG, stick, and flux-core processes",
  "AWS D1.1 and D1.6 certified welding",
  "Mobile / field welding units",
  "Certified weld procedures (WPS/PQR)",
  "NDE-ready weld documentation",
  "Shop fabrication with delivery",
  "Plant maintenance welding contracts",
  "Emergency repair response",
];

const industries = [
  { name: "Manufacturing", items: ["Machine bases & frames", "Conveyor systems", "Tank fabrication"] },
  { name: "Construction", items: ["Structural steel erection", "Connection fabrication", "Embedded plates"] },
  { name: "Mining & Aggregate", items: ["Wear plate overlay", "Chute & hopper repair", "Equipment modification"] },
  { name: "Oil & Gas", items: ["Pipe spool fabrication", "Flanges & fittings", "Separator vessels"] },
];

export default function IndustrialPage() {
  return (
    <div>
      <section className="bg-[#1C2128] pt-[62px]">
        <style>{`@keyframes hero-text-in { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-5" style={{ animation: "hero-text-in 0.6s ease 0.05s both" }}>
            <Link href="/services" className="text-[11px] text-[#5A6270] hover:text-[#8A9098] transition-colors">Services</Link>
            <span className="text-[#2A3340]">/</span>
            <span className="text-[11px] text-[#2490B8]">Industrial Welding</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight" style={{ animation: "hero-text-in 0.6s ease 0.18s both" }}>Industrial Welding</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed mb-8" style={{ animation: "hero-text-in 0.6s ease 0.3s both" }}>
              Heavy fabrication and structural steel for manufacturing, construction, and industrial facilities. AWS-certified processes with documentation and on-site capability.
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
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">Capabilities</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#15191E] mb-5">Industrial Scope</h2>
              <p className="text-[14px] text-[#6A7280] leading-relaxed">
                We handle the full range of industrial welding and fabrication — from shop-built structural components to complex field installations. Our mobile welding units mean we can come to your facility, site, or plant.
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

      <section className="bg-[#E8E6E1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">Who We Serve</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#15191E]">Industries</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map(({ name, items }) => (
              <div key={name} className="bg-white border border-[#D6D4CF] rounded-lg p-5">
                <h4 className="text-[13px] font-bold text-[#15191E] mb-4 pb-3 border-b border-[#E8E6E1]">{name}</h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#157DA0] mt-1.5 shrink-0" />
                      <span className="text-[12px] text-[#6A7280]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F1EE] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-[#D6D4CF] rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <AlertCircle className="w-8 h-8 text-[#157DA0] shrink-0" />
            <div className="flex-1">
              <h3 className="text-[16px] font-black text-[#15191E] mb-1">Emergency Repair Services</h3>
              <p className="text-[13px] text-[#6A7280]">Critical equipment failure? We offer emergency response welding and repair to minimize your downtime. Available for facilities maintenance contracts and one-off emergencies.</p>
            </div>
            <a href="tel:9803390527" className="shrink-0 px-5 py-2.5 border border-[#D6D4CF] hover:border-[#B0ADA8] text-[#3D4550] hover:text-[#15191E] font-semibold text-[13px] rounded transition-colors duration-150">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Have an industrial project?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Share your drawings, specifications, or just describe the scope. We'll come back with a detailed quote and realistic timeline.
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
