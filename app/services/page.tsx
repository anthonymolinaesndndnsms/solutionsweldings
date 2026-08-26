import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Industrial General Contracting Services",
  description:
    "General contracting, industrial renovations, facility improvements, project and site management, and multi-trade coordination for industrial facilities.",
};

const serviceBlocks = [
  {
    title: "Industrial Renovations",
    paragraphs: [
      "Existing facilities often require modifications and improvements to accommodate changing operational needs.",
      "Solutions Contracting Group manages industrial renovation projects from initial planning through completion, coordinating the work required to update, repair, modify, or improve existing spaces.",
      "Our focus is on delivering practical solutions while working within the demands of active industrial environments.",
    ],
  },
  {
    title: "Facility Improvements",
    paragraphs: [
      "We help industrial customers maintain and improve their facilities through planned upgrades, repairs, modifications, and improvement projects.",
      "Projects may range from individual facility improvements to larger projects involving multiple scopes and subcontractors.",
      "We work with customers to understand the need, develop the appropriate scope, coordinate the work, and manage the project through completion.",
    ],
  },
];

const managementServices = [
  "Project planning and scope development",
  "Scheduling and coordination",
  "Budget and cost management",
  "Procurement coordination",
  "Subcontractor coordination",
  "Site coordination",
  "Progress tracking",
  "Customer communication",
  "Quality oversight",
  "Project closeout",
];

const capabilities = [
  "Industrial facility renovations",
  "Facility repairs and modifications",
  "Flooring and interior finishes",
  "Epoxy flooring and coatings",
  "LVP and tile",
  "Cabinetry installation",
  "Carpentry",
  "Framing",
  "Interior improvements",
  "Electrical coordination",
  "Plumbing coordination",
  "Specialty subcontractor coordination",
  "General facility improvements",
];

export default function ServicesPage() {
  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-steel-900 steel-grain pt-[84px] border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-azure-400 uppercase mb-5 rise-in">
              Services
            </p>
            <h1
              className="text-4xl sm:text-5xl font-black text-chrome-100 mb-7 leading-[1.1] tracking-tight rise-in"
              style={{ animationDelay: "0.14s" }}
            >
              Industrial General Contracting Services
            </h1>
            <div
              className="space-y-4 text-[15.5px] text-chrome-400 leading-relaxed rise-in"
              style={{ animationDelay: "0.26s" }}
            >
              <p>
                Solutions Contracting Group provides comprehensive general contracting, renovation,
                facility improvement, and project management services for industrial facilities.
              </p>
              <p>
                Every facility and every project presents different challenges. Our job is to
                understand the customer&apos;s objectives, establish a clear scope of work,
                coordinate the appropriate resources, and manage the project through completion.
              </p>
              <p>
                Whether the project involves a single improvement or multiple coordinated scopes, we
                provide the organization and oversight necessary to keep the work moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Renovations + Improvements ── */}
      {serviceBlocks.map((block, i) => (
        <section key={block.title} className={i % 2 === 0 ? "bg-mist-50 py-20" : "bg-mist-100 py-20"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <AnimateIn className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight">
                  {block.title}
                </h2>
              </AnimateIn>
              <AnimateIn delay={90} className="lg:col-span-8 space-y-4">
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-[15px] text-ink-500 leading-relaxed">
                    {p}
                  </p>
                ))}
              </AnimateIn>
            </div>
          </div>
        </section>
      ))}

      {/* ── Project & Site Management ── */}
      <section className="bg-steel-900 steel-grain py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <AnimateIn className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 mb-6 tracking-tight">
                Project &amp; Site Management
              </h2>
              <div className="space-y-4 text-[15px] text-chrome-400 leading-relaxed">
                <p>
                  Strong project management is the foundation of successful construction and facility
                  improvement work.
                </p>
                <p>
                  Solutions Contracting Group provides the planning, coordination, and oversight
                  necessary to keep projects organized and progressing.
                </p>
                <p className="text-chrome-200">
                  Our customers have one point of contact responsible for coordinating the project
                  and keeping the various moving parts aligned.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={90} className="lg:col-span-7">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-chrome-500 uppercase mb-5">
                Services may include
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {managementServices.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 py-2.5 border-b border-steel-700"
                  >
                    <Check className="w-3.5 h-3.5 text-azure-400 shrink-0 mt-1" />
                    <span className="text-[13.5px] text-chrome-300">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Multi-Trade Coordination ── */}
      <section className="bg-mist-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <AnimateIn className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight">
                Multi-Trade Project Coordination
              </h2>
            </AnimateIn>
            <AnimateIn delay={90} className="lg:col-span-8 space-y-4">
              <p className="text-[15px] text-ink-500 leading-relaxed">
                Industrial improvement projects frequently require several different trades working
                together.
              </p>
              <p className="text-[15px] text-ink-500 leading-relaxed">
                Solutions Contracting Group manages the overall project and coordinates the qualified
                subcontractors necessary to complete each scope of work.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed bg-white border border-mist-200 rounded-lg p-5">
                Electrical, plumbing, and other specialty work requiring separate trade licensing is
                performed by appropriately licensed subcontractors.
              </p>
              <p className="text-[15px] text-ink-500 leading-relaxed">
                This approach allows our customers to work through one general contractor rather than
                managing multiple contractors independently.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-mist-100 py-20 border-t border-mist-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-ink-900 mb-3 tracking-tight">
              Capabilities
            </h2>
            <p className="text-[14px] text-ink-500 leading-relaxed">
              Depending on the requirements of the project, scopes may include:
            </p>
          </AnimateIn>

          <AnimateIn delay={80} className="flex flex-wrap gap-2.5">
            {capabilities.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-[13px] font-medium text-ink-700 bg-white border border-mist-300 rounded"
              >
                {item}
              </span>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-steel-950 steel-grain py-20 border-t border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 mb-4 tracking-tight">
              Have a facility project that needs to get done?
            </h2>
            <p className="text-[15px] text-chrome-400 leading-relaxed mb-8">
              Bring us the problem. We&apos;ll help develop the plan and coordinate the path forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
