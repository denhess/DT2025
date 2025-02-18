"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function VideoBody() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    // Parallax effect for video
    gsap.to(videoRef.current, {
      yPercent: 30,
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
    <section 
    data-background="dark" 
    ref={containerRef} className="hero h-screen relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
      >
        {/* Video for larger screens */}
        <source src="/BodyVideo.mp4" media="(min-width: 768px)" type="video/mp4" />
        {/* Video for smaller screens */}
        <source src="/BodyVideo-small.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video>
    </section>
  );
}
