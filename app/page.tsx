"use client";

import Link from "next/link";
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle2, ChevronRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "5", label: "Specializations" },
  { value: "100%", label: "Licensed & Insured" },
];

const services = [
  {
    tag: "Welding",
    href: "/services/industrial",
    title: "Welding & Fabrication",
    description:
      "Sanitary, industrial, and ornamental welding across all processes — TIG, MIG, orbital, and stick. On-site and shop fabrication available.",
    points: ["Sanitary & industrial", "Ornamental & structural", "On-site welding"],
  },
  {
    tag: "Renovations",
    href: "/services/renovations",
    title: "Renovations",
    description:
      "Full-scope residential and commercial renovation work. From interior remodels to structural improvements — managed start to finish.",
    points: ["Residential & commercial", "Interior remodeling", "Structural improvements"],
  },
  {
    tag: "Electrical",
    href: "/services/electrical",
    title: "Electrical",
    description:
      "Licensed electrical services for residential, commercial, and industrial clients. New installs, upgrades, and troubleshooting.",
    points: ["New installations", "Panel upgrades", "Commercial & industrial"],
  },
];

const differentiators = [
  { icon: Shield, title: "Certified & Compliant", text: "AWS-certified welders, FDA and 3-A standards adherence, full documentation for every project." },
  { icon: Clock, title: "On-Time Delivery", text: "We plan meticulously and execute efficiently so your project doesn't face delays or budget overruns." },
  { icon: Award, title: "Proven Quality", text: "20+ years of consistent results across hundreds of projects in demanding industrial environments." },
  { icon: Users, title: "Dedicated Team", text: "Experienced welders and fabricators who treat every job as if their name is on it — because it is." },
];

const portfolioItems = [
  { category: "Industrial", title: "Manufacturing Facility Steel Framework" },
  { category: "Sanitary", title: "Dairy Processing Pipeline System" },
  { category: "Ornamental", title: "Commercial Entry Gate System" },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero — DARK ──────────────────────────────────────── */}
      <section className="bg-[#1C2128] pt-[62px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-[#157DA0]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase">
                Licensed · Insured · AWS Certified
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-black text-[#E4E7EA] leading-[1.04] mb-6 tracking-tight">
              General Contracting<br />
              <span className="text-[#2490B8]">Built to Perform.</span>
            </h1>
            <p className="text-[17px] text-[#8A9098] leading-relaxed mb-10 max-w-xl">
              Welding & fabrication, renovations, and electrical — 20+ years of certified work nationwide. On time, on spec, and on budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A3340] hover:border-[#3A4A5A] text-[#8A9098] hover:text-[#E4E7EA] font-semibold text-[14px] rounded transition-colors duration-150"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-20 pt-8 border-t border-[#2A3340] grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[32px] font-black text-[#E4E7EA] mb-1">{stat.value}</div>
                <div className="text-[11px] text-[#5A6270] uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — LIGHT ─────────────────────────────────── */}
      <section className="bg-[#F2F1EE] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#15191E] mb-4">Our Services</h2>
            <p className="text-[15px] text-[#6A7280] max-w-xl">
              From food-grade sanitary systems to heavy structural fabrication and custom metalwork — we cover the full spectrum.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.tag}
                className="bg-white border border-[#D6D4CF] rounded-lg p-7 hover:border-[#B0ADA8] hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#9A9EA4] uppercase mb-4">{svc.tag}</span>
                <h3 className="text-[19px] font-black text-[#15191E] mb-3">{svc.title}</h3>
                <p className="text-[13px] text-[#6A7280] leading-relaxed mb-5 flex-1">{svc.description}</p>
                <ul className="space-y-2 mb-6">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[12px] text-[#6A7280]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#157DA0] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#157DA0] hover:text-[#106480] transition-colors duration-150"
                >
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us — DARK ─────────────────────────────── */}
      <section className="bg-[#1C2128] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#2490B8] uppercase mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#E4E7EA] mb-5">
                Certifications, Experience,<br />and Accountability.
              </h2>
              <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8 max-w-md">
                We've built a reputation on delivering what we promise — quality welds, documented processes, and zero excuses.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2A3340] hover:border-[#3A4A5A] text-[#8A9098] hover:text-[#E4E7EA] font-semibold text-[13px] rounded transition-colors duration-150"
              >
                About the Company <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentiators.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-[#232B33] border border-[#2A3340] rounded-lg p-5">
                  <Icon className="w-5 h-5 text-[#2490B8] mb-4" />
                  <h4 className="text-[14px] font-bold text-[#E4E7EA] mb-2">{title}</h4>
                  <p className="text-[12px] text-[#8A9098] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview — LIGHT ─────────────────────────── */}
      <section className="bg-[#E8E6E1] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">Recent Work</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#15191E]">Selected Projects</h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-[#6A7280] hover:text-[#15191E] transition-colors duration-150"
            >
              All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {portfolioItems.map((item) => (
              <Link key={item.title} href="/portfolio" className="group">
                <div className="bg-white border border-[#D6D4CF] rounded-lg overflow-hidden hover:border-[#B0ADA8] hover:shadow-md transition-all duration-200">
                  <div className="h-[200px] bg-[#EDECEA] flex items-center justify-center border-b border-[#D6D4CF]">
                    <span className="text-[12px] text-[#B0ADA8] tracking-widest uppercase">Project Photo</span>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] text-[#9A9EA4] tracking-widest uppercase font-medium">{item.category}</span>
                    <h4 className="text-[14px] font-bold text-[#3D4550] mt-1 group-hover:text-[#15191E] transition-colors duration-150">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — DARK ───────────────────────────────────────── */}
      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black text-[#E4E7EA] mb-4">Ready to Start a Project?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Tell us what you need and we'll put together a detailed quote with timeline and scope — no obligation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9803390527"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A3340] hover:border-[#3A4A5A] text-[#8A9098] hover:text-[#E4E7EA] font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Call (980) 339-0527
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
