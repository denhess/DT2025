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

    // ScrollTrigger für Header-Farbe
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top -50px',
      onEnter: () => {
        gsap.to('.header-color-change', {
          color: '#000000',
          duration: 0.3
        });
      },
      onLeaveBack: () => {
        gsap.to('.header-color-change', {
          color: '#ffffff',
          duration: 0.3
        });
      }
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
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
