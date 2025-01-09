// app/page.tsx
"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";

import { MenuOverlay } from "@/components/MenuOverlay";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectSlider } from "@/components/ProjectSlider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(); // GSAP integration

  return (
    <>
      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      
      <main>
        <Hero />
        <About />
        <ProjectSlider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
