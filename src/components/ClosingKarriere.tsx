// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from './BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function ClosingKarriere() {
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
      ref={sectionRef}
      className="relative min-h-screen w-full"
    >
      <YellowBackground />
      <div className="absolute inset-0 flex items-center">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-black z-10" />
        <div className="w-full px-8 md:px-16 lg:px-24">
          <p 
            ref={textRef}
            className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]"
          >
            Die besten Ergebnisse erzielen unsere Kunden, weil wir Lösungen individuell auf Ihr 
            gesamtes Erfolgs-System abstimmen – von internen Prozessen über die Marke bis hin zu 
            den spezifischen Anforderungen Ihres Marktes. 
            Statt branchenübliche Standartlösungen zu bieten, entwickeln wir präzise Ansätze, die 
            unsere Kunden voranbringen. Mit dieser bewährten Systematik und unserer tiefgreifenden, 
            über Jahrzehnte gewachsenen Expertise führen wir auch Ihr Projekt gemeinsam zum Erfolg.
          </p>
        </div>
      </div>
    </section>
  );
}