"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SplitscreenThree() {
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
      data-background="light"
      className="relative min-h-screen w-full flex items-center"
    >
      <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center">
        {/* Image Div - Takes up exactly half the screen in mobile */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full">
          <img 
            src="/landingpage/held/pictures/DiskussionHeld.webp" 
            alt="About Image"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Div - Takes up exactly half the screen in mobile */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full px-4 md:px-10 flex items-center">
          <div 
            ref={textRef}
            className="text-gray-900 leading-tight tracking-[-0.02em]"
          >
            <h4>
            &bdquo;Unsere Mitarbeiter brannten von der ersten Entwurfsphase an für dieses Projekt.
            Diese Leidenschaft spiegelt sich in der positiven Resonanz unserer Kunden wider.
            Bereits bei der Vorstellung der Anlage während unserer 75-Jahr-Feier im Jahr 2024 waren sie hoch begeistert.&ldquo;
            <br />
            <br />
            <i>Till Held, Geschäftsführer, Held Technologie GmbH in Trossingen</i>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
