"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { Projects } from "@/data/projects/project-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper as SwiperInstance } from "swiper/types";

export function ProjectSlider() {
  const { t, i18n } = useTranslation('common');
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  // Funktion um den korrekten Text basierend auf der Sprache zu bekommen
  const getProjectText = (project: any, field: 'title' | 'description') => {
    const isEnglish = i18n.language === 'en';
    
    if (field === 'title') {
      // Versuche zuerst die entsprechende Sprach-Version
      if (isEnglish && project.titleEn) return project.titleEn;
      if (!isEnglish && project.title) return project.title;
      
      // Fallback auf die verfügbare Version
      return project.title || project.titleEn || '';
    }
    
    if (field === 'description') {
      // Versuche zuerst die entsprechende Sprach-Version
      if (isEnglish && project.descriptionEn) return project.descriptionEn;
      if (!isEnglish && project.description) return project.description;
      
      // Fallback auf die verfügbare Version
      return project.description || project.descriptionEn || '';
    }
    
    return '';
  };

  // Funktion um spezielle Projekt-Typen zu übersetzen
  const translateProjectType = (projectTitle: string): string => {
    const translations: { [key: string]: string } = {
      // Deutsche Begriffe -> Translation Keys
      'HMI Design': 'projects.hmiDesign',
      'WERKZEUGDESIGN': 'projects.toolDesign', 
      'CORPORATE INDUSTRIAL DESIGN': 'projects.corporateDesign',
      'BAUMASCHINENDESIGN': 'projects.constructionMachine',
      'MASCHINENDESIGN': 'projects.machineDesign',
      'ANLAGENDESIGN': 'projects.plantDesign',
      
      // Englische Begriffe (falls schon vorhanden)
      'MACHINE DESIGN': 'projects.machineDesign',
      'TOOL DESIGN': 'projects.toolDesign',
      'CONSTRUCTION MACHINE DESIGN': 'projects.constructionMachine',
      'PLANT DESIGN': 'projects.plantDesign'
    };

    // Prüfe ob eine Übersetzung existiert
    if (translations[projectTitle]) {
      return t(translations[projectTitle]);
    }
    
    // Falls keine Übersetzung gefunden, gib den ursprünglichen Text zurück
    return projectTitle;
  };

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
                {/* Desktop Bild mit Next.js Image Komponente */}
                <div className="hidden md:block relative w-full h-full">
                  <Image
                    src={`/${project.img}`}
                    alt={getProjectText(project, 'title') || ""}
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
                    alt={getProjectText(project, 'title') || ""}
                    fill
                    priority={index === 0}
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
            <div className="relative h-full">
              {/* Angepasste Navigationsleiste für bessere Mobile-Ansicht */}
              <div className="absolute bottom-0 left-0 right-0 w-full px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center z-10">
                {/* Buttons links unten - vertikal auf Mobilgeräten */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4 sm:mb-0">
                  <a className="btn-gradient-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
                    {translateProjectType(getProjectText(project, 'title'))}
                  </a>
                  
                  <a className="btn-gradient-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
                    {getProjectText(project, 'description')}
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