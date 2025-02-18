"use client";

import { useRef } from 'react';
import Link from 'next/link'; // Importiere Link von Next.js
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from './BG/YellowBackground';

gsap.registerPlugin(ScrollTrigger);

export function Job() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current || !sectionRef.current) return;

    // Text Fade-in Animation
    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full text-black"
      data-background="light"
    >
      <YellowBackground />

      {/* Positionierung der Jobbeschreibungen */}
      <div
        ref={contentRef}
        className="absolute top-1/2 left-0 p-8 pl-8 md:pl-16 lg:pl-24 transform -translate-y-1/2 flex flex-col items-start"
      >
        {/* Senior Industrial Designer */}
        <Link href="/karriere/senior-industrial-designer" passHref>
          <h2 className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] mb-12 hover:underline">
            SENIOR INDUSTRIAL DESIGNER (W/M/D)
          </h2>
        </Link>

        {/* Strich zwischen Jobbeschreibungen */}
        <div className="border-b border-black w-full mb-12" />

        {/* Junior Industrial Designer */}
        <Link href="/karriere/junior-industrial-designer" passHref>
          <h2 className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] mb-12 hover:underline">
            JUNIOR INDUSTRIAL DESIGNER (W/M/D)
          </h2>
        </Link>

        {/* Strich zwischen Jobbeschreibungen */}
        <div className="border-b border-black w-full mb-12" />

        {/* Internship Industrial Designer */}
        <Link href="/karriere/industrial-design-internship" passHref>
          <h2 className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] mb-12 hover:underline">
            INDUSTRIAL DESIGN INTERNSHIP (W/M/D)
          </h2>
        </Link>
      </div>
    </section>
  );
}
