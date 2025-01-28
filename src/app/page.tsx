"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectSlider } from "@/components/ProjectSlider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import CookieBanner from "@/components/Cookie/CookieBanner";

export default function Home() {
  return (
    <>
      <CookieBanner/>
      <Hero />
      <About />
      <ProjectSlider />
      <Contact />
      <Footer />
    </>
  );
}