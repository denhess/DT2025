"use client";

import { useRef } from "react";
import { Projects } from "@/data/projects/moment-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper as SwiperInstance } from 'swiper/types';

gsap.registerPlugin(ScrollTrigger);

export function MomentSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  // Refs für Slide-Inhalte
  const slideContentRefs = useRef<Array<HTMLElement | null>>([]);

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
    <section 
      ref={sectionRef} 
      data-background="light" 
      className="project-slider relative h-screen bg-black overflow-hidden"
    >
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
                {/* Hier das picture Element für responsive Bilder */}
                <picture>
                  <source srcSet={`/${project.imgMobile}`} media="(max-width: 767px)" />
                  <img 
                    src={`/${project.img}`} 
                    alt={project.metaDescriptionEN || "Moment image"} 
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </picture>
                <div className="absolute inset-0 bg-black/25" />
              </div>
            </div>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 flex flex-col justify-between px-8 md:px-16 lg:px-24"
                ref={el => { slideContentRefs.current[index] = el as HTMLElement | null; }}
              >
                <div className="pb-5">
                  {/* Logo-Container mit ID für GSAP */}
                  <div id={`slide-logo-${index}`} className="w-24 md:w-32 h-10 md:h-12 opacity-0">
                    {/* Hier kann ein Logo platziert werden */}
                  </div>
                </div>
                {/* Text links unten */}
                <div className="pb-10">
                  {/* Titel mit ID für GSAP-Animation */}
                  <h2 
                    id={`slide-title-${index}`} 
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-bold opacity-0"
                  >
                    {project.title || project.titleEn}
                  </h2>
                  
                  {/* Beschreibung mit ID für GSAP-Animation */}
                  <p 
                    id={`slide-description-${index}`} 
                    className="text-white/90 text-xl md:text-2xl mt-4 max-w-2xl opacity-0"
                  >
                    {project.description || project.descriptionEn}
                  </p>
                  
                  {/* Copyright hinzugefügt */}
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