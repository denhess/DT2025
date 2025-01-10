// components/Footer.tsx
'use client';

import Link from 'next/link';
import { Linkedin, Building2 } from 'lucide-react';
import { DtLogo } from './Dt-logo';

export function Footer() {
  return (
    <footer className="bg-[#FFFF00] text-black">
      {/* Horizontale Linie */}

        <div className="border-t border-black w-full"></div>

      
      <div className="py-6 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Linke Spalte - Logo und Copyright */}
          <div className="col-span-6">
            <div className="mb-8">
              <Link href="/">
                <DtLogo className="w-80 text-black" />
              </Link>
            </div>
            <p className="bottom-4 text-sm">Design Tech 2025</p>
          </div>

          {/* Mittlere Spalte - Projekte & Navigation */}
          <div className="col-span-2 space-y-4">
            <Link href="/maschine-2020" className="block hover:opacity-70">
              Maschine 2020
            </Link>
            <Link href="/werkzeug-der-zukunft" className="block hover:opacity-70">
              Werkzeug der Zukunft
            </Link>
            <Link href="/jobs" className="block hover:opacity-70">
              Jobs
            </Link>
            <Link href="/uber-uns" className="block hover:opacity-70">
              Über uns
            </Link>
          </div>

          {/* Rechte Spalte - Rechtliches */}
          <div className="col-span-3 space-y-4">
            <Link href="/impressum" className="block hover:opacity-70">
              Impressum
            </Link>
            <Link href="/rechtlicher-hinweis" className="block hover:opacity-70">
              Rechtlicher Hinweis
            </Link>
            <Link href="/datenschutz" className="block hover:opacity-70">
              Datenschutzerklärung
            </Link>
            <Link href="/privatsphare" className="block hover:opacity-70">
              Privatsphäre Einstellungen
            </Link>
          </div>

          {/* Social Icons */}
          <div className="col-span-1 space-y-4">
            <Link 
              href="https://linkedin.com" 
              className="block hover:opacity-70"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link 
              href="https://kununu.com" 
              className="block hover:opacity-70"
              aria-label="Kununu"
            >
              <Building2 size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}