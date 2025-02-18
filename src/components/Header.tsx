"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Neu importiert
import { DtLogo } from "./Dt-logo";
import MenuOverlay from "./MenuOverlay";
import clsx from "clsx";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname(); // Aktuelle Route

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  useEffect(() => {
    // Diese Funktion initialisiert den Observer
    const setupObserver = () => {
      // Initialer Check
      const visibleSection = document.querySelector("[data-background]");
      if (visibleSection) {
        setIsDark(visibleSection.getAttribute("data-background") === "dark");
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const background = entry.target.getAttribute("data-background");
              setIsDark(background === "dark");
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      // Alle Sections beobachten
      const sections = document.querySelectorAll("[data-background]");
      sections.forEach((section) => observer.observe(section));

      return observer;
    };

    // Warten auf DOM-Update nach Routenwechsel
    const timer = setTimeout(() => {
      const observer = setupObserver();
      
      // Cleanup
      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]); // Effekt wird bei Routenwechsel neu ausgeführt

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
                    isMenuOpen && "opacity-0"
                  )}
                />
              </Link>

              {isMenuOpen && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <DtLogo className="text-black w-60 sm:w-60 md:w-60 lg:w-80" />
                </div>
              )}
            </div>

            {/* Menü-Button */}
            <button
              onClick={handleMenuToggle}
              className="p-2 z-50 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Hauptmenü"
            >
              <span
                className={clsx(
                  "text-xl font-medium transition-colors duration-300",
                  isMenuOpen
                    ? "text-black"
                    : isDark
                      ? "text-white"
                      : "text-black"
                )}
              >
                {isMenuOpen ? "X" : "MENU"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}