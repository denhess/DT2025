"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectSlider } from "@/components/ProjectSlider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { VideoBody } from "@/components/VideoBody";
import { MomentSlider } from "@/components/MomentSlider";
import Script from 'next/script';



export default function Home() {
  return (
    <>
<Script id="organization-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Design Tech",
            "url": "https://designtech.eu",
            "logo": "https://designtech.eu/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-7073-91-89-0",
              "contactType": "customer service",
              "availableLanguage": ["German", "English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zeppelinstraße 53",
              "addressLocality": "Ammerbuch",
              "postalCode": "72119",
              "addressCountry": "DE"
            },
            "sameAs": [
              "https://www.linkedin.com/company/designtechschmid/posts/?feedView=all",
              "https://www.kununu.com/de/design-tech1/kultur"
            ]
          }
        `}
      </Script>

      <Hero />
      <About />
      <ProjectSlider />
      <VideoBody />
      <Contact />
      <MomentSlider />
      <Footer />
    </>
  );
}