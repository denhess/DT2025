// src/app/[locale]/page.tsx
import { Hero } from '@/components/Hero';

export async function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' }
  ];
}

export default function HomePage() {
  return (
    <div>
      {/* Deine originale Hero-Komponente mit next-intl */}
      <Hero />
    </div>
  );
}