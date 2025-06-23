// TextDesignToSuccess
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TextDesignToSuccess() {
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
              Exzellente Lösungen brauchen keinen Verkäufer. <br />
              Der Kunde erkennt den Wert sofort und bekommt ihn von uns.
            </h2>
            
            <h3 className="helvetica-spacing-normal">
              Ein Design, das auf den Punkt wirkt bevor jemand etwas erklärt.
            </h3>
            
            <div className="helvetica-spacing-normal space-y-4">
              <h4 className="max-w-5xl">
                Zum punktgenauen Entwurf der Maschine für die Ziele des Kunden setzt Design Tech überdurchschnittliche, 
                eigens dafür entwickelte Erkenntnisquellen bei der Entwicklung des Maschinendesign ein.
              </h4>
              
              <h4 className="max-w-5xl">
                Insbesondere, wenn es um das Sichtbarmachen von Qualität oder eigenständigen Markenmerkmalen geht, 
                um die Differenzierung zum Wettbewerb oder um anwenderorientierte Funktionen.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}