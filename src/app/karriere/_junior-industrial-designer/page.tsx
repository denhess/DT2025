import React from 'react';
import type { Metadata } from "next";
import JuniorDesignerContent from './JuniorDesignerContent';

// SEO-optimierte Metadata für Junior Industrial Designer
export const metadata: Metadata = {
  title: "Junior Industrial Designer (w/m/d) - Design Tech | Ammerbuch",
  description: "Junior Industrial Designer für Maschinenprojekte gesucht! Arbeite mit Marktführern wie Liebherr & Arburg. Unbefristete Festanstellung mit Aufstiegschancen. Standort: Ammerbuch bei Tübingen.",
  keywords: [
    "Junior Industrial Designer",
    "Berufseinsteiger Industrial Design",
    "Junior Designer Jobs",
    "Design Jobs Tübingen",
    "CAD Jobs Berufseinsteiger",
    "Industrial Design Absolvent",
    "Produktdesign Einstieg",
    "Design Tech Jobs",
    "Karrierestart Industrial Design",
    "Junior Maschinenbau Designer"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  openGraph: {
    title: "Junior Industrial Designer (w/m/d) bei Design Tech",
    description: "Starte deine Karriere im Industriedesign! Unbefristete Festanstellung mit Entwicklungsperspektiven bei international führendem Designunternehmen.",
    url: "https://designtech.eu/karriere/junior-industrial-designer",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Junior Industrial Designer bei Design Tech",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Junior Industrial Designer (w/m/d) - Design Tech",
    description: "Karrierestart im Industriedesign. Preisgekrönte Maschinenprojekte gestalten. Ammerbuch bei Tübingen.",
    images: ["/og-image.jpg"],
  },
  
  alternates: {
    canonical: "https://designtech.eu/karriere/junior-industrial-designer",
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

export default function JuniorIndustrialDesignerPage() {
  return (
    <>
      {/* Structured Data für JobPosting */}
      <script
        id="junior-jobposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Junior Industrial Designer (w/m/d)",
            "description": "Junior Industrial Designer für preisgekrönte Maschinenprojekte gesucht. Idealer Karrierestart für Absolventen und Berufseinsteiger im Industrial Design. Entwickeln Sie zukunftsweisende Designlösungen für internationale Marktführer.",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Design Tech",
              "value": "JUNIOR-ID-2025"
            },
            "datePosted": "2025-01-15",
            "validThrough": "2025-12-31T23:59:59Z",
            "employmentType": ["FULL_TIME", "PERMANENT"],
            "experienceRequirements": {
              "@type": "OccupationalExperienceRequirements",
              "monthsOfExperience": 0
            },
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
            "qualifications": "Abgeschlossenes Studium Industrial Design, sehr gute Darstellungsfähigkeiten, Umgang mit Adobe CC und SolidWorks, Grundkenntnisse Fertigungsverfahren, sehr gute Deutsch- und Englischkenntnisse",
            "responsibilities": "Mitarbeit an strategischen Designprojekten für Marktführer, Entwicklung von Designkonzepten, Kundenpräsentationen, Teamwork",
            "skills": ["Industrial Design", "SolidWorks", "Adobe Creative Cloud", "CAD", "Kommunikationsfähigkeit"],
            "educationRequirements": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "bachelor degree"
            },
            "benefits": "Unbefristeter Arbeitsvertrag, Aufstiegsmöglichkeiten, Mentoring, flexible Arbeitszeiten, 40-Stunden-Woche, moderne Büroräume, flache Hierarchie, regelmäßige Teamevents",
            "workHours": "40 hours per week",
            "jobStartDate": "2025-03-01",
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
        id="junior-breadcrumb-schema"
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
                "name": "Junior Industrial Designer",
                "item": "https://designtech.eu/karriere/junior-industrial-designer"
              }
            ]
          }
        ` }}
      />

      <JuniorDesignerContent />
    </>
  );
}
