"use client";

import { useRef } from "react";
import { Projects } from "@/data/projects/designtosucess-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";

// Swiper-Typen importieren
import { Swiper as SwiperInstance } from "swiper/types";

gsap.registerPlugin(ScrollTrigger);

export function DesignToSuccessSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  // Erstellen eines Arrays von Refs für jeden Slide
  const slideContentsRef = useRef<Array<HTMLElement | null>>([]);

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
    
    // Titel und Beschreibungstextanimation - nur den aktuellen Slide animieren
    const titleElement = document.getElementById(`slide-title-${index}`);
    const descElement = document.getElementById(`slide-description-${index}`);
    
    if (titleElement && descElement) {
      gsap.to([titleElement, descElement], { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power3.out" 
      });
    }
  };

  const handleSlideStart = (swiper: SwiperInstance) => {
    // Finde die aktiven Slide-Elemente und animiere sie aus
    const activeIndex = swiper.activeIndex;
    const titleElement = document.getElementById(`slide-title-${activeIndex}`);
    const descElement = document.getElementById(`slide-description-${activeIndex}`);
    
    if (titleElement && descElement) {
      gsap.to([titleElement, descElement], { 
        opacity: 0, 
        y: 20, 
        duration: 0.5, 
        ease: "power2.in" 
      });
    }
  };

  const handleSlideEnd = (swiper: SwiperInstance) => {
    // Zurücksetzen der Skalierung für alle Bilder
    Projects.forEach((_, index) => {
      gsap.set(`#slide-image-${index}`, { scale: 1 });
    });
    
    // Setze die Startposition für den neuen aktiven Slide
    const titleElement = document.getElementById(`slide-title-${swiper.activeIndex}`);
    const descElement = document.getElementById(`slide-description-${swiper.activeIndex}`);
    
    if (titleElement && descElement) {
      gsap.set([titleElement, descElement], { opacity: 0, y: 30 });
    }
    
    // Starte die Animation für den neuen aktiven Slide
    animateSlideContent(swiper.activeIndex);
  };

  // Erstelle eine Funktion zum Initialisieren der Slides
  const initializeSlides = () => {
    // Stellen Sie sicher, dass der erste Slide animiert wird
    setTimeout(() => {
      animateSlideContent(0);
    }, 100);
  };

  return (
    <section ref={sectionRef} data-background="light" className="project-slider relative h-screen overflow-hidden px-8 md:px-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => { 
          swiperRef.current = swiper; 
          initializeSlides();
        }}
        onSlideChangeTransitionStart={(swiper) => handleSlideStart(swiper)}
        onSlideChangeTransitionEnd={(swiper) => handleSlideEnd(swiper)}
        className="h-full"
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 overflow-hidden">
              <div
                id={`slide-image-${index}`}
                className="relative w-full h-full"
                style={{ backgroundColor: project.backgroundColor || "transparent" }}
              />
            </div>
            <div 
              className="relative h-full flex flex-col justify-center items-start text-left"
              ref={el => { slideContentsRef.current[index] = el; }}
            >
              <h2
                id={`slide-title-${index}`}
                className="title-element leading-tight tracking-[-0.02em] opacity-0 font-bold"
              >
                {project.title || project.titleEn}
              </h2>
              <h3
                id={`slide-description-${index}`}
                className="description-element mt-10 leading-tight tracking-[-0.02em] opacity-0"
              >
                {project.description || project.descriptionEn}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}