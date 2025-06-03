// AboutDesignToSuccess
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackgroundTop } from './BG/YellowBackgroundTop';

gsap.registerPlugin(ScrollTrigger);

export function AboutDesignToSuccess() {
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
     <YellowBackgroundTop/>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col text-left px-8 md:px-8 lg:px-8 py-16">
          <div 
            ref={textRef}
            className="max-w-7xl mx-auto"
          >
            <h2>
              Vom Verkaufen zum gekauft werden.
            </h2>
            
            <h3 className="helvetica-spacing-normal">
              Wenn Emotionen und Fakten stimmen, überzeugt das Produkt ohne ein Wort.
            </h3>

            <div className="helvetica-spacing-normal space-y-4">
              <h4 className="max-w-5xl">
                Starke Produkte müssen nicht erklärt werden. Sie überzeugen auf den ersten Blick. <br />
                Weil sie stimmig sind, in Funktion, Form, Herstellung. Weil sie Vertrauen wecken und Begehrlichkeit. <br />
                Und weil Entscheider sofort erkennen: Das ist genau das, was wir brauchen. <br />
                Das ist kein Produktglück. Das ist Design, das Wirkung erzeugt bevor jemand etwas erklärt. <br />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}