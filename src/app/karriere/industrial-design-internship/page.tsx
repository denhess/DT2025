import React from 'react';
import type { Metadata } from "next";
import InternshipContent from './InternshipContent';

// SEO-optimierte Metadata für Industrial Design Internship
export const metadata: Metadata = {
  title: "Industrial Design Praktikum (w/m/d) - Design Tech | Ammerbuch",
  description: "Pflichtpraktikum Industrial Design bei Design Tech! Arbeite an realen Maschinenprojekten für Marktführer. Mind. 5 Monate. Praxiserfahrung mit über 40 Jahren Expertise. Standort: Ammerbuch bei Tübingen.",
  keywords: [
    "Industrial Design Praktikum",
    "Pflichtpraktikum Industrial Design",
    "Design Praktikum Tübingen",
    "Maschinenbau Praktikum",
    "CAD Praktikum",
    "Produktdesign Praktikum",
    "Design Praktikum Deutschland",
    "Industrial Design Internship",
    "Praxissemester Design",
    "Design Tech Praktikum"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  openGraph: {
    title: "Industrial Design Praktikum bei Design Tech",
    description: "Gestalten, was zählt! Reale Industrieprojekte statt Simulation. Verantwortung vom ersten Tag an. Mind. 5 Monate Pflichtpraktikum.",
    url: "https://designtech.eu/karriere/industrial-design-internship",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Design Praktikum bei Design Tech",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Industrial Design Praktikum - Design Tech",
    description: "Reale Maschinenprojekte für echte Kunden. Praxiserfahrung, die dein Portfolio bereichert. Ammerbuch.",
    images: ["/og-image.jpg"],
  },
  
  alternates: {
    canonical: "https://designtech.eu/karriere/industrial-design-internship",
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
  
  category: 'Internship',
};

export default function IndustrialDesignInternship() {
  return (
    <>
      {/* Structured Data für Internship JobPosting */}
      <script
        id="internship-jobposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Industrial Design Internship (w/m/d)",
            "description": "Pflichtpraktikum im Industrial Design bei Design Tech. Arbeite an realen Maschinenprojekten für echte Kunden mit echtem Impact. Gemeinsam mit erfahrenen Designern entwickelst du Gestaltung, die produziert wird. Mindestdauer: 5 Monate.",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Design Tech",
              "value": "INTERNSHIP-ID-2025"
            },
            "datePosted": "2025-01-15",
            "validThrough": "2025-12-31T23:59:59Z",
            "employmentType": "INTERN",
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
            "qualifications": "Laufendes Studium Industrial Design oder verwandtes Feld, Leidenschaft für funktionales und innovatives Design, technisches Grundverständnis (CAD, Adobe CC, SolidWorks), Teamfähigkeit",
            "responsibilities": "Mitarbeit an realen Industrieprojekten, Entwicklung von Designkonzepten, Von der Skizze zur Umsetzung, eigenverantwortliches Arbeiten im Team",
            "skills": ["Industrial Design", "CAD", "Adobe Creative Cloud", "SolidWorks", "Teamwork"],
            "educationRequirements": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "ongoing undergraduate degree"
            },
            "experienceRequirements": {
              "@type": "OccupationalExperienceRequirements",
              "monthsOfExperience": 0
            },
            "benefits": "Reale Industrieprojekte, Verantwortung vom ersten Tag an, hochmotiviertes Team mit über 40 Jahren Erfahrung, aussagekräftiges Praxisprojekt für Portfolio, echte Kontakte zur Industrie, ehrliches Feedback",
            "occupationalCategory": "15-1134.00",
            "directApply": true,
            "jobImmediateStart": false,
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
        id="internship-educationaloccupationalprogram-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Industrial Design Praktikum bei Design Tech",
            "description": "5-monatiges Pflichtpraktikum mit realen Maschinenprojekten für Marktführer",
            "provider": {
              "@type": "Organization",
              "name": "Design Tech",
              "url": "https://designtech.eu"
            },
            "occupationalCategory": "Industrial Designer",
            "timeToComplete": "P5M",
            "programPrerequisites": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "ongoing undergraduate degree",
              "competencyRequired": "Studium im Bereich Industrial Design"
            },
            "educationalCredentialAwarded": "Praktikumszeugnis",
            "offers": {
              "@type": "Offer",
              "category": "Pflichtpraktikum"
            }
          }
        ` }}
      />

      <script
        id="internship-breadcrumb-schema"
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
                "name": "Industrial Design Internship",
                "item": "https://designtech.eu/karriere/industrial-design-internship"
              }
            ]
          }
        ` }}
      />

      <InternshipContent />
    </>
  );
}
