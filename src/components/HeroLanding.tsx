"use client";

import { useOptimizedHero } from "@/hooks/useOptimizedHero";

interface HeroLandingProps {
  /** H1 der Seite. Zeilenumbruch mit \n möglich (wird zu <br/>). */
  title: string;
  /** Intro-Absatz unter der H1 (pro Seite individuell). */
  description?: string;
  /** Liste der Spezialisierungen (studioweit – Default unten). */
  specializations?: string[];
  /** Kleines Label über der Spezialisierungs-Liste. */
  specializationsLabel?: string;
  /** Kennzahlen / Beweispunkte (studioweit – Default unten). */
  proofPoints?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  videoSrc?: string;
  videoSrcMobile?: string;
  thumbnail?: string;
}

// Studioweite Defaults – auf allen vier Landingpages gleich.
const DEFAULT_SPECIALIZATIONS = [
  "Maschinendesign",
  "Produktdesign",
  "User Experience",
  "Designstrategie",
  "Markenwirkung im B2B",
];

const DEFAULT_PROOF_POINTS = [
  "40+ Jahre Erfahrung",
  "200+ internationale Design Awards",
  "Weltweit die Einzigen, die sich auf Maschinenbau spezialisiert haben",
  "Weltmarktführer als Kunden",
];

const DEFAULT_CTA_HREF =
  "mailto:info@designtech.eu?subject=Anfrage%20f%C3%BCr%20ein%20Erstgespr%C3%A4ch&body=Sehr%20geehrte%20Frau%20Mayer%2C%0A%0A";

/**
 * Gemeinsame erste Sektion (Hero) für die Landingpages
 * (Maschinendesign, Produktdesign, Industrial Design, Designstrategie).
 *
 * Gleiches Layout/Design auf allen vier Seiten; Headline und Intro-Text
 * kommen pro Seite über Props. Spezialisierungen, Kennzahlen und Button
 * sind studioweite Defaults und damit überall identisch (überschreibbar).
 */
export function HeroLanding({
  title,
  description,
  specializations = DEFAULT_SPECIALIZATIONS,
  specializationsLabel = "Spezialisierungen",
  proofPoints = DEFAULT_PROOF_POINTS,
  ctaLabel = "Erstgespräch vereinbaren",
  ctaHref = DEFAULT_CTA_HREF,
  videoSrc = "/HeaderVideo.mp4",
  videoSrcMobile = "/HeaderVideo-small.mp4",
  thumbnail = "/HeaderVideo-thumbnail.webp",
}: HeroLandingProps) {
  // enableAnimations: false -> der dekorative Auto-Fade des Hero-Hooks
  // bleibt aus, damit Text, Listen und Button dauerhaft lesbar sind.
  const { containerRef, videoRef, videoLoaded } = useOptimizedHero({
    enableAnimations: false,
    videoSrc,
    videoSrcMobile,
  });

  const handleCtaClick = () => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "email_click", {
        event_category: "Contact",
        event_label: "Hero Erstgespräch Button",
        contact_method: "email_hero",
        page_location: window.location.href,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      data-background="dark"
      className="hero relative min-h-screen overflow-hidden flex items-end"
      style={{
        backgroundImage: `url('${thumbnail}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        poster={thumbnail}
        preload="none"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Abdunklung für die Lesbarkeit des Textes über dem Video */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      <div className="relative z-10 w-full px-8 md:px-8 lg:px-8 pt-32 pb-16 md:pb-20">
        <div className="max-w-5xl">
          <h1 className="font-thin uppercase text-white leading-[0.95] tracking-[-0.02em] text-3xl sm:text-4xl md:text-6xl xl:text-7xl mb-6">
            {title.split("\n").map((line, index, arr) => (
              <span key={index}>
                {line}
                {index < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {description && (
            <p className="font-thin text-white opacity-90 text-lg md:text-2xl leading-snug max-w-3xl mb-10">
              {description}
            </p>
          )}

          {specializations.length > 0 && (
            <div className="mb-8">
              {specializationsLabel && (
                <p className="uppercase tracking-[0.2em] text-white opacity-50 text-xs md:text-sm mb-3">
                  {specializationsLabel}
                </p>
              )}
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {specializations.map((item) => (
                  <li
                    key={item}
                    className="font-thin text-white text-base md:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {proofPoints.length > 0 && (
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2 mb-10 max-w-4xl">
              {proofPoints.map((item) => (
                <li
                  key={item}
                  className="font-thin text-white opacity-80 text-sm md:text-base flex items-start gap-2"
                >
                  <span aria-hidden className="opacity-70">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <a
            href={ctaHref}
            onClick={handleCtaClick}
            className="btn-gradient inline-block whitespace-nowrap text-sm md:text-base"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
