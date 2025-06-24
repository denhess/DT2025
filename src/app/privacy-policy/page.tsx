"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation('legal');

  return (
    <>
      <div>
        <div className="text-black min-h-screen flex justify-center items-start pt-8">
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl pt-24 pb-16">

            {/* Datenschutz */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('privacy.title')}</b>
              </p>
            </div>

            {/* 1. Datenschutz auf einen Blick */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('privacy.overview.title')}</b>
                <br />
                {t('privacy.overview.intro')}
                <br />
                <br />
                <b>{t('privacy.data_collection.title')}</b>
                <br />
                <b>{t('privacy.data_collection.responsible')}</b>
                <br />
                {t('privacy.data_collection.responsible_answer')}
                <br />
                <br />
                <b>{t('privacy.data_collection.how')}</b>
                <br />
                {t('privacy.data_collection.how_answer')}
                <br />
                <br />
                <b>{t('privacy.data_collection.purpose')}</b>
                <br />
                {t('privacy.data_collection.purpose_answer')}
                <br />
                <br />
                <b>{t('privacy.data_collection.rights')}</b>
                <br />
                {t('privacy.data_collection.rights_answer')}
                <br />
                <br />
                <b>{t('privacy.analysis_tools.title')}</b>
                <br />
                {t('privacy.analysis_tools.content')}
              </p>
            </div>

            {/* 2. Allgemeine Hinweise */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('privacy.general.title')}</b>
                <br />
                <b>{t('privacy.general.protection.title')}</b>
                <br/>
                {t('privacy.general.protection.content')}
                <br/>
                <br/>
                <b>{t('privacy.general.consent.title')}</b>
                <br/>
                {t('privacy.general.consent.content')}
                <br/>
                <br/>
                <b>{t('privacy.general.complaint.title')}</b>
                <br/>
                {t('privacy.general.complaint.content')}
                <br/>
                <br/>
                <b>{t('privacy.general.portability.title')}</b>
                <br/>
                {t('privacy.general.portability.content')}
                <br/>
                <br/>
                <b>{t('privacy.general.ssl.title')}</b>
                <br/>
                {t('privacy.general.ssl.content')}
                <br/>
                <br/>
                <b>{t('privacy.general.rights.title')}</b>
                <br/>
                {t('privacy.general.rights.content')}
                <br/>
                <br/>
                <b>{t('privacy.general.spam.title')}</b>
                <br/>
                {t('privacy.general.spam.content')}
                <br/>
                <br/>
              </p>
            </div>

            {/* 3. Datenerfassung */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('privacy.data_website.title')}</b>
                <br />
                <b>{t('privacy.data_website.cookies.title')}</b>
                <br/>
                {t('privacy.data_website.cookies.content')}
                <br/>
                <br/>
                <b>{t('privacy.data_website.server_logs.title')}</b>
                <br/>
                {t('privacy.data_website.server_logs.intro')}
                <br/>
                {t('privacy.data_website.server_logs.list')}
                <br/>
                <br/>
                {t('privacy.data_website.server_logs.legal_basis')}
                <br/>
                <br/>
                <b>{t('privacy.data_website.contact_form.title')}</b>
                <br/>
                {t('privacy.data_website.contact_form.content')}
                <br/>
                <br/>
                <b>{t('privacy.data_website.comments.title')}</b>
                <br/>
                {t('privacy.data_website.comments.content')}
                <br/>
                <b>{t('privacy.data_website.comments.ip_storage')}</b>
                <br/>
                {t('privacy.data_website.comments.ip_content')}
                <br/>
                <b>{t('privacy.data_website.comments.duration')}</b>
                <br/>
                {t('privacy.data_website.comments.duration_content')}
                <br/>
                <b>{t('privacy.data_website.comments.legal_basis')}</b>
                <br/>
                {t('privacy.data_website.comments.legal_content')}
                <br/>
                <br/>
              </p>
            </div>

            {/* 4. Analyse Tools */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('privacy.analytics.title')}</b>
                <br />
                <b>{t('privacy.analytics.google.title')}</b>
                <br />
                {t('privacy.analytics.google.content')}
                <br />
                <br />
                <b>{t('privacy.analytics.anonymization.title')}</b>
                <br />
                {t('privacy.analytics.anonymization.content')}
                <br />
                <br />
                <b>{t('privacy.analytics.plugin.title')}</b>
                <br />
                {t('privacy.analytics.plugin.content')}
                <br />
                <br />
                <b>{t('privacy.analytics.opt_out.title')}</b>
                <br />
                {t('privacy.analytics.opt_out.content')}
                <br />
                <br />
                [borlabs-cookie type="btn-switch-consent" id="google-analytics"/]
                <br />
                <br />
                {t('privacy.analytics.more_info')}
                <br />
                <br />
              </p>
            </div>

            {/* 5. Plugins und Tools */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>{t('privacy.plugins.title')}</b>
                <br />
                <b>{t('privacy.plugins.youtube.title')}</b>
                <br />
                {t('privacy.plugins.youtube.content')}
                <br />
                <br />
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}