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
    gsap.to(`#slide-image-${index}`, { scale: 1.1, duration: 10, ease: "none" });
    gsap.to(
      [`#slide-title-${index}`, `#slide-description-${index}`],
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  };

  const handleSlideStart = () => {
    gsap.to(".slide-content", { opacity: 0, y: 20, duration: 0.5, ease: "power2.in" });
  };

  const handleSlideEnd = (swiper: SwiperInstance) => {
    Projects.forEach((_, index) => {
      gsap.set(`#slide-image-${index}`, { scale: 1 });
    });
    gsap.set(
      [`#slide-title-${swiper.activeIndex}`, `#slide-description-${swiper.activeIndex}`],
      { opacity: 0, y: 30 }
    );
    animateSlideContent(swiper.activeIndex);
  };

  return (
    <section ref={sectionRef} className="project-slider relative h-screen overflow-hidden px-8 md:px-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => { swiperRef.current = swiper; animateSlideContent(0); }}
        onSlideChangeTransitionStart={handleSlideStart}
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
            <div className="relative h-full flex flex-col justify-center items-start text-left px-8 md:px-16">
              <h2
                id={`slide-title-${index}`}
                className="slide-content text-black text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] opacity-0 font-bold"
              >
                {project.title || project.titleEn}
              </h2>
              <p
                id={`slide-description-${index}`}
                className="slide-content text-black text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em] opacity-0"
              >
                {project.description || project.descriptionEn}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
