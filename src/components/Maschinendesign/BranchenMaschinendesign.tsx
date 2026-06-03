"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BranchenMaschinendesign() {
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

  const branchen = [
    'werkzeugmaschinen',
    'kunststoff',
    'lebensmittel',
    'verpackung',
    'reinigung',
    'baumaschinen',
    'medizin',
    'automation'
  ];

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
          <div className="mb-12 text-center">
            <h2 className="mb-4">
              {t('branchen.title')}
            </h2>
            <h3 className="mb-6">
              {t('branchen.subtitle')}
            </h3>
            <h4 className="max-w-3xl mx-auto">
              {t('branchen.text')}
            </h4>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {branchen.map((branche) => (
              <div 
                key={branche}
                className="btn-gradient-noanimation"
              >
                {t(`branchen.list.${branche}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
