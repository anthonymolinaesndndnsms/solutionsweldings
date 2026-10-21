import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The legacy domain served this same site, so every path has the same
  // page here. Send its visitors, and the links Google found on it, to the
  // matching page on the current domain with one permanent redirect.
  // Only takes effect while solutionswelding.com is attached to this Vercel
  // project; it does nothing until the domain points here.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?:www\\.)?solutionswelding\\.com" }],
        destination: "https://www.solutionscontractinggroup.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
