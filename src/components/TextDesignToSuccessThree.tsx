// TextDesignToSuccessThree
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TextDesignToSuccessThree() {
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
              
              Design to Success®, wenn Erfolg kein Zufall sein darf.
            </h2>
            
            <h2 className="helvetica-spacing-normal">
              Unsere Innovationsstrategie wurde mehrfach ausgezeichnet und ist in der Industriepraxis seit Jahrzehnten bewährt.
            </h2>
            
            <h3 className="helvetica-spacing-normal">
              Unsere bewährte Methode im Detail:
            </h3>

            <div className="helvetica-spacing-normal space-y-4">
              <h4 className="max-w-5xl">
                Unsere Methode verbindet strategisches Denken mit exzellenter Umsetzung durch Design, 
                das exakt zur Unternehmensstrategie passt, und Prozesse, die auf den Punkt liefern – in Qualität, Zeit und Wirkung.
              </h4>
              
              <h4 className="max-w-5xl">
                Das schafft Sicherheit für Entscheider, weil System dahintersteckt. Dabei übernehmen wir nur Projekte, 
                bei denen wir echte Erfolgsaussichten sehen, denn wir stehen ausschließlich für Design, das wirkt und 
                messbare Ergebnisse liefert.
              </h4>
              
              <h4 className="max-w-5xl">
                Dafür denken wir voraus, hinterfragen und schaffen die Voraussetzungen, damit Erfolg kein Zufall ist.
              </h4>
              
              <h4 className="max-w-5xl">
                40 Jahre Erfahrung, über 200 Designpreise und Kunden, die auf den Punkt profitieren, sprechen für sich.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}