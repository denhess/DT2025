import React from "react";
import type { Metadata } from "next";

import { HeroLanding } from "@/components/HeroLanding";
import { Footer } from "@/components/Footer";

// SEO-optimierte Metadata für die Seite "Produktdesign für Investitionsgüter"
export const metadata: Metadata = {
  title: "Produktdesign für Investitionsgüter | 210+ Awards | Design Tech",
  description:
    "Produktdesign für Investitionsgüter vom Spezialisten: Design Tech gestaltet seit 1984 Investitionsgüter für Marktführer. Über 210 internationale Awards. Standort: Ammerbuch bei Tübingen.",
  keywords: [
    "Produktdesign Investitionsgüter",
    "Investitionsgüter Design",
    "Produktdesign Maschinenbau",
    "Industrial Design Investitionsgüter",
    "Produktgestaltung B2B",
    "Investitionsgüter Produktentwicklung",
    "Produktdesign Kapitalgüter",
    "Design Tech",
    "Produktdesign Tübingen",
    "Produktdesign Baden-Württemberg",
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",

  openGraph: {
    title: "Produktdesign für Investitionsgüter | Design Tech",
    description:
      "Preisgekröntes Produktdesign für Investitionsgüter seit 1984. Über 210 internationale Awards. Spezialist für Marktführer im Investitionsgüterbereich.",
    url: "https://designtech.eu/produktdesign-investitionsgueter",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Design Tech - Produktdesign für Investitionsgüter",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Produktdesign für Investitionsgüter | Design Tech",
    description:
      "Preisgekröntes Produktdesign für Investitionsgüter seit 1984. Über 210 internationale Awards.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://designtech.eu/produktdesign-investitionsgueter",
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

  category: "Produktdesign",
};

export default function ProduktdesignInvestitionsgueterPage() {
  return (
    <>
      {/* Service Schema */}
      <script
        id="produktdesign-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Produktdesign für Investitionsgüter",
            "alternateName": ["Investitionsgüter Design", "Industrial Design", "Produktgestaltung"],
            "description": "Professionelles Produktdesign für Investitionsgüter. Über 40 Jahre Erfahrung, mehr als 210 internationale Design Awards.",
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
            "serviceType": "Produktdesign für Investitionsgüter",
            "areaServed": [
              { "@type": "Country", "name": "Deutschland" },
              { "@type": "Country", "name": "Österreich" },
              { "@type": "Country", "name": "Schweiz" }
            ]
          }
        ` }}
      />

      {/* Breadcrumb Schema */}
      <script
        id="produktdesign-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
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
                "name": "Produktdesign für Investitionsgüter",
                "item": "https://designtech.eu/produktdesign-investitionsgueter"
              }
            ]
          }
        ` }}
      />

      <HeroLanding title={"Produktdesign\nfür Investitionsgüter"} />

      {/* Weitere Sektionen folgen – Inhalt besprechen wir noch. */}

      <Footer />
    </>
  );
}
