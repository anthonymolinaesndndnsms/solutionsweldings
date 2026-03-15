import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions Welding & Fabrication, LLC | Welding · Renovations · Electrical",
  description:
    "General contracting built to perform. Welding & fabrication, renovations, and electrical services — 20+ years of certified work nationwide. Licensed, insured, and AWS certified.",
  keywords:
    "welding, fabrication, sanitary welding, industrial welding, ornamental fabrication, renovations, electrical, general contractor, stainless steel, structural steel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#F2F1EE] text-[#3D4550] antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
