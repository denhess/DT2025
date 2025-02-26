"use client"

import React from 'react';

import { HeroDesignTech } from "@/components/HeroDesignTech";
import { Footer } from "@/components/Footer";
import { AboutDesignTech } from '@/components/AboutDesignTech';
import { Clients } from '@/components/Clients';
import { Awards } from '@/components/Awards';
import { ClosingKarriere } from '@/components/ClosingKarriere';
import { Industries } from '@/components/Industries';
import { ClientsAlternative } from '@/components/ClientsAlternative';



export default function DesignTechPage() {
  return (
    <>
          
          <HeroDesignTech />
          <AboutDesignTech />
          <Clients />
          <Awards />
          <ClientsAlternative />
          <ClosingKarriere/>
          <Industries />
          <Footer />
           
    </>
  );
}