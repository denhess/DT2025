"use client";

import { useRef } from "react";
import { Projects } from "@/data/projects/project-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper as SwiperInstance } from "swiper/types";

export function ProjectSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

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
        }}
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
              <div className="absolute inset-0 flex flex-col justify-between px-8 md:px-8 lg:px-8">
              <div className="pb-5">
                  {/* Logo links oben */}
                  {project.logo && (
                    <div className="w-24 md:w-32 h-10 md:h-12">
                      
                    </div>
                  )}
                </div>
                {/* Text links unten */}
                <div className="pb-10">
                <div className="pb-5">
                  {/* Logo links oben */}
                  {project.logo && (
                    <div id={`slide-logo-${index}`} className="w-24 md:w-20 h-8 md:h-6">
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
                    className="font-extralight uppercase tracking-tighter"
                    style={{ color: project.textColor }}
                  >
                    {project.title || project.titleEn}
                  </h2>
                  <p
                    id={`slide-description-${index}`}
                    className="font-extralight uppercase tracking-tighter leading-tight"
                    style={{ color: project.textColor }}
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