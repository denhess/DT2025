"use client";

import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { YellowBackground } from "./BG/YellowBackground";

gsap.registerPlugin(ScrollTrigger);

export function Ready() {
  const { t } = useTranslation('common');
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
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      data-background="light"
      ref={sectionRef}
      className="relative min-h-screen w-full text-black flex flex-col justify-center items-center"
      
    >
      <YellowBackground />

      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-8 md:px-8 lg:px-8">
          <h2 
            ref={textRef}
            className="text-[clamp(2rem,8vw,12rem)] mb-0 [hyphens:auto] uppercase leading-[1.1] tracking-[-0.03em]"
          >
            {t('ready.title')}
          </h2>
        </div>
      </div>
    </section>
  );
}