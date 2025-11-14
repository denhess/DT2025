import React from 'react';
import type { Metadata } from "next";
import Script from 'next/script';

import { HeroDesignTech } from "@/components/HeroDesignTech";
import { Footer } from "@/components/Footer";
import { AboutDesignTech } from '@/components/AboutDesignTech';
import { Awards } from '@/components/Awards';
import { ClosingKarriere } from '@/components/ClosingKarriere';
import { Industries } from '@/components/Industries';
import { Clients } from '@/components/Clients';

// SEO-optimierte Metadata für die DesignTech-Seite
export const metadata: Metadata = {
  title: "Design Tech - Spezialist für Maschinendesign im Investitionsgüterbereich",
  description: "Design Tech ist Ihr Partner für exzellentes Maschinendesign. Mit über 210 internationalen Awards entwickeln wir preisgekrönte Designlösungen für Marktführer wie Liebherr, Arburg und WashTec.",
  keywords: [
    "Maschinendesign",
    "Industrial Design",
    "Industriedesign Deutschland",
    "Maschinenbau Design",
    "Investitionsgüter Design",
    "Liebherr Design",
    "Arburg Design",
    "WashTec Design",
    "Design Awards",
    "Produktdesign Maschinen"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  // OpenGraph für Social Media
  openGraph: {
    title: "Design Tech - Preisgekröntes Maschinendesign",
    description: "Spezialist für Maschinendesign im Investitionsgüterbereich mit über 210 internationalen Awards. Maßgeschneiderte Designlösungen für führende Unternehmen.",
    url: "https://designtech.eu/designtech",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image-designtech.jpg",
        width: 1200,
        height: 630,
        alt: "Design Tech - Maschinendesign Experten",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Design Tech - Preisgekröntes Maschinendesign",
    description: "Spezialist für Maschinendesign im Investitionsgüterbereich mit über 210 internationalen Awards.",
    images: ["/og-image-designtech.jpg"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://designtech.eu/designtech",
    languages: {
      'de': 'https://designtech.eu/designtech',
      'en': 'https://designtech.eu/en/designtech',
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
  category: 'Industrial Design',
};

export default function DesignTechPage() {
  return (
    <>
      {/* Structured Data für SEO */}
      <Script 
        id="designtech-service-schema" 
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Maschinendesign",
            "provider": {
              "@type": "Organization",
              "name": "Design Tech",
              "url": "https://designtech.eu",
              "logo": "https://designtech.eu/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zeppelinstraße 53",
                "addressLocality": "Ammerbuch",
                "postalCode": "72119",
                "addressCountry": "DE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-7073-91-89-0",
                "contactType": "customer service",
                "availableLanguage": ["German", "English"]
              }
            },
            "serviceType": "Industrial Design",
            "areaServed": {
              "@type": "Country",
              "name": "Deutschland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Design Tech Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Maschinendesign für Investitionsgüter",
                    "description": "Professionelles Design für Maschinen und Industrieanlagen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Industrial Design Consulting",
                    "description": "Beratung und Konzeption für Produktdesign im B2B-Bereich"
                  }
                }
              ]
            },
            "award": "Über 210 internationale Design Awards"
          }
        `}
      </Script>

      <Script 
        id="designtech-breadcrumb-schema" 
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
                "name": "Design Tech",
                "item": "https://designtech.eu/designtech"
              }
            ]
          }
        `}
      </Script>
          
      <HeroDesignTech />
      <AboutDesignTech />
      <Awards />
      <Clients />
      <ClosingKarriere/>
      <Industries />
      <Footer />
    </>
  );
}
