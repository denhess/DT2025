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
        src={isMobile ? "/landingpage/held/pictures/TeaserHeld.webp" : "/landingpage/held/pictures/TeaserHeld.webp"} // Dynamisch je nach Bildschirmgröße
        alt="Fullscreen Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      
      <div className="absolute inset-0 flex flex-col justify-end absolute bottom-10 sm:bottom-20 flex flex-col px-8 md:px-16 lg:px-24">
        {/* Button */}
        <div className="flex justify-left">
            <a
              href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
              className="text-white mt-5 px-[2vw] py-1 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300"
            >
              <h3>info@designtech.eu</h3>
            </a>
          </div>
          <div className="flex justify-left">
            <a
              href="tel:+49707391890"
              className="text-white mt-5 px-[2vw] py-1 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300"
            >
              <h3>+49 7073 91 89 0</h3>
            </a>
          </div>
      </div>
    </section>
  );
}
