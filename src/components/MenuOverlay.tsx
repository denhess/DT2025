'use client';

import { useEffect, useRef, useState } from "react"; // useState hinzufügen
import Link from "next/link";
import Image from "next/image"; // Image importieren
import gsap from "gsap";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);  // Zustand, um zu überprüfen, ob es der Client ist


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
      className="fixed inset-0 z-40 hidden opacity-0 flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(circle at center, #ffffff 0%, #FFFF00 100%)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      }}
    >
      <div ref={contentRef} className="text-center space-y-8">
        {/* Verkleinerter Abstand zwischen den Links */}
        <Link href="/designtech" onClick={handleLinkClick}>
          <h2 className="text-black text-4xl mb-6 hover:underline transition-all duration-300">DESIGN TECH</h2>
        </Link>

        {/* Karriere ohne Margin */}
        <Link href="/karriere" onClick={handleLinkClick}>
          <h2 className="text-black text-4xl mb-6 hover:underline transition-all duration-300">KARRIERE</h2>
        </Link>

        {/* Karriere ohne Margin */}
        <Link href="/designtosuccess" onClick={handleLinkClick}>
          <h2 className="text-black text-4x1 mb-6 hover:underline transition-all duration-300">DESIGN TO SUCCESS</h2>
        </Link>

        {/* Button mit gleichem Margin oben und unten wie bei den Links */}
        <div className="flex justify-center ">
          <a
            href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
            className="text-black text-2xl px-[1vw] py-1 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300"
          >
            VIDEOCALL
          </a>
        </div>

        <div className="space-y-4">
          {/* Links zu externen Seiten */}
          <p className="text-black cursor-pointer text-2xl hover:underline transition-all duration-300">
            <a
              href="http://werkzeugderzukunft.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Werkzeug der Zukunft
            </a>
          </p>
          <p className="text-black cursor-pointer text-2xl hover:underline transition-all duration-300">
            <a
              href="http://maschine2020.com/de_DE/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maschine 2020
            </a>
          </p>
        </div>

        <div className="text-black flex justify-center space-x-6 mt-12">
          {/* LinkedIn SVG Icon als Image */}
          <Link
            href="https://www.linkedin.com/company/designtechschmid/posts/?feedView=all"
            className="hover:opacity-75 transition-opacity"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icon/icon-linkedin-black.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              className="transition-opacity hover:opacity-75"
            />
          </Link>

          {/* Xing SVG Icon als Image */}
          <Link
            href="https://www.kununu.com/de/design-tech1/kultur"
            className="hover:opacity-75 transition-opacity"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
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
