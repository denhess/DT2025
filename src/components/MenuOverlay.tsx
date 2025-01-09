import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Animate overlay in
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
        display: 'flex'
      });

      // Animate content in
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2
        });
      }
    } else {
      // Animate overlay out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        display: 'none'
      });
    }
  }, [isOpen]);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-yellow-300 text-black z-40 hidden opacity-0 flex-col items-center justify-center"
    >
      <div ref={contentRef} className="text-center space-y-8">
       
         <h1 className="text-5xl font-bold mb-12">DESIGN TECH</h1> 
         <Link href="/karriere">        
         <h2 className="text-4xl mb-12">KARRIERE</h2>
        </Link>

        <div className="inline-block border border-black rounded-full px-8 py-3 mb-12">
          <span className="text-2xl">VIDEOCALL</span>
        </div>
        <div className="space-y-4 text-xl">
          <p>Werkzeug der Zukunft &gt;</p>
          <p>Maschine 2020 &gt;</p>
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          <Link href="https://linkedin.com" className="text-xl">in</Link>
          <Link href="https://xing.com" className="text-xl">x</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;