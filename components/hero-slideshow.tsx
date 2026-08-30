"use client";

import { useEffect, useState } from "react";

/**
 * Project photos behind the home hero, ordered to show range: heavy
 * industrial, process equipment, structural work, then finished interiors.
 */
const SLIDES = [
  "/portfolio/5-star/20240920_092353.jpg",
  "/portfolio/5-star/FB_IMG_1633285804768.jpg",
  "/portfolio/5-star/IMG_4243 (1).jpg",
  "/portfolio/5-star/PXL_20250506_151513173.jpg",
  "/portfolio/5-star/PXL_20210909_112506265.jpg",
];

const INTERVAL_MS = 6000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Hold on a single frame for anyone who has asked for less motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(false);
      return;
    }

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
          // The first frame is what visitors see immediately; the rest can
          // stream in behind the shade before their turn comes around.
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            opacity: animate ? (i === index ? 1 : 0) : i === 0 ? 1 : 0,
            transition: "opacity 1.6s ease-in-out",
            // Slow drift on the visible frame so the hero never feels static.
            transform: animate && i === index ? "scale(1.06)" : "scale(1)",
            transitionProperty: "opacity, transform",
            transitionDuration: "1.6s, 7s",
            transitionTimingFunction: "ease-in-out, ease-out",
          }}
        />
      ))}

      {/* Shade cover — a flat scrim plus a directional gradient so the
          headline keeps its contrast wherever a photo runs light. */}
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
