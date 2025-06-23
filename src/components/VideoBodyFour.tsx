"use client";

import { useRef } from "react";
import Image from "next/image";
import { useOptimizedVideo } from "@/hooks/useOptimizedVideo";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function VideoBodyFour() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { videoRef, isLoaded, error } = useOptimizedVideo('/Vecoplan_desktop.mp4', true);

  if (error) {
    return (
      <section className="h-screen w-full relative overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2>Video konnte nicht geladen werden</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      data-background="dark" 
      ref={containerRef} 
      className="h-screen w-full relative overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-[140%] object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="/BodyVideo-thumbnail.webp"
          preload="metadata"
          style={{ 
            top: '0%',
            height: '140%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        >
          <source src="/Vecoplan_desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
          <source src="/Vecoplan_mobil.mp4" media="(max-width: 767px)" type="video/mp4" />
        </video>
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-900">
            <Image
              src="/BodyVideo-thumbnail.webp" 
              alt="Loading..." 
              fill
              className="w-full h-full object-cover opacity-50"
              priority={false}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center z-10">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4 sm:mb-0">
          <a className="btn-gradient-white-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
            MASCHINENDESIGN
          </a>
          <a className="btn-gradient-white-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
            Zerkleinerer
          </a>
        </div>
        <div className="flex items-center self-start sm:self-auto">
          <Image
            src="logos/logo-vecoplan-white.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}