import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your renovation, facility improvement, or general contracting project. Solutions Contracting Group is a licensed general contractor serving industrial customers across North and South Carolina.",
};

type Row = {
  label: string;
  value: string;
  sub: string;
  href: string | null;
} & (
  | { icon: typeof Phone; silhouette?: never }
  | { icon?: never; silhouette: { src: string; width: number; height: number } }
);

// Phone, email and location stay as they were. The old single "Licensed" row
// is now one row per state: state first, then the licence wording from the
// business card.
const rows: Row[] = [
  { icon: Phone, label: "Phone", value: "(980) 339-0527", sub: "Mon–Fri, 7am–6pm", href: "tel:9803390527" },
  { icon: Mail, label: "Email", value: "info@solutionswelding.com", sub: "We reply within one business day", href: "mailto:info@solutionswelding.com" },
  { icon: MapPin, label: "Based In", value: "Fort Mill, SC", sub: "Serving North & South Carolina", href: null },
  {
    label: "North Carolina",
    value: "General Contractor",
    sub: "L.108274",
    href: null,
    silhouette: { src: "/brand/state-nc-blue.png", width: 144, height: 74 },
  },
  {
    label: "South Carolina",
    value: "General Contractor",
    sub: "CLG.127227.GC",
    href: null,
    silhouette: { src: "/brand/state-sc-blue.png", width: 124, height: 97 },
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={"Let’s Talk About Your Project"}
        image="/portfolio/5-star/IMG-20251007-WA0018.jpg"
      >
        <p>
          Have a renovation, facility improvement, or general contracting project that needs to
          move forward? Tell us what you&apos;re working on.
        </p>
        <p>
          Solutions Contracting Group works with industrial customers to evaluate project needs,
          develop scopes, coordinate qualified resources, and manage projects through completion.
        </p>
      </PageHero>

      <section className="bg-mist-50 py-16">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <AnimateIn className="space-y-6">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center gap-5">
                <div className="w-16 h-16 rounded bg-white border border-mist-300 flex items-center justify-center shrink-0">
                  {row.silhouette ? (
                    <Image
                      src={row.silhouette.src}
                      alt=""
                      width={row.silhouette.width}
                      height={row.silhouette.height}
                      className="w-9 h-9 object-contain"
                    />
                  ) : (
                    <row.icon className="w-6 h-6 text-azure-500" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold tracking-[0.18em] text-ink-400 uppercase mb-1">
                    {row.label}
                  </div>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-[18px] font-semibold text-ink-900 hover:text-azure-500 transition-colors duration-150 block break-words"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <div className="text-[18px] font-semibold text-ink-900">{row.value}</div>
                  )}
                  <div className="text-[13.5px] text-ink-400 mt-0.5">{row.sub}</div>
                </div>
              </div>
            ))}

            <p className="pt-7 border-t border-mist-200 text-[14.5px] text-ink-500 leading-relaxed">
              Whether you&apos;re addressing an immediate facility need or planning an upcoming
              improvement, we&apos;re ready to discuss the project and determine the best path
              forward.
            </p>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
