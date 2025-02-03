"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const texts = [
  "Text 1",
  "Text 2",
  "Text 3",
  "Text 4"
];

export function Industries() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000); // Alle 8 Sekunden Text wechseln (4 Sekunden erscheinen + 4 Sekunden warten)
    
    return () => clearInterval(interval); // Aufräumen bei Komponenten-Unmount
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Text animiert rein (von rechts nach links)
    tl.to(`#text-${currentTextIndex}`, { x: "0%", opacity: 1, duration: 1, ease: "power2.out" });

    // Text bleibt 4 Sekunden sichtbar
    tl.to(`#text-${currentTextIndex}`, { opacity: 1, duration: 0.5, delay: 4 });

    // Text animiert raus (nach links)
    tl.to(`#text-${currentTextIndex}`, { x: "-100%", opacity: 0, duration: 1, ease: "power2.in" });

    // Nach der Animation wird der Text wieder unsichtbar und verschwindet
    tl.set(`#text-${currentTextIndex}`, { opacity: 0 });

  }, [currentTextIndex]);

  return (
    <div className="relative w-full h-20 flex justify-center items-center overflow-hidden">
      {texts.map((text, index) => (
        <div
          key={index}
          id={`text-${index}`}
          className="absolute opacity-0 text-xl font-bold"
          style={{ left: "100%" }} // Startposition außerhalb des Bildschirms
        >
          {text}
        </div>
      ))}
    </div>
  );
}
