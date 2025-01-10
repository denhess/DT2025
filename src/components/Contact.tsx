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
      ref={sectionRef}
      className="relative min-h-screen w-full text-black"
    >
      <YellowBackground />
      <div className="absolute inset-0 flex flex-col justify-start items-start text-left p-8 mt-20">
        {/* Absatz */}
        <p className="text-3xl mb-4">
          Sind <span className="underline">Sie</span> bereit für
        </p>
        {/* Überschrift */}
        <h1 className="font-thin uppercase text-black z-10 text-[7vw] md:text-[7vw] xl:text-[8vw] leading-[0.9] tracking-[-0.02em]">
          DAS NÄCHSTE LEVEL?
        </h1>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div
          ref={contentRef}
          className="w-full max-w-[65vw] mx-auto px-8 md:px-16 lg:px-24 flex flex-col "
        >
          <div className="mt-40 lg:ml-60 mb-24 max-w-2xl">
            <p className="text-xl">
              Lassen Sie uns gemeinsam Ihren Erfolg gestalten.
            </p>
            <p className="text-xl">
              Buchen Sie jetzt Ihren persönlichen Video Call und sichern Sie
              sich den entscheidenden Vorsprung.
            </p>
          </div>

          <button className="text-3xl px-16 py-6 rounded-full border-2 border-black hover:bg-black hover:text-[#FFFF00] transition-all duration-300">
           <span className="font-thin uppercase z-10 text-[7vw] md:text-[8vw] xl:text-[8vw] leading-[0.9] tracking-[-0.02em]">VIDEOCALL</span> 
          </button>

          <p className="mt-16 text-lg max-w-2xl lg:ml-60 ">
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
