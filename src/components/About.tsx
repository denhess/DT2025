// components/About.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;

    // Create the animation
    gsap.to(gradientRef.current, {
      backgroundSize: '200% 200%',
      duration: 10,
      repeat: -1,
      ease: 'none',
      yoyo: true
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div 
        ref={gradientRef}
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, #FFFF00 0%, #ffffff 100%)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-gray-900">
            Bei <strong>Design Tech</strong> entwickeln wir praxisorientierte, maßgeschneiderte Lösungen, die exakt auf die Bedürfnisse Ihres Unternehmens und Marktes abgestimmt sind. Mit unserer jahrzehntelangen Expertise im Maschinendesign und tiefem Branchenwissen unterstützen wir Sie dabei, Ihre Marktführerschaft zu sichern und auszubauen.
          </p>
        </div>
      </div>
    </section>
  );
}