"use client";

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function LeistungenMaschinendesign() {
  const { t } = useTranslation('maschinendesign');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!contentRef.current || !sectionRef.current) return;

    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'center center',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  const leistungen = [
    { 
      key: 'maschinenverkleidung',
      image: '/projects/slide-held-hailey.webp',
      alt: 'Held Hailey - Maschinenverkleidung Design'
    },
    { 
      key: 'hmi',
      image: '/projects/slide-arburg-gestica.webp',
      alt: 'Arburg Gestica - HMI Design'
    },
    { 
      key: 'corporate',
      image: '/projects/slide-arburg-cid.webp',
      alt: 'Arburg Corporate Industrial Design'
    },
    { 
      key: 'anlagen',
      image: '/projects/slide-liebherr-autokran.webp',
      alt: 'Liebherr Autokran - Anlagendesign'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-neutral-900"
      data-background="dark"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-7xl px-8 md:px-8 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-white mb-4">
              {t('leistungen.title')}
            </h2>
            <h3 className="text-neutral-400">
              {t('leistungen.subtitle')}
            </h3>
          </div>
          
          <div 
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {leistungen.map((leistung) => (
              <div key={leistung.key} className="group">
                <div className="relative aspect-video mb-4 overflow-hidden">
                  <Image
                    src={leistung.image}
                    alt={leistung.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-white mb-2">
                  {t(`leistungen.${leistung.key}.title`)}
                </h4>
                <p className="text-neutral-400">
                  {t(`leistungen.${leistung.key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
