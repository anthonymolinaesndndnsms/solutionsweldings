import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Served at /robots.txt. Every crawler may fetch every public page and asset.
// /api/ only holds the contact form's POST endpoint, which has nothing to
// index. (robots.txt is advisory; it is not what keeps anything private.)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
