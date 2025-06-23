"use client"

import React from 'react';

import { Hero } from '@/components/Landingpage/Held/Hero';
import { TextOne } from '@/components/Landingpage/Held/TextOne';
import { FullscreenPictureTwo } from '@/components/Landingpage/Held/FullscreenPictureTwo';
import { SplitscreenOne } from '@/components/Landingpage/Held/SplitscreenOne';
import { TextTwo } from '@/components/Landingpage/Held/TextTwo';
import { SplitscreenTwo } from '@/components/Landingpage/Held/SplitscreenTwo';
import { SplitscreenThree } from '@/components/Landingpage/Held/SplitscreenThree';
import { Footer } from '@/components/Footer';
import { FullscreenPicture } from '@/components/Landingpage/Held/FullscreenPicture';
import { FullscreenPictureThree } from '@/components/Landingpage/Held/FullscreenPictureThree';
import { FullscreenPictureFour } from '@/components/Landingpage/Held/FullscreenPictureFour';
import { FullscreenPictureFive } from '@/components/Landingpage/Held/FullscreenPictureFive';
import { FullscreenPictureSix } from '@/components/Landingpage/Held/FullscreenPictureSix';
import { TextThree } from '@/components/Landingpage/Held/TextThree';






export default function ErfolgsgeschichtePage() {
  return (
    <>
          <Hero />
          <TextOne />
          <FullscreenPicture />
          <SplitscreenOne />
          <TextTwo />
          <SplitscreenTwo />
          <SplitscreenThree />
          <FullscreenPictureTwo />
          <FullscreenPictureThree />
          <FullscreenPictureFour />
          <FullscreenPictureFive />
          <FullscreenPictureSix />
          <TextThree />
          <Footer />
    </>
  );
}