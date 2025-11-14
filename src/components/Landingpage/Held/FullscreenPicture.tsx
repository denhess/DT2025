"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FullscreenPicture() {
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
        src={isMobile ? "/landingpage/held/pictures/HaileyTeaser-mobile.webp" : "/landingpage/held/pictures/HaileyTeaser.webp"} // Dynamisch je nach Bildschirmgröße
        alt="Fullscreen Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      
      <div className="text-white absolute bottom-10 sm:bottom-20 px-8 md:px-8 lg:px-8">
        <h2 className="font-bold leading-tight tracking-[-0.02em]">
          WIE DESIGN ZUM WETTBEWERBSVORTEIL WIRD
        </h2>
      </div>
    </section>
  );
}
