"use client"

import React from 'react';

import { Footer } from "@/components/Footer";
import { AboutDesignToSuccess } from '@/components/AboutDesignToSuccess';
import { HeroDesignToSuccess } from '@/components/HeroDesignToSuccess';
import { TextDesignToSuccess } from '@/components/TextDesignToSuccess';
import { TextDesignToSuccessTwo } from '@/components/TextDesignToSuccessTwo';
import { TextDesignToSuccessThree } from '@/components/TextDesignToSuccessThree';
import { TextDesignToSuccessFour } from '@/components/TextDesignToSuccessFour';
import { ContactDesignToSuccess } from '@/components/ContactDesignToSuccess';




export default function DesignToSuccessPage() {
  return (
    <>
          
          <HeroDesignToSuccess />
          <AboutDesignToSuccess />
          <TextDesignToSuccess />  
          <TextDesignToSuccessTwo />
          <TextDesignToSuccessThree />
          <TextDesignToSuccessFour />
          <ContactDesignToSuccess />
          <Footer />
           
    </>
  );
}