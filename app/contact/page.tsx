import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss your production-area renovation, laboratory improvement, tank farm access upgrade, or other industrial facility project with Solutions Contracting Group, serving North and South Carolina.",
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
  { icon: Mail, label: "Email", value: "info@solutionswelding.com", sub: "", href: "mailto:info@solutionswelding.com" },
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
  const meetingRoom = projects.find((p) => p.slug === "operations-meeting-room")!;

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Discuss Your Industrial Project"
        image={meetingRoom.featured.src}
      >
        <p>
          Planning a production-area renovation, laboratory improvement, tank farm access upgrade,
          or another industrial facility project?
        </p>
        <p>
          Contact Solutions Contracting Group with your facility location, a brief description of
          the work, and your anticipated schedule. We can discuss the project requirements and
          determine the next step for scope development and pricing.
        </p>
        <p className="text-chrome-100 font-medium">
          Serving industrial facilities across North and South Carolina.
        </p>
      </PageHero>

      {/* Contact details and licences in one compact column beside the form;
          stacked above it on phones. */}
      <section id="project-inquiry" className="scroll-mt-28 bg-mist-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            <AnimateIn className="lg:col-span-4">
              <ul className="space-y-5">
                {rows.map((row) => (
                  <li key={row.label} className="flex items-center gap-4">
                    {row.silhouette ? (
                      // Licences: no box, just the state outline.
                      <div className="w-12 flex items-center justify-center shrink-0">
                        <Image
                          src={row.silhouette.src}
                          alt=""
                          width={row.silhouette.width}
                          height={row.silhouette.height}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    ) : (
                      // Phone, email, location: icon in the white square.
                      <div className="w-12 h-12 rounded bg-white border border-mist-300 flex items-center justify-center shrink-0">
                        <row.icon className="w-5 h-5 text-azure-500" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-bold tracking-[0.18em] text-ink-400 uppercase mb-0.5">
                        {row.label}
                      </div>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="text-[15px] font-semibold text-ink-900 hover:text-azure-500 transition-colors duration-150 block break-words leading-snug"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <div className="text-[15px] font-semibold text-ink-900 leading-snug">{row.value}</div>
                      )}
                      {row.sub && <div className="text-[13px] text-ink-400">{row.sub}</div>}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 pt-6 border-t border-mist-200 text-[14px] text-ink-500 leading-relaxed">
                Whether you&apos;re addressing an immediate facility need or planning an upcoming
                improvement, we&apos;re ready to discuss the project and determine the best path
                forward.
              </p>
            </AnimateIn>

            <AnimateIn delay={100} className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight mb-2">
                Project Information
              </h2>
              <p className="text-[15px] text-ink-500 leading-relaxed mb-8">
                Tell us where the facility is, what needs to be done, and when you need it. A photo
                or drawing helps if you have one.
              </p>
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
