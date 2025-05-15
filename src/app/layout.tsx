// src/app/layout.tsx (Server Component)
import type { Metadata } from "next";
import { HeaderProvider } from "@/contexts/HeaderContext";
import { Header } from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import LoadingProvider from "../components/LoadingProvider";
import Script from 'next/script';

import "./globals.css";

export const metadata: Metadata = {
  title: "Design Tech - Maschinendesign",
  description: "Spezialist für Maschinendesign im Investitionsgüterbereich mit über 210 Awards. Maßgeschneiderte Designlösungen für Marktführer wie Liebherr, Arburg und WashTec.",
  keywords: ["Maschinendesign", "Industrial Design", "Industriedesign", "Maschinenbau", "Design Tech"],
  openGraph: {
    title: "Design Tech - Führend im Maschinendesign",
    description: "Spezialist für Maschinendesign im Investitionsgüterbereich",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Design Tech Maschinendesign",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
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
      <head>
        {/* Hreflang-Links für mehrsprachige Unterstützung */}
        <link rel="alternate" hrefLang="de" href="https://designtech.eu/" />
        <link rel="alternate" hrefLang="en" href="https://designtech.eu/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://designtech.eu/" />
      </head>
      <body>





        {/* Google Tag Manager Code mit next/script und id */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NHBLRBHH');
            `,
          }}
        />
        
        {/* Google Tag Manager noscript Code */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHBLRBHH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <HeaderProvider>
          <LoadingProvider>
            <Header />
            {children}
          </LoadingProvider>
          <SpeedInsights />
          <Analytics />
        </HeaderProvider>
      </body>
    </html>
  );
}