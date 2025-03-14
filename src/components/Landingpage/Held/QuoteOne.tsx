// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '@/components/BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function QuoteOne() {
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
            &bdquo;Es war sehr interessant zu sehen, wie Sie mit diesem voll integrierten Ansatz im Projekt eine wirklich beeindruckende Lösung erreicht haben. Und wie gutes Verständnis und frühes Einbinden der verschiedenen Fakultäten dazu genutzt wurde,
            um am Ende eine Maschine zu haben, die funktional sehr durchdacht ist. Nicht nur in ihrer Kernfunktion, sondern durchgängig in den verschiedenen Nutzungsformen – von der Einrichtung über die Wartung bis zur normalen Produktion. Dass die Maschine dann auch noch richtig gut aussieht, ist natürlich keine Überraschung.&ldquo;
            <br />
            <br />
            <i>Carsten O&apos;Beirne, CEO von Mall + Herlan GmbH</i>
          </h2>
        </div>
      </div>
      
    </section>
  );
}