// KarrierePage.tsx
"use client"


import React from 'react';

import { HeroKarriere } from "@/components/HeroKarriere";
import { AboutKarriere } from "@/components/AboutKarriere";
import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';


export default function KarrierePage() {
  return (
    <>
              <HeroKarriere />
              <AboutKarriere />
              <Job />
              <ContactJob />
              <Footer />
        </>
  );
}