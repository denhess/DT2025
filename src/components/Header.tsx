// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { DtLogo } from "./Dt-logo";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Link */}
          <div className="flex-shrink-0">
            <Link href="/">
              <DtLogo className="z-10 w-80 cursor-pointer text-white" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">MENU</div>
          {/* Navigation Links */}
          {/* <nav className="hidden md:flex space-x-8">
            <Link
              href="/karriere"
              className="text-white hover:text-gray-700 font-medium"
            >
              Karriere
            </Link>
            <Link
              href="/designtech"
              className="text-white hover:text-gray-700 font-medium"
            >
              Design Tech
            </Link>
          </nav> */}

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 rounded-md text-gray-900 hover:text-gray-700"
            aria-expanded={isMenuOpen}
            aria-label="Hauptmenü"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
