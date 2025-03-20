"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SplitscreenTwo() {
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
            src="/landingpage/held/pictures/Diskussion.webp" 
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
            <p>
            &bdquo;Es war sehr interessant zu sehen, wie Sie mit diesem voll integrierten Ansatz im Projekt eine wirklich beeindruckende Lösung erreicht haben. Und wie gutes Verständnis und frühes Einbinden der verschiedenen Fakultäten dazu genutzt wurde,
            um am Ende eine Maschine zu haben, die funktional sehr durchdacht ist. Nicht nur in ihrer Kernfunktion, sondern durchgängig in den verschiedenen Nutzungsformen – von der Einrichtung über die Wartung bis zur normalen Produktion. Dass die Maschine dann auch noch richtig gut aussieht, ist natürlich keine Überraschung.&ldquo;
            <br />
            <br />
            <i>Carsten O&apos;Beirne, CEO von Mall + Herlan GmbH</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}