// src/components/I18nProvider.tsx
'use client';

// i18n wird synchron initialisiert (initImmediate: false), daher stehen die
// Übersetzungen bereits beim statischen Export zur Verfügung. Die Kinder
// werden immer gerendert, damit Inhalte im ausgelieferten HTML landen.
import '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  return <>{children}</>;
}
