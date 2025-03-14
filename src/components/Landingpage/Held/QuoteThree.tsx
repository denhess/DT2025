// components/About.tsx
"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '@/components/BG/YellowBackground';


gsap.registerPlugin(ScrollTrigger);

export function QuoteThree() {
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
            &bdquo;Die Doppelbandpresse Hailey verkörpert das perfekte Zusammenspiel von Form und Funktion - ein beeindruckendes Ergebnis, das nur durch echte interdisziplinäre Zusammenarbeit möglich wurde.&ldquo;
            <br />
            <br />
            <i>BLECHNET</i>
          </h2>
          <div className="mt-5 flex justify-left">
            <a
              href="mailto:lschmid@designtech.eu?subject=Bewerbung%20als%20[Jobtitel]&body=Sehr%20geehrte%20Frau%20Schmid,%0A%0A"
              className="mt-5 px-[2vw] py-1 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300"
            >
              <h3>ZUM&nbsp;ARTIKEL</h3>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}