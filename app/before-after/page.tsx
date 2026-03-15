"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => { setDragging(true); updatePosition(e.clientX); };
  const handleMouseMove = useCallback((e: React.MouseEvent) => { if (dragging) updatePosition(e.clientX); }, [dragging, updatePosition]);
  const handleTouchMove = useCallback((e: React.TouchEvent) => { if (dragging) updatePosition(e.touches[0].clientX); }, [dragging, updatePosition]);
  const stopDragging = () => setDragging(false);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded h-[280px] sm:h-[340px] bg-[#E8E6E1] border border-[#D6D4CF] cursor-col-resize select-none touch-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchStart={() => setDragging(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={stopDragging}
    >
      {/* Before */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#E8E6E1]">
        <span className="text-[11px] text-[#B0ADA8] tracking-widest uppercase">Before</span>
      </div>
      {/* After */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <div className="absolute inset-0 bg-[#F2F1EE] flex items-center justify-center">
          <span className="text-[11px] text-[#B0ADA8] tracking-widest uppercase">After</span>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute top-3 left-3 px-2 py-1 bg-[#1C2128]/80 rounded text-[10px] font-semibold text-[#8A9098] uppercase tracking-widest">Before</div>
      <div className="absolute top-3 right-3 px-2 py-1 bg-[#157DA0] rounded text-[10px] font-semibold text-white uppercase tracking-widest">After</div>
      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setDragging(true)}
      >
        <div className="absolute top-0 bottom-0 w-px bg-[#157DA0]" />
        <div className="relative w-8 h-8 rounded-full bg-[#157DA0] flex items-center justify-center z-10 shadow-md">
          <MoveHorizontal className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Industrial Pipeline — Corroded System Replacement",
    category: "Industrial",
    problem: "Aging carbon steel piping with significant internal corrosion. Client was experiencing pressure drops and product contamination.",
    process: "Full removal of the corroded section, prep and replacement with new certified pipe. All welds inspected by UT.",
    result: "Zero leaks, full pressure rating restored, and contamination issue eliminated. Client reported 18% improvement in flow efficiency.",
  },
  {
    title: "Sanitary Dairy Line — Surface Finish Rework",
    category: "Sanitary",
    problem: "Existing welds from original installation had rough interior surfaces that were trapping bacteria and failing hygienic audits.",
    process: "Weld removal and re-welding with orbital TIG, followed by interior polish to Ra ≤ 32 μin and full passivation.",
    result: "Line passed third-party sanitary audit on first re-inspection. Client has maintained compliance through three subsequent audits.",
  },
  {
    title: "Ornamental Entry Gate — Structural Repair",
    category: "Ornamental",
    problem: "Commercial driveway gate had suffered vehicle impact damage. Frame was warped, welds cracked, and hardware mounting compromised.",
    process: "Gate removed, frame straightened and re-welded, damaged pickets replaced, hardware remounted and aligned. Re-finished with powder coat.",
    result: "Gate restored to full working condition with matching finish. Client noted the repair was indistinguishable from the original.",
  },
];

export default function BeforeAfterPage() {
  return (
    <div>
      <section className="bg-[#1C2128] pt-[62px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3">Transformations</p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight">Before & After</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed">
              Repairs, retrofits, and restorations. Drag the slider to compare conditions before and after our work.
            </p>
          </div>
        </div>
      </section>

      {projects.map((project, i) => (
        <section key={project.title} className={`py-20 ${i % 2 === 0 ? "bg-[#F2F1EE]" : "bg-[#E8E6E1]"}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-semibold text-[#157DA0] bg-white border border-[#D6D4CF] rounded uppercase tracking-wider mb-4">
                  {project.category}
                </span>
                <h2 className="text-[18px] font-black text-[#15191E] mb-5">{project.title}</h2>
                <BeforeAfterSlider />
                <p className="text-[11px] text-[#B0ADA8] mt-2 text-center">Drag to compare</p>
              </div>
              <div className="space-y-6 lg:pt-14">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-[#9A9EA4] uppercase mb-2">The Problem</h4>
                  <p className="text-[13px] text-[#6A7280] leading-relaxed">{project.problem}</p>
                </div>
                <div className="border-t border-[#D6D4CF] pt-4">
                  <h4 className="text-[10px] font-bold tracking-widest text-[#9A9EA4] uppercase mb-2">Our Approach</h4>
                  <p className="text-[13px] text-[#6A7280] leading-relaxed">{project.process}</p>
                </div>
                <div className="border-t border-[#D6D4CF] pt-4">
                  <h4 className="text-[10px] font-bold tracking-widest text-[#157DA0] uppercase mb-2">The Result</h4>
                  <p className="text-[13px] text-[#6A7280] leading-relaxed">{project.result}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Have something that needs repair?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">Send us photos and a description. We'll assess the situation and recommend the right approach.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150">
              Discuss a Repair <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
