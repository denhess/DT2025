"use client";

import { useState } from "react";
import Link from "next/link";
import { DtLogo } from "./Dt-logo";
import MenuOverlay from "./MenuOverlay";
import clsx from 'clsx';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <DtLogo 
                  className={clsx(
                    'z-50 w-80 cursor-pointer',
                    isMenuOpen ? 'text-black' : 'text-white'
                  )} 
                />
              </Link>
            </div>

            <button
              onClick={handleMenuToggle}
              className="p-2 z-50"
              aria-expanded={isMenuOpen}
              aria-label="Hauptmenü"
            >
              <span className={clsx(
                'text-xl font-medium',
                isMenuOpen ? 'text-black' : 'text-white'
              )}>
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