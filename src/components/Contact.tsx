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


      {/* Haupttext mittig */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          ref={contentRef}
          className="w-full max-w-3xl flex flex-col text-left px-8 md:px-16 lg:px-24"
        >
          <div className="mt-40 mb-16">
            <p className="">
              Lassen Sie uns gemeinsam Ihren Erfolg gestalten. Buchen Sie jetzt
              Ihren persönlichen Video Call und sichern Sie sich den
              entscheidenden Vorsprung.
            </p>
          </div>

          {/* Button mittig */}
          <div className="flex justify-center">
          <a
  href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
  className="px-[10vw] py-1 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300"
>
  <h1> VIDEOCALL </h1>
</a>





          </div>

          <p className="mt-16 ">
          Damit unser Gespräch nicht nur irgendein Austausch wird, sondern der Startschuss für etwas Außergewöhnliches, 
          laden wir Sie vorab zu einer kurzen Online-Befragung ein. So treffen wir uns nicht im Nebel, sondern genau dort, 
          wo Ihre Vorstellungen, Ziele und Herausforderungen liegen. Stellen Sie sich vor, was möglich ist – und erwarten Sie mehr. 
          Wir freuen uns sie kennen zu lernen.
          </p>
        </div>
      </div>
    </section>
  );
}
