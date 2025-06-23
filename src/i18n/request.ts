// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

type Locale = 'de' | 'en';

export default getRequestConfig(async ({locale}: {locale?: string}) => {
  const validLocales: Locale[] = ['de', 'en'];

  if (!locale || !validLocales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});