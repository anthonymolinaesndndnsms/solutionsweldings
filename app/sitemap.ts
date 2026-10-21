import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, SITE_URL } from "@/lib/site";

// Served at /sitemap.xml. lastModified is deliberately omitted: the build has
// no reliable per-page modification date, and a guessed one misleads crawlers.
export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    // Home is listed without a trailing slash to match its canonical tag exactly.
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
  }));
}
