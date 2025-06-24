"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { DtLogo } from "./Dt-logo";
import { useRef } from "react";
import CookieBanner from "@/components/Cookie/CookieBanner";

// TypeScript-Deklaration für gtag
declare global {
  function gtag(...args: any[]): void;
}

interface CookieBannerRef {
  openBanner: () => void;
}

export function Footer() {
  const { t } = useTranslation('common');
  const cookieBannerRef = useRef<CookieBannerRef | null>(null);

  // TRACKING-FUNKTION - Footer Videocall
  const trackFooterVideocall = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'design_inquiry', {
        'event_category': 'Contact',
        'event_label': 'Footer Videocall Button',
        'contact_method': 'email_footer',
        'page_location': window.location.href
      });
      console.log('Footer Videocall Button clicked - tracked in GA4');
    }
  };

  // TRACKING-FUNKTION - Footer Phone
  const trackFooterPhone = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'phone_contact', {
        'event_category': 'Contact',
        'event_label': 'Footer Phone Button',
        'contact_method': 'phone_footer',
        'page_location': window.location.href
      });
      console.log('Footer Phone Button clicked - tracked in GA4');
    }
  };

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
      <div className="py-6 px-8 md:px-8 lg:px-8 pt-20 pb-16">
        <div className="mb-8">
          <Link href="/">
            <DtLogo className="w-60 md:w-80 text-white opacity-70" />
          </Link>
        
        {/* Copyright info */}
        <p className="text-sm pt-5 opacity-70">&copy; 2025 Design Tech</p>
        </div>
        
        {/* Hauptbereich mit responsivem Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-2 mt-20">
          {/* Spalte 1 - Hauptlinks */}
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-white cursor-pointer text-sm md:text-base xl:text-lg font-bold opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('navigation.home')}
            </Link>
            <Link href="/#projects" className="text-white cursor-pointer text-sm md:text-base xl:text-lg font-bold opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('navigation.projects')}
            </Link>
            <Link href="/designtech" className="text-white cursor-pointer text-sm md:text-base xl:text-lg font-bold opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('navigation.designtech')}
            </Link>
            <Link href="/designtosuccess" className="text-white cursor-pointer text-sm md:text-base xl:text-lg font-bold opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('navigation.designtosuccess')}
            </Link>
            <Link href="/karriere" className="text-white cursor-pointer text-sm md:text-base xl:text-lg font-bold opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('navigation.career')}
            </Link>
          </div>

          {/* Spalte 2 - Projektlinks */}
          <div className="flex flex-col space-y-2">
            <Link href="/erfolgsgeschichte" className="text-white cursor-pointer text-sm md:text-base xl:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('footer.successStory')}
            </Link>
            <Link href="https://www.ammerbucher-design-talk.de/" className="text-white cursor-pointer text-sm md:text-base xl:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('footer.designTalk')}
            </Link>
            <Link href="http://werkzeugderzukunft.de" className="text-white cursor-pointer text-sm md:text-base xl:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('footer.toolOfFuture')}
            </Link>
            <Link href="http://maschine2020.com/de_DE/" className="text-white cursor-pointer text-sm md:text-base xl:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('footer.machine2020')}
            </Link>
          </div>

          {/* Spalte 3 - Rechtliches */}
          <div className="flex flex-col space-y-2">
            <Link href="/impres" className="text-white cursor-pointer text-sm md:text-base xl:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('footer.imprint')}
            </Link>
            <Link href="/privacy-policy" className="text-white cursor-pointer text-sm md:text-base xl:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block">
              {t('footer.privacy')}
            </Link>
            <Link
              href="#"
              className="text-white cursor-pointer text-sm md:text-base xl:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 inline-block"
              onClick={handleLinkClick}
            >
              {t('footer.privacySettings')}
            </Link>
          </div>

          {/* Spalte 4 - Buttons */}
          <div className="footer-column sm:col-span-1 md:col-span-1 xl:col-span-1">
            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-col items-start sm:items-center md:items-start xl:items-end space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-0 md:space-y-3 xl:space-x-0 xl:space-y-3">
              
              <a
                href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
                onClick={trackFooterVideocall}
                className="btn-gradient-trans whitespace-nowrap text-sm opacity-70 hover:opacity-100 transition-all duration-300"
              >
                {t('contact.videocall')}
              </a>
              
              <a
                href="tel:+49707391890"
                onClick={trackFooterPhone}
                className="btn-gradient-trans whitespace-nowrap text-sm opacity-70 hover:opacity-100 transition-all duration-300"
              >
                {t('contact.phone')}
              </a>
            </div>
          </div>

          {/* Spalte 5 - Social Icons */}
          <div className="flex justify-start sm:justify-center md:justify-start xl:justify-end items-start sm:col-span-1 md:col-span-1 xl:col-span-1">
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/designtechschmid/posts/?feedView=all"
                className="icon-btn-gradient-white opacity-70 hover:opacity-100 transition-all duration-300"
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
                className="icon-btn-gradient-white opacity-70 hover:opacity-100 transition-all duration-300"
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