// The one preferred production origin. Production serves www and 308-redirects
// the bare domain to it, so canonicals, the sitemap and robots.txt all use www.
export const SITE_URL = "https://www.solutionscontractinggroup.com";

// Public, indexable pages. Keep in step with app/**/page.tsx.
export const PUBLIC_ROUTES = ["/", "/services", "/portfolio", "/about", "/contact", "/privacy"] as const;
