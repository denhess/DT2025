"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export function VideoBody() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Funktion zum Starten des Videos
    const playVideo = () => {
      if (videoRef.current) {
        // Video explizit laden
        videoRef.current.load();
        // Versuch, das Video zu spielen
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setVideoLoaded(true);
              console.log("BodyVideo started playing successfully");
            })
            .catch(error => {
              console.error("Error playing BodyVideo:", error);
              // Versuch, nach einem Benutzerinteraktionsereignis erneut abzuspielen
              document.addEventListener('touchstart', () => {
                videoRef.current?.play();
              }, { once: true });
            });
        }
      }
    };
    
    // Video nach dem Mounting neu laden und abspielen
    playVideo();
    
    // Event-Listener für Seitenwechsel zurück
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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
        className={`absolute inset-0 w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        poster="/BodyVideo-thumbnail.png"
        preload="metadata"
        onCanPlay={() => setVideoLoaded(true)}
      >
        {/* Video for larger screens */}
        <source src="/BodyVideo.mp4" media="(min-width: 768px)" type="video/mp4" />
        {/* Video for smaller screens */}
        <source src="/BodyVideo-small.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video>
    </section>
  );
}