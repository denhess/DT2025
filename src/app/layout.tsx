import type { Metadata } from "next";
import { Header } from "@/components/Header";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import { HeaderProvider } from "@/contexts/HeaderContext";

import Script from 'next/script';

import "./globals.css";

export const metadata: Metadata = {
  title: "Design Tech - Maschinendesign",
  description: "Maschinendesign",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {/* Google Tag Manager Code mit next/script und id */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NHBLRBHH');
            `,
          }}
        />
        
        {/* Google Tag Manager noscript Code */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHBLRBHH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <HeaderProvider>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
        </HeaderProvider>
      </body>
    </html>
  );
}
