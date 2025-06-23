"use client";

import { useRef } from "react";
import { Projects } from "@/data/projects/designtosucess-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Swiper-Typen importieren
import { Swiper as SwiperInstance } from "swiper/types";

export function DesignToSuccessSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  // Erstellen eines Arrays von Refs für jeden Slide
  const slideContentsRef = useRef<Array<HTMLElement | null>>([]);

  return (
    <section ref={sectionRef} data-background="light" className="project-slider relative h-screen overflow-hidden">
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
              <div
                className="relative w-full h-full"
                style={{ backgroundColor: project.backgroundColor || "transparent" }}
              />
            </div>
            
            {/* About-Layout angewendet: zentrierter Text mit max-width */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-8xl px-8 md:px-8 lg:px-8">
                <div className="leading-tight tracking-[-0.02em]">
                  <h2 className="font-bold max-w-prose max-w-7xl mx-auto">
                    {project.title || project.titleEn}
                  </h2>
                  <h2 className="mt-10 max-w-prose max-w-7xl mx-auto">
                    {project.description || project.descriptionEn}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}