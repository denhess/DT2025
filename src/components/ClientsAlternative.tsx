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
        src="/pictures/clients-projects.webp" // Ersetze mit dem tatsächlichen Bildpfad
        alt="Fullscreen Background"
        layout="fill"
        objectFit="cover"
        priority
      />
    </section>
  );
}
