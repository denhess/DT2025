"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from '../BG/YellowBackground';

gsap.registerPlugin(ScrollTrigger);

export function ReferenzenMaschinendesign() {
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

  const clients = [
    { name: 'Liebherr', logo: '/logos/logo-liebherr-black.svg' },
    { name: 'Arburg', logo: '/logos/logo-arburg-black.svg' },
    { name: 'WashTec', logo: '/logos/logo-washtec-black.svg' },
    { name: 'Held', logo: '/logos/logo-held-black.svg' },
    { name: 'Wöhner', logo: '/logos/logo-woehner-black.svg' },
    { name: 'Kadia', logo: '/logos/logo-kadia-black.svg' },
  ];

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
          className="w-full max-w-6xl px-8 md:px-8 lg:px-8 text-center"
        >
          <h2 className="mb-4">
            {t('referenzen.title')}
          </h2>
          
          <h3 className="mb-8">
            {t('referenzen.subtitle')}
          </h3>
          
          <h4 className="max-w-3xl mx-auto mb-12">
            {t('referenzen.text')}
          </h4>

          {/* Kunden-Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            {clients.map((client) => (
              <div 
                key={client.name}
                className="relative h-8 md:h-10 w-24 md:w-32 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <Link 
            href="/erfolgsgeschichte"
            className="btn-gradient"
          >
            {t('referenzen.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
