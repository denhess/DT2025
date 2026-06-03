"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProblemMaschinendesign() {
  const { t } = useTranslation('maschinendesign');
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

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
      className="relative min-h-screen w-full bg-white"
      data-background="light"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl px-8 md:px-8 lg:px-8">
          <div 
            ref={textRef}
            className="max-w-7xl mx-auto"
          >
            <h2 className="mb-4">
              {t('problem.title')}
            </h2>
            
            <h3 className="mb-8">
              {t('problem.subtitle')}
            </h3>
            
            <div className="space-y-6">
              <h4 className="max-w-5xl">
                {t('problem.paragraph1')}
              </h4>
              
              <h4 className="max-w-5xl">
                {t('problem.paragraph2')}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
