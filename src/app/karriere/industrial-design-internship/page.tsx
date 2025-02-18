"use client"


import React from 'react';

import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';
import { YellowBackground } from '@/components/BG/YellowBackground';



export default function IndustrialDesignInternshipPage() {
  return (
    <>
                  <section className="relative min-h-screen w-full"
                  data-background="light">
                          <YellowBackground />
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full px-8 md:px-16 lg:px-24">
                              <p className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
                                INDUSTRIAL DESIGN INTERNSHIP
                              </p>
                            </div>
                          </div>
                  </section>
                  
                  <section data-background="light">
                    <div className="text-black h-auto flex justify-center items-center">
                      <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl pt-16 pb-16"> {/* Doppelt so viel Padding oben und unten */}
                        <div className="mb-8">
                          <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                              Du brennst für neue Herausforderungen? Du hast Lust auf
                              erfolgreiche Industrial Design–Projekte und willst Innovationen
                              auf höchstem Niveau entwickeln?
                              <br />
                              <br />
                              Dann werde Teil unseres Design Tech-Teams!
                              <br />
                              <br />
                              <b>Neues Denken. Neues Schaffen.</b>
                              <br />
                              Wir sind das international führende Designunternehmen für
                              Industrieunternehmen im Maschinenbau und
                              Investitionsgüterbereich.
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
                                <li>_ Abgeschlossenes Studium als Industrial Design / Industriedesign oder einer verwandten Studiendisziplin</li>
                                <li>_ Sehr gute Darstellungsfähigkeiten und virtuoser Umgang mit Form, Farbe und Proportionen</li>
                                <li>_ Sicherer Umgang mit gängiger Software (Adobe CC, Solid Works, Microsoft Office etc.)</li>
                                <li>_ Fundierte Kenntnisse über Fertigungsverfahren und Material</li>
                                <li>_ Erfahrung in der Planung und dem Management von Gestaltungsprojekten</li>
                                <li>_ Sicherer Auftritt im Kontakt mit Kunden und bei Präsentationen</li>
                                <li>_ Sehr gute Deutsch- und Englischkenntnisse in Wort und Schrift</li>
                                <li>_ Überzeugende Kommunikationsfähigkeiten, Spaß am Arbeiten im Team und ein sicheres Auftreten</li>
                                <li>_ Biss und verantwortungsvolles und strukturiertes Arbeiten</li>
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
                                <li>_ Festanstellung und einen unbefristeten Arbeitsvertrag</li>
                                <li>_ Mittelfristige Aufstiegsoptionen</li>
                                <li>_ Kurze Entscheidungswege durch eine flache Hierarchie</li>
                                <li>_ Flexible Arbeitszeiten bei einer geregelten 40-Stunden-Woche</li>
                                <li>_ Attraktives Arbeitsumfeld in modernen Büroräumen</li>
                                <li>_ Regelmäßige Feedback- mit Zielvereinbarungsgespräche</li>
                                <li>_ Regelmäßige Teamevents und Veranstaltungen</li>
                              </ul>
                              <br />
                              <b>
                                Wir freuen uns auf Deine aussagekräftige Bewerbung mit
                                Projekt-Referenzen und Arbeitsproben.
                              </b>
                              <br />
                              Auf Deine Bewerbung freut sich Lisa Schmid.
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