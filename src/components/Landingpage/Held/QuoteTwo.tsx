// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '@/components/BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function QuoteTwo() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

    // Text Fade-in Animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1
      }
    });
  }, []);

  return (
    <section
    data-background="light" 
      ref={sectionRef}
      className="relative min-h-screen w-full"
    >
      
      <YellowBackground />
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <h2 
            ref={textRef}
            className="leading-tight tracking-[-0.02em]"
          >
            &bdquo;Unsere Mitarbeiter brannten von der ersten Entwurfsphase an für dieses Projekt.
            Diese Leidenschaft spiegelt sich in der positiven Resonanz unserer Kunden wider.
            Bereits bei der Vorstellung der Anlage während unserer 75-Jahr-Feier im Jahr 2024 waren sie hoch begeistert.&ldquo;
            <br />
            <br />
            <i>Till Held, Geschäftsführer von Held Technologie GmbH in Trossingen</i>
          </h2>
        </div>
      </div>
      
    </section>
  );
}