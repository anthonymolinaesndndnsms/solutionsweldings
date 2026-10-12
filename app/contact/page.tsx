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

      <section className="bg-mist-50 py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            {/* Contact details on the left, licences on the right at wide
                widths; stacked on phones. Rows are a fixed 80px with 32px
                between, so pushing the licence column down 56px (half a
                row) centres North Carolina between Phone and Email and
                South Carolina between Email and Based In. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8">
              {[rows.slice(0, 3), rows.slice(3)].map((group, g) => (
                <div key={g} className={`space-y-8 ${g === 1 ? "lg:pt-14" : ""}`}>
                  {group.map((row) => (
                    <div key={row.label} className="flex items-center gap-6 h-20">
                      {row.silhouette ? (
                        // Licences: no box, just the state outline.
                        <div className="w-14 flex items-center justify-center shrink-0">
                          <Image
                            src={row.silhouette.src}
                            alt=""
                            width={row.silhouette.width}
                            height={row.silhouette.height}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                      ) : (
                        // Phone, email, location: icon in the white square.
                        <div className="w-20 h-20 rounded bg-white border border-mist-300 flex items-center justify-center shrink-0">
                          <row.icon className="w-8 h-8 text-azure-500" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-[12px] font-bold tracking-[0.18em] text-ink-400 uppercase mb-1.5">
                          {row.label}
                        </div>
                        {row.href ? (
                          <a
                            href={row.href}
                            className="text-[22px] font-semibold text-ink-900 hover:text-azure-500 transition-colors duration-150 block break-words leading-tight"
                          >
                            {row.value}
                          </a>
                        ) : (
                          <div className="text-[22px] font-semibold text-ink-900 leading-tight">
                            {row.value}
                          </div>
                        )}
                        {row.sub && <div className="text-[15px] text-ink-400 mt-1">{row.sub}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="mt-12 pt-8 border-t border-mist-200 text-[16px] text-ink-500 leading-relaxed max-w-3xl">
              Whether you&apos;re addressing an immediate facility need or planning an upcoming
              improvement, we&apos;re ready to discuss the project and determine the best path
              forward.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Project inquiry ── */}
      <section id="project-inquiry" className="scroll-mt-24 bg-mist-100 py-20 lg:py-24 border-t border-mist-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight mb-3">
              Project Information
            </h2>
            <p className="text-[15px] text-ink-500 leading-relaxed mb-10">
              Tell us where the facility is, what needs to be done, and when you need it. A photo or
              drawing helps if you have one.
            </p>
            <ContactForm />
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
