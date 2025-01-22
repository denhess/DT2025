// components/About.tsx
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export function AboutDesignTech() {
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
      className="relative min-h-screen w-full"
    >
     
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <p 
            ref={textRef}
            className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]"
          >
            Bei Design Tech betrachten wir Ihr Projekt, als wäre es unser eigenes. Unser Ziel ist es, 
            ein verkaufsstarkes Produkt zu schaffen, das wirtschaftlich die bestmöglichen Ergebnisse 
            für Sie erzielt, während wir Ihre Wünsche in technisch machbare Lösungen umsetzen.
            
            Unsere jahrzehntelange Expertise im Maschinenbau, die wir für Marktführer wie Liebherr, 
            Arburg und WashTec AG eingesetzt haben, ermöglicht es uns, präzise und maßgeschneiderte 
            Lösungen zu entwickeln, die perfekt auf die spezifischen Anforderungen Ihres Unternehmens 
            abgestimmt sind. Der Schlüssel zum Erfolg liegt in der genauen Ausrichtung auf Ihre Ziele, 
            wobei wir unser umfassendes Know-how und unsere Leidenschaft gezielt einsetzen, um Ihre 
            ambitionierten Pläne zu verwirklichen – mit derselben Präzision und Hingabe, als ginge es 
            um unser eigenes Unternehmen.

          </p>
        </div>
      </div>
    </section>
  );
}