import React from "react";
import type { Metadata } from "next";
import { YellowBackgroundTop } from "@/components/BG/YellowBackgroundTop";
import { Footer } from "@/components/Footer";
import { Job } from "@/components/Job";
import { ContactJob } from "@/components/ContactJob";

// Diese Komponente muss Client-Side sein wegen useTranslation
import SeniorDesignerContent from './SeniorDesignerContent';

// SEO-optimierte Metadata für Senior Industrial Designer
export const metadata: Metadata = {
  title: "Senior Industrial Designer (w/m/d) - Design Tech | Ammerbuch",
  description: "Senior Industrial Designer gesucht! Gestalte preisgekrönte Maschinenprojekte für Marktführer wie Liebherr & Arburg. Unbefristete Festanstellung, flache Hierarchie, 40h/Woche. Standort: Ammerbuch bei Tübingen.",
  keywords: [
    "Senior Industrial Designer",
    "Industrial Designer Jobs",
    "Maschinenbau Designer",
    "Design Jobs Tübingen",
    "Industrial Design Festanstellung",
    "CAD Designer Jobs",
    "SolidWorks Jobs",
    "Produktdesign Jobs",
    "Design Tech Jobs",
    "B2B Design Karriere"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  openGraph: {
    title: "Senior Industrial Designer (w/m/d) bei Design Tech",
    description: "Gestalte die Zukunft des Maschinendesigns! Unbefristete Festanstellung bei international führendem Designunternehmen. Ammerbuch bei Tübingen.",
    url: "https://designtech.eu/karriere/senior-industrial-designer",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Senior Industrial Designer bei Design Tech",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Senior Industrial Designer (w/m/d) - Design Tech",
    description: "Preisgekrönte Maschinenprojekte für Marktführer gestalten. Unbefristete Festanstellung in Ammerbuch.",
    images: ["/og-image.jpg"],
  },
  
  alternates: {
    canonical: "https://designtech.eu/karriere/senior-industrial-designer",
  },
  
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
  
  category: 'Job Posting',
};

export default function SeniorIndustrialDesignerPage() {
  return (
    <>
      {/* Structured Data für JobPosting */}
      <script
        id="senior-jobposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Senior Industrial Designer (w/m/d)",
            "description": "Senior Industrial Designer für preisgekrönte Maschinenprojekte gesucht. Gestalten Sie zukunftsweisende Designlösungen für internationale Marktführer im Investitionsgüterbereich. Unbefristete Festanstellung mit Aufstiegsmöglichkeiten.",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Design Tech",
              "value": "SENIOR-ID-2025"
            },
            "datePosted": "2025-01-15",
            "validThrough": "2025-12-31T23:59:59Z",
            "employmentType": ["FULL_TIME", "PERMANENT"],
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Design Tech",
              "sameAs": "https://designtech.eu",
              "logo": "https://designtech.eu/logo.png"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zeppelinstraße 53",
                "addressLocality": "Ammerbuch",
                "addressRegion": "Baden-Württemberg",
                "postalCode": "72119",
                "addressCountry": "DE"
              }
            },
            "qualifications": "Abgeschlossenes Studium Industrial Design, sehr gute Darstellungsfähigkeiten, sicherer Umgang mit Adobe CC und SolidWorks, fundierte Kenntnisse über Fertigungsverfahren, Projekterfahrung, sehr gute Deutsch- und Englischkenntnisse",
            "responsibilities": "Entwicklung strategischer und zukunftsweisender Designlösungen für Marktführer, Projektplanung und -management, Kundenkontakt und Präsentationen, Teamarbeit in anspruchsvollen Projekten",
            "skills": ["Industrial Design", "SolidWorks", "Adobe Creative Cloud", "CAD", "Projektmanagement", "Kundenkommunikation"],
            "educationRequirements": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "bachelor degree"
            },
            "experienceRequirements": {
              "@type": "OccupationalExperienceRequirements",
              "monthsOfExperience": 60
            },
            "benefits": "Unbefristeter Arbeitsvertrag, Aufstiegsmöglichkeiten, flexible Arbeitszeiten, 40-Stunden-Woche, moderne Büroräume, flache Hierarchie, regelmäßige Teamevents",
            "workHours": "40 hours per week",
            "directApply": true,
            "applicationContact": {
              "@type": "ContactPoint",
              "name": "Lisa Valentina Schmid",
              "email": "l.schmid@designtech.eu",
              "telephone": "+49-7073-91-89-0"
            }
          }
        ` }}
      />

      <script
        id="senior-breadcrumb-schema"
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Senior Industrial Designer",
                "item": "https://designtech.eu/karriere/senior-industrial-designer"
              }
            ]
          }
        ` }}
      />

      <SeniorDesignerContent />
    </>
  );
}
