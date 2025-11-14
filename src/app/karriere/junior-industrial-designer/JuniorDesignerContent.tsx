"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import { YellowBackgroundTop } from '@/components/BG/YellowBackgroundTop';
import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';

export default function JuniorDesignerContent() {
  const { t } = useTranslation('karriere');

  return (
    <>
      <section className="relative h-screen w-full" data-background="light">
        <YellowBackgroundTop/>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-8 md:px-8 lg:px-8">
            <h1 className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
              {t('job_details.junior.title')}
            </h1>
          </div>
        </div>
      </section>
      
      <div className="py-16" data-background="light">
        <div className="text-black">
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                {t('job_details.junior.intro_passion')}
                <br />
                <br />
                {t('job_details.junior.intro_team')}
                <br />
                <br />
                <b>{t('job_details.junior.intro_thinking')}</b>
                <br />
                {t('job_details.junior.intro_company')}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                {t('job_details.junior.location_text')}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('job_details.junior.qualification_title')}</b>
                <br />
                <ul className="list-none pl-0">
                  {(t('job_details.junior.qualification_items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index}>_ {item}</li>
                  ))}
                </ul>
              </p>
            </div>

            <div>
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('job_details.junior.offer_title')}</b>
                <br />
                <ul className="list-none pl-0">
                  {(t('job_details.junior.offer_items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index}>_ {item}</li>
                  ))}
                </ul>
                <br />
                <b>
                  {t('job_details.junior.application_text')}
                </b>
                <br />
                {t('job_details.junior.contact_text')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactJob />
      <Job />
      <Footer />
    </>
  );
}
