"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TextDesignToSuccessThree() {
  const { t } = useTranslation('designtosuccess');
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
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
      className="relative min-h-screen w-full"
      data-background="light"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col text-left px-8 md:px-8 lg:px-8 py-16">
          <div 
            ref={textRef}
            className="max-w-7xl mx-auto"
          >
            <h2>
              {t('text3.title')}
            </h2>
            
            <h2 className="helvetica-spacing-normal">
              {t('text3.subtitle')}
            </h2>
            
            <h3 className="helvetica-spacing-normal">
              {t('text3.method_title')}
            </h3>

            <div className="helvetica-spacing-normal space-y-4">
              <h4 className="max-w-5xl">
                {t('text3.paragraph1')}
              </h4>
              
              <h4 className="max-w-5xl">
                {t('text3.paragraph2')}
              </h4>
              
              <h4 className="max-w-5xl">
                {t('text3.paragraph3')}
              </h4>
              
              <h4 className="max-w-5xl">
                {t('text3.paragraph4')}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}