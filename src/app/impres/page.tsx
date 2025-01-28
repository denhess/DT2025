"use client";

import React from "react";

import { Footer } from "@/components/Footer";

export default function Impres() {
  return (
    <>
      <section>
        <div className="text-black h-auto flex justify-center items-center">
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl pt-16 pb-16">

            {/* Impressum */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>IMPRESSUM</b>
                <br />
                <br />
                Design Tech <br />
                Zeppelinstraße 53 <br />
                72119 Ammerbuch <br />
                Deutschland <br />
                <br />
                Vertretungsberechtigter Geschäftsführer: <br />
                Dipl.-Designer Jürgen Schmid <br />
                <br />
                Unternehmensleitung: <br />
                Lisa Schmid <br />
                <br />
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a <br />
                Umsatzsteuergesetz: DE 146 941 777 <br />
                <br />
                Tel. +49 (0)7073 91 89 0 <br />
                Fax. +49 (0)7073 91 89 17 <br />
                info@designtech.eu <br />
                <br />
                Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: <br />
                Jürgen Schmid (Anschrift wie oben) <br />
                <br />
                Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. <br />
                <br />
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. <br />
                <br />
            </p>
            </div>

            {/* Rechtlicher Hinweis / Nutzungsbedingungen */}
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>RECHTLICHER HINWEIS / NUTZUNGSBEDINGUNGEN</b>
                <br />
                <br />
                Mit Urteil vom 12. Mai 1998 – 312 O 85/98 – „Haftung für Links“
                hat das Landgericht (LG) Hamburg entschieden, dass man durch die
                Ausbringung eines Links die Inhalte der gelinkten Seite ggf. mit
                zu verantworten hat. Dies kann – so das LG – nur dadurch
                verhindert werden, dass man sich ausdrücklich von diesen
                Inhalten distanziert.
                <br />
                {/* Der restliche Text sollte hier ergänzt werden */}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
