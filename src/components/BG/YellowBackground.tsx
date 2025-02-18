"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function YellowBackground() {
  const sectionRef = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gradientRef.current) return;

    // Gradient Animation
    gsap.to(gradientRef.current, {
      backgroundSize: '200% 200%',
      duration: 10,
      repeat: -1,
      ease: 'none',
      yoyo: true
    });

    
  }, []);

  return (
    <section 
      ref={sectionRef}
      data-background="light"
      className="absolute inset-0 w-full overflow-hidden"
    >
      <div 
        ref={gradientRef}
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, #FFFF00 0%, #ffffff 100%)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center'
        }}
      />
    </section>
  );
}
