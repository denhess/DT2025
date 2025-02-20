// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from './BG/YellowBackground';

gsap.registerPlugin(ScrollTrigger);

export function AboutKarriere() {
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
          <p 
            ref={textRef}
            className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]"
          >
            „WER BEI UNS ARBEITET, ENTWICKELT SICH AUSSERORDENTLICH SCHNELL AUSSERORDENTLICH WEIT.”
          </p>
        </div>
      </div>
    </section>
  );
}
