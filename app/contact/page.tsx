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

// Shown here, and left out of the footer on this page only.
const contactDetails = [
  { icon: Phone, label: "Phone", value: "(980) 339-0527", sub: "Mon–Fri, 7am–6pm", href: "tel:9803390527" },
  { icon: Mail, label: "Email", value: "info@solutionswelding.com", sub: "We reply within one business day", href: "mailto:info@solutionswelding.com" },
  { icon: MapPin, label: "Based In", value: "Fort Mill, SC", sub: "Serving North & South Carolina", href: null },
];

// State first, then the license wording from the business card.
const licenses = [
  {
    state: "North Carolina",
    title: "General Contractor",
    number: "L.108274",
    silhouette: "/brand/state-nc.png",
    width: 144,
    height: 74,
  },
  {
    state: "South Carolina",
    title: "General Contractor",
    number: "CLG.127227.GC",
    silhouette: "/brand/state-sc.png",
    width: 124,
    height: 97,
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

      <section className="bg-mist-50 py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-azure-500 uppercase mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-5">
              Tell us what you&apos;re working on.
            </h2>
            <p className="text-[16px] text-ink-500 leading-relaxed">
              Whether you&apos;re addressing an immediate facility need or planning an upcoming
              improvement, we&apos;re ready to discuss the project and determine the best path
              forward.
            </p>
          </AnimateIn>

          <AnimateIn delay={100} className="mt-12">
            <ul className="border-t border-mist-300">
              {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
                <li
                  key={label}
                  className="flex items-center gap-6 sm:gap-8 py-7 border-b border-mist-300"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded bg-steel-900 flex items-center justify-center shrink-0">
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-azure-400" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-azure-500 uppercase mb-2">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="block text-[19px] sm:text-[22px] font-black text-ink-900 hover:text-azure-500 transition-colors duration-150 leading-tight tracking-tight break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-[19px] sm:text-[22px] font-black text-ink-900 leading-tight tracking-tight">
                        {value}
                      </div>
                    )}
                    <div className="text-[14px] text-ink-500 mt-1.5">{sub}</div>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={120} className="mt-16">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-azure-500 uppercase mb-3">
              Licensed
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight">
              General contractor in North &amp; South Carolina.
            </h2>
            <ul className="border-t border-mist-300 mt-8">
              {licenses.map((lic) => (
                <li
                  key={lic.state}
                  className="flex items-center gap-6 sm:gap-8 py-7 border-b border-mist-300"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded bg-steel-900 flex items-center justify-center shrink-0">
                    <Image
                      src={lic.silhouette}
                      alt=""
                      width={lic.width}
                      height={lic.height}
                      className="w-14 sm:w-16 h-12 sm:h-14 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-azure-500 uppercase mb-2">
                      {lic.state}
                    </div>
                    <div className="text-[19px] sm:text-[22px] font-black text-ink-900 leading-tight tracking-tight">
                      {lic.title}
                    </div>
                    <div className="text-[17px] sm:text-[19px] font-semibold text-ink-700 mt-1.5 tracking-wide break-words">
                      {lic.number}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
