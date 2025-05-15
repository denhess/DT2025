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
  const scrollArrowRef = useRef<HTMLDivElement>(null);  // Neuer Ref für den Scroll-Pfeil
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

    // Animation für den Scroll-Pfeil
    if (scrollArrowRef.current) {
      // Wiederholtes Pulsen des Pfeils
      gsap.to(scrollArrowRef.current, {
        y: 10,
        opacity: 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Ausblenden beim Scrollen
      gsap.to(scrollArrowRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "10% top",
          scrub: true,
        },
      });
    }
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

  // Funktion zum sanften Scrollen zum nächsten Abschnitt
  const scrollToNextSection = () => {
    const nextSection = containerRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Falls kein nächster Abschnitt gefunden wird, einfach eine Bildschirmhöhe nach unten scrollen
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
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
        <source src="/landingpage/held/HeaderVideo_held_animation.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/landingpage/held/Headervideo_Held_Animation-Mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video>
      <div id="background-check" className="h-screen w-full bg-gray-900" />
      
      {/* Scroll-Pfeil */}
      <div 
        ref={scrollArrowRef} 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      >
        <div className="flex flex-col items-center text-white">
          <p className="mb-1 sm:mb-2 text-xs sm:text-sm">Mehr entdecken</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6 sm:w-8 sm:h-8"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      
      <div
        ref={textRef}
        className="absolute bottom-20 sm:bottom-20 flex flex-col px-8 md:px-16 lg:px-24"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-left">
            <a
              href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
              className="text-white mt-5 px-[2vw] py-1 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <h3 className="text-sm sm:text-base md:text-lg">info@designtech.eu</h3>
            </a>
          </div>
          <div className="flex justify-left">
            <a
              href="tel:+49707391890"
              className="text-white mt-3 sm:mt-5 px-[2vw] py-1 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <h3 className="text-sm sm:text-base md:text-lg">+49 7073 91 89 0</h3>
            </a>
          </div>
      </div>
    </section>
  );
}