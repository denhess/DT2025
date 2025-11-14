"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';

gsap.registerPlugin(ScrollTrigger);

export function SplitscreenOne() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sliderRef.current || !sectionRef.current) return;

    // Fade-in Animation
    gsap.from(sliderRef.current, {
      opacity: 0,
      y: 50,
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
      className="relative min-h-screen w-full flex items-center justify-center bg-white"
    >
      <div 
        ref={sliderRef}
        className="w-full h-screen px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center"
      >
        <div className="w-full max-w-6xl relative">
          <ReactCompareSlider
            itemOne={
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <ReactCompareSliderImage
                  src="/landingpage/held/pictures/BeforeAfterSlider/Before.webp"
                  alt="Vorher - Alte Maschinenversion"
                  className="w-full h-full object-contain md:object-cover"
                />
                {/* Vorher Label */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                  <span className="btn-gradient-white-noanimation whitespace-nowrap inline-flex">
                    VORHER
                  </span>
                </div>
              </div>
            }
            itemTwo={
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <ReactCompareSliderImage
                  src="/landingpage/held/pictures/BeforeAfterSlider/After.webp"
                  alt="Nachher - HAILEY optimierte Version"
                  className="w-full h-full object-contain md:object-cover"
                />
                {/* Nachher Label */}
                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8">
                  <span className="btn-gradient-white-noanimation whitespace-nowrap inline-flex">
                    NACHHER
                  </span>
                </div>
              </div>
            }
            position={50}
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden"
            style={{
              cursor: 'col-resize'
            }}
            handle={
              <div className="w-1 h-full bg-white shadow-lg relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-yellow-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Linker Pfeil ← */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7" />
                    {/* Rechter Pfeil → */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            }
          />
          
          {/* Instruktionstext (optional, nur Desktop) */}
          <div className="hidden md:block text-center mt-6 text-gray-600">
            <p className="text-sm">← Ziehen Sie den Regler, um den Unterschied zu sehen →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
