"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProzessMaschinendesign() {
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

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-neutral-900"
      data-background="dark"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          ref={contentRef}
          className="w-full max-w-6xl px-8 md:px-8 lg:px-8 text-center"
        >
          <h2 className="text-white mb-4">
            {t('prozess.title')}
          </h2>
          
          <h3 className="text-neutral-400 mb-8">
            {t('prozess.subtitle')}
          </h3>
          
          <h4 className="text-neutral-300 max-w-3xl mx-auto mb-12">
            {t('prozess.text')}
          </h4>

          <Link 
            href="/designtosuccess"
            className="btn-gradient-trans"
          >
            {t('prozess.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
