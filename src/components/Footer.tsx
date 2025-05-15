"use client";

import Link from "next/link";
import Image from "next/image";
import { DtLogo } from "./Dt-logo";
import { useRef } from "react";
import CookieBanner from "@/components/Cookie/CookieBanner";

interface CookieBannerRef {
  openBanner: () => void;
}

export function Footer() {
  const cookieBannerRef = useRef<CookieBannerRef | null>(null);

  const handleLinkClick = () => {
    cookieBannerRef.current?.openBanner();
    console.log("Link clicked");
  };

  return (
    <footer 
      className="text-white h-auto" 
      style={{ backgroundColor: '#111111' }}
    >
      {/* Logo-Bereich */}
      <div className="py-6 px-8 md:px-8 lg:px-8 pt-20">
        <div className="mb-8">
          <Link href="/">
            <DtLogo className="w-60 md:w-80 text-white" />
          </Link>
        
        {/* Copyright info */}
        <p className="text-sm pt-5">&copy; 2025 Design Tech</p>
        </div>
        
        {/* Hauptbereich mit 5-spaltigem Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-20">
          {/* Spalte 1 - Hauptlinks */}
          <div className="flex flex-col space-y-2">
            <Link href="/designtech" className="block hover:underline hover:text-white">
              <p>DESIGN TECH</p>
            </Link>
            <Link href="/karriere" className="block hover:underline hover:text-white">
              <p>KARRIERE</p>
            </Link>
            <Link href="/designtosuccess" className="block hover:underline hover:text-white">
              <p>DESIGN TO SUCCESS</p>
            </Link>
          </div>

          {/* Spalte 2 - Projektlinks */}
          <div className="flex flex-col space-y-2">
            <Link href="https://www.ammerbucher-design-talk.de/" className="block hover:underline hover:text-white">
              <p>Ammerbucher Design Talk</p>
            </Link>
            <Link href="http://werkzeugderzukunft.de" className="block hover:underline hover:text-white">
              <p>Werkzeug der Zukunft</p>
            </Link>
            <Link href="http://maschine2020.com/de_DE/" className="block hover:underline hover:text-white">
              <p>Maschine 2020</p>
            </Link>
          </div>

          {/* Spalte 3 - Rechtliches */}
          <div className="flex flex-col space-y-2">
            <Link href="/impres" className="block hover:underline hover:text-white">
              <p>Impressum / Rechtlicher Hinweis</p>
            </Link>
            <Link href="/privacy-policy" className="block hover:underline hover:text-white">
              <p>Datenschutzerklärung</p>
            </Link>
            <Link
              href="#"
              className="block hover:underline hover:text-white"
              onClick={handleLinkClick}
            >
              <p>Datenschutzeinstellungen</p>
            </Link>
          </div>

          {/* Spalte 4 - Buttons */}
          <div className="footer-column">
              <div className="flex flex-col items-end space-y-3">
                <a
                  href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
                  className="btn-gradient-trans whitespace-nowrap"
                >
                  VIDEOCALL
                </a>
                
                <a
                  href="tel:+49707391890"
                  className="btn-gradient-trans whitespace-nowrap"
                >
                  +49 7073 91 89 0
                </a>
              </div>
            </div>

          {/* Spalte 5 - Social Icons */}
          <div className="flex justify-start md:justify-end items-start">
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/designtechschmid/posts/?feedView=all"
                className="icon-btn-gradient-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icon/icon-linkedin-white.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://www.kununu.com/de/design-tech1/kultur"
                className="icon-btn-gradient-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icon/icon-kununu-white.svg"
                  alt="Kununu"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CookieBanner-Komponente */}
      <CookieBanner ref={cookieBannerRef} />
    </footer>
  );
}