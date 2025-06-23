import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'thin': ['Arial', 'Helvetica', 'sans-serif'], /* Ursprüngliche Schrift */
        'sans': ['Arial', 'Helvetica', 'sans-serif'], /* Ursprüngliche Schrift */
      },
      fontWeight: {
        'thin': '100',     /* Nur für Hero-Texte */
        'light': '300',    /* Leichte Texte */
        'normal': '400',   /* Standard-Texte */
        'medium': '500',   /* Mittlere Gewichtung */
        'semibold': '600', /* Halbfett */
        'bold': '700',     /* Fett */
      }
    },
  },
  plugins: [],
} satisfies Config;