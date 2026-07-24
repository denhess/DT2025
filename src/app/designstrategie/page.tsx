import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

import { HeroLanding } from "@/components/HeroLanding";
import { Footer } from "@/components/Footer";

// SEO-optimierte Metadata für die Seite "Designstrategie"
export const metadata: Metadata = {
  title: "Designstrategie für Investitionsgüterhersteller | Design Tech",
  description:
    "Designstrategie vom Spezialisten: Design Tech verknüpft Design mit Ihren Geschäftszielen – Design to Success®. Strategische Designberatung seit 1984, über 210 internationale Awards.",
  keywords: [
    "Designstrategie",
    "Designberatung",
    "strategisches Design",
    "Design to Success",
    "Designstrategie Maschinenbau",
    "Designstrategie Investitionsgüter",
    "Designmanagement",
    "Corporate Design Strategie",
    "Design Tech",
    "Designberatung Tübingen",
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",

  openGraph: {
    title: "Designstrategie für Investitionsgüterhersteller | Design Tech",
    description:
      "Strategische Designberatung seit 1984: Design to Success® verknüpft Design mit Ihrem Geschäftsmodell. Über 210 internationale Awards.",
    url: "https://designtech.eu/designstrategie",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Design Tech - Designstrategie",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Designstrategie für Investitionsgüterhersteller | Design Tech",
    description:
      "Strategische Designberatung seit 1984: Design to Success®. Über 210 internationale Awards.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://designtech.eu/designstrategie",
    languages: {
      de: "https://designtech.eu/designstrategie",
      en: "https://designtech.eu/en/designstrategie",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Designstrategie",
};

export default function DesignstrategiePage() {
  return (
    <>
      {/* Service Schema */}
      <Script
        id="designstrategie-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Designstrategie",
            "alternateName": ["Designberatung", "Design to Success", "strategisches Design"],
            "description": "Strategische Designberatung für Investitionsgüterhersteller. Design to Success® verknüpft Design mit dem Geschäftsmodell. Über 40 Jahre Erfahrung, mehr als 210 internationale Awards.",
            "provider": {
              "@type": "Organization",
              "name": "Design Tech",
              "url": "https://designtech.eu",
              "logo": "https://designtech.eu/logo.png",
              "foundingDate": "1984",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zeppelinstraße 53",
                "addressLocality": "Ammerbuch",
                "addressRegion": "Baden-Württemberg",
                "postalCode": "72119",
                "addressCountry": "DE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-7073-91-89-0",
                "contactType": "customer service",
                "availableLanguage": ["German", "English"]
              },
              "award": "Über 210 internationale Design Awards"
            },
            "serviceType": "Designstrategie / Designberatung",
            "areaServed": [
              { "@type": "Country", "name": "Deutschland" },
              { "@type": "Country", "name": "Österreich" },
              { "@type": "Country", "name": "Schweiz" }
            ]
          }
        `}
      </Script>

      {/* Breadcrumb Schema */}
      <Script
        id="designstrategie-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://designtech.eu"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Designstrategie",
                "item": "https://designtech.eu/designstrategie"
              }
            ]
          }
        `}
      </Script>

      <HeroLanding title="Designstrategie" />

      {/* Weitere Sektionen folgen – Inhalt besprechen wir noch. */}

      <Footer />
    </>
  );
}
