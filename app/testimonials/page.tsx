"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const testimonials = [
  { quote: "We've worked with several welding contractors over the years and Solutions Welding is in a different league. They came to the site on schedule, executed cleanly, and handed us documentation we could actually use for our FDA audit. That's rare.", name: "David M.", title: "Plant Manager", company: "Regional Dairy Processor", category: "Sanitary" },
  { quote: "The structural steel work they did for our facility expansion was exactly what we needed. No surprises, no excuses. They finished on time and within our budget. We've already brought them back for two more projects.", name: "Sandra K.", title: "Facilities Director", company: "Manufacturing Operation", category: "Industrial" },
  { quote: "The gate system they built for our property is outstanding. They matched our existing ironwork perfectly — something I wasn't sure was possible. Quality and attention to detail exceeded what I expected.", name: "Robert L.", title: "Property Manager", company: "Commercial Real Estate", category: "Ornamental" },
  { quote: "Emergency pipeline repair on a Friday afternoon. They had a team on-site within three hours and had us back online by Saturday morning. That kind of response is what separates good contractors from great ones.", name: "James T.", title: "Maintenance Supervisor", company: "Industrial Facility", category: "Industrial" },
  { quote: "We needed our CIP tanks retrofitted during a compressed shutdown window. They delivered all three within the five-day window with full documentation. Excellent execution.", name: "Patricia V.", title: "Quality Assurance Manager", company: "Pharmaceutical Manufacturer", category: "Sanitary" },
  { quote: "Our staircase project had some complexities with structural requirements and GC coordination. They handled it professionally at every step. The finished staircase looks exceptional and passed inspection on the first go.", name: "Michelle R.", title: "Architect", company: "Architecture Studio", category: "Ornamental" },
];

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setPaused(true); };
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setPaused(true); };
  const t = testimonials[current];

  return (
    <div>
      <section className="bg-[#1C2128] pt-[62px]">
        <style>{`@keyframes hero-text-in { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#157DA0] uppercase mb-3" style={{ animation: "hero-text-in 0.6s ease 0.05s both" }}>What Clients Say</p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#E4E7EA] mb-5 leading-tight" style={{ animation: "hero-text-in 0.6s ease 0.18s both" }}>Testimonials</h1>
            <p className="text-[16px] text-[#8A9098] leading-relaxed" style={{ animation: "hero-text-in 0.6s ease 0.3s both" }}>
              Feedback from plant managers, facilities directors, architects, and property owners who've hired us and come back for more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured carousel — DARK */}
      <section className="bg-[#232B33] py-20 border-b border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="max-w-3xl mx-auto">
            <div className="bg-[#1C2128] border border-[#2A3340] rounded-lg p-8 sm:p-10 min-h-[220px]">
              <span className="px-2 py-0.5 text-[10px] font-semibold text-[#2490B8] bg-[#232B33] border border-[#2A3340] rounded uppercase tracking-wider mb-5 inline-block">
                {t.category}
              </span>
              <blockquote className="text-[16px] sm:text-[18px] text-[#C4C8CC] leading-relaxed mb-8 font-medium">
                "{t.quote}"
              </blockquote>
              <div>
                <div className="text-[14px] font-bold text-[#E4E7EA]">{t.name}</div>
                <div className="text-[12px] text-[#8A9098]">{t.title} — {t.company}</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => { setCurrent(i); setPaused(true); }}
                    className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#157DA0]" : "w-3 bg-[#2A3340] hover:bg-[#3A4A5A]"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="p-2 border border-[#2A3340] hover:border-[#3A4A5A] text-[#8A9098] hover:text-[#E4E7EA] rounded transition-colors duration-150"><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={next} className="p-2 border border-[#2A3340] hover:border-[#3A4A5A] text-[#8A9098] hover:text-[#E4E7EA] rounded transition-colors duration-150"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Full grid — LIGHT */}
      <section className="bg-[#F2F1EE] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#15191E]">All Reviews</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((item, i) => (
              <AnimateIn key={i} delay={i * 60} className="bg-white border border-[#D6D4CF] rounded-lg p-6 flex flex-col">
                <span className="text-[10px] font-semibold text-[#9A9EA4] tracking-widest uppercase mb-4">{item.category}</span>
                <blockquote className="text-[13px] text-[#6A7280] leading-relaxed flex-1 mb-5">"{item.quote}"</blockquote>
                <div className="border-t border-[#E8E6E1] pt-4">
                  <div className="text-[13px] font-bold text-[#15191E]">{item.name}</div>
                  <div className="text-[11px] text-[#9A9EA4]">{item.title} — {item.company}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141A20] py-20 border-t border-[#2A3340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E4E7EA] mb-4">Ready to see results like these?</h2>
            <p className="text-[15px] text-[#8A9098] leading-relaxed mb-8">Tell us about your project and we'll provide an honest scope and timeline — no sales pitch, just straight talk.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
