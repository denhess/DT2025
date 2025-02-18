// layout.tsx (angepasst)

import type { Metadata } from "next";
import { Header } from "@/components/Header";

import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import { HeaderProvider } from "@/contexts/HeaderContext";

export const metadata: Metadata = {
  title: "Design Tech - Maschinendesign",
  description: "Maschinendesign",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <HeaderProvider>
          <Header />
          {children}
          <SpeedInsights />
        </HeaderProvider>
      </body>
    </html>
  );
}