import React from 'react';
import type { Metadata } from "next";

import { Hero } from '@/components/Landingpage/Held/Hero';
import { TextOne } from '@/components/Landingpage/Held/TextOne';
import { FullscreenPictureTwo } from '@/components/Landingpage/Held/FullscreenPictureTwo';
import { SplitscreenOne } from '@/components/Landingpage/Held/SplitscreenOne';
import { TextTwo } from '@/components/Landingpage/Held/TextTwo';
import { SplitscreenTwo } from '@/components/Landingpage/Held/SplitscreenTwo';
import { SplitscreenThree } from '@/components/Landingpage/Held/SplitscreenThree';
import { Footer } from '@/components/Footer';
import { FullscreenPicture } from '@/components/Landingpage/Held/FullscreenPicture';
import { FullscreenPictureThree } from '@/components/Landingpage/Held/FullscreenPictureThree';
import { FullscreenPictureFive } from '@/components/Landingpage/Held/FullscreenPictureFive';
import { FullscreenPictureSix } from '@/components/Landingpage/Held/FullscreenPictureSix';
import { TextThree } from '@/components/Landingpage/Held/TextThree';

// SEO-optimierte Metadata für die Erfolgsgeschichte / Case Study
export const metadata: Metadata = {
  title: "HAILEY | Design Tech Erfolgsgeschichte",
  description: "Erfolgsgeschichte: HAILEY Doppelbandpresse von Held Technologie. 40% schnellere Rüstzeiten, reduzierte Fehlerquote durch optimiertes Maschinendesign. Intuitive Bedienung trifft auf technologische Exzellenz.",
  keywords: [
    "HAILEY Case Study",
    "Held Technologie",
    "Doppelbandpresse Design",
    "Maschinendesign Erfolgsgeschichte",
    "Industrial Design Case Study",
    "Rüstzeiten Optimierung",
    "Maschinenbedienung optimieren",
    "Design Tech Referenz",
    "B2B Design Success Story",
    "Weltmarktführer Doppelbandpressen"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  // OpenGraph für Social Media
  openGraph: {
    title: "HAILEY Case Study - 40% schnellere Rüstzeiten durch optimiertes Design",
    description: "Lernen Sie von den Besten: Wie Design Tech die HAILEY Doppelbandpresse von Held Technologie revolutionierte. Intuitive Bedienung, reduzierte Fehlerquote, Maschinendesign als Umsatztreiber.",
    url: "https://designtech.eu/erfolgsgeschichte",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HAILEY Doppelbandpresse - Design Tech Case Study",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "HAILEY Case Study - 40% schnellere Rüstzeiten",
    description: "Erfolgsgeschichte: Optimiertes Maschinendesign für Held Technologie. Intuitive Bedienung, reduzierte Fehlerquote.",
    images: ["/og-image.jpg"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://designtech.eu/erfolgsgeschichte",
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
  category: 'Case Study',
};

export default function ErfolgsgeschichtePage() {
  return (
    <>
      {/* Structured Data für Case Study / Article */}
      <script
        id="hailey-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "HAILEY Case Study - 40% schnellere Rüstzeiten durch optimiertes Maschinendesign",
            "description": "Erfolgsgeschichte der HAILEY Doppelbandpresse von Held Technologie. Optimiertes Design führt zu 40% schnelleren Rüstzeiten, reduzierter Fehlerquote und höherem Bedienkomfort.",
            "image": "https://designtech.eu/og-image.jpg",
            "author": {
              "@type": "Organization",
              "name": "Design Tech",
              "url": "https://designtech.eu"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Design Tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://designtech.eu/logo.png"
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2025-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://designtech.eu/erfolgsgeschichte"
            },
            "about": {
              "@type": "Product",
              "name": "HAILEY Doppelbandpresse",
              "manufacturer": {
                "@type": "Organization",
                "name": "Held Technologie"
              },
              "description": "Kontinuierliche Hochpräzisions- und Hochleistungsproduktion mit Doppelbandpressen"
            }
          }
        ` }}
      />

      <script
        id="hailey-casestudy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "HAILEY - Eine Erfolgsgeschichte",
            "creator": {
              "@type": "Organization",
              "name": "Design Tech"
            },
            "about": {
              "@type": "Product",
              "name": "HAILEY Doppelbandpresse",
              "manufacturer": {
                "@type": "Organization",
                "name": "Held Technologie",
                "foundingDate": "1949",
                "numberOfEmployees": "80",
                "description": "Weltmarktführer im Bereich Doppelbandpressen"
              }
            },
            "mentions": [
              {
                "@type": "QuantitativeValue",
                "name": "Rüstzeit-Reduzierung",
                "value": "40",
                "unitText": "Prozent schneller"
              },
              {
                "@type": "Thing",
                "name": "Reduzierte Fehlerquote"
              },
              {
                "@type": "Thing",
                "name": "Höherer Bedienkomfort"
              },
              {
                "@type": "Thing",
                "name": "Geringerer Wartungsaufwand"
              },
              {
                "@type": "Thing",
                "name": "Kompakte Bauweise"
              }
            ]
          }
        ` }}
      />

      <script
        id="hailey-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Held Technologie",
            "foundingDate": "1949",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "80"
            },
            "description": "Weltmarktführer im Bereich Doppelbandpressen mit Fokus auf technologische Exzellenz, Innovation und maßgeschneiderte Hochleistungsanlagen",
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Doppelbandpressen",
                "description": "Kontinuierliche Hochpräzisions- und Hochleistungsproduktion für Verbundwerkstoffe, technische Laminate und anspruchsvolle Materialien"
              }
            }
          }
        ` }}
      />

      <script
        id="hailey-breadcrumb-schema"
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
                "name": "Erfolgsgeschichte HAILEY",
                "item": "https://designtech.eu/erfolgsgeschichte"
              }
            ]
          }
        ` }}
      />

      <Hero />
      <TextOne />
      <FullscreenPicture />
      <SplitscreenOne />
      <TextTwo />
      <SplitscreenTwo />
      <SplitscreenThree />
      <FullscreenPictureTwo />
      <FullscreenPictureThree />
      <FullscreenPictureFive />
      <FullscreenPictureSix />
      <TextThree />
      <Footer />
    </>
  );
}
