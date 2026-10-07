import React from 'react';
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { AboutDesignToSuccess } from '@/components/AboutDesignToSuccess';
import { HeroDesignToSuccess } from '@/components/HeroDesignToSuccess';
import { TextDesignToSuccess } from '@/components/TextDesignToSuccess';
import { TextDesignToSuccessTwo } from '@/components/TextDesignToSuccessTwo';
import { TextDesignToSuccessThree } from '@/components/TextDesignToSuccessThree';
import { TextDesignToSuccessFour } from '@/components/TextDesignToSuccessFour';
import { ContactDesignToSuccess } from '@/components/ContactDesignToSuccess';

// SEO-optimierte Metadata für die Design To Success-Seite
export const metadata: Metadata = {
  title: "Design To Success® - Strategisches Industriedesign für messbaren Erfolg",
  description: "Design To Success®: Unsere ausgezeichnete Innovationsstrategie verbindet strategisches Denken mit exzellenter Umsetzung. 40 Jahre Erfahrung, über 210 Designpreise. Design, das messbare Ergebnisse liefert.",
  keywords: [
    "Design To Success",
    "Strategisches Industriedesign",
    "Innovationsstrategie",
    "Messbares Design",
    "B2B Design Strategie",
    "Geschäftsmodell Design",
    "Design Thinking",
    "Maschinendesign Methode",
    "Design Beratung",
    "Erfolgsorientiertes Design"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  // OpenGraph für Social Media
  openGraph: {
    title: "Design To Success® - Design, das messbare Ergebnisse liefert",
    description: "Strategisches Industriedesign mit System: 40 Jahre Erfahrung, über 210 Designpreise. Vom Geschäftsmodell zum Design – gezielt, messbar, wiederholbar.",
    url: "https://designtech.eu/designtosuccess",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Design To Success - Strategisches Industriedesign",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Design To Success® - Strategisches Industriedesign",
    description: "Design, das messbare Ergebnisse liefert. 40 Jahre Erfahrung, über 210 Designpreise.",
    images: ["/og-image.jpg"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://designtech.eu/designtosuccess",
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
  category: 'Business Strategy',
};

export default function DesignToSuccessPage() {
  return (
    <>
      {/* Structured Data für Design To Success Methode */}
      <script
        id="designtosuccess-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Design To Success®",
            "description": "Strategische Innovationsmethode für messbaren Erfolg im Industriedesign. Verbindet Geschäftsmodell-Analyse mit exzellenter Design-Umsetzung.",
            "provider": {
              "@type": "Organization",
              "name": "Design Tech",
              "url": "https://designtech.eu",
              "logo": "https://designtech.eu/logo.png"
            },
            "award": "Über 210 internationale Design Awards"
          }
        ` }}
      />

      <script
        id="designtosuccess-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Design To Success® Methode",
            "description": "Strategischer Ansatz für erfolgreiches Industriedesign - vom Geschäftsmodell zum Design",
            "image": "https://designtech.eu/og-image.jpg",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Geschäftsmodell-Analyse",
                "text": "Analyse des Geschäftsmodells und der strategischen Ziele des Kunden",
                "itemListElement": [{
                  "@type": "HowToDirection",
                  "text": "Wir starten nicht beim Produkt – wir starten beim Geschäftsmodell"
                }]
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Strategisches Design-Konzept",
                "text": "Entwicklung eines Design-Konzepts, das exakt zur Unternehmensstrategie passt",
                "itemListElement": [{
                  "@type": "HowToDirection",
                  "text": "Design, das auf den Punkt wirkt – in Qualität, Zeit und Wirkung"
                }]
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Messbare Umsetzung",
                "text": "Präzise Umsetzung mit messbaren Ergebnissen und systematischer Erfolgskontrolle",
                "itemListElement": [{
                  "@type": "HowToDirection",
                  "text": "Gezielt, messbar, wiederholbar - Design, das messbare Ergebnisse liefert"
                }]
              }
            ]
          }
        ` }}
      />

      <script
        id="designtosuccess-breadcrumb-schema"
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
                "name": "Design To Success®",
                "item": "https://designtech.eu/designtosuccess"
              }
            ]
          }
        ` }}
      />

      <script
        id="designtosuccess-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was ist Design To Success®?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Design To Success® ist eine ausgezeichnete Innovationsstrategie, die strategisches Denken mit exzellenter Umsetzung verbindet. Die Methode wurde mehrfach ausgezeichnet und ist in der Industriepraxis seit Jahrzehnten bewährt. Sie schafft Design, das exakt zur Unternehmensstrategie passt und messbare Ergebnisse liefert."
                }
              },
              {
                "@type": "Question",
                "name": "Warum vom Geschäftsmodell zum Design?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wir starten nicht beim Produkt – wir starten beim Geschäftsmodell. Nur so entsteht Design, das Wirkung entfaltet: im Vertrieb, im Markt und im Unternehmen. Design ist bei uns kein Zufallsprodukt, sondern das Ergebnis von Strategie, Präzision und einem klaren Ziel: messbarer Erfolg."
                }
              },
              {
                "@type": "Question",
                "name": "Wie wird der Erfolg gemessen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unsere Methode verbindet strategisches Denken mit exzellenter Umsetzung durch Design, das exakt zur Unternehmensstrategie passt, und Prozesse, die auf den Punkt liefern – in Qualität, Zeit und Wirkung. Das schafft Sicherheit für Entscheider, weil System dahintersteckt. 40 Jahre Erfahrung, über 210 Designpreise und Kunden, die auf den Punkt profitieren, sprechen für sich."
                }
              }
            ]
          }
        ` }}
      />
          
      <HeroDesignToSuccess />
      <AboutDesignToSuccess />
      <TextDesignToSuccess />  
      <TextDesignToSuccessTwo />
      <TextDesignToSuccessThree />
      <TextDesignToSuccessFour />
      <ContactDesignToSuccess />
      <Footer />
    </>
  );
}
