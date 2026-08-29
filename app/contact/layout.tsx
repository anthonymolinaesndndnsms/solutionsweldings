import type { Metadata } from "next";

// The contact page itself is a client component (it owns the form state),
// so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your renovation, facility improvement, or general contracting project. Solutions Contracting Group serves industrial customers across North and South Carolina.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
