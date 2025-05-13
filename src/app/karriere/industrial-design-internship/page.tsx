"use client"


import React from 'react';
import { YellowBackgroundTop } from "@/components/BG/YellowBackgroundTop";
import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';


export default function IndustrialDesignInternship() {
  return (
    <>
              <section className="relative min-h-screen w-full"
              data-background="light"
              >
                      <YellowBackgroundTop/>
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full px-8 md:px-8 lg:px-8">
                          <p className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
                            Industrial Design Internship
                          </p>
                        </div>
                      </div>
              </section>
              
              <section
              data-background="light">
                <div className="text-black h-auto flex justify-center items-center">
                  <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl pt-16 pb-16"> {/* Doppelt so viel Padding oben und unten */}
                    <div className="mb-8">
                      <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                          Du studierst Industrial Design / Industriedesign und suchst ein anspruchsvolles Praktikum? 
                          (Pflicht – Praktikum). Du bist für ein Praktikum im Bereich Industrial Design / Industriedesign, 
                          Maschinen- / Investitionsgüterdesign oder UX Design / UI Design sensationell motiviert? Du hast Sinn 
                          für attraktive Formen, Anwendernutzen und anspruchsvolle Technologie?
                          <br />
                          <br />
                          Dann bringst Du für ein Praktikum bei Design Tech bereits beste Voraussetzungen mit. 
                          Du lernst viel über höchst effiziente Prozesse, intelligentes Handwerkszeug, 
                          Kreativitätstechniken für die Praxis und vieles mehr.
                          <br />
                          <br />
                          <b>Kurz gesagt: Das Team von Design Tech macht Dich in Deinem Praktikum fit für Deine berufliche Zukunft als Industrial Designer / Industriedesigner.</b>
                          <br />
                          Wir sind eines der führenden Unternehmen für zielgenaues Industrial Design / Industriedesign in Deutschland und haben uns kompromisslos auf Maschinendesign spezialisiert.
                        </p>
                      </div>

                      <div className="mb-8">
                        <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                          Unser Standort in Ammerbuch liegt am Fuße des Schönbuch und
                          zentral zwischen der Universitätsstadt Tübingen und Stuttgart.
                          Unser Team erarbeitet in anspruchsvollen Projekten strategische
                          und zukunftsweisende Lösungen für Marktführer auf der ganzen
                          Welt. Für unsere Kunden sind wir Entwicklungspartner von der
                          ersten Idee bis zum fertigen Produkt!
                        </p>
                      </div>

                      <div className="mb-8">
                        <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                          <b>Deine Qualifikation</b>
                          <br />
                          <ul className="list-none pl-0"> {/* Keine Aufzählungszeichen und kein Einrücken */}
                            <li>_ Studienplatz als Industrie-Designer oder vergleichbarer Studiengänge wie Intermedia, Web-Design, oder Mediengestalter</li>
                            <li>_ Interesse an anspruchsvollem Design und anspruchsvollen Aufgaben</li>
                            <li>_ Ausgeprägtes technisches Verständnis</li>
                            <li>_ Sicherer Umgang mit gängiger Software (Adobe CC, Solid Works, Microsoft Office etc.)</li>
                            <li>_ Gute Deutschkenntnisse in Wort und Schrift</li>
                            <li>_ Flexibles und gewissenhaftes Arbeiten im Team</li>
                          </ul>
                        </p>
                      </div>

                      <div>
                        <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                          <b>Was wir bieten</b>
                          <br />
                          <ul className="list-none pl-0"> {/* Keine Aufzählungszeichen und kein Einrücken */}
                            <li>_ Ein spannendes und vielseitiges Aufgabengebiet</li>
                            <li>_ Ein hoch professionelles und motiviertes Team</li>
                            <li>_ Attraktives Arbeitsumfeld in modernen Büroräumen</li>
                            <li>_ Regelmäßige Feedback- mit Zielvereinbarungsgespräche</li>
                            <li>_ Regelmäßige Teamevents und Veranstaltungen</li>
                          </ul>
                          <br />
                          <b>
                          Wir freuen uns auf Deine aussagekräftige Bewerbung.
                          </b>
                          <br />
                          Sende uns jetzt Deine Bewerbung für ein sechsmonatiges Praktikum oder melde dich direkt bei uns! Auf Deine Bewerbung freut sich Lisa Valentina Schmid.
                          </p>
                        </div>
                      </div>
                    </div>
              </section>

              <ContactJob />
              <Job />
              <Footer />
              
        </>
  );
}