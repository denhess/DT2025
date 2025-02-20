"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { YellowBackground } from "./BG/YellowBackground";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
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
      data-background="light"
      ref={sectionRef}
      className="relative min-h-screen w-full text-black flex flex-col justify-center items-center"
      
    >
      <YellowBackground />

      {/* Titel mit dynamischem Padding für verschiedene Bildschirmgrößen */}
      <div className="absolute inset-0 flex flex-col justify-start mt-20">
        <p className="text-3xl mb-4 w-full px-8 md:px-16 lg:px-24">
          Sind <span className="underline">Sie</span> bereit für
        </p>
        <h1 className="font-thin uppercase text-black z-10 text-[7vw] md:text-[7vw] xl:text-[8vw] leading-[0.9] w-full px-8 md:px-16 lg:px-24 whitespace-nowrap">
          DAS NÄCHSTE LEVEL?
        </h1>
      </div>

      {/* Haupttext mittig */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          ref={contentRef}
          className="w-full max-w-3xl px-8 md:px-16 flex flex-col text-left"
        >
          <div className="mt-40 mb-16">
            <p className="text-xl">
              Lassen Sie uns gemeinsam Ihren Erfolg gestalten. Buchen Sie jetzt
              Ihren persönlichen Video Call und sichern Sie sich den
              entscheidenden Vorsprung.
            </p>
          </div>

          {/* Button mittig */}
          <div className="flex justify-center">
          <a
  href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
  className="text-[7vw] md:text-[7vw] lg:text-[8vw] px-[10vw] py-1 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300"
>
  VIDEOCALL
</a>





          </div>

          <p className="mt-16 text-lg max-w-3xl">
            Damit wir uns gezielt auf Ihre Bedürfnisse vorbereiten können,
            erhalten Sie vorab eine kurze Online-Befragung. So stellen wir
            sicher, dass unser Gespräch direkt auf Ihre spezifischen
            Herausforderungen und Ziele eingeht.
          </p>
        </div>
      </div>
    </section>
  );
}
