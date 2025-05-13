// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from './BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function AboutDesignToSuccess() {
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
      data-background="light"
    >
     <YellowBackground/>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-8xl px-8 md:px-8 lg:px-8">
          <h2 
            ref={textRef}
            className="leading-tight tracking-[-0.02em] max-w-prose mx-auto"
          >
            „NUR EINE EINZIGARTIGE FORM SICHERT DEN MAXIMALEN ERFOLG.”
            </h2>  
            <h3 
            ref={textRef}
            className="mt-20 leading-tight tracking-[-0.02em] max-w-prose mx-auto"
          >
            
            Die Design to success®-Strategie ist eine tragende Säule unseres Erfolgs. 
            Design Tech entwickelte die mehrfach ausgezeichnete Innovationsstrategie in der Erkenntnis, 
            dass das Produkt nur in einer einzigen konkreten Ausgestaltung den bestmöglichen Markterfolg sichert: 
            Nämlich punktgenau dort, wo sie sich von den Konkurrenzprodukten abgrenzt und die Kaufentscheidung des 
            Kunden trifft.

          </h3>
        </div>
      </div>
    </section>
  );
}