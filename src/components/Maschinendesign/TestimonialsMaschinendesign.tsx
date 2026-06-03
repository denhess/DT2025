"use client";

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

export function TestimonialsMaschinendesign() {
  const { t } = useTranslation('maschinendesign');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonials aus der Übersetzung holen
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];
  
  useGSAP(() => {
    if (!contentRef.current || !sectionRef.current) return;

    gsap.from(contentRef.current, {
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-neutral-900"
      data-background="dark"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          ref={contentRef}
          className="w-full max-w-5xl px-8 md:px-8 lg:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              {t('testimonials.title')}
            </h2>
            <h3 className="text-neutral-400">
              {t('testimonials.subtitle')}
            </h3>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            {/* Quote Icon */}
            <div 
              className="text-8xl md:text-9xl font-serif leading-none mb-4 opacity-30"
              style={{ color: '#FFDD00' }}
            >
              "
            </div>
            
            {/* Quote Text */}
            <blockquote className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 -mt-12 md:-mt-16">
              {testimonials[activeIndex]?.quote}
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center gap-4">
              {/* Placeholder für Foto - kann später mit echten Bildern ersetzt werden */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-neutral-900"
                style={{ backgroundColor: '#FFDD00' }}
              >
                {testimonials[activeIndex]?.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium text-lg">
                  {testimonials[activeIndex]?.name}
                </p>
                <p className="text-neutral-400">
                  {testimonials[activeIndex]?.position}
                </p>
                <p className="text-neutral-500 text-sm">
                  {testimonials[activeIndex]?.company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={handlePrev}
                className="icon-btn-gradient-white"
                aria-label="Vorheriges Testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex 
                        ? 'w-6' 
                        : 'bg-neutral-600 hover:bg-neutral-500'
                    }`}
                    style={index === activeIndex ? { backgroundColor: '#FFDD00' } : {}}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="icon-btn-gradient-white"
                aria-label="Nächstes Testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
