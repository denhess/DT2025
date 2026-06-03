import React from 'react';
import type { Metadata } from "next";
import Script from 'next/script';

import { HeroMaschinendesign } from "@/components/Maschinendesign/HeroMaschinendesign";
import { IntroMaschinendesign } from "@/components/Maschinendesign/IntroMaschinendesign";
import { ProblemMaschinendesign } from "@/components/Maschinendesign/ProblemMaschinendesign";
import { LeistungenMaschinendesign } from "@/components/Maschinendesign/LeistungenMaschinendesign";
import { ReferenzenMaschinendesign } from "@/components/Maschinendesign/ReferenzenMaschinendesign";
import { TestimonialsMaschinendesign } from "@/components/Maschinendesign/TestimonialsMaschinendesign";
import { BranchenMaschinendesign } from "@/components/Maschinendesign/BranchenMaschinendesign";
import { ProzessMaschinendesign } from "@/components/Maschinendesign/ProzessMaschinendesign";
import { FaqMaschinendesign } from "@/components/Maschinendesign/FaqMaschinendesign";
import { WarumMaschinendesign } from "@/components/Maschinendesign/WarumMaschinendesign";
import { CtaMaschinendesign } from "@/components/Maschinendesign/CtaMaschinendesign";
import { Footer } from "@/components/Footer";

