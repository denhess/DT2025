"use client";

import { useRef } from "react";
import { Projects } from "@/data/projects/project-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper as SwiperInstance } from "swiper/types";

export function ProjectSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section ref={sectionRef} id="projects" data-background="light" className="project-slider relative h-screen bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full project-slider-container"
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
              {/* Angepasste Navigationsleiste für bessere Mobile-Ansicht */}
              <div className="absolute bottom-0 left-0 right-0 w-full px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center z-10">
                {/* Buttons links unten - vertikal auf Mobilgeräten */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4 sm:mb-0">
                  <a className="btn-gradient-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
                    {project.title || project.titleEn}
                  </a>
                  
                  <a className="btn-gradient-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
                    {project.description || project.descriptionEn}
                  </a>
                </div>
                
                {/* Logo - auf allen Geräten links */}
                <div className="flex items-center self-start sm:self-auto">
                  {project.logo && (
                    <div id={`slide-logo-${index}`} className="h-10 w-auto">
                      <img
                        src={`/${project.logo}`}
                        alt={project.copyright || "Company logo"}
                        className="h-full w-auto object-contain"
                        loading="lazy"
                        style={{ filter: `invert(1) sepia(1) saturate(10000%) hue-rotate(${project.logoColor || '0deg'})` }}
                      />
                    </div>
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