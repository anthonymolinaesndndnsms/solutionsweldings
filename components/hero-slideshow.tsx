"use client";

import { useEffect, useState } from "react";

/**
 * Project photos behind the home hero, ordered to show range: heavy
 * industrial, process equipment, structural work, then finished interiors.
 *
 * These are pre-cropped to 16:9 and capped at 2200px in public/hero. The
 * originals are 12-megapixel camera files — compositing one of those while
 * it animates is what makes the drift stutter.
 */
const SLIDES = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
  "/hero/hero-5.jpg",
];

const INTERVAL_MS = 6500;
const FADE_MS = 1800;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  // Decode every frame up front. Left to itself the browser decodes a frame
  // the moment it is first painted — which is exactly when it cross-fades
  // in, so the first second of its drift stutters. Warming them costs
  // nothing visible and the files are small.
  useEffect(() => {
    SLIDES.slice(1).forEach((src) => {
      const img = new Image();
      img.src = src;
      void img.decode?.().catch(() => {});
    });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {SLIDES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          // All frames load eagerly — lazy-loading defers the fetch until the
          // frame is painted, which is the moment it fades in.
          loading="eager"
          fetchPriority={i === 0 ? "high" : "low"}
          decoding="async"
          className="hero-drift absolute inset-0 w-full h-full object-cover object-center"
          style={{
            opacity: i === index ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        />
      ))}

      {/* Shade cover — a flat scrim plus two gradients so the headline keeps
          its contrast wherever a photo runs light. */}
      <div className="absolute inset-0 bg-steel-950/45" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(11,14,18,0.90) 0%, rgba(11,14,18,0.58) 50%, rgba(11,14,18,0.22) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,14,18,0.72) 0%, rgba(11,14,18,0.14) 38%, rgba(11,14,18,0.78) 100%)",
        }}
      />
    </div>
  );
}
