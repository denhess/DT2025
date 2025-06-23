"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { YellowBackground } from "./BG/YellowBackground";

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
      className="relative min-h-screen w-full text-black flex flex-col md:flex-row items-center"
      data-background="light"
    >
      {/* Der Hintergrund muss unter dem Content sein, stellen wir sicher mit z-index */}
      <div className="absolute inset-0 z-0">
        <YellowBackground />
      </div>
      
      {/* Text Column - mit höherem z-index */}
      <div className="w-full md:w-1/2 flex items-center justify-start p-8 h-[50vh] md:h-full text-left z-10 relative">
        <div
          ref={contentRef}
          className="max-w-[65vw] mx-0 md:mx-auto px-8 md:px-8 lg:px-8 space-y-3"
        >
          {/* Title */}
          <h3 className="z-10">
            Ihr Kontakt
          </h3>
          {/* Subtitle */}
          <h2 className="leading-tight tracking-[-0.02em] whitespace-nowrap">
            LISA VALENTINA SCHMID
          </h2>

          {/* Button - Mit derselben btn-gradient Klasse wie im MenuOverlay */}
          <div className="flex justify-left pt-5">
            <a
              href="mailto:lschmid@designtech.eu?subject=Bewerbung%20als%20[Jobtitel]&body=Sehr%20geehrte%20Frau%20Schmid,%0A%0A"
              className="btn-gradient whitespace-nowrap"
            >
              JETZT&nbsp;BEWERBEN
            </a>
          </div>
        </div>
      </div>

      {/* Image Column - mit höherem z-index */}
      <div className="w-full md:w-1/2 flex items-center justify-center h-[50vh] md:h-full p-8 z-10 relative">
        <div className="overflow-hidden rounded-3xl w-auto md:w-[80%]">
          <Image
            src="/pictures/contact-lisa-schmid.webp"
            alt="Lisa Schmid"
            width={600}
            height={800}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}