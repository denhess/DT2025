"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { DtLogo } from "./Dt-logo";
import MenuOverlay from "./MenuOverlay";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  useEffect(() => {
    const sections = document.querySelectorAll("[data-background]");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setIsDark(section.getAttribute("data-background") === "dark"),
        onEnterBack: () => setIsDark(section.getAttribute("data-background") === "dark"),
        onLeave: () => setIsDark(section.getAttribute("data-background") !== "dark"),
        onLeaveBack: () => setIsDark(section.getAttribute("data-background") !== "dark"),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Dynamisches Logo */}
            <div className="flex-shrink-0 relative">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <DtLogo
                  className={clsx(
                    "z-50 w-60 sm:w-60 md:w-60 lg:w-80 cursor-pointer transition-colors duration-300",
                    isDark ? "text-white" : "text-black",
                    isMenuOpen && "opacity-0" // Verstecken, wenn das Menü offen ist
                  )}
                />
              </Link>

              {/* Fixes schwarzes Logo, das nur angezeigt wird, wenn das Menü offen ist */}
              {isMenuOpen && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <DtLogo className="text-black w-60 sm:w-60 md:w-60 lg:w-80" />
                </div>
              )}
            </div>

            {/* Menü-Button bleibt dynamisch */}
            <button
              onClick={handleMenuToggle}
              className="p-2 z-50 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Hauptmenü"
            >
              <span className={clsx("text-xl font-medium transition-colors duration-300", isMenuOpen ? "text-black" : isDark ? "text-white" : "text-black")}>
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
