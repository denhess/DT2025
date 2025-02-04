"use client"

import React from 'react';

import { Footer } from "@/components/Footer";
import { AboutDesignToSuccess } from '@/components/AboutDesignToSuccess';
import { DesignToSuccessSlider } from '@/components/DesignToSuccessSlider';
import { HeroDesignToSuccess } from '@/components/HeroDesignToSuccess';
import { TextDesignToSuccess } from '@/components/TextDesignToSuccess';




export default function DesignToSuccessPage() {
  return (
    <>
          
          <HeroDesignToSuccess />
          <AboutDesignToSuccess />
          <TextDesignToSuccess />  
          <DesignToSuccessSlider />
          <Footer />
           
    </>
  );
}