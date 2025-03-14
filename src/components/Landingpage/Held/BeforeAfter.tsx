"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useGSAP(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top -50px",
      onEnter: () => {
        gsap.to(".header-color-change", { color: "#ffffff", duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".header-color-change", { color: "#000000", duration: 0.3 });
      },
    });
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;
    
    setSliderPosition(newPosition);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;
    
    setSliderPosition(newPosition);
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-black overflow-hidden">
      <div 
        ref={sliderRef}
        className="relative h-full w-full cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={isDragging ? handleMouseMove : undefined}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Before Image (bottom layer) - fixed position */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/landingpage/held/pictures/BeforeAfterSlider/After.webp" 
            alt="After" 
            className="w-full h-full object-cover select-none"
            draggable="false"
          />
        </div>

        {/* After Image (top layer - clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src="/landingpage/held/pictures/BeforeAfterSlider/Before.webp" 
            alt="Befote" 
            className="w-full h-full object-cover select-none"
            style={{ width: `${100 * (100/sliderPosition)}%`, maxWidth: '100vw', position: 'absolute', left: 0, top: 0 }}
            draggable="false"
          />
        </div>

        {/* Slider control */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
          style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        >
          <div className="absolute h-10 w-10 rounded-full bg-white top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center shadow-lg">
            <div className="flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L3 10L8 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 5L21 10L16 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-8 left-8 text-white font-bold text-xl bg-black bg-opacity-50 px-3 py-1 rounded">
          Before
        </div>
        <div className="absolute bottom-8 right-8 text-white font-bold text-xl bg-black bg-opacity-50 px-3 py-1 rounded">
          After
        </div>
      </div>
    </section>
  );
}