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
          className="max-w-[65vw] mx-auto px-8 md:px-16 lg:px-24"
        >Ihr Kontakt
        <p></p>
        Lisa Schmid
        </div>
      </div>

      {/* Image Column */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="pictures/contact-lisa-schmid.webp" // Ersetzen Sie dies durch den Pfad zu Ihrem Bild
          alt="Descriptive Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
