"use client";

import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { YellowBackground } from "./BG/YellowBackground";

// TypeScript-Deklaration für gtag
declare global {
  function gtag(...args: any[]): void;
}

gsap.registerPlugin(ScrollTrigger);

export function ContactDesignToSuccess() {
  const { t, i18n } = useTranslation('designtosuccess');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // TRACKING-FUNKTION - DesignToSuccess Videocall
  const trackDesignToSuccessVideocall = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'design_inquiry', {
        'event_category': 'Contact',
        'event_label': 'DesignToSuccess Videocall Button',
        'contact_method': 'email_designtosuccess',
        'page_location': window.location.href
      });
      console.log('DesignToSuccess Videocall Button clicked - tracked in GA4');
    }
  };

  // Email-Text je nach Sprache
  const getEmailContent = () => {
    const isGerman = i18n.language === 'de';
    
    if (isGerman) {
      return {
        subject: "Anfrage%20für%20ein%20Videocall",
        body: "Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
      };
    } else {
      return {
        subject: "Request%20for%20a%20Video%20Call",
        body: "Dear%20Ms.%20Mayer,%0A%0A"
      };
    }
  };

  useGSAP(() => {
    if (!contentRef.current || !sectionRef.current) return;

    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  const emailContent = getEmailContent();

  return (
    <section
      data-background="light"
      ref={sectionRef}
      className="relative min-h-screen w-full text-black flex flex-col justify-center items-center"
    >
      <YellowBackground/>

      {/* Hauptinhalt vertikal und horizontal zentriert */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          ref={contentRef}
          className="w-full max-w-6xl flex flex-col text-left px-8 md:px-8 lg:px-8 py-16"
        >
          <div className="mb-16">
            <h2 className="">
              {t('contact.title')}
            </h2>
          </div>

          {/* Button mittig */}
          <div className="flex justify-center">
            <a  
              href={`mailto:info@designtech.eu?subject=${emailContent.subject}&body=${emailContent.body}`}
              onClick={trackDesignToSuccessVideocall}
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl btn-big">
                {t('contact.button')}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}