"use client";

import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Job() {
  const { t } = useTranslation('karriere');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  // GSAP Animation beim Scrollen
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

  // Hover-Animation für die Links, ähnlich dem MenuOverlay
  useEffect(() => {
    // Nur auf dem Client ausführen
    if (typeof window === 'undefined') return;

    // Ref-Werte innerhalb des Effects kopieren, um Cleanup-Probleme zu vermeiden
    const currentLinkRefs = linkRefs.current.slice();
    const lineElements: HTMLDivElement[] = [];

    // Für jeden Link-Ref
    currentLinkRefs.forEach((link) => {
      if (!link) return;

      // Linie unter dem Text erstellen
      const line = document.createElement('div');
      line.className = 'nav-line';
      Object.assign(line.style, {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '0',
        height: '2px',
        backgroundColor: 'black',
        transformOrigin: 'left center',
        transition: 'none',
        zIndex: '1'
      });
      
      lineElements.push(line);
      
      link.style.position = 'relative';
      link.style.paddingBottom = '2px';
      link.style.display = 'inline-block';
      link.appendChild(line);

      // Animation beim Hover
      link.addEventListener('mouseenter', () => {
        gsap.killTweensOf(line);
        gsap.to(line, {
          width: '100%',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.killTweensOf(line);
        gsap.to(line, {
          width: '0%',
          duration: 0.3,
          ease: 'power2.in'
        });
      });
    });

    // Cleanup beim Unmounting
    return () => {
      lineElements.forEach((line) => {
        if (line && line.parentElement) {
          line.remove();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full text-black"
      data-background="light"
    >
      {/* Positionierung der Jobbeschreibungen */}
      <div
        ref={contentRef}
        className="absolute top-1/2 left-0 p-8 pl-8 md:pl-8 lg:pl-8 transform -translate-y-1/2 flex flex-col items-start"
      >
        {/* Senior Industrial Designer */}
        {/*
        <Link href="/karriere/senior-industrial-designer" passHref>
          <h2 
            ref={(el) => { linkRefs.current[0] = el; }}
            className="leading-tight tracking-[-0.02em] mb-12 cursor-pointer relative py-2 inline-block"
          >
            {t('jobs.senior')}
          </h2>
        </Link>
        */}
        {/* Strich zwischen Jobbeschreibungen */}
        {/*<div className="border-b border-black w-full mb-12" />*/}
        
        {/* Junior Industrial Designer */}
        {/*
        <Link href="/karriere/junior-industrial-designer" passHref>
          <h2 
            ref={(el) => { linkRefs.current[1] = el; }}
            className="leading-tight tracking-[-0.02em] mb-12 cursor-pointer relative py-2 inline-block"
          >
            {t('jobs.junior')}
          </h2>
        </Link>
        */}
        {/* Strich zwischen Jobbeschreibungen */}
        {/*<div className="border-b border-black w-full mb-12" />*/}

        {/* Internship Industrial Designer */}
        <Link href="/karriere/industrial-design-internship" passHref>
          <h2 
            ref={(el) => { linkRefs.current[2] = el; }}
            className="leading-tight tracking-[-0.02em] mb-12 cursor-pointer relative py-2 inline-block"
          >
            {t('jobs.internship')}
          </h2>
        </Link>
      </div>
    </section>
  );
}