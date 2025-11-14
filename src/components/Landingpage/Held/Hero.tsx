"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useOptimizedVideo } from "@/hooks/useOptimizedVideo";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const { videoRef, isLoaded, error } = useOptimizedVideo('/landingpage/held/HeaderVideo_held_animation.mp4', true);

  useGSAP(() => {
    if (!containerRef.current || !textRef.current) return;
    
    // Animationen nur starten wenn Video geladen ist
    if (isLoaded) {
      // Parallax effect for video (adjusted for snap scrolling)
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Parallax effect for text (adjusted for snap scrolling)
      gsap.to(textRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
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
    }
  }, [isLoaded]);

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

  if (error) {
    return (
      <section className="hero h-screen relative bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1>Fehler beim Laden des Videos</h1>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} data-background="dark" className="hero h-screen relative overflow-hidden" style={{ backgroundImage: "url('/HeaderVideo-thumbnail.webp')" }}>
      <video 
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        poster="/HeaderVideo-thumbnail.webp"
        preload="metadata"
      >
        <source src="/landingpage/held/HeaderVideo_held_animation.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/landingpage/held/Headervideo_Held_Animation-Mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video>
      
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="/HeaderVideo-thumbnail.webp" 
            alt="Loading..." 
            fill
            className="object-cover opacity-50"
            priority={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        </div>
      )}
      
      <div id="background-check" className="h-screen w-full bg-gray-900" />
      
      <div
        ref={textRef}
        className="absolute bottom-10 sm:bottom-20 flex flex-col px-8 md:px-8 lg:px-8"
        style={{
          opacity: 1,
          visibility: 'visible',
          transform: 'translate3d(0, 0, 0)',
          transition: 'opacity 0.5s ease'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="font-thin uppercase text-white z-10 leading-[0.9] tracking-[-0.02em] text-left">
          ERFOLGSGESCHICHTE<br />
          HAILEY
        </h1>
      </div>
    </section>
  );
}