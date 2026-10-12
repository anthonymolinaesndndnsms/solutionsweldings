import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solutions Contracting Group is a licensed general contractor serving industrial facilities across North and South Carolina: production-area and laboratory renovations, tank farm access upgrades, ventilation installations, and support-space renovations.",
};

const approach = [
  {
    key: "Plan",
    body: "Define the project scope, identify the required construction resources, and establish the work sequence.",
  },
  {
    key: "Manage",
    body: "Coordinate subcontractors, schedules, materials, and site activities while keeping the customer informed.",
  },
  {
    key: "Deliver",
    body: "Oversee completion, address remaining project items, and coordinate turnover to the customer.",
  },
];

export default function AboutPage() {
  const painting = projects.find((p) => p.slug === "platform-painting")!;

  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Focused on Industrial Facility Projects"
        image={painting.featured.src}
      >
        <p>
          Solutions Contracting Group is a licensed general contractor serving industrial
          facilities across North and South Carolina.
        </p>
      </PageHero>

      {/* ── Recent work and how we're engaged ── */}
      <section className="bg-mist-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn className="space-y-5">
            <p className="text-[17px] text-ink-700 leading-relaxed">
              Our recent work includes production-area renovations, laboratory improvements, tank
              farm access upgrades, industrial ventilation installations, and the renovation of
              facility meeting rooms, restrooms, and kitchenettes.
            </p>
            <p className="text-[17px] text-ink-500 leading-relaxed">
              We manage the overall construction project and coordinate the qualified subcontractors
              required for each scope. Customers work through one point of contact for planning,
              scheduling, site coordination, and project communication.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-azure-500 hover:text-azure-600 transition-colors duration-150"
            >
              See the projects <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── Planning around the facility ── */}
      <section className="bg-steel-900 steel-grain py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <AnimateIn className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 leading-[1.2] tracking-tight">
                Planning Around the Facility
              </h2>
            </AnimateIn>
            <AnimateIn delay={90} className="lg:col-span-7 space-y-5">
              <p className="text-[15px] text-chrome-300 leading-relaxed">
                Industrial construction requires consideration of the facility as well as the work
                itself.
              </p>
              <p className="text-[15px] text-chrome-200 leading-relaxed border-l-2 border-azure-500 pl-5">
                We work with customers to understand project boundaries, access requirements,
                production schedules, nearby equipment, and applicable site requirements before
                coordinating the construction sequence.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Plan · Manage · Deliver ── */}
      <section className="bg-mist-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight">
              Plan <span className="text-azure-500">·</span> Manage{" "}
              <span className="text-azure-500">·</span> Deliver
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
              src="/brand/scg-lockup.png"
              alt="SCG Solutions Contracting Group"
              width={1453}
              height={966}
              className="h-[130px] w-auto mb-10 opacity-95"
            />
            <p className="text-[13px] font-black text-chrome-200 uppercase tracking-[0.32em] mb-5">
              Plan · Manage · Deliver
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
