import React from 'react';
import type { Metadata } from "next";

import { HeroKarriere } from "@/components/HeroKarriere";
import { AboutKarriere } from "@/components/AboutKarriere";
import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';

// SEO-optimierte Metadata für die Karriere-Hauptseite
export const metadata: Metadata = {
  title: "Karriere bei Design Tech - Jobs im Industriedesign | Ammerbuch",
  description: "Gestalte die Zukunft des Maschinendesigns! Offene Stellen: Senior & Junior Industrial Designer, Praktikum. International führendes Designunternehmen mit 40+ Jahren Erfahrung. Standort: Ammerbuch bei Tübingen.",
  keywords: [
    "Design Tech Karriere",
    "Jobs Industriedesign",
    "Industrial Designer Jobs",
    "Stellenangebote Maschinendesign",
    "Karriere Produktdesign",
    "Design Jobs Tübingen",
    "Industrial Design Praktikum",
    "Senior Industrial Designer",
    "Junior Industrial Designer",
    "Design Karriere Deutschland"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  // OpenGraph für Social Media
  openGraph: {
    title: "Karriere bei Design Tech - Gestalte die Zukunft des Maschinendesigns",
    description: "Werde Teil unseres Teams! Offene Positionen: Senior & Junior Industrial Designer, Praktikum. International führend mit über 210 Design Awards.",
    url: "https://designtech.eu/karriere",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karriere bei Design Tech - Industrial Design Jobs",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Karriere bei Design Tech - Industrial Design Jobs",
    description: "Offene Stellen im Industriedesign: Senior & Junior Designer, Praktikum. Standort Ammerbuch bei Tübingen.",
    images: ["/og-image.jpg"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://designtech.eu/karriere",
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
  category: 'Jobs & Careers',
};

export default function KarrierePage() {
  return (
    <>
      {/* Structured Data für Job Postings Overview */}
      <script
        id="karriere-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Design Tech",
            "url": "https://designtech.eu",
            "logo": "https://designtech.eu/logo.png",
            "description": "International führendes Designunternehmen für Industrieunternehmen im Maschinenbau und Investitionsgüterbereich",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zeppelinstraße 53",
              "addressLocality": "Ammerbuch",
              "postalCode": "72119",
              "addressCountry": "DE",
              "addressRegion": "Baden-Württemberg"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-7073-91-89-0",
              "contactType": "HR",
              "availableLanguage": ["German", "English"],
              "email": "l.schmid@designtech.eu"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "20-50"
            },
            "foundingDate": "1984",
            "employee": {
              "@type": "Person",
              "name": "Lisa Valentina Schmid",
              "jobTitle": "HR Contact"
            }
          }
        ` }}
      />

      <script
        id="karriere-breadcrumb-schema"
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
                "name": "Karriere",
                "item": "https://designtech.eu/karriere"
              }
            ]
          }
        ` }}
      />

      <script
        id="karriere-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Offene Stellen bei Design Tech",
            "description": "Aktuelle Stellenangebote im Bereich Industrial Design",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "JobPosting",
                  "title": "Senior Industrial Designer",
                  "url": "https://designtech.eu/karriere/senior-industrial-designer"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "JobPosting",
                  "title": "Junior Industrial Designer",
                  "url": "https://designtech.eu/karriere/junior-industrial-designer"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "JobPosting",
                  "title": "Industrial Design Internship",
                  "url": "https://designtech.eu/karriere/industrial-design-internship"
                }
              }
            ]
          }
        ` }}
      />

      <HeroKarriere />
      <AboutKarriere />
      <Job />
      <ContactJob />
      <Footer />
    </>
  );
}
