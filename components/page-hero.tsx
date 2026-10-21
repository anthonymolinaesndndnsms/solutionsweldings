import React from "react";
import Image from "next/image";

interface PageHeroProps {
  /** Small uppercase label above the title. */
  eyebrow: string;
  title: React.ReactNode;
  /** Background photo, chosen to match the page's subject. */
  image: string;
  /** Intro copy rendered under the title. */
  children?: React.ReactNode;
}

/**
 * Photo-backed page header. The gradient keeps the image readable behind
 * text while still letting the work show through — darkest at the top,
 * where the fixed nav sits, and at the bottom where the copy lands.
 */
export function PageHero({ eyebrow, title, image, children }: PageHeroProps) {
  return (
    <section className="relative bg-steel-900 pt-[100px] overflow-hidden border-b border-steel-700">
      {/* Same "cover, centred" framing as the CSS background this replaces,
          but served at screen size in WebP/AVIF instead of the 2000px JPEG. */}
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        quality={80}
        loading="eager"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,14,18,0.92) 0%, rgba(13,17,22,0.72) 38%, rgba(11,14,18,0.90) 100%)",
        }}
        aria-hidden
      />
      {/* Deepen the left edge so the copy always has contrast under it. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(11,14,18,0.86) 0%, rgba(11,14,18,0.40) 55%, rgba(11,14,18,0.10) 100%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-azure-300 uppercase mb-5 rise-in">
            {eyebrow}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white mb-7 leading-[1.1] tracking-tight rise-in drop-shadow"
            style={{ animationDelay: "0.14s" }}
          >
            {title}
          </h1>
          {children && (
            <div
              className="space-y-4 text-[15.5px] text-chrome-200 leading-relaxed rise-in"
              style={{ animationDelay: "0.26s" }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
