// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '@/components/BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function About() {
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
            Ein herausragendes Maschinendesign ist nicht nur funktional durchdacht, sondern optimiert die gesamte Nutzung. Von der Einrichtung über die Wartung bis zur Produktion. Wenn dann auch noch die Ästhetik stimmt, entsteht ein echter Wettbewerbsvorteil.
            
            Genau darüber haben wir bei Held Technologie GmbH in Trossingen im Rahmen unseres Podiumsgesprächs diskutiert.
            <br />
            Die Präsentation der Hochleistungs-Doppelbandpresse HAILEY hat eindrucksvoll gezeigt, was ein voll integrierter Entwicklungsansatz leisten kann.
            <br />
            Held Technologie und der neuen Isobaren Hochleistungs-Doppelbandpresse HAILEY und davon, dass dieses beispiellose Ergebnis auch im Sondermaschinenbau möglich ist.
          </h2>
        </div>
      </div>
      
    </section>
  );
}