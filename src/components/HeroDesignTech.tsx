import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HeroDesignTech() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect for image
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax effect for text (moving slower than image)
    gsap.to(textRef.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="hero h-screen relative overflow-hidden">
      <picture>
        <source
          srcSet="pictures/hero-designtech.webp"
          type="image/webp"
        />
        <img
          ref={imageRef}
          src="pictures/hero-karriere.png"  // Fallback für Browser ohne WebP-Unterstützung
          alt="Karriere Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24"
      >
        <h1 className="font-thin uppercase text-white z-10 text-[8vw] md:text-[9vw] xl:text-[9vw] leading-[0.9] tracking-[-0.02em]">
          IHR ERFOLG 
          <br />
          IST UNSER ANTRIEB 
        </h1>
      </div>
    </section>
  );
}
