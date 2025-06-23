// TextDesignToSuccessFour
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TextDesignToSuccessFour() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col text-left px-8 md:px-8 lg:px-8 py-16">
          <div 
            ref={textRef}
            className="max-w-7xl mx-auto"
          >
            <h2>
              Design, das nicht fliegt, bleibt am Boden. Auch wenn es glänzt.
            </h2>
            
            <h3 className="helvetica-spacing-normal">
              Wir gestalten auf Erfolg, gezielt, messbar, wiederholbar.<br />
              Unser Ansatz: Vom Geschäftsmodell zum Design
            </h3>

            <div className="helvetica-spacing-normal space-y-4">
              <h4 className="max-w-5xl">
                Wir starten nicht beim Produkt – wir starten beim Geschäftsmodell. 
                Nur so entsteht Design, das Wirkung entfaltet: im Vertrieb, im Markt und im Unternehmen.
              </h4>
              
              <h4 className="max-w-5xl">
                Design ist bei uns kein Zufallsprodukt, sondern das Ergebnis von Strategie, Präzision und 
                einem klaren Ziel: messbarer Erfolg.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}