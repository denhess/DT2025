import type { Metadata } from "next";

// Rechtstexte nicht indexieren, Links aber verfolgen lassen.
// (Nicht per robots.txt sperren, sonst sieht Google das noindex nicht.)
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
