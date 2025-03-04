"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ClientsAlternative() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const clients = [
    { logo: "/logos/logo-woehner-grey.svg", website: "https://www.woehner.de/de/" },
    { logo: "/logos/logo-arburg-grey.svg", website: "https://www.arburg.com/de/de/" },
    { logo: "/logos/logo-washtec-grey.svg", website: "https://www.washtec.de/" },
    { logo: "/logos/logo-liebherr-grey.svg", website: "https://www.liebherr.com/de-de/firmengruppe/startseite-3705202" },
    { logo: "/logos/logo-trumpf-grey.svg", website: "https://www.trumpf.com/de_DE/" },
    { logo: "/logos/logo-sew-eurodrive-grey.svg", website: "https://www.sew-eurodrive.de/startseite.html" },
    { logo: "/logos/logo-kuka-grey.svg", website: "https://www.kuka.com/de-de" },
    { logo: "/logos/logo-waldrichsiegen-grey.svg", website: "https://www.waldrichsiegen.de/" },
    { logo: "/logos/logo-imagasti-grey.svg", website: "https://ima.it/foodanddairy/machine/combiseptic/" },
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
      <div className="absolute inset-0 flex flex-col justify-start mt-20">
        <p className="mb-4 w-full px-8 md:px-16 lg:px-24 text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
          Diese <b>Marktführer</b> vertrauen auf unser Design
        </p>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="clients-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-6 mt-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className="client-logo p-10 flex justify-center items-center rounded-lg transition-all duration-300 ease-in-out"
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
                    className="max-w-[180px] sm:max-w-[140px] md:max-w-[180
                  px] object-contain transition-all duration-300 ease-in-out"
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