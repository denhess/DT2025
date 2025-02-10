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
            <p className="text-sm">Design Tech 2025</p>
          </div>

          {/* Mittlere Spalte - Projekte & Navigation */}
          <div className="col-span-6 md:col-span-2 space-y-4">
            <Link href="/designtech" className="block hover:underline hover:text-black">
              DESIGN TECH
            </Link>
            <Link href="/karriere" className="block hover:underline hover:text-black">
              KARRIERE
            </Link>
            <Link href="/designtosuccess" className="block hover:underline hover:text-black">
              DESIGN TO SUCCESS
            </Link>
            <Link href="/maschine-2020" className="block hover:underline hover:text-black">
              Maschine 2020
            </Link>
            <Link href="/werkzeug-der-zukunft" className="block hover:underline hover:text-black">
              Werkzeug der Zukunft
            </Link>
          </div>

          {/* Rechte Spalte - Rechtliches */}
          <div className="col-span-6 md:col-span-3 space-y-4">
            <Link href="/impres" className="block hover:underline hover:text-black">
              Impressum / Rechtlicher Hinweis
            </Link>
            <Link href="/privacy-policy" className="block hover:underline hover:text-black">
              Datenschutzerklärung
            </Link>
            <Link
              href="#"
              className="block hover:underline hover:text-black"
              onClick={handleLinkClick}
            >
              Datenschutzeinstellungen
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
