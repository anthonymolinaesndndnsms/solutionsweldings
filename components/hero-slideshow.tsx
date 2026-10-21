"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Finished-project photos behind the home hero, as the customer specified:
 * the tank farm platform first, then the production area and the lab ceiling.
 * Before and during photos stay on the project pages.
 *
 * Sources are pre-cropped and capped at 2200px in public/hero (the 12MP
 * originals made the drift stutter). next/image then serves each visitor a
 * WebP/AVIF sized to their screen instead of the full 2200px JPEG.
 */
const SLIDES = [
  // Bottom fifth (bare dirt) trimmed off and anchored high, so the tanks,
  // railings and stairs fill the frame at any hero shape.
  { src: "/hero/home-tank-farm-railings.jpg", position: "center 30%" },
  { src: "/hero/home-production-area.jpg", position: "center" },
  { src: "/hero/home-lab-ceiling.jpg", position: "center" },
];

const INTERVAL_MS = 6500;
const FADE_MS = 1800;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  // The first frame loads with the page. The other two stay invisible for the
  // first 6.5s, so they are only requested once the page has finished
  // loading; fetching all three up front saturated slow mobile connections
  // and held up the first paint.
  const [loadRest, setLoadRest] = useState(false);
  const ready = useRef<boolean[]>(SLIDES.map(() => false));

  useEffect(() => {
    if (document.readyState === "complete") {
      const id = window.setTimeout(() => setLoadRest(true), 0);
      return () => window.clearTimeout(id);
    }
    const onLoad = () => setLoadRest(true);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only advance to a frame that has loaded and decoded, so a slow
    // connection never cross-fades into an empty frame.
    const timer = window.setInterval(
      () =>
        setIndex((i) => {
          const next = (i + 1) % SLIDES.length;
          return ready.current[next] ? next : i;
        }),
      INTERVAL_MS
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {SLIDES.map(({ src, position }, i) =>
        i === 0 || loadRest ? (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="100vw"
            quality={100}
            loading="eager"
            // Decode ahead of time: left alone, the browser decodes a frame
            // the moment it is first painted, which is exactly when it
            // cross-fades in, and the start of its drift stutters.
            onLoad={(e) => {
              e.currentTarget
                .decode()
                .catch(() => {})
                .finally(() => {
                  ready.current[i] = true;
                });
            }}
            className="hero-drift object-cover object-center"
            style={{
              objectPosition: position,
              opacity: i === index ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          />
        ) : null
      )}

      {/* Shade cover — a flat scrim plus two gradients so the headline keeps
          its contrast wherever a photo runs light. */}
      <div className="absolute inset-0 bg-steel-950/25" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(11,14,18,0.92) 0%, rgba(11,14,18,0.62) 45%, rgba(11,14,18,0.08) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,14,18,0.60) 0%, rgba(11,14,18,0.05) 38%, rgba(11,14,18,0.65) 100%)",
        }}
      />
    </div>
  );
}
