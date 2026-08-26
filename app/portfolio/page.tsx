"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { allPortfolioImages, type PortfolioImage } from "./images";

const HERO_SRC = "/portfolio/5-star/PXL_20250923_132219409.jpg";
const PER_PAGE = 24;
const TOTAL_PAGES = Math.ceil(allPortfolioImages.length / PER_PAGE);

function PhotoCard({ image, priority }: { image: PortfolioImage; priority: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-[#1C2128] group">
      <style>{`
        @keyframes shimmer-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
      <div className="h-[220px] relative overflow-hidden">
        {!error ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt="Portfolio project"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1C2128]">
            <span className="text-[11px] text-[#555F6B]">Image unavailable</span>
          </div>
        )}

        {/* Dark shimmer skeleton */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-[#1C2128] overflow-hidden">
            <div
              className="absolute inset-y-0 w-1/2"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.055) 50%, transparent 100%)",
                animation: "shimmer-slide 1.6s ease-in-out infinite",
              }}
            />
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
      </div>
    </div>
  );
}

function Pagination({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (p: number) => void;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const showEllipsis = total > 7;

  function visible() {
    if (!showEllipsis) return pages;
    const result: (number | "…")[] = [];
    for (const p of pages) {
      if (p === 1 || p === total || Math.abs(p - page) <= 1) {
        result.push(p);
      } else if (
        (p === 2 && page > 4) ||
        (p === total - 1 && page < total - 3)
      ) {
        result.push("…");
      }
    }
    return result;
  }

  return (
    <div className="flex items-center justify-center gap-1 mt-12">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="p-2 rounded text-[#8A9098] hover:text-[#E4E7EA] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {visible().map((v, i) =>
        v === "…" ? (
          <span key={`e${i}`} className="px-2 text-[13px] text-[#555F6B] select-none">
            …
          </span>
        ) : (
          <button
            key={v}
            onClick={() => onChange(v as number)}
            className={`min-w-[34px] h-[34px] px-2 rounded text-[13px] font-semibold transition-colors duration-150 ${
              v === page
                ? "bg-[#157DA0] text-white"
                : "text-[#8A9098] hover:text-[#E4E7EA] hover:bg-[#232B33]"
            }`}
          >
            {v}
          </button>
        )
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === total}
        className="p-2 rounded text-[#8A9098] hover:text-[#E4E7EA] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function PortfolioPage() {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const start = (page - 1) * PER_PAGE;
  const pageImages = allPortfolioImages.slice(start, start + PER_PAGE);

  function goToPage(p: number) {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // reset to page 1 on mount
  useEffect(() => { setPage(1); }, []);

  return (
    <div>
      {/* ── Hero — full-bleed photo background ── */}
      <section className="relative h-[520px] sm:h-[600px] overflow-hidden">
        <style>{`
          @keyframes hero-img-in {
            from { opacity: 0; transform: scale(1.07); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes hero-text-in {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_SRC}
          alt="Portfolio hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          style={{ animation: "hero-img-in 1.4s cubic-bezier(0.25,0.46,0.45,0.94) forwards" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(28,33,40,0.82) 0%, rgba(28,33,40,0.28) 45%, rgba(20,26,32,0.88) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(21,125,160,0.07) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-[80px]">
          <p
            className="text-[11px] font-semibold tracking-[0.22em] text-[#38B6D9] uppercase mb-3 drop-shadow"
            style={{ animation: "hero-text-in 0.7s ease 0.3s both" }}
          >
            Our Work
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg"
            style={{ animation: "hero-text-in 0.7s ease 0.45s both" }}
          >
            Portfolio
          </h1>
          <p
            className="text-[16px] text-white/70 leading-relaxed max-w-lg drop-shadow"
            style={{ animation: "hero-text-in 0.7s ease 0.6s both" }}
          >
            {allPortfolioImages.length} photos from real jobs — welding, fabrication, and finishing work
            delivered on time and built to last.
          </p>
        </div>
      </section>

      {/* ── Photo Grid — LIGHT ── */}
      <section ref={gridRef} className="bg-[#F2F1EE] py-16 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Page indicator */}
          <p className="text-[12px] text-[#8A9098] mb-8">
            Page {page} of {TOTAL_PAGES} &mdash; showing {start + 1}–{Math.min(start + PER_PAGE, allPortfolioImages.length)} of {allPortfolioImages.length} photos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pageImages.map((image, i) => (
              <PhotoCard key={image.id} image={image} priority={i < 8} />
            ))}
          </div>

          <Pagination page={page} total={TOTAL_PAGES} onChange={goToPage} />
        </div>
      </section>

      {/* ── CTA — DARK ── */}
      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Ready to Start a Project?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">
              Tell us what you&apos;re working on and we&apos;ll come back with a clear scope and competitive quote.
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
