// src/app/layout.tsx (Server Component) - OPTIMIZED
import type { Metadata } from "next";
import { HeaderProvider } from "@/contexts/HeaderContext";
import { Header } from "@/components/Header";
import { PreloadManager } from "@/components/PreloadManager";
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
        {/* DNS Prefetch für Performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Hreflang-Links für mehrsprachige Unterstützung */}
        <link rel="alternate" hrefLang="de" href="https://designtech.eu/" />
        <link rel="alternate" hrefLang="en" href="https://designtech.eu/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://designtech.eu/" />
      </head>
      <body>
        {/* OPTIMIZED: Non-blocking GTM + GA4 Loading */}
        <Script
          id="optimized-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize dataLayer
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Performance-optimized loading
              (function() {
                var analyticsLoaded = false;
                
                function loadAnalytics() {
                  if (analyticsLoaded) return;
                  analyticsLoaded = true;
                  
                  // Load GTM
                  var gtmScript = document.createElement('script');
                  gtmScript.async = true;
                  gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NHBLRBHH';
                  document.head.appendChild(gtmScript);
                  
                  // Load GA4
                  var ga4Script = document.createElement('script');
                  ga4Script.async = true;
                  ga4Script.src = 'https://www.googletagmanager.com/gtag/js?id=G-D2ZPKL1FPP';
                  ga4Script.onload = function() {
                    gtag('js', new Date());
                    gtag('config', 'G-D2ZPKL1FPP');
                    
                    // GTM dataLayer push
                    window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  };
                  document.head.appendChild(ga4Script);
                }
                
                // Load on first user interaction
                var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
                var autoLoad = function() {
                  events.forEach(function(event) {
                    window.removeEventListener(event, loadAnalytics, {passive: true});
                  });
                  loadAnalytics();
                };
                
                // Add event listeners
                events.forEach(function(event) {
                  window.addEventListener(event, autoLoad, {passive: true});
                });
                
                // Fallback: load after 3 seconds
                setTimeout(autoLoad, 3000);
              })();
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
            <PreloadManager />
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