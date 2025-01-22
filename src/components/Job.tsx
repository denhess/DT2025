'use client';

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
    >
      <YellowBackground />

      {/* Positionierung der Jobbeschreibungen */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col justify-start items-start text-left p-8 mt-20"
      >
        {/* Senior Industrial Designer */}
        <Link href="/karriere/senior-industrial-designer" passHref>
          <h2 className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] mb-4 hover:underline">
            SENIOR INDUSTRIAL DESIGNER (W/M/D)
          </h2>
        </Link>

        {/* Junior Industrial Designer */}
        <Link href="/karriere/junior-industrial-designer" passHref>
          <h2 className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] mb-4 hover:underline">
            JUNIOR INDUSTRIAL DESIGNER (W/M/D)
          </h2>
        </Link>

        {/* Internship Industrial Designer */}
        <Link href="/karriere/industrial-design-internship" passHref>
          <h2 className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] mb-4 hover:underline">
          INDUSTRIAL DESIGN INTERNSHIP (W/M/D)
          </h2>
        </Link>
      </div>
    </section>
  );
}
