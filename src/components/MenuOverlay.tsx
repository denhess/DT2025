import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Linkedin, X } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
        display: "flex",
      });

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        display: "none",
      });
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-[#FFFF00] text-black z-40 hidden opacity-0 flex-col items-center justify-center"
    >
      
      <div ref={contentRef} className="text-center space-y-8">
      

        <Link href="/designtech" onClick={handleLinkClick}>
          <h2 className="text-4xl mb-12">DESIGN TECH</h2>
        </Link>

        <Link href="/karriere" onClick={handleLinkClick}>
          <h2 className="text-4xl mb-12">KARRIERE</h2>
        </Link>

        <div
          className="inline-block border border-black rounded-full px-8 py-3 mb-12 cursor-pointer"
          onClick={handleLinkClick}
        >
          <span className="text-2xl">VIDEOCALL</span>
        </div>

        <div className="space-y-4 text-xl">
          <p className="cursor-pointer" onClick={handleLinkClick}>
            Werkzeug der Zukunft &gt;
          </p>
          <p className="cursor-pointer" onClick={handleLinkClick}>
            Maschine 2020 &gt;
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <Link
            href="https://linkedin.com"
            className="hover:opacity-75 transition-opacity"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </Link>
          <Link
            href="https://xing.com"
            className="hover:opacity-75 transition-opacity"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <X size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
