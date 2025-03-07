"use client";

import { useRef } from "react";
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
    gsap.to(`#slide-image-${index}`, { scale: 1.1, duration: 10, ease: "none" });
    const timeline = gsap.timeline();
    timeline.to(
      [`#slide-title-${index}`, `#slide-description-${index}`, `#slide-logo-${index}`],
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  };

  const handleSlideStart = () => {
    gsap.to([".slide-content"], { opacity: 0, y: 20, duration: 0.5, ease: "power2.in" });
  };

  const handleSlideEnd = (swiper: SwiperInstance) => {
    Projects.forEach((_, index) => {
      gsap.set(`#slide-image-${index}`, { scale: 1 });
    });
    gsap.set(
      [`#slide-title-${swiper.activeIndex}`, `#slide-description-${swiper.activeIndex}`, `#slide-logo-${swiper.activeIndex}`],
      { opacity: 0, y: 30 }
    );
    animateSlideContent(swiper.activeIndex);
  };

  return (
    <section ref={sectionRef} data-background="light" className="project-slider relative h-screen bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          animateSlideContent(0);
        }}
        onSlideChangeTransitionStart={handleSlideStart}
        onSlideChangeTransitionEnd={(swiper) => handleSlideEnd(swiper)}
        className="h-full"
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 overflow-hidden">
              <div id={`slide-image-${index}`} className="relative w-full h-full">
                <picture>
                  <source srcSet={`/${project.imgMobile}`} media="(max-width: 767px)" />
                  <img src={`/${project.img}`} alt="" className="w-full h-full object-cover" />
                </picture>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute inset-0 flex flex-col justify-between px-8 md:px-16 lg:px-24">
              <div className="pb-5">
                  {/* Logo links oben */}
                  {project.logo && (
                    <div className="w-24 md:w-32 h-10 md:h-12 opacity-0">
                      
                    </div>
                  )}
                </div>
                {/* Text links unten */}
                <div className="pb-10">
                <div className="pb-5">
                  {/* Logo links oben */}
                  {project.logo && (
                    <div id={`slide-logo-${index}`} className="w-24 md:w-20 h-8 md:h-6 opacity-0">
                      <img
                        src={`/${project.logo}`}
                        alt={project.copyright || "Company logo"}
                        className="object-contain"
                        loading="lazy"
                        style={{ filter: `invert(1) sepia(1) saturate(10000%) hue-rotate(${project.logoColor || '0deg'})` }}
                      />
                    </div>
                  )}
                </div>
                  <h2
                    id={`slide-title-${index}`}
                    className="font-extralight uppercase tracking-tighter opacity-0"
                    style={{ color: project.textColor }} // Hier wird die textColor angewendet
                  >
                    {project.title || project.titleEn}
                  </h2>
                  <p
                    id={`slide-description-${index}`}
                    className="font-extralight uppercase tracking-tighter leading-tight opacity-0"
                    style={{ color: project.textColor }} // Hier wird die textColor angewendet
                  >
                    {project.description || project.descriptionEn}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
