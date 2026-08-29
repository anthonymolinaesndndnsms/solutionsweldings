import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solutions Contracting Group is a licensed general contractor providing renovation, facility improvement, and project management services for industrial facilities in North and South Carolina.",
};

const considerations = [
  "Production schedules",
  "Facility operations",
  "Employees",
  "Equipment",
  "Access",
  "Safety requirements",
  "Subcontractors",
  "Deadlines",
];

const approach = [
  {
    key: "Plan",
    body: "Every successful project starts with a clear understanding of the objective. We evaluate the project requirements, help establish the scope, identify the resources needed, and develop a practical path forward.",
  },
  {
    key: "Build",
    body: "Once the plan is established, we coordinate the people, materials, subcontractors, schedules, and site activities necessary to execute the work.",
  },
  {
    key: "Deliver",
    body: "We manage the project through completion while maintaining communication, quality, organization, and accountability.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Built Around the Project."
        image="/portfolio/5-star/IMG-20251007-WA0014.jpg"
      >
        <p>
          Solutions Contracting Group is a licensed general contractor providing general
          contracting, renovation, facility improvement, and project management services for
          industrial facilities.
        </p>
      </PageHero>

      {/* ── Not in a vacuum ── */}
      <section className="bg-mist-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <AnimateIn className="lg:col-span-7 space-y-5">
              <p className="text-[16px] text-ink-700 leading-relaxed">
                We understand that industrial projects aren&apos;t completed in a vacuum.
              </p>
              <p className="text-[15px] text-ink-500 leading-relaxed">
                That&apos;s why our approach begins with understanding the facility and the
                objective — not simply the individual task.
              </p>
              <p className="text-[15px] text-ink-500 leading-relaxed">
                We work with customers to define the scope, establish a practical plan, coordinate
                the appropriate resources, and manage the project through completion.
              </p>
            </AnimateIn>

            <AnimateIn delay={90} className="lg:col-span-5">
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-ink-400 uppercase mb-5">
                All of it has to be considered
              </h2>
              <div className="flex flex-wrap gap-2">
                {considerations.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-2 text-[13px] font-medium text-ink-700 bg-white border border-mist-300 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── A better way ── */}
      <section className="bg-steel-900 steel-grain py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <AnimateIn className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 leading-[1.2] tracking-tight">
                A better way to manage facility projects.
              </h2>
            </AnimateIn>
            <AnimateIn delay={90} className="lg:col-span-7 space-y-5">
              <p className="text-[15px] text-chrome-400 leading-relaxed">
                Managing multiple contractors, schedules, proposals, materials, and scopes can
                consume valuable time for facility and operations teams.
              </p>
              <p className="text-[15px] text-chrome-400 leading-relaxed">
                Solutions Contracting Group provides a single point of contact to help simplify that
                process. We coordinate the project, communicate with subcontractors, track progress,
                manage schedules, and keep the customer informed throughout the work.
              </p>
              <p className="text-[15px] text-chrome-200 leading-relaxed border-l-2 border-azure-500 pl-5">
                Our goal is straightforward: make it easier for our customers to get facility
                projects completed.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="bg-mist-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight">
              Our Approach
            </h2>
          </AnimateIn>

          <div className="space-y-px bg-mist-200 border border-mist-200 rounded-lg overflow-hidden">
            {approach.map((phase, i) => (
              <AnimateIn key={phase.key} delay={i * 80}>
                <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10">
                  <h3 className="md:col-span-3 text-[13px] font-black text-ink-900 uppercase tracking-[0.22em]">
                    <span className="text-azure-500 mr-3">{String(i + 1).padStart(2, "0")}</span>
                    {phase.key}
                  </h3>
                  <p className="md:col-span-9 text-[14.5px] text-ink-500 leading-relaxed">
                    {phase.body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tagline ── */}
      <section className="bg-steel-950 steel-grain py-24 border-t border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="flex flex-col items-center text-center">
            <Image
              src="/brand/scg-logo.png"
              alt="SCG Solutions Contracting Group"
              width={1256}
              height={859}
              className="h-[130px] w-auto mb-10 opacity-95"
            />
            <p className="text-[13px] font-black text-chrome-200 uppercase tracking-[0.32em] mb-5">
              Plan · Build · Deliver
            </p>
            <p className="text-[15px] text-chrome-400 max-w-md leading-relaxed mb-10">
              It&apos;s more than a tagline. It&apos;s how we approach every project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
