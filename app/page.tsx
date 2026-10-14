import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { projects, projectHref } from "@/lib/projects";

const whatWeDo = [
  {
    title: "Production & Laboratory Renovations",
    body: "Renovation and modification of production areas, laboratories, and related workspaces. Project scopes can include interior reconfiguration, partitions, doors, ceilings, lighting, flooring, and coordinated specialty work.",
  },
  {
    title: "Facility Infrastructure & Access Improvements",
    body: "Improvements to the spaces and infrastructure that support facility operations, including tank farm access, platforms, stairs, ventilation, protective coatings, and associated site improvements.",
  },
  {
    title: "Facility Support-Space Renovations",
    body: "Renovations of offices, operations meeting rooms, employee break rooms and restrooms, coordinated as part of the customer’s overall facility improvement needs.",
  },
];

// The three featured projects. Each card links to its project group on the
// Our Work page; the photo is the finished image from that group.
const featured = [
  {
    slug: "tank-farm",
    title: "Tank Farm Improvements",
    body: "Access and platform improvements within an existing industrial tank farm.",
  },
  {
    slug: "production-area-renovation",
    title: "Production-Area Renovation",
    body: "Renovation of an existing industrial workspace, documented from its original condition through construction and completion.",
  },
  {
    slug: "laboratory-ceiling-lighting",
    title: "Laboratory Improvements",
    body: "Laboratory ceiling and lighting improvements, alongside related laboratory renovation work.",
  },
].map((card) => ({ ...card, photo: projects.find((p) => p.slug === card.slug)!.featured }));

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
      <section className="relative bg-steel-900 pt-[100px] overflow-hidden">
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
              className="space-y-4 text-[16px] text-chrome-300 leading-relaxed max-w-2xl mb-10 rise-in"
              style={{ animationDelay: "0.28s" }}
            >
              <p>
                Solutions Contracting Group manages renovations and improvement projects within
                industrial facilities across North and South Carolina.
              </p>
              <p>
                Our work includes production-area renovations, laboratory improvements, tank farm
                access upgrades, and the renovation of facility support spaces. We bring the
                construction scopes together under one general contractor, managing planning,
                subcontractors, schedules, and site coordination through completion.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 rise-in" style={{ animationDelay: "0.4s" }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-steel-600 hover:border-chrome-500 text-chrome-200 hover:text-chrome-100 font-semibold text-[14px] rounded transition-colors duration-150"
              >
                View Our Work
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
              Construction and Improvements for Industrial Facilities
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-mist-200 border border-mist-200 rounded-lg overflow-hidden">
            {whatWeDo.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 80} className="bg-white p-8 lg:p-9 flex flex-col">
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
                One Contractor.
                <span className="block text-azure-400">One Point of Contact.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={100} className="lg:col-span-7 space-y-5">
              <p className="text-[15px] text-chrome-400 leading-relaxed">
                A facility renovation can involve demolition, framing, flooring, ceilings, electrical
                work, plumbing, and other specialty scopes.
              </p>
              <p className="text-[15px] text-chrome-400 leading-relaxed">
                Solutions Contracting Group manages those scopes as one coordinated project. We
                develop the scope with the customer, coordinate qualified subcontractors, organize
                the work sequence, and oversee progress through completion.
              </p>
              <p className="text-[15px] text-chrome-200 leading-relaxed border-l-2 border-azure-500 pl-5">
                Your facility team has one point of contact for project communication, scheduling,
                and coordination.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Featured projects ── */}
      <section className="bg-mist-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-azure-500 uppercase mb-3">
                Our Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-azure-500 hover:text-azure-600 transition-colors duration-150"
            >
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((card, i) => (
              <AnimateIn key={card.slug} delay={i * 80}>
                <Link
                  href={projectHref(card.slug)}
                  className="group block bg-white border border-mist-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 h-full"
                >
                  <div className="relative aspect-[4/3] bg-steel-800 overflow-hidden">
                    <Image
                      src={card.photo.src}
                      alt={`${card.title}, completed`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[18px] font-black text-ink-900 tracking-tight mb-2 group-hover:text-azure-500 transition-colors duration-150">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] text-ink-500 leading-relaxed">{card.body}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
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
                Discuss Your Project <ArrowRight className="w-4 h-4" />
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
