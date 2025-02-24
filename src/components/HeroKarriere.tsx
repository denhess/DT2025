"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HeroKarriere() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !textRef.current) return;

    // Parallax effect for text (moving slower than image)
    gsap.to(textRef.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Opacity animation for text
    gsap.to(textRef.current, {
      opacity: 0.1,
      delay: 6,
      duration: 1.5,
      onComplete: () => {
        gsap.to(textRef.current, {
          opacity: 0.1,
          duration: 2,
          ease: "power2.out",
        });
      }
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      opacity: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} data-background="dark" className="hero h-screen relative overflow-hidden">
      
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/KarriereVideo.mp4" type="video/mp4" />
      </video>
     
      <div id="background-check" className="h-screen w-full bg-gray-900" />
      <div
        ref={textRef}
        className="absolute bottom-10 sm:bottom-20 flex flex-col px-8 md:px-16 lg:px-24"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="font-thin uppercase text-white z-10 text-[8vw] md:text-[9vw] xl:text-[9vw] leading-[0.9] tracking-[-0.02em] text-left">
          KARRIERE
        </h1>
      </div>

    </section>
  );
}
