"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { DtLogo } from "./Dt-logo";
import MenuOverlay from "./MenuOverlay";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // useGSAP nutzen

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  // useGSAP statt useEffect nutzen
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#background-check", // Das Element, das den Hintergrund definiert
      start: "top 50%", // Startpunkt des Triggers
      end: "bottom 50%", // Endpunkt des Triggers
      onEnter: () => setIsDarkBackground(false), // Heller Hintergrund → Schwarzer Text
      onLeave: () => setIsDarkBackground(true), // Dunkler Hintergrund → Weißer Text
      onEnterBack: () => setIsDarkBackground(false),
      onLeaveBack: () => setIsDarkBackground(true),
    });
  });

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo mit dynamischer Farbe */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <DtLogo
                  className={clsx(
                    "z-50 w-60 sm:w-60 md:w-60 lg:w-80 cursor-pointer transition-colors duration-300",
                    isMenuOpen ? "text-black" : isDarkBackground ? "text-white" : "text-black"
                  )}
                />
              </Link>
            </div>

            {/* Menü-Button mit dynamischer Farbe */}
            <button
              onClick={handleMenuToggle}
              className="p-2 z-50 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Hauptmenü"
            >
              <span
                className={clsx(
                  "text-xl font-medium transition-colors duration-300",
                  isMenuOpen ? "text-black" : isDarkBackground ? "text-white" : "text-black"
                )}
              >
                {isMenuOpen ? "X" : "MENU"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menü Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
