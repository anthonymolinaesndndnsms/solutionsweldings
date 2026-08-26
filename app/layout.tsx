import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  "SCG Solutions Contracting Group provides general contracting, renovation, facility improvement, and project management services for industrial facilities across North and South Carolina.";

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
    "multi-trade coordination",
    "North Carolina",
    "South Carolina",
  ],
  icons: {
    icon: "/brand/scg-mark.png",
    apple: "/brand/scg-mark.png",
  },
  openGraph: {
    title: "SCG Solutions Contracting Group",
    description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/brand/scg-logo.png", width: 1256, height: 859, alt: "SCG Solutions Contracting Group" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "SCG Solutions Contracting Group",
  description,
  telephone: "+1-980-339-0527",
  email: "info@solutionswelding.com",
  slogan: "Plan · Build · Deliver",
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
    <html lang="en" className={inter.variable}>
      <body className="bg-mist-50 text-ink-700 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
