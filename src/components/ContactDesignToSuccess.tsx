"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { YellowBackground } from "./BG/YellowBackground";

gsap.registerPlugin(ScrollTrigger);

export function ContactDesignToSuccess() {
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
      <YellowBackground/>

      {/* Hauptinhalt vertikal und horizontal zentriert */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          ref={contentRef}
          className="w-full max-w-6xl flex flex-col text-left px-8 md:px-8 lg:px-8 py-16"
        >
          <div className="mb-16">
            <h2 className="">
              Lassen Sie uns konkret werden: Wie kann unser Design Ihren Erfolg messbar beschleunigen.
            </h2>
          </div>

          {/* Button mittig */}
          <div className="flex justify-center">
            
            <a  href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl btn-big">
                VIDEOCALL VEREINBAREN
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}