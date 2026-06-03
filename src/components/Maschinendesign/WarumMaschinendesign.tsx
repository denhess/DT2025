"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WarumMaschinendesign() {
  const { t } = useTranslation('maschinendesign');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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

  const usps = ['erfahrung', 'awards', 'kunden', 'standort'];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white"
      data-background="light"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          ref={contentRef}
          className="w-full max-w-6xl px-8 md:px-8 lg:px-8"
        >
          <h2 className="mb-12 text-center">
            {t('warum.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {usps.map((usp, index) => (
              <div key={usp} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span 
                    className="text-4xl md:text-5xl font-thin"
                    style={{ color: '#FFDD00' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4 className="mb-2">
                    {t(`warum.items.${usp}.title`)}
                  </h4>
                  <p className="text-neutral-600">
                    {t(`warum.items.${usp}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
