// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '@/components/BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function TextOne() {
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
            className="font-bold leading-tight tracking-[-0.02em]"
          >
            SIND IHRE MASCHINEN BEREIT FÜR DIE ZUKUNFT?
          </h2>
          <h3 ref={textRef}
            className="mt-20 leading-tight tracking-[-0.02em]"
            >
            Schnellere Einarbeitung durch intuitive Bedienung
            <br />
            <br />
            <br />
            Reduzierte Fehlerquote und höherer Bedienkomfort
            <br />
            <br />
            <br />
            Geringerer Wartungsaufwand und niedrigere Betriebskosten
            <br />
            <br />
            <br />
            Kompakte Bauweise für mehr Effizienz
          </h3>
        </div>
      </div>
      
    </section>
  );
}