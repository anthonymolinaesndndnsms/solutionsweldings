"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Category = "All" | "Industrial" | "Sanitary" | "Ornamental" | "Renovations" | "Electrical";

const projects = [
  { id: 1,  category: "Industrial"  as const },
  { id: 2,  category: "Sanitary"    as const },
  { id: 3,  category: "Ornamental"  as const },
  { id: 4,  category: "Industrial"  as const },
  { id: 5,  category: "Sanitary"    as const },
  { id: 6,  category: "Ornamental"  as const },
  { id: 7,  category: "Industrial"  as const },
  { id: 8,  category: "Ornamental"  as const },
  { id: 9,  category: "Sanitary"    as const },
  { id: 10, category: "Renovations" as const },
  { id: 11, category: "Renovations" as const },
  { id: 12, category: "Electrical"  as const },
];

const categories: Category[] = ["All", "Industrial", "Sanitary", "Ornamental", "Renovations", "Electrical"];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`
        relative rounded-lg overflow-hidden cursor-pointer select-none
        transition-all duration-200
        ${pressed
          ? "ring-2 ring-[#157DA0] ring-offset-2 ring-offset-[#F2F1EE] shadow-[0_0_0_4px_rgba(21,125,160,0.15)] scale-[0.98]"
          : "shadow-md hover:shadow-xl hover:-translate-y-1"
        }
      `}
    >
      <div className="h-[220px] bg-[#DDDBD7] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8E6E1] to-[#D0CEC9] opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 text-[10px] font-bold tracking-widest text-white bg-[#157DA0] rounded uppercase">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* ── Header — DARK ── */}
      <section className="bg-[#1C2128] pt-[62px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">Our Work</p>
              <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-4 leading-tight">Portfolio</h1>
              <p className="text-[15px] text-[#8A9098] leading-relaxed">
                Selected projects across our three service lines. Every project listed was delivered on time and passed inspection.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 bg-[#232B33] border border-[#2A3340] rounded p-1 self-start sm:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-1.5 text-[12px] font-semibold rounded transition-colors duration-150 ${
                    active === cat ? "bg-[#157DA0] text-white" : "text-[#8A9098] hover:text-[#E4E7EA]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid — LIGHT ── */}
      <section className="bg-[#F2F1EE] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — DARK ── */}
      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Ready to Start a Project?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Tell us what you're working on and we'll come back with a clear scope and competitive quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
