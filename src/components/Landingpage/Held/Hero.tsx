"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
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
              console.log("Video started playing successfully");
            })
            .catch(error => {
              console.error("Error playing video:", error);
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
    // Modify GSAP animations to work with snap scrolling
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
    <section ref={containerRef} data-background="dark" className="hero h-screen relative overflow-hidden" style={{ backgroundImage: "url('/HeaderVideo-thumbnail.png')" }}>
      <video 
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        poster="/HeaderVideo-thumbnail.png"
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src="/Landingpage/Held/HeaderVideo_held_animation.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/Landingpage/Held/HeaderVideo_held_animation.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video>
      <div id="background-check" className="h-screen w-full bg-gray-900" />
      <div
        ref={textRef}
        className="absolute bottom-10 sm:bottom-20 flex flex-col px-8 md:px-16 lg:px-24"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-left">
            <a
              href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
              className="text-white mt-5 px-[2vw] py-1 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <h3>info@designtech.eu</h3>
            </a>
          </div>
          <div className="flex justify-left">
            <a
              href="tel:+49707391890"
              className="text-white mt-5 px-[2vw] py-1 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <h3>+49 7073 91 89 0</h3>
            </a>
          </div>

      </div>
    </section>
  );
}