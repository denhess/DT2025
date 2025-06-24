"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import { YellowBackgroundTop } from "@/components/BG/YellowBackgroundTop";
import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';

export default function IndustrialDesignInternship() {
  const { t } = useTranslation('karriere');

  return (
    <>
      <section className="relative h-screen w-full" data-background="light">
        <YellowBackgroundTop/>
        
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-8 md:px-8 lg:px-8">
            <p className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
              {t('job_details.internship.title')}
            </p>
          </div>
        </div>
      </section>
      
      <div className="py-16" data-background="light">
        <div className="text-black">
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('job_details.internship.intro_bold')}</b>
                <br />
                <br />
                {t('job_details.internship.intro_study')}
                <br />
                <br />
                {t('job_details.internship.intro_real')}
                <br />
                <br />
                {t('job_details.internship.intro_team')}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('job_details.internship.expectations_title')}</b>
                <br />
                <br />
                {(t('job_details.internship.expectations_items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <span key={index} className="flex items-start space-x-3 mb-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </span>
                ))}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('job_details.internship.requirements_title')}</b>
                <br />
                <br />
                {(t('job_details.internship.requirements_items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <span key={index} className="flex items-start space-x-3 mb-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </span>
                ))}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('job_details.internship.takeaways_title')}</b>
                <br />
                <br />
                {(t('job_details.internship.takeaways_items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <span key={index} className="flex items-start space-x-3 mb-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </span>
                ))}
              </p>
            </div>

            <div>
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('job_details.internship.apply_title')}</b>
                <br />
                <br />
                {t('job_details.internship.apply_text')}
                <br />
                <br />
                <b>{t('job_details.internship.apply_bold')}</b>
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