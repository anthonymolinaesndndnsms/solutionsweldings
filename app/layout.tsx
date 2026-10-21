import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Solutions Contracting Group manages renovations and improvement projects within industrial facilities across North and South Carolina: production-area and laboratory renovations, tank farm access upgrades, and facility support-space renovations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://solutionscontractinggroup.com"),
  title: {
    default: "SCG Solutions Contracting Group | Industrial General Contracting",
    template: "%s | SCG Solutions Contracting Group",
  },
  description,
  keywords: [
    "industrial general contractor",
    "facility improvements",
    "industrial renovations",
    "project management",
    "laboratory renovations",
    "tank farm access",
    "production area renovation",
    "North Carolina",
    "South Carolina",
  ],
  openGraph: {
    title: "SCG Solutions Contracting Group",
    description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/brand/scg-share.png", width: 1200, height: 630, alt: "SCG Solutions Contracting Group" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "SCG Solutions Contracting Group",
  description,
  telephone: "+1-980-339-0527",
  email: "shawn@solutionscontractinggroup.com",
  slogan: "Plan · Manage · Deliver",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Mill",
    addressRegion: "SC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "North Carolina" },
    { "@type": "State", name: "South Carolina" },
  ],
  openingHours: "Mo-Fr 07:00-18:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="bg-mist-50 text-ink-700 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* Vercel Web Analytics (page views, no cookies) and Speed Insights
            (real-visitor page-load performance). Both only report on Vercel. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
