"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import { Footer } from "@/components/Footer";

export default function Impressum() {
  const { t } = useTranslation('legal');

  return (
    <>
      <div>
        <div className="text-black min-h-screen flex justify-center items-start pt-8">
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl pt-24 pb-16">
            {/* Impressum */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('imprint.title')}</b>
                <br />
                <br />
                {t('imprint.company')} <br />
                {t('imprint.address.street')} <br />
                {t('imprint.address.city')} <br />
                {t('imprint.address.country')} <br />
                <br />
                {t('imprint.ceo.title')} <br />
                {t('imprint.ceo.name')} <br />
                <br />
                {t('imprint.management.title')} <br />
                {t('imprint.management.name')} <br />
                <br />
                {t('imprint.vatId.title')} <br />
                {t('imprint.vatId.description')}: {t('imprint.vatId.number')} <br />
                <br />
                {t('imprint.contact.phone')} <br />
                {t('imprint.contact.fax')} <br />
                {t('imprint.contact.email')} <br />
                <br />
                {t('imprint.responsible.title')} <br />
                {t('imprint.responsible.name')} {t('imprint.responsible.address')} <br />
                <br />
                {t('imprint.disclaimer.title')} <br />
                <br />
                {t('imprint.disclaimer.content')} <br />
                <br />
              </p>
            </div>

            {/* Rechtlicher Hinweis / Nutzungsbedingungen */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('legal_notice.title')}</b>
                <br />
                <br />
                {t('legal_notice.court_decision')}
                <br />
                <br />
                {t('legal_notice.links_policy')}
                <br />
                <br />
                {t('legal_notice.contact_info')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}