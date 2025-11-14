"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectSlider } from "@/components/ProjectSlider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { VideoBodyOne } from "@/components/VideoBodyOne";
import { Ready } from "@/components/Ready";
import { VideoBodyTwo } from "@/components/VideoBodyTwo";
import { VideoBodyThree } from "@/components/VideoBodyThree";
import { VideoBodyFour } from "@/components/VideoBodyFour";

export default function HomeContent() {
  return (
    <>
      <Hero />
      <About />
      <VideoBodyOne />
      <VideoBodyTwo />
      <VideoBodyThree />
      <VideoBodyFour />
      <ProjectSlider />
      <Ready />
      <Contact />
      <Footer />
    </>
  );
}
