import React from 'react';
import type { Metadata } from "next";
import Script from 'next/script';
import HomeContent from './HomeContent';

// SEO-optimierte Metadata für die Homepage
export const metadata: Metadata = {
  title: "Design Tech - Preisgekröntes Maschinendesign für Marktführer | 210+ Awards",
  description: "International führendes Designunternehmen für Maschinendesign im Investitionsgüterbereich. Über 210 internationale Awards. Maßgeschneiderte Designlösungen für Liebherr, Arburg, WashTec und weitere Marktführer. Standort: Ammerbuch bei Tübingen.",
  keywords: [
    "Maschinendesign",
    "Industrial Design Deutschland",
    "Industriedesign Maschinenbau",
    "Design Tech",
    "Maschinendesign Tübingen",
    "Produktdesign Maschinen",
    "B2B Industrial Design",
    "Investitionsgüter Design",
    "Maschinendesign Stuttgart",
    "Design Awards Maschinenbau",
    "Liebherr Design",
    "Arburg Design",
    "WashTec Design"
  ],
  authors: [{ name: "Design Tech" }],
  creator: "Design Tech",
  publisher: "Design Tech",
  
  // OpenGraph für Social Media
  openGraph: {
    title: "Design Tech - Preisgekröntes Maschinendesign für Marktführer",
    description: "International führend im Maschinendesign. Über 210 Awards. Maßgeschneiderte Designlösungen für Liebherr, Arburg, WashTec und weitere Marktführer.",
    url: "https://designtech.eu",
    siteName: "Design Tech",
    images: [
      {
        url: "/og-image.jpg",
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
    description: "International führend im Maschinendesign. Über 210 Awards. Maßgeschneiderte Lösungen für Marktführer.",
    images: ["/og-image.jpg"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://designtech.eu",
    languages: {
      'de': 'https://designtech.eu',
      'en': 'https://designtech.eu/en',
      'x-default': 'https://designtech.eu',
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
  
  // Verification (falls vorhanden)
  verification: {
    google: 'google6ae52d1df0e1475c',
  },
};

export default function Home() {
  return (
    <>
      {/* Enhanced Organization Schema */}
      <Script 
        id="organization-schema" 
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Design Tech",
            "alternateName": "Design Tech Schmid",
            "url": "https://designtech.eu",
            "logo": "https://designtech.eu/logo.png",
            "foundingDate": "1984",
            "description": "International führendes Designunternehmen für Maschinendesign im Investitionsgüterbereich mit über 210 internationalen Awards",
            "slogan": "Maßgeschneidertes Maschinendesign und Innovation",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-7073-91-89-0",
              "contactType": "customer service",
              "availableLanguage": ["German", "English"],
              "areaServed": "DE"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zeppelinstraße 53",
              "addressLocality": "Ammerbuch",
              "addressRegion": "Baden-Württemberg",
              "postalCode": "72119",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.5333",
              "longitude": "9.0667"
            },
            "sameAs": [
              "https://www.linkedin.com/company/designtechschmid/posts/?feedView=all",
              "https://www.kununu.com/de/design-tech1/kultur"
            ],
            "award": "Über 210 internationale Design Awards",
            "knowsAbout": [
              "Industrial Design",
              "Maschinendesign",
              "Produktdesign",
              "HMI Design",
              "Corporate Industrial Design"
            ]
          }
        `}
      </Script>

      {/* WebSite Schema für Sitelinks Searchbox */}
      <Script 
        id="website-schema" 
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Design Tech",
            "url": "https://designtech.eu",
            "description": "Preisgekröntes Maschinendesign für Marktführer im Investitionsgüterbereich",
            "publisher": {
              "@type": "Organization",
              "name": "Design Tech",
              "logo": "https://designtech.eu/logo.png"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://designtech.eu/?s={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "inLanguage": ["de-DE", "en-US"]
          }
        `}
      </Script>

      {/* BreadcrumbList Schema */}
      <Script 
        id="breadcrumb-schema" 
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
              }
            ]
          }
        `}
      </Script>

      {/* ProfessionalService Schema */}
      <Script 
        id="service-schema" 
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Design Tech",
            "image": "https://designtech.eu/og-image.jpg",
            "description": "Maschinendesign und Industrial Design für den Investitionsgüterbereich",
            "priceRange": "€€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zeppelinstraße 53",
              "addressLocality": "Ammerbuch",
              "addressRegion": "Baden-Württemberg",
              "postalCode": "72119",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.5333",
              "longitude": "9.0667"
            },
            "url": "https://designtech.eu",
            "telephone": "+49-7073-91-89-0",
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
                    "name": "Maschinendesign",
                    "description": "Professionelles Design für Maschinen im Investitionsgüterbereich"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Industrial Design",
                    "description": "Ganzheitliche Produktgestaltung für B2B-Anwendungen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HMI Design",
                    "description": "Benutzerfreundliche Bedienoberflächen für Industriemaschinen"
                  }
                }
              ]
            }
          }
        `}
      </Script>

      <HomeContent />
    </>
  );
}
