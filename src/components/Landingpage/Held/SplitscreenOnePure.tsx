"use client";

import { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Pure React Implementation ohne externe Dependencies
 * Verwendet nur React Hooks und native Browser APIs
 */
export function SplitscreenOne() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  return (
    <section 
      ref={sectionRef}
      data-background="light"
      className="relative min-h-screen w-full flex items-center justify-center bg-white"
    >
      <div 
        ref={sliderRef}
        className="w-full h-screen px-8 md:px-16 lg:px-24 flex items-center justify-center"
      >
        <div className="w-full max-w-6xl relative">
          <div
            ref={containerRef}
            className="relative w-full h-[70vh] rounded-xl shadow-2xl overflow-hidden select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            style={{ cursor: isDragging ? 'col-resize' : 'default' }}
          >
            {/* Nachher Bild (Hintergrund) */}
            <div className="absolute inset-0">
              <img
                src="/landingpage/held/pictures/BeforeAfterSlider/After.webp"
                alt="Nachher - HAILEY optimierte Version"
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Nachher Label */}
              <div className="absolute bottom-8 right-8 bg-yellow-300 px-4 py-2 rounded-lg shadow-lg">
                <h3 className="text-black font-bold text-lg">NACHHER</h3>
              </div>
            </div>

            {/* Vorher Bild (Overlay mit Clip) */}
            <div 
              className="absolute inset-0 transition-all duration-0"
              style={{ 
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` 
              }}
            >
              <img
                src="/landingpage/held/pictures/BeforeAfterSlider/Before.webp"
                alt="Vorher - Alte Maschinenversion"
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Vorher Label */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <h3 className="text-black font-bold text-lg">VORHER</h3>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-yellow-300 pointer-events-none">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Instruktionstext (optional, nur Desktop) */}
          <div className="hidden md:block text-center mt-6 text-gray-600">
            <p className="text-sm">← Ziehen Sie den Regler, um den Unterschied zu sehen →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
