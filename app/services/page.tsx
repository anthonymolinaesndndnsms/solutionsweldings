import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { PageHero } from "@/components/page-hero";
import { projects, projectHref } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Industrial General Contracting Services",
  description:
    "Production-area renovations, laboratory improvements, facility infrastructure and access upgrades, and support-space renovations for industrial facilities across North and South Carolina.",
};

const project = (slug: string) => projects.find((p) => p.slug === slug)!;

type Service = {
  id: string;
  title: string;
  body: React.ReactNode[];
  /** Project whose finished photo illustrates this service. */
  example: string;
};

const services: Service[] = [
  {
    id: "production-area-renovations",
    title: "Production-Area Renovations",
    body: [
      "We manage renovations to existing industrial workspaces, bringing together the construction scopes needed to modify and improve the area.",
      "Depending on the project, work may include demolition, partitions and framing, wall finishes, doors and openings, flooring, painting, and coordination of electrical and other specialty work.",
      <>
        Our recent production-area renovation work is documented in the{" "}
        <Link
          href={projectHref("production-area-renovation")}
          className="font-semibold text-azure-500 hover:text-azure-600 underline underline-offset-2"
        >
          Inkjet project gallery
        </Link>
        .
      </>,
    ],
    example: "production-area-renovation",
  },
  {
    id: "laboratory-renovations",
    title: "Laboratory Renovations & Improvements",
    body: [
      "We coordinate renovations within laboratory environments, including interior space modifications, partitions, observation windows, doors, flooring, suspended ceilings, and lighting coordination.",
      "Our laboratory project photographs show both room renovation work and the installation of a finished suspended ceiling within an existing laboratory.",
    ],
    example: "laboratory-interior-renovation",
  },
  {
    id: "infrastructure-access",
    title: "Facility Infrastructure & Access Improvements",
    body: [
      "We manage improvements to existing facility infrastructure and access areas.",
      "Relevant projects include tank farm platform and stair improvements, industrial exhaust fan installations, and painting of industrial platforms and associated surfaces.",
      "Specialty scopes are coordinated with qualified subcontractors appropriate to the work.",
    ],
    example: "tank-farm",
  },
  {
    id: "support-space-renovations",
    title: "Facility Support-Space Renovations",
    body: [
      "We renovate the spaces that support employees and facility operations, including operations meeting rooms, restrooms, and kitchenettes.",
      "These projects can involve multiple construction scopes, including interior modifications, finishes, cabinetry, flooring, ceilings, and coordinated electrical or plumbing work.",
    ],
    example: "operations-meeting-room",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Industrial General Contracting Services"
        image={project("production-area-renovation").sequence[1].src}
      >
        <p>
          Solutions Contracting Group manages construction, renovation, and facility improvement
          projects for industrial customers across North and South Carolina.
        </p>
        <p>
          We work with customers to define the project, establish the construction scopes,
          coordinate qualified subcontractors, and manage the work through completion.
        </p>
      </PageHero>

      {services.map((service, i) => {
        const example = project(service.example);
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 py-20 ${i % 2 === 0 ? "bg-mist-50" : "bg-mist-100"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <AnimateIn className="lg:col-span-6 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-black text-ink-900 tracking-tight mb-2">
                    {service.title}
                  </h2>
                  {service.body.map((p, j) => (
                    <p key={j} className="text-[15px] text-ink-500 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </AnimateIn>

                <AnimateIn delay={90} className="lg:col-span-6">
                  <Link href={projectHref(example.slug)} className="group block">
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-steel-800">
                      <Image
                        src={example.featured.src}
                        alt={`${example.title}, completed`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-ink-700 group-hover:text-azure-500 transition-colors duration-150">
                      {example.title} <ArrowRight className="w-3.5 h-3.5" />
                    </p>
                  </Link>
                </AnimateIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Project Planning & Construction Management ── */}
      <section id="construction-management" className="scroll-mt-28 bg-steel-900 steel-grain py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <AnimateIn className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 tracking-tight">
                Project Planning &amp; Construction Management
              </h2>
            </AnimateIn>
            <AnimateIn delay={90} className="lg:col-span-7 space-y-4">
              <p className="text-[15px] text-chrome-300 leading-relaxed">
                Our role includes scope development, subcontractor coordination, scheduling,
                procurement coordination, site oversight, progress communication, and project
                closeout.
              </p>
              <p className="text-[15px] text-chrome-300 leading-relaxed">
                We work with the customer to establish access requirements, identify scheduling
                constraints, and coordinate the sequence of work.
              </p>
              <p className="text-[15px] text-chrome-200 leading-relaxed border-l-2 border-azure-500 pl-5">
                Electrical, plumbing, and other specialty work requiring separate trade licensing is
                performed by appropriately licensed subcontractors.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-steel-950 steel-grain py-20 border-t border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-chrome-100 mb-4 tracking-tight">
              Discuss Your Facility Project
            </h2>
            <p className="text-[15px] text-chrome-400 leading-relaxed mb-8">
              Contact Solutions Contracting Group to discuss your project location, intended scope,
              and schedule.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
