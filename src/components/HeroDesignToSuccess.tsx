"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HeroDesignToSuccess() {
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
  }, []);

  return (
    <section ref={containerRef} className="hero h-screen relative overflow-hidden">
      
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/DesignToSuccessVideo.mp4" type="video/mp4" />
      </video>
     
      
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24"
      >
        <h1 className="font-thin uppercase text-white z-10 text-[8vw] md:text-[9vw] xl:text-[9vw] leading-[0.9] tracking-[-0.02em]">
          DESIGN&nbsp;TO&nbsp;SUCCESS
        </h1>
      </div>
    </section>
  );
}
