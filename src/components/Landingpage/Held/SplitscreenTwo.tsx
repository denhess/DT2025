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
      {/* Mobile Layout: Bild oben, Text unten */}
      <div className="md:hidden absolute inset-0 flex flex-col justify-between items-center">
        {/* Image Div - Takes up exactly half the screen in mobile */}
        <div className="w-full h-1/2">
          <img 
            src="/landingpage/held/pictures/Diskussion.webp" 
            alt="About Image"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Div - Takes up exactly half the screen in mobile */}
        <div className="w-full h-1/2 px-8 flex items-center">
          <div 
            ref={textRef}
            className="text-gray-900 leading-relaxed tracking-[-0.02em]"
          >
            <h4 className="mb-4">
            &bdquo;Es war sehr interessant zu sehen, wie Sie mit diesem voll integrierten Ansatz im Projekt eine wirklich beeindruckende Lösung erreicht haben. Und wie gutes Verständnis und frühes Einbinden der verschiedenen Fakultäten dazu genutzt wurde, um am Ende eine Maschine zu haben, die funktional sehr durchdacht ist. Nicht nur in ihrer Kernfunktion, sondern durchgängig in den verschiedenen Nutzungsformen – von der Einrichtung über die Wartung bis zur normalen Produktion. Dass die Maschine dann auch noch richtig gut aussieht, ist natürlich keine Überraschung.&ldquo;
            </h4>
            <p className="italic text-sm">
            Carsten O&apos;Beirne, CEO von Mall + Herlan GmbH
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Vollbild-Bild mit Text darüber */}
      <div className="hidden md:block absolute inset-0">
        {/* Vollbild Hintergrundbild */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/landingpage/held/pictures/Diskussion.webp" 
            alt="About Image"
            className="w-full h-full object-cover"
          />
          {/* Optional: Dunkler Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Text darüber - unten rechts positioniert */}
        <div className="absolute inset-0 flex items-end justify-end px-8 lg:px-16 py-8 lg:py-16">
          <div 
            ref={textRef}
            className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 lg:p-12 text-gray-900 leading-relaxed tracking-[-0.02em]"
          >
            <h4 className="mb-4">
            &bdquo;Es war sehr interessant zu sehen, wie Sie mit diesem voll integrierten Ansatz im Projekt eine wirklich beeindruckende Lösung erreicht haben. Und wie gutes Verständnis und frühes Einbinden der verschiedenen Fakultäten dazu genutzt wurde, um am Ende eine Maschine zu haben, die funktional sehr durchdacht ist. Nicht nur in ihrer Kernfunktion, sondern durchgängig in den verschiedenen Nutzungsformen – von der Einrichtung über die Wartung bis zur normalen Produktion. Dass die Maschine dann auch noch richtig gut aussieht, ist natürlich keine Überraschung.&ldquo;
            </h4>
            <p className="italic text-sm">
            Carsten O&apos;Beirne, CEO von Mall + Herlan GmbH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
