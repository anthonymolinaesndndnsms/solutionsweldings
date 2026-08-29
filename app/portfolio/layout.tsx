import type { Metadata } from "next";

// The portfolio page is a client component (pagination state), so its
// metadata lives here.
export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Photos from completed projects — industrial renovations, facility improvements, and finish work across industrial and commercial sites.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
