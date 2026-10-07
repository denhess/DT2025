import React from "react";
import type { Metadata } from "next";

import { HeroLanding } from "@/components/HeroLanding";
import { Footer } from "@/components/Footer";

// SEO-optimierte Metadata für die Seite "Industrial Design für Technologieunternehmen"
export const metadata: Metadata = {
  title:
    "Industrial Design für Technologieunternehmen | 210+ Awards | Design Tech",
  description:
    "Industrial Design für Technologieunternehmen: Design Tech entwickelt Produkt- und Maschinendesign für technologiegetriebene Unternehmen. 40+ Jahre Erfahrung, 210+ internationale Awards.",
  keywords: [
    "Industrial Design Technologieunternehmen",
    "Industrial Design",
    "Industriedesign Technologie",
    "Produktdesign Technologieunternehmen",
    "Industrial Design Deutschland",
    "B2B Industrial Design",
    "Industriedesign Hightech",
    "Design Tech",
    "Industrial Design Tübingen",
    "Industrial Design Baden-Württemberg",
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",

  openGraph: {
    title: "Industrial Design für Technologieunternehmen | Design Tech",
    description:
      "Strategisches Industrial Design für Technologieunternehmen seit 1984. Über 210 internationale Awards. Spezialist für technologiegetriebene Marktführer.",
    url: "https://designtech.eu/industrial-design-technologieunternehmen",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Design Tech - Industrial Design für Technologieunternehmen",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industrial Design für Technologieunternehmen | Design Tech",
    description:
      "Strategisches Industrial Design für Technologieunternehmen seit 1984. Über 210 internationale Awards.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical:
      "https://designtech.eu/industrial-design-technologieunternehmen",
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

  category: "Industrial Design",
};

export default function IndustrialDesignTechnologieunternehmenPage() {
  return (
    <>
      {/* Service Schema */}
      <script
        id="industrial-design-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Industrial Design für Technologieunternehmen",
            "alternateName": ["Industrial Design", "Industriedesign", "Produktdesign"],
            "description": "Professionelles Industrial Design für Technologieunternehmen. Über 40 Jahre Erfahrung, mehr als 210 internationale Design Awards.",
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
            "serviceType": "Industrial Design für Technologieunternehmen",
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
        id="industrial-design-breadcrumb-schema"
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
                "name": "Industrial Design für Technologieunternehmen",
                "item": "https://designtech.eu/industrial-design-technologieunternehmen"
              }
            ]
          }
        ` }}
      />

      <HeroLanding title={"Industrial Design\nfür Technologieunternehmen"} />

      {/* Weitere Sektionen folgen – Inhalt besprechen wir noch. */}

      <Footer />
    </>
  );
}
