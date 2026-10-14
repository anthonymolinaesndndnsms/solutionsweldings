import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent industrial projects: tank farm access upgrades, production-area and laboratory renovations, and facility support-space renovations, shown from existing conditions through completion.",
};

export default function PortfolioPage() {
  const tankFarm = projects.find((p) => p.slug === "tank-farm")!;

  return (
    <div>
      <PageHero
        eyebrow="Our Work"
        title="Industrial Projects & Facility Renovations"
        image={tankFarm.sequence.find((p) => p.src.endsWith("06-after.jpg"))!.src}
      >
        <p>
          Explore recent Solutions Contracting Group projects within industrial facilities,
          including production-area renovations, laboratory improvements, tank farm access upgrades,
          and facility support-space renovations.
        </p>
        <p>Selected photographs show existing conditions, construction progress, and completed work.</p>
      </PageHero>

      {/* ── Project index ── */}
      <nav aria-label="Projects" className="bg-mist-100 border-b border-mist-200">
        <ul className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap gap-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <a
                href={`#${p.slug}`}
                className="inline-block px-3.5 py-1.5 text-[12.5px] font-medium text-ink-700 bg-white border border-mist-300 rounded hover:border-azure-500 hover:text-azure-500 transition-colors duration-150"
              >
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {projects.map((project, i) => (
        <section
          key={project.slug}
          id={project.slug}
          className={`scroll-mt-28 py-16 lg:py-20 ${i % 2 === 0 ? "bg-mist-50" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <AnimateIn className="mb-8 max-w-3xl">
              <p className="text-[11px] font-black text-azure-500 tracking-[0.2em] mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight mb-3">
                {project.title}
              </h2>
              <p className="text-[15px] text-ink-500 leading-relaxed">{project.description}</p>
            </AnimateIn>
            <ProjectGallery project={project} />
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-steel-950 steel-grain py-20 border-t border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 mb-4 tracking-tight">
              Have something similar in mind?
            </h2>
            <p className="text-[15px] text-chrome-400 leading-relaxed mb-8">
              Tell us what needs to get done and we&apos;ll help develop the scope and coordinate the
              path forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