// SEO-optimierte Metadata für die Maschinendesign-Seite
export const metadata: Metadata = {
  title: "Maschinendesign für Marktführer | 210+ Awards | Design Tech",
  description: "Preisgekröntes Maschinendesign seit 1984. Spezialist für Investitionsgüter mit über 210 internationalen Awards. Kunden: Liebherr, Arburg, WashTec. Standort: Ammerbuch bei Tübingen.",
  keywords: [
    "Maschinendesign",
    "Maschinendesign Deutschland",
    "Maschinendesign Agentur",
    "Industrial Design Maschinenbau",
    "Industriedesign Maschinen",
    "Maschinenverkleidung Design",
    "HMI Design",
    "Corporate Industrial Design",
    "Investitionsgüter Design",
    "Maschinendesign Stuttgart",
    "Maschinendesign Tübingen",
    "Maschinendesign Baden-Württemberg",
    "Design für Maschinen",
    "Maschinenbau Design",
    "Produktdesign Maschinen"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  // OpenGraph für Social Media
  openGraph: {
    title: "Maschinendesign für Marktführer | Design Tech",
    description: "Preisgekröntes Maschinendesign seit 1984. Über 210 internationale Awards. Spezialist für Liebherr, Arburg, WashTec und weitere Marktführer.",
    url: "https://designtech.eu/maschinendesign",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image-maschinendesign.jpg",
        width: 1200,
        height: 630,
        alt: "Design Tech - Maschinendesign für Marktführer",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Maschinendesign für Marktführer | Design Tech",
    description: "Preisgekröntes Maschinendesign seit 1984. Über 210 internationale Awards für Liebherr, Arburg, WashTec.",
    images: ["/og-image-maschinendesign.jpg"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://designtech.eu/maschinendesign",
    languages: {
      'de': 'https://designtech.eu/maschinendesign',
      'en': 'https://designtech.eu/en/maschinendesign',
    },
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Zusätzliche Metadaten
  category: 'Maschinendesign',
};

export default function MaschinendesignPage() {
  return (
    <>
      {/* Service Schema für Maschinendesign */}
      <Script 
        id="maschinendesign-service-schema" 
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Maschinendesign",
            "alternateName": ["Industrial Design", "Industriedesign", "Machine Design"],
            "description": "Professionelles Maschinendesign für Investitionsgüter. Über 40 Jahre Erfahrung, mehr als 210 internationale Design Awards.",
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
            "serviceType": "Maschinendesign",
            "areaServed": [
              {
                "@type": "Country",
                "name": "Deutschland"
              },
              {
                "@type": "Country", 
                "name": "Österreich"
              },
              {
                "@type": "Country",
                "name": "Schweiz"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Maschinendesign Leistungen",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Maschinenverkleidung",
                    "description": "Design und Konstruktion von Maschinenverkleidungen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HMI Design",
                    "description": "Gestaltung von Mensch-Maschine-Schnittstellen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Industrial Design",
                    "description": "Entwicklung durchgängiger Designsprachen für Produktportfolios"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Anlagendesign",
                    "description": "Design komplexer Fertigungsanlagen"
                  }
                }
              ]
            }
          }
        `}
      </Script>

      {/* Breadcrumb Schema */}
      <Script 
        id="maschinendesign-breadcrumb-schema" 
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
                "name": "Maschinendesign",
                "item": "https://designtech.eu/maschinendesign"
              }
            ]
          }
        `}
      </Script>

      {/* FAQ Schema für zusätzliche SERP-Features */}
      <Script 
        id="maschinendesign-faq-schema" 
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was kostet professionelles Maschinendesign?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Kosten für Maschinendesign variieren je nach Projektumfang, Komplexität und gewünschten Leistungen. Ein typisches Projekt beginnt bei einem mittleren fünfstelligen Betrag. Entscheidend ist jedoch der ROI: Professionelles Design verkürzt Vertriebszyklen, rechtfertigt Premium-Preise und differenziert Sie vom Wettbewerb."
                }
              },
              {
                "@type": "Question",
                "name": "Wie lange dauert ein Maschinendesign-Projekt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Projektdauer hängt vom Umfang ab. Eine Maschinenverkleidung kann in 3-4 Monaten realisiert werden, ein komplettes Corporate Industrial Design für eine Produktfamilie dauert 6-12 Monate. Wir arbeiten mit definierten Meilensteinen und halten Sie kontinuierlich über den Fortschritt informiert."
                }
              },
              {
                "@type": "Question",
                "name": "Wann sollte Design in den Entwicklungsprozess einbezogen werden?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "So früh wie möglich. Je später Design einbezogen wird, desto eingeschränkter sind die Möglichkeiten und desto teurer werden Änderungen. Idealerweise starten wir parallel zur technischen Konzeptphase."
                }
              },
              {
                "@type": "Question",
                "name": "Was unterscheidet Design Tech von anderen Designagenturen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Drei Dinge: Erstens, unsere 40-jährige Spezialisierung auf Maschinendesign – niemand in Deutschland hat vergleichbare Erfahrung im Investitionsgüterbereich. Zweitens, über 210 internationale Design Awards als Beleg für Qualität. Drittens, unsere Design to Success® Methodik, die Design strategisch mit Ihrem Geschäftsmodell verknüpft."
                }
              },
              {
                "@type": "Question",
                "name": "Arbeitet Design Tech auch mit kleineren Unternehmen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja. Unsere Kunden reichen vom mittelständischen Maschinenbauer bis zum Weltkonzern. Entscheidend ist nicht die Unternehmensgröße, sondern der Anspruch: Wenn Sie Marktführer werden oder bleiben wollen, sind wir der richtige Partner."
                }
              },
              {
                "@type": "Question",
                "name": "Können wir das Design intern umsetzen oder brauchen wir Konstruktionsdaten?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wir liefern genau das, was Sie brauchen. Das kann von Konzeptskizzen über 3D-Daten bis hin zu fertigungsreifen Konstruktionsunterlagen reichen. Viele Kunden schätzen, dass wir die Sprache der Konstruktion sprechen und Designs entwickeln, die sich wirtschaftlich fertigen lassen."
                }
              }
            ]
          }
        `}
      </Script>
          
      <HeroMaschinendesign />
      <IntroMaschinendesign />
      <ProblemMaschinendesign />
      <LeistungenMaschinendesign />
      <ReferenzenMaschinendesign />
      <TestimonialsMaschinendesign />
      <BranchenMaschinendesign />
      <ProzessMaschinendesign />
      <FaqMaschinendesign />
      <WarumMaschinendesign />
      <CtaMaschinendesign />
      <Footer />
    </>
  );
}
