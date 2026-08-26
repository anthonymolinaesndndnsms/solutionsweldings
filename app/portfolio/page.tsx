"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { allPortfolioImages, type PortfolioImage } from "./images";

const HERO_SRC = "/portfolio/5-star/20240920_092353.jpg";
const PER_PAGE = 24;
const TOTAL_PAGES = Math.ceil(allPortfolioImages.length / PER_PAGE);

function PhotoCard({ image, priority }: { image: PortfolioImage; priority: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // A cached image can finish decoding before React attaches onLoad, so that
  // event never fires and the fade-in would stay stuck at opacity 0. Checking
  // `complete` as the node mounts covers that case; onLoad covers the rest.
  const attachRef = useCallback((el: HTMLImageElement | null) => {
    if (el?.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden bg-steel-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
      <div className="h-[220px] relative overflow-hidden">
        {failed ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[11px] text-chrome-500">Image unavailable</span>
          </div>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={attachRef}
              src={image.src}
              alt="Project photo"
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
            {!loaded && (
              <div className="absolute inset-0 bg-steel-800 animate-pulse" aria-hidden />
            )}
          </>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
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
  const items: (number | "gap")[] = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - page) <= 1) {
      items.push(p);
    } else if (items[items.length - 1] !== "gap") {
      items.push("gap");
    }
  }

  return (
    <nav className="flex items-center justify-center gap-1 mt-12" aria-label="Portfolio pages">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className="p-2 rounded text-ink-500 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {items.map((item, i) =>
        item === "gap" ? (
          <span key={`gap-${i}`} className="px-2 text-[13px] text-ink-400 select-none">
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onChange(item)}
            aria-current={item === page ? "page" : undefined}
            className={`min-w-[34px] h-[34px] px-2 rounded text-[13px] font-semibold transition-colors duration-150 ${
              item === page
                ? "bg-azure-500 text-white"
                : "text-ink-500 hover:text-ink-900 hover:bg-mist-200"
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === total}
        aria-label="Next page"
        className="p-2 rounded text-ink-500 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
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

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[460px] sm:h-[540px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_SRC}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,21,26,0.86) 0%, rgba(16,21,26,0.42) 45%, rgba(11,14,18,0.94) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-[100px]">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-azure-300 uppercase mb-4 rise-in">
            Our Work
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight tracking-tight rise-in"
            style={{ animationDelay: "0.14s" }}
          >
            Project Photos
          </h1>
          <p
            className="text-[15.5px] text-white/75 leading-relaxed max-w-xl rise-in"
            style={{ animationDelay: "0.26s" }}
          >
            {allPortfolioImages.length} photos from completed projects — renovations, facility
            improvements, and finish work across industrial and commercial sites.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section ref={gridRef} className="bg-mist-50 py-16 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[12px] text-ink-400 mb-8">
            Page {page} of {TOTAL_PAGES} — showing {start + 1}–
            {Math.min(start + PER_PAGE, allPortfolioImages.length)} of {allPortfolioImages.length}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pageImages.map((image, i) => (
              <PhotoCard key={image.id} image={image} priority={i < 8} />
            ))}
          </div>

          <Pagination page={page} total={TOTAL_PAGES} onChange={goToPage} />
        </div>
      </section>

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
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
