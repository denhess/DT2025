"use client";

import React from "react";

import { Footer } from "@/components/Footer";

export default function Impres() {
  return (
    <>
      <div>
        <div className="text-black min-h-screen flex justify-center items-start pt-8">
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl pt-24 pb-16">
            {/* Erhöhtes padding-top von pt-16 auf pt-24 oder pt-32 */}

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
                Mit Urteil vom 12. Mai 1998 – 312 O 85/98 – &bdquo;Haftung für Links&ldquo;
                hat das Landgericht (LG) Hamburg entschieden, dass man durch die
                Ausbringung eines Links die Inhalte der gelinkten Seite ggf. mit
                zu verantworten hat. Dies kann – so das LG – nur dadurch
                verhindert werden, dass man sich ausdrücklich von diesen
                Inhalten distanziert.
                <br />
                <br />
                Wir haben auf unseren Seiten Links zu anderen Seiten im Internet
                gelegt. Für alle diese Links gilt: Wir möchten ausdrücklich
                betonen, dass wir keinerlei Einfluss auf die Gestaltung und die
                Inhalte der gelinkten Seiten haben. Deshalb distanzieren wir uns
                hiermit ausdrücklich von allen Inhalten aller gelinkten Seiten
                auf unserer Homepage und machen uns diese Inhalte nicht zu eigen.
                Diese Erklärung gilt für alle auf unserer Homepage angebrachten
                Links und für alle Inhalte der Seiten, zu denen Links oder Banner
                führen.
                <br />
                <br />
                Sollten Sie der Ansicht sein, dass die verlinkten externen Seiten
                gegen geltendes Recht verstoßen oder sonst unangemessene Inhalte
                enthalten, teilen Sie uns dies bitte mit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}