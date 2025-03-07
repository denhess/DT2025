// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from './BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function AboutDesignTech() {
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
        <div className="w-full px-8 md:px-16 lg:px-24">
          <h2 
            ref={textRef}
            className="leading-tight tracking-[-0.02em]"
          >
            Bei Design Tech entwickeln wir verkaufsstarke Produkte, 
            die wirtschaftlich überzeugen und technisch machbar sind. 
            Mit jahrzehntelanger Erfahrung im Maschinenbau für Marktführer 
            wie <b>Liebherr</b>, <b>Arburg</b> und <b>WashTec AG</b> schaffen wir präzise, 
            maßgeschneiderte Lösungen – perfekt abgestimmt auf Ihre Ziele, 
            mit der Ambition und dem Engagement, als wäre es unser eigenes Unternehmen.


          </h2>
        </div>
      </div>
    </section>
  );
}