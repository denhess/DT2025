"use client";

import { useEffect, useRef, useState } from "react"; // useState hinzufügen
import Link from "next/link";
import gsap from "gsap";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);  // Zustand, um zu überprüfen, ob es der Client ist
  const [bgColor, setBgColor] = useState("transparent"); // Dynamischer Style für den Button

  // useEffect, um sicherzustellen, dass der Code nur auf dem Client ausgeführt wird
  useEffect(() => {
    setIsClient(true); // Setzt den Zustand auf true, wenn der Client verfügbar ist
  }, []);

  useEffect(() => {
    if (isOpen && isClient) {  // Überprüfen, ob der Code im Client ausgeführt wird
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
        display: "flex",
      });

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        display: "none",
      });
    }
  }, [isOpen, isClient]);  // `isClient` zur Dependency-Liste hinzugefügt

  const handleLinkClick = () => {
    onClose();
  };

  if (!isClient) {
    return null; // Verhindert das Rendern während des SSR
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-[#FFFF00] text-black z-40 hidden opacity-0 flex-col items-center justify-center"
    >
      <div ref={contentRef} className="text-center space-y-8">
        {/* Verkleinerter Abstand zwischen den Links */}
        <Link href="/designtech" onClick={handleLinkClick}>
          <h2 className="text-4xl mb-8 hover:underline transition-all duration-300">DESIGN TECH</h2>
        </Link>

        {/* Karriere ohne Margin */}
        <Link href="/karriere" onClick={handleLinkClick}>
          <h2 className="text-4xl hover:underline transition-all duration-300">KARRIERE</h2>
        </Link>

        {/* Button mit gleichem Margin oben und unten wie bei den Links */}
        <div
          className="inline-block border border-black rounded-full px-8 py-3 my-8 cursor-pointer hover:bg-black hover:text-[#FFFF00] transition-all duration-300 z-10"
          style={{ backgroundColor: bgColor }} // Dynamischer Style für den Button
        >
          <a
            href="mailto:beispiel@email.com?subject=Anfrage%20über%20Webseite&body=Sehr%20geehrter%20Herr/Frau,%0A%0Aich%20habe%20eine%20Frage%20zu%20Ihrem%20Produkt.%20Könnten%20Sie%20mir%20bitte%20weitere%20Informationen%20geben?%0A%0AMit%20freundlichen%20Grüßen%2C%0A[Dein%20Name]"
            className="text-2xl"
          >
            VIDEOCALL
          </a>
        </div>

        <div className="space-y-4">
          {/* Links zu externen Seiten */}
          <p className="cursor-pointer text-2xl hover:underline transition-all duration-300">
            <a
              href="http://werkzeugderzukunft.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Werkzeug der Zukunft
            </a>
          </p>
          <p className="cursor-pointer text-2xl hover:underline transition-all duration-300">
            <a
              href="http://maschine2020.com/de_DE/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maschine 2020
            </a>
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          {/* LinkedIn SVG Icon als Bild */}
          <Link
            href="https://www.linkedin.com/company/designtechschmid/posts/?feedView=all"
            className="hover:opacity-75 transition-opacity"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/icon-linkedin-black.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              className="transition-opacity hover:opacity-75"
            />
          </Link>

          {/* Xing SVG Icon als Bild */}
          <Link
            href="https://www.kununu.com/de/design-tech1/kultur"
            className="hover:opacity-75 transition-opacity"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon/icon-kununu-black.svg" // Sicherstellen, dass du auch das Xing-Icon dort gespeichert hast
              alt="Kununu"
              width={28}
              height={28}
              className="transition-opacity hover:opacity-75"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
