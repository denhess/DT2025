"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const clients = [
    { logo: "/logos/logo-woehner-grey.svg", website: "https://www.woehner.de/de/" },
    { logo: "/logos/logo-arburg-grey.svg", website: "https://www.arburg.com/de/de/" },
    { logo: "/logos/logo-washtec-grey.svg", website: "https://www.washtec.de/" },
    { logo: "/logos/logo-liebherr-grey.svg", website: "https://www.liebherr.com/de-de/firmengruppe/startseite-3705202" },
    { logo: "/logos/logo-trumpf-grey.svg", website: "https://www.trumpf.com/de_DE/" },
    { logo: "/logos/logo-sew-eurodrive-grey.svg", website: "https://www.sew-eurodrive.de/startseite.html" },
  ];

  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

    gsap.from(textRef.current, {
      opacity: 0,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} data-background="light" className="bg-white relative min-h-screen w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="clients-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-6 mt-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className="client-logo p-6 flex justify-center items-center rounded-lg transition-all duration-300 ease-in-out"
              >
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <Image
                    src={client.logo}
                    alt={`Logo von ${client.website}`}
                    width={250}
                    height={100}
                    className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] object-contain transition-all duration-300 ease-in-out"
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