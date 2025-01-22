"use client"


import React from 'react';

import { AboutKarriere } from "@/components/AboutKarriere";
import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';



export default function JuniorIndustrialDesignerPage() {
  return (
    <>
              <AboutKarriere />
              <ContactJob />
              <Job />
              <Footer />
              
        </>
  );
}