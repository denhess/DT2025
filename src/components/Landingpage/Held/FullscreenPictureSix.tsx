"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FullscreenPictureSix() {
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
            src={isMobile ? "/landingpage/held/pictures/TeaserHeld-mobile.webp" : "/landingpage/held/pictures/TeaserHeld.webp"} // Dynamisch je nach Bildschirmgröße
            alt="Fullscreen Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          
          <div className="absolute bottom-10 sm:bottom-20 px-8 md:px-8 lg:px-8">
            <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-8">
              WIE KANN MASCHINENDESIGN IHR UNTERNEHMEN VORANBRINGEN?<br />
              VEREINBAREN SIE EIN GESPRÄCH
            </h2>
            
            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
                className="btn-gradient-trans inline-flex items-center justify-center w-fit"
              >
                <span>info@designtech.eu</span>
              </a>
              <a
                href="tel:+49707391890"
                className="btn-gradient-trans inline-flex items-center justify-center w-fit"
              >
                <span>+49 7073 91 89 0</span>
              </a>
            </div>
          </div>
        </section>
  );
}