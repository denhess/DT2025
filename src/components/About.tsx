// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from './BG/YellowBackground';


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
            Bei <strong>Design Tech</strong> entwickeln wir praxisorientierte, maßgeschneiderte Lösungen, die präzise auf die individuellen Bedürfnisse und strategischen Ziele Ihres Unternehmens sowie die Anforderungen Ihres Marktes abgestimmt sind. Mit unserer jahrzehntelangen Expertise im Maschinendesign und tiefem Branchenwissen unterstützen wir Sie dabei, Ihre Marktführerschaft nachhaltig zu sichern und weiter auszubauen.
          </h2>
        </div>
      </div>
      
    </section>
  );
}