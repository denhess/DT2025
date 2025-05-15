"use client";

import { useRef } from "react";
import { Projects } from "@/data/projects/moment-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper as SwiperInstance } from 'swiper/types';

gsap.registerPlugin(ScrollTrigger);

export function MomentSlider() {
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
    gsap.set([`#slide-title-${swiper.activeIndex}`, `#slide-description-${swiper.activeIndex}`, `#slide-logo-${swiper.activeIndex}`], { opacity: 0, y: 30 });
    animateSlideContent(swiper.activeIndex);
  };

  return (
    <section 
      ref={sectionRef} 
      data-background="light" 
      className="project-slider relative h-screen bg-black overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
        }}
        onSwiper={(swiper) => { 
          swiperRef.current = swiper; 
          animateSlideContent(0); 
        }}
        onSlideChangeTransitionStart={handleSlideStart}
        onSlideChangeTransitionEnd={(swiper) => handleSlideEnd(swiper)}
        className="h-full project-slider-container"
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 overflow-hidden">
              <div id={`slide-image-${index}`} className="relative w-full h-full">
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
              {/* Untere Navigationsleiste mit Buttons und Logo - wie im ProjectSlider */}
              <div className="absolute bottom-0 left-0 right-0 w-full px-8 py-6 flex justify-between items-center z-10">

                
                {/* Logo rechts unten */}
                <div className="flex items-center">
                  {project.copyright && (
                    <div id={`slide-logo-${index}`} className="slide-content" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                      <p className="text-xs text-white/70">
                        © {project.copyright}
                      </p>
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