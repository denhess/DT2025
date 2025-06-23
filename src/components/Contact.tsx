"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { YellowBackgroundTop } from "./BG/YellowBackgroundTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// TypeScript-Deklaration für gtag
declare global {
  function gtag(...args: any[]): void;
}

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // TRACKING-FUNKTION - Contact Section
  const trackVideocallInquiry = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'design_inquiry', {
        'event_category': 'Contact',
        'event_label': 'Contact Section Videocall Button',
        'contact_method': 'email_contact_section',
        'page_location': window.location.href
      });
      
      console.log('Contact Section Videocall Button clicked - tracked in GA4');
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

  return (
    <section
      data-background="light"
      ref={sectionRef}
      className="relative min-h-screen w-full text-black flex flex-col justify-center items-center"
    >
      <YellowBackgroundTop/>

      <div className="absolute inset-0 flex justify-center items-center">
        <div
          ref={contentRef}
          className="w-full max-w-6xl flex flex-col text-left px-8 md:px-8 lg:px-8 py-16"
        >
          <div className="mb-16">
            <h2 className="">
              Lassen Sie uns gemeinsam Ihren Erfolg gestalten. Buchen Sie jetzt
              Ihren persönlichen Video Call und sichern Sie sich den
              entscheidenden Vorsprung.
            </h2>
          </div>

          {/* TRACKED EMAIL BUTTON */}
          <div className="flex justify-center">
            <a  
              href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
              onClick={trackVideocallInquiry}
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl btn-big">
                VIDEOCALL VEREINBAREN
              </div>
            </a>
          </div>

          <h3 className="mt-16">
            Damit unser Gespräch nicht nur irgendein Austausch wird, sondern der Startschuss für etwas Außergewöhnliches, 
            laden wir Sie vorab zu einer kurzen Online-Befragung ein. So treffen wir uns nicht im Nebel, sondern genau dort, 
            wo Ihre Vorstellungen, Ziele und Herausforderungen liegen. Stellen Sie sich vor, was möglich ist – und erwarten Sie mehr. 
            Wir freuen uns sie kennen zu lernen.
          </h3>
        </div>
      </div>
    </section>
  );
}