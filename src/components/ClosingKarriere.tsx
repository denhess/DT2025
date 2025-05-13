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
    data-background="light" 
  ref={sectionRef}
  className="relative min-h-screen w-full"
>
  <YellowBackground />
  <div className="absolute inset-0 flex items-center">
    <div className="w-full max-w-8xl px-8 md:px-8 lg:px-8">
      <h2 
        ref={textRef}
        className="leading-tight tracking-[-0.02em] max-w-prose mx-auto"
      >
        Die besten Ergebnisse erzielen unsere Kunden, weil wir Lösungen individuell auf Ihr 
        gesamtes Erfolgs-System abstimmen – von internen Prozessen über die Marke bis hin zu 
        den spezifischen Anforderungen Ihres Marktes. 
        Statt branchenübliche Standartlösungen zu bieten, entwickeln wir präzise Ansätze, die 
        unsere Kunden voranbringen. Mit dieser bewährten Systematik und unserer tiefgreifenden, 
        über Jahrzehnten gewachsenen Expertise führen wir auch Ihr Projekt gemeinsam zum Erfolg.
      </h2>
    </div>
  </div>
</section>
  );
}