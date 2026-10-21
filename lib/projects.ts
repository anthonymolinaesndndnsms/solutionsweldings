import photos from "./project-photos.json";

export type ProjectPhoto = {
  src: string;
  width: number;
  height: number;
  /** "Before", "During", "After", "Design Rendering", ... */
  stage: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  /** The finished photo shown large; the rest are the sequence beneath it. */
  featured: ProjectPhoto;
  sequence: ProjectPhoto[];
};

// Titles and descriptions are the customer's wording. The descriptions
// deliberately stay within what the photographs show; add verified scope
// (electrical, plumbing, structural, engineering) only once confirmed.
const copy: { slug: keyof typeof photos; title: string; description: string }[] = [
  {
    slug: "tank-farm",
    title: "Tank Farm Access & Platform Improvements",
    description:
      "Improvements to an existing tank farm access area, showing the change from the original stairs and platform condition to the renovated access arrangement with yellow railings.",
  },
  {
    slug: "production-area-renovation",
    title: "Production-Area Renovation",
    description:
      "Renovation of an existing industrial production workspace. The photographs document the original occupied area, construction-stage wall modifications, and the renovated room and doorway conditions.",
  },
  {
    slug: "laboratory-interior-renovation",
    title: "Laboratory Interior Renovation",
    description:
      "Renovation of interior space adjoining an existing laboratory, with photographs showing wall modifications, a large interior observation window, and finished walls and flooring.",
  },
  {
    slug: "laboratory-ceiling-lighting",
    title: "Laboratory Ceiling & Lighting Improvements",
    description:
      "Improvements to an existing laboratory ceiling and lighting arrangement. The before and finished photographs show the change from exposed overhead services to a suspended ceiling with integrated lighting.",
  },
  {
    slug: "operations-meeting-room",
    title: "Operations Meeting Room Renovation",
    description:
      "Renovation of an existing facility meeting room, including changes to walls and openings and updates to interior finishes. The photographs show original conditions, construction progress, and the finished room.",
  },
  {
    slug: "exhaust-fan-installation",
    title: "Industrial Exhaust Fan Installation",
    description:
      "Installation of two wall-mounted exhaust fans within an existing industrial space. The photographs show the wall before installation and the installed equipment.",
  },
  {
    slug: "platform-painting",
    title: "Industrial Platform Painting",
    description:
      "Painting work on an existing industrial platform area. The photograph shows the platform structure and yellow railings within the facility.",
  },
  {
    slug: "restroom-renovation",
    title: "Industrial Restroom Renovation",
    description:
      "Completed restroom renovation within an industrial facility, showing the finished flooring, wall finishes, fixtures, and partition areas.",
  },
  {
    slug: "kitchenette-renovation",
    title: "Employee Kitchenette Renovation",
    description:
      "Renovation of an existing employee kitchenette, showing the original cabinetry and the updated cabinet, countertop, and appliance arrangement.",
  },
];

export const projects: Project[] = copy.map(({ slug, title, description }) => {
  const [featured, ...sequence] = photos[slug].map(({ src, width, height, stage }) => ({
    src,
    width,
    height,
    stage,
  }));
  return { slug, title, description, featured, sequence };
});

export const projectHref = (slug: string) => `/portfolio#${slug}`;
