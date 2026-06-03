"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '../BG/YellowBackground';

gsap.registerPlugin(ScrollTrigger);

export function CtaMaschinendesign() {
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

  const handleVideoCallClick = () => {
    window.open('https://outlook.office365.com/book/DesignTechVideocall@DesignTech.eu/', '_blank');
  };

  return (
    <section
      data-background="light" 
      ref={sectionRef}
      className="relative min-h-screen w-full"
    >
      <YellowBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          ref={contentRef}
          className="w-full max-w-4xl px-8 md:px-8 lg:px-8 text-center"
        >
          <h2 className="mb-6">
            {t('cta.title')}
          </h2>
          
          <h4 className="max-w-2xl mx-auto mb-12">
            {t('cta.text')}
          </h4>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleVideoCallClick}
              className="btn-gradient"
            >
              {t('cta.button')}
            </button>
            
            <a 
              href={`tel:${t('cta.phone').replace(/\s/g, '')}`}
              className="text-lg font-medium hover:underline"
            >
              {t('cta.phone')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
