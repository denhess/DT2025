"use client"

import React from 'react';

import { Hero } from '@/components/Landingpage/Held/Hero';
import { About } from '@/components/Landingpage/Held/About';
import { BeforeAfter } from '@/components/Landingpage/Held/BeforeAfter';
import { QuoteOne } from '@/components/Landingpage/Held/QuoteOne';
import { FullscreenPictureTwo } from '@/components/Landingpage/Held/FullscreenPictureTwo';
import { QuoteTwo } from '@/components/Landingpage/Held/QuoteTwo';
import { SliderTwo } from '@/components/Landingpage/Held/SliderTwo';
import { QuoteThree } from '@/components/Landingpage/Held/QuoteThree';
import { SliderOne } from '@/components/Landingpage/Held/SliderOne';
import { Footer } from '@/components/Footer';
import { FullscreenPicture } from '@/components/Landingpage/Held/FullscreenPicture';
import { FullscreenPictureThree } from '@/components/Landingpage/Held/FullscreenPictureThree';
import { QuoteFour } from '@/components/Landingpage/Held/QuoteFour';





export default function ErfolgsgeschichtePage() {
  return (
    <>
          <Hero />
          <About />
          <FullscreenPictureThree />
          <QuoteOne />
          <FullscreenPictureTwo />
          <QuoteTwo /> 
          <BeforeAfter />
          <QuoteThree />
          <SliderTwo /> 
          <QuoteFour />
          <SliderOne /> 
          <FullscreenPicture />
          <Footer />
    </>
  );
}