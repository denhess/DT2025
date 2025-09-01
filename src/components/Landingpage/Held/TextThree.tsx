// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '@/components/BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function TextThree() {
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
            className="font-bold leading-tight tracking-[-0.02em]"
          >
            Held Technologie
          </h2>
        <p ref={textRef}
            className="mt-10 tracking-[-0.02em]"
            >
            Held Technologie wurde 1949 gegründet und hat sich seitdem zu einem Weltmarktführer im Bereich Doppelbandpressen entwickelt. Mit rund 80 Mitarbeitern setzt das Unternehmen auf technologische Exzellenz, Innovation und maßgeschneiderte Hochleistungsanlagen, die weltweit in verschiedenen Industrien im Einsatz sind.
          </p>
          <h2 
            ref={textRef}
            className="mt-20 font-bold leading-tight tracking-[-0.02em]"
          >
            HAILEY - Doppelbandpresse
          </h2>
          <p ref={textRef}
            className="mt-10 tracking-[-0.02em]"
            >
            Die Doppelbandpressen von Held Technologie sind weltweit führend in der 
            kontinuierlichen Hochpräzisions- und Hochleistungsproduktion von Materialien 
            mit höchsten Qualitätsanforderungen. Sie ermöglichen eine gleichmäßige Druck- 
            und Temperaturverteilung über den gesamten Prozess und sind ideal für die Herstellung 
            von Verbundwerkstoffen, technischen Laminaten und anderen anspruchsvollen Materialien.
          </p>
        </div>
      </div>
      
    </section>
  );
}