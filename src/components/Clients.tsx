'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const clients = [
    { logo: '/logos/logo-held-white.svg', website: 'https://www.client1.com' },
    { logo: '/logos/logo-held-white.svg', website: 'https://www.client2.com' },
    { logo: '/logos/logo-held-white.svg', website: 'https://www.client3.com' },
    { logo: '/logos/logo-held-white.svg', website: 'https://www.client4.com' },
    { logo: '/logos/logo-held-white.svg', website: 'https://www.client5.com' },
    { logo: '/logos/logo-held-white.svg', website: 'https://www.client6.com' },
  ];

  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

    // Text Fade-in Animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative min-h-screen w-full"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="clients-container grid grid-cols-3 grid-rows-2 gap-8 mt-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className="client-logo p-6 flex justify-center items-center rounded-lg transition-all duration-300 ease-in-out"
              >
                <a href={client.website} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img
                    src={client.logo}
                    alt={`Logo von ${client.website}`}
                    className="max-w-[150px] max-h-[150px] object-contain mx-auto transition-all duration-300 ease-in-out"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-logo:hover img {
          filter: invert(1) sepia(1) saturate(5) hue-rotate(180deg);
        }
      `}</style>
    </section>
  );
}
