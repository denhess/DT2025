"use client"

import React from 'react';

import { HeroDesignTech } from "@/components/HeroDesignTech";
import { About } from "@/components/About";
import { ProjectSlider } from "@/components/ProjectSlider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function DesignTechPage() {
  return (
    <>
          <HeroDesignTech />
          <About />
          <ProjectSlider />
          <Contact />
          <Footer />
    </>
  );
}