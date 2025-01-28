"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactJob() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      ref={sectionRef}
      className="relative min-h-screen w-full text-black flex"
    >
      {/* Text Column */}
      <div className="w-1/2 flex items-center justify-start p-8">
        <div
          ref={contentRef}
          className="max-w-[65vw] mx-auto px-8 md:px-16 lg:px-24 space-y-6"
        >
          {/* Title */}
          <h2 className="text-gray-900 z-10 text-2xl md:text-3xl xl:text-4xl mb-6">Ihr Kontakt</h2>
          {/* Subtitle */}
          <p className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] mb-12">LISA SCHMID</p>
          
          {/* Button */}
          <div
            className="inline-block border border-black rounded-full px-8 py-3 my-8 cursor-pointer hover:bg-black hover:text-[#FFFF00] transition-all duration-300 z-10"
          >
            <a
              href="mailto:lschmid@designtech.eu?subject=Anfrage%20über%20Webseite&body=Sehr%20geehrte%20Frau%20Schmid,%0A%0Aich%20habe%20eine%20Frage%20zu%20Ihrem%20Produkt.%20Könnten%20Sie%20mir%20bitte%20weitere%20Informationen%20geben?%0A%0AMit%20freundlichen%20Grüßen%2C%0A[Dein%20Name]"
              className="text-2xl"
            >
              JETZT BEWERBEN
            </a>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/pictures/contact-lisa-schmid.webp"
          alt="Lisa Schmid"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
