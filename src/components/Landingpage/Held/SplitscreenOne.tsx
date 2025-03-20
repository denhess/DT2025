"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SplitscreenOne() {
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
        <div className="w-full h-1/2 md:w-1/2 md:h-full relative">
          <img 
            src="/landingpage/held/pictures/BeforeAfterSlider/Before.webp" 
            alt="About Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 sm:bottom-15 left-0 right-0 px-8 md:px-16 lg:px-24">
            <h3 className="text-white">VORHER</h3>
          </div>
        </div>
        
        {/* Text Div - Takes up exactly half the screen in mobile */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full relative">
          <img 
            src="/landingpage/held/pictures/BeforeAfterSlider/After.webp" 
            alt="About Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 sm:bottom-15 left-0 right-0 px-8 md:px-16 lg:px-24">
            <h3 className="text-white">NACHHER</h3>
          </div>
        </div>
      </div>
    </section>
  );
}