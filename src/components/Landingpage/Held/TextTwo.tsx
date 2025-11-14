// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '@/components/BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function TextTwo() {
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
            className="text-2xl md:text-4xl font-bold leading-tight tracking-[-0.02em] max-w-prose mx-auto mb-12"
          >
            LERNEN SIE VON DEN BESTEN:<br />
            HAILEY - EINE ERFOLGSGESCHICHTE
          </h2>
          <h2 
            ref={textRef}
            className="text-2xl md:text-4xl leading-tight tracking-[-0.02em] max-w-prose mx-auto space-y-8"
          >
            <p className="text-2xl md:text-4xl">40% schnellere Rüstzeiten durch optimierte Prozesse</p>
            <p className="text-2xl md:text-4xl">Reduzierte Fehlerquote dank intuitiver Steuerung</p>
            <p className="text-2xl md:text-4xl">Maschinendesign als Umsatztreiber</p>
          </h2>
        </div>
      </div>
      
    </section>
  );
}