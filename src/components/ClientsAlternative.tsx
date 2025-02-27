"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ClientsAlternative() {
  const sectionRef = useRef<HTMLElement>(null);



  return (
    <section ref={sectionRef} className="relative min-h-screen w-full">
      <Image
        src="/pictures/clients-projects_2.webp" // Ersetze mit dem tatsächlichen Bildpfad
        alt="Fullscreen Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      
      <div className="absolute inset-0 flex flex-col justify-end mb-20">
        <p className="mb-4 w-full px-8 md:px-16 lg:px-24 text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
          Diese <b>Marktführer</b> vertrauen auf unser Design
        </p>
      </div>
    </section>
  );
}
