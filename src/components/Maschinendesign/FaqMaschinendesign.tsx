"use client";

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqMaschinendesign() {
  const { t } = useTranslation('maschinendesign');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // FAQ-Items aus der Übersetzung holen
  const faqItems = t('faq.items', { returnObjects: true }) as FaqItem[];
  
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white"
      data-background="light"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-y-auto">
        <div 
          ref={contentRef}
          className="w-full max-w-4xl px-8 md:px-8 lg:px-8 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">
              {t('faq.title')}
            </h2>
            <h3>
              {t('faq.subtitle')}
            </h3>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border-b border-neutral-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <h4 className="pr-8 group-hover:opacity-70 transition-opacity">
                    {item.question}
                  </h4>
                  <span 
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index 
                        ? 'rotate-45' 
                        : ''
                    }`}
                    style={{ 
                      backgroundColor: openIndex === index ? '#FFDD00' : 'transparent',
                      border: openIndex === index ? 'none' : '1.5px solid black'
                    }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                
                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100 pb-6' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-neutral-600 pr-12">
                    {item.answer}
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
