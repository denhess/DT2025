"use client";

import { useRef } from "react";
import Image from "next/image";
import { Projects } from "@/data/projects/project-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper as SwiperInstance } from "swiper/types";

gsap.registerPlugin(ScrollTrigger);

export function ProjectSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top -50px",
      onEnter: () => {
        gsap.to(".header-color-change", { color: "#ffffff", duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".header-color-change", { color: "#000000", duration: 0.3 });
      },
    });
  }, []);

  const animateSlideContent = (index: number) => {
    // Bildanimation
    gsap.to(`#slide-image-${index}`, { scale: 1.1, duration: 10, ease: "none" });
    
    // Finde die zu animierenden Elemente durch direkten Zugriff
    const titleElement = document.getElementById(`slide-title-${index}`);
    const descElement = document.getElementById(`slide-description-${index}`);
    const logoElement = document.getElementById(`slide-logo-${index}`);
    
    // Nur animieren, wenn die Elemente existieren
    const elements = [titleElement, descElement, logoElement].filter(Boolean);
    
    if (elements.length > 0) {
      const timeline = gsap.timeline();
      timeline.to(
        elements,
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }
  };

  const handleSlideStart = (swiper: SwiperInstance) => {
    // Aktueller Slide-Index
    const currentIndex = swiper.activeIndex;
    
    // Finde die zu animierenden Elemente
    const titleElement = document.getElementById(`slide-title-${currentIndex}`);
    const descElement = document.getElementById(`slide-description-${currentIndex}`);
    const logoElement = document.getElementById(`slide-logo-${currentIndex}`);
    
    // Nur animieren, wenn die Elemente existieren
    const elements = [titleElement, descElement, logoElement].filter(Boolean);
    
    if (elements.length > 0) {
      gsap.to(elements, { opacity: 0, y: 20, duration: 0.5, ease: "power2.in" });
    }
  };

  const handleSlideEnd = (swiper: SwiperInstance) => {
    // Zurücksetzen der Bildgrößen für alle Slides
    Projects.forEach((_, index) => {
      gsap.set(`#slide-image-${index}`, { scale: 1 });
    });
    
    // Setze Startwerte für die Elemente des neuen aktiven Slides
    const titleElement = document.getElementById(`slide-title-${swiper.activeIndex}`);
    const descElement = document.getElementById(`slide-description-${swiper.activeIndex}`);
    const logoElement = document.getElementById(`slide-logo-${swiper.activeIndex}`);
    
    const elements = [titleElement, descElement, logoElement].filter(Boolean);
    
    if (elements.length > 0) {
      gsap.set(elements, { opacity: 0, y: 30 });
    }
    
    // Starte Animation für den neuen aktiven Slide
    animateSlideContent(swiper.activeIndex);
  };

  return (
    <section ref={sectionRef} id="projects" data-background="light" className="project-slider relative h-screen bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Initialisierung mit Verzögerung, um sicherzustellen, dass der DOM geladen ist
          setTimeout(() => {
            animateSlideContent(0);
          }, 100);
        }}
        onSlideChangeTransitionStart={(swiper) => handleSlideStart(swiper)}
        onSlideChangeTransitionEnd={(swiper) => handleSlideEnd(swiper)}
        className="h-full"
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 overflow-hidden">
              <div id={`slide-image-${index}`} className="relative w-full h-full">
                {/* Desktop Bild mit Next.js Image Komponente */}
                <div className="hidden md:block relative w-full h-full">
                  <Image
                    src={`/${project.img}`}
                    alt={project.title || ""}
                    fill
                    priority={index === 0}
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                  />
                </div>
                
                {/* Mobile Bild mit Next.js Image Komponente */}
                <div className="block md:hidden relative w-full h-full">
                  <Image
                    src={`/${project.imgMobile}`}
                    alt={project.title || ""}
                    fill
                    priority={index === 0}
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24">
                {/* Text unten mit Logo über dem Titel */}
                <div className="pb-10 md:pb-16">
                  {/* Logo über dem Titel */}
                  {project.logo && (
                    <div id={`slide-logo-${index}`} className="w-24 md:w-20 h-8 md:h-6 mb-4 opacity-0 relative">
                      <Image
                        src={`/${project.logo}`}
                        alt={project.copyright || "Company logo"}
                        fill
                        style={{ 
                          objectFit: 'contain',
                          filter: `invert(1) sepia(1) saturate(10000%) hue-rotate(${project.logoColor || '0deg'})` 
                        }}
                      />
                    </div>
                  )}
                
                  <h2
                    id={`slide-title-${index}`}
                    className="text-2xl md:text-3xl lg:text-4xl font-extralight uppercase tracking-tighter opacity-0"
                    style={{ color: project.textColor }}
                  >
                    {project.title || project.titleEn}
                  </h2>
                  
                  <p
                    id={`slide-description-${index}`}
                    className="text-base md:text-lg lg:text-xl mt-2 md:mt-3 font-extralight uppercase tracking-tighter leading-tight opacity-0"
                    style={{ color: project.textColor }}
                  >
                    {project.description || project.descriptionEn}
                  </p>
                  
                  {/* Copyright, falls vorhanden */}
                  {project.copyright && (
                    <p className="text-xs text-white/70 mt-2">
                      © {project.copyright}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}