"use client";

import Link from "next/link";
import Image from "next/image";
import { DtLogo } from "@/components/Dt-logo";
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
    <footer className="text-black h-auto bg-white">
      <div className="py-6 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Linke Spalte - Logo und Copyright */}
          <div className="col-span-12 md:col-span-6">
            <div className="mb-8">
              <Link href="/">
                <DtLogo className="w-60 md:w-80 text-black" />
              </Link>
            </div>
            <p className="text-sm">&copy; 2025 Design Tech</p>
          </div>

          {/* Mittlere Spalte - Projekte & Navigation */}
          <div className="col-span-6 md:col-span-2 space-y-4">
            <Link href="/designtech" className="block hover:underline hover:text-black">
              <p>DESIGN TECH</p>
            </Link>
            <Link href="/karriere" className="block hover:underline hover:text-black">
            <p>KARRIERE</p>
            </Link>
            <Link href="/designtosuccess" className="block hover:underline hover:text-black">
            <p>DESIGN TO SUCCESS</p>
            </Link>
            <Link href="https://www.ammerbucher-design-talk.de/" className="block hover:underline hover:text-black">
            <p>Ammerbucher Design Talk</p>
            </Link>
            <Link href="http://werkzeugderzukunft.de" className="block hover:underline hover:text-black">
            <p>Werkzeug der Zukunft</p>
            </Link>
            <Link href="http://maschine2020.com/" className="block hover:underline hover:text-black">
            <p>Maschine 2020</p>
            </Link>
          </div>

          {/* Rechte Spalte - Rechtliches */}
          <div className="col-span-6 md:col-span-3 space-y-4">
            <Link href="/impres" className="block hover:underline hover:text-black">
            <p>Impressum / Rechtlicher Hinweis</p>
            </Link>
            <Link href="/privacy-policy" className="block hover:underline hover:text-black">
            <p>Datenschutzerklärung</p>
            </Link>
            <Link
              href="#"
              className="block hover:underline hover:text-black"
              onClick={handleLinkClick}
            >
              <p>Datenschutzeinstellungen</p>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="col-span-12 md:col-span-1 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
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
            <Link
              href="https://www.kununu.com/de/design-tech1/kultur"
              className="hover:opacity-75 transition-opacity"
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon/icon-kununu-black.svg"
                alt="Kununu"
                width={28}
                height={28}
                className="transition-opacity hover:opacity-75"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* CookieBanner-Komponente */}
      <CookieBanner ref={cookieBannerRef} />
    </footer>
  );
}
