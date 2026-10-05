import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { HeroSlideshow } from "@/components/hero-slideshow";

const whatWeDo = [
  {
    title: "Industrial Renovations",
    body: "We manage renovation projects that improve, modify, and modernize existing industrial facilities. Whether addressing an immediate facility need or planning a larger improvement, we coordinate each phase of the project with a focus on quality, efficiency, and minimal disruption to ongoing operations.",
  },
  {
    title: "Facility Improvements",
    body: "Industrial facilities are constantly evolving. We help customers complete repairs, upgrades, modifications, and facility improvements that support safer, more efficient, and better-functioning work environments.",
  },
  {
    title: "Project Management",
    body: "Successful projects require more than completing the work — they require planning, coordination, communication, and accountability. We provide project management and site coordination throughout the project, managing schedules, subcontractors, materials, and project requirements from start to completion.",
  },
];

const phases = [
  {
    key: "Plan",
    body: "Understand the objective. Define the scope. Establish the schedule and resources required to move forward.",
  },
  {
    key: "Manage",
    body: "Coordinate the people, materials, subcontractors, and site activities necessary to execute the work.",
  },
  {
    key: "Deliver",
    body: "Manage the project through completion with a focus on quality, communication, and accountability.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-steel-900 pt-[84px] overflow-hidden">
        <HeroSlideshow />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p
              className="text-[11px] font-semibold tracking-[0.28em] text-azure-400 uppercase mb-7 rise-in"
              style={{ animationDelay: "0.05s" }}
            >
              Plan · Manage · Deliver
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-[62px] font-black text-chrome-100 leading-[1.06] tracking-tight mb-7 rise-in"
              style={{ animationDelay: "0.16s" }}
            >
              Industrial General Contracting
              <span className="block text-azure-400">&amp; Facility Improvements</span>
            </h1>
            <div
              className="space-y-4 text-[16px] text-chrome-400 leading-relaxed max-w-2xl mb-10 rise-in"
              style={{ animationDelay: "0.28s" }}
            >
              <p>
                Solutions Contracting Group provides general contracting, renovation, facility
                improvement, and project management services for industrial facilities.
              </p>
              <p>
                From initial planning through project completion, we bring together the resources,
                coordination, and oversight necessary to keep projects organized, efficient, and
                moving forward.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 rise-in" style={{ animationDelay: "0.4s" }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-steel-700 hover:border-steel-600 text-chrome-300 hover:text-chrome-100 font-semibold text-[14px] rounded transition-colors duration-150"
              >
                What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach line ── */}
      <section className="bg-steel-850 border-y border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <p className="text-[17px] sm:text-[19px] text-chrome-200 leading-relaxed max-w-4xl font-light">
            Our approach is simple: understand the objective, develop the plan, coordinate the work,
            and deliver the project.
          </p>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="bg-mist-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-azure-500 uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
              Three ways we support industrial facilities.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-mist-200 border border-mist-200 rounded-lg overflow-hidden">
            {whatWeDo.map((item, i) => (
              <AnimateIn
                key={item.title}
                delay={i * 80}
                className="bg-white p-8 lg:p-9 flex flex-col"
              >
                <span className="text-[11px] font-black text-azure-500 tracking-[0.2em] mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[20px] font-black text-ink-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-ink-500 leading-relaxed">{item.body}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── One point of contact ── */}
      <section className="bg-steel-900 steel-grain py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <AnimateIn className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-black text-chrome-100 leading-[1.15] tracking-tight">
                One contractor.
                <span className="block text-azure-400">One point of contact.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={100} className="lg:col-span-7 space-y-5">
              <p className="text-[15px] text-chrome-400 leading-relaxed">
                Projects involving multiple scopes can quickly become difficult to manage.
              </p>
              <p className="text-[15px] text-chrome-400 leading-relaxed">
                Solutions Contracting Group simplifies the process by serving as a single point of
                contact for the overall project. We coordinate subcontractors, schedules, materials,
                and site activities while maintaining clear communication throughout the work.
              </p>
              <p className="text-[15px] text-chrome-200 leading-relaxed border-l-2 border-azure-500 pl-5">
                The result is a more organized project and one accountable team managing it from
                beginning to end.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Plan / Manage / Deliver ── */}
      <section className="bg-mist-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
              Plan <span className="text-azure-500">·</span> Manage{" "}
              <span className="text-azure-500">·</span> Deliver
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <AnimateIn key={phase.key} delay={i * 90}>
                <div className="border-t-2 border-azure-500 pt-6">
                  <h3 className="text-[13px] font-black text-ink-900 uppercase tracking-[0.2em] mb-4">
                    {phase.key}
                  </h3>
                  <p className="text-[14px] text-ink-500 leading-relaxed">{phase.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-steel-950 steel-grain py-20 border-t border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 tracking-tight">
              Have a project in mind? Let&apos;s talk.
            </h2>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9803390527"
                className="inline-flex items-center gap-2 px-6 py-3 border border-steel-700 hover:border-steel-600 text-chrome-300 hover:text-chrome-100 font-semibold text-[14px] rounded transition-colors duration-150"
              >
                (980) 339-0527
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
