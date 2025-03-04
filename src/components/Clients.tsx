"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Clients() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initiale Prüfung
    setIsMobile(mediaQuery.matches);

    // Aktualisierung bei Veränderung der Bildschirmgröße
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full">
      <Image
        src={isMobile ? "/pictures/clients-projects-mobile.webp" : "/pictures/clients-projects.webp"} // Dynamisch je nach Bildschirmgröße
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
