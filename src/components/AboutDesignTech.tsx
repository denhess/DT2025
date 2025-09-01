"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackgroundTop } from './BG/YellowBackgroundTop';

gsap.registerPlugin(ScrollTrigger);

export function AboutDesignTech() {
  const { t, i18n } = useTranslation('designtech');
  
  const getAboutText = () => {
    if (i18n.language === 'de') {
      return (
        <>
          Bei <span className="font-bold">{t('about.designtech')}</span> entwickeln wir verkaufsstarke Produkte, die wirtschaftlich überzeugen und technisch machbar sind. Mit jahrzehntelanger Erfahrung im Maschinenbau für Marktführer wie <span className="font-bold">{t('about.liebherr')}</span>, <span className="font-bold">{t('about.arburg')}</span> und <span className="font-bold">{t('about.washtec')}</span> schaffen wir präzise, maßgeschneiderte Lösungen – perfekt abgestimmt auf Ihre Ziele.
        </>
      );
    } else {
      return (
        <>
          At <span className="font-bold">{t('about.designtech')}</span>, we develop high-selling products that convince economically and are technically feasible. With decades of experience in mechanical engineering for market leaders like <span className="font-bold">{t('about.liebherr')}</span>, <span className="font-bold">{t('about.arburg')}</span> and <span className="font-bold">{t('about.washtec')}</span>, we create precise, customized solutions – perfectly aligned with your goals.
        </>
      );
    }
  };
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

    // Text Fade-in Animation
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
      <YellowBackgroundTop/>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-8xl px-8 md:px-8 lg:px-8">
          <h2 
            ref={textRef}
            className="leading-tight tracking-[-0.02em] max-w-prose mx-auto"
          >
            {getAboutText()}
          </h2>
        </div>
      </div>
    </section>
  );
}