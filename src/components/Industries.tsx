"use client";

import { YellowBackground } from "./BG/YellowBackground";
import { useEffect, useState } from "react";

const industries = {
  Antriebstechnik: [
    "Antriebssysteme",
    "Elektroantriebe",
    "Gleitlagertechnik",
    "Industrieantriebe",
    "Lineartechnik",
    "Maschinenlager",
    "Servotechnik",
  ],
  Holzindustrie: [
    "Forsttechnik",
    "Holzbearbeitungsmaschinen",
    "Spalttechnik",
    "Sägewerk",
  ],
  Medizintechnik: [
    "Beatmungstechnik",
    "Medizinische Gerätetechnik",
    "Medizinische Instrumente",
    "Medizinmessgeräte",
    "Zahnmedizintechnik",
  ],
  Automationstechnik: [
    "Automaten",
    "Automationsgeräte",
    "Automatisierung",
    "Automatisierungskomponenten",
    "Maschinensteuerungen",
    "Positioniersysteme",
    "Produktionsautomatisierung",
    "Steuergerät",
    "Steuerung",
    "Steuerungstechnik",
  ],
  Anlagenbau: [
    "Anlagenbaukomponenten",
    "Anlagentechnik",
    "Fabrikationsanlage",
    "Industrieabsauganlagen",
    "Industrieanlagentechnik",
  ],
  Messtechnik: [
    "Analogmesstechnik",
    "Druckmesstechnik",
    "Elektromesstechnik",
    "Industriemesstechnik",
    "Infrarotmesstechnik",
    "Lasermesstechnik",
    "Messanlagen",
    "Messgeräte",
    "Messmaschinen",
    "Mikromesstechnik",
    "Sensormesstechnik",
  ],
  Drucktechnik: [
    "3D-Druck",
    "Digitaldruck",
    "Drucksysteme",
    "Offsetdruck",
    "Siebdruck",
    "Tampondruck",
    "Textildruck",
    "Thermodruck",
    "Tiefdruck",
    "Transferdruck",
  ],
  Industrieroboter: [
    "Arbeitsroboter",
    "Bestückungsroboter",
    "Handhabungsroboter",
    "Lackierroboter",
    "Linearroboter",
    "Manipulationsroboter",
    "Nanoroboter",
    "Portalroboter",
    "Präzisionsroboter",
    "Roboter",
    "Roboteranlagen",
    "Robotersysteme",
    "Robotertechnik",
    "Schwerlastroboter",
    "Sechsachsroboter",
  ],
  Oberflächentechnik: [
    "Beschichtungsanlagen",
    "Beschichtungsgeräte",
    "Beschichtungsmaschine",
    "Lackieranlagen",
    "Lackiergeräte",
    "Lackiermaschinen",
    "Oberflächenbehandlungsanlagen",
    "Oberflächenreinigung",
    "Polieranlagen",
    "Poliermaschinen",
    "Pulverbeschichtungen",
  ],
  Elektrotechnik: [
    "Anzeigeeinheiten",
    "Elektrogeräte",
    "Industrieelektronik",
    "Steckdose",
    "Stecker",
    "Steckverbinder",
    "Transformatoren",
  ],
  Informationstechnik: [
    "Digitale Medien",
    "Informationselektronik",
    "Informationsleitsysteme",
    "Multimedia",
    "Terminalsysteme",
  ],
  Reinigung: [
    "Bodenreinigungsmaschinen",
    "Hochdruckreinigungstechnik",
    "Industriereinigungstechnik",
    "Reinigungsanlagen",
    "Reinigungsgeräte",
    "Reinigungsmaschinen",
    "Waschanlagen",
    "Wasserstrahlen",
  ],
  Fahrzeuge: [
    "Baufahrzeuge",
    "Elektrofahrzeuge",
    "Fahrzeugbau",
    "Fahrzeugbedarf",
    "Feuerwehrfahrzeuge",
    "Luftfahrtindustrie",
    "Nutzfahrzeuge",
    "Schifffahrttechnik",
    "Schneefahrzeug",
    "Sonderfahrzeuge",
    "Transportfahrzeuge",
  ],
  Klimatechnik: [
    "Klimaanlagen",
    "Klimageräte",
    "Kältemaschinen",
    "Kühlanlagen",
    "Kühler",
    "Luftkühlsysteme",
    "Lüftungsanlagen",
  ],
  Schweissen: [
    "Handschweisstechnik",
    "Schweissaggregate",
    "Schweissanlagen",
    "Schweissgeräte",
    "Schweissmaschinen",
    "Schweissroboter",
  ],
  Fluidtechnik: [
    "Druckluftanlagen",
    "Druckluftwerkzeuge",
    "Hochdrucktechnik",
    "Hydraulikanlagen",
    "Hydraulikprodukte",
    "Hydraulikwerkzeuge",
    "Kompressoren",
    "Pneumatik",
  ],
  Labortechnik: [
    "Laboranlagen",
    "Laborkühlgeräte",
    "Labormaschine",
    "Labormesstechnik",
    "Laborschüttler",
    "Laborsterilisatoren",
    "Laborsysteme",
    "Labortrockenschrank",
    "Laborzentrifugen",
    "Laboröfen",
  ],
  Trocknungstechnik: [
    "Industrietrockner",
    "Trockenöfen",
    "Trocknungsanlagen",
    "Trocknungsgeräte",
    "Trocknungsmaschinen",
  ],
  Fördertechnik: [
    "Fliessbandsysteme",
    "Flurförderzeuge",
    "Förderanlagen",
    "Fördermaschinen",
    "Fördersysteme",
    "Gabelstapler",
    "Hubwagen",
    "Materialfördersysteme",
    "Transportanlage",
    "Transportbänder",
    "Vertikalfördertechnik",
    "Werkstückfördersysteme",
  ],
  Lebensmitteltechnik: [
    "Backanlagen",
    "Bäckereimaschinen",
    "Fleischereimaschinen",
    "Konditoreimaschinen",
    "Lebensmittelanlagen",
    "Lebensmittelmaschine",
  ],
  Werkzeuge: [
    "Elektrowerkzeuge",
    "Fräser",
    "Handwerkzeuge",
    "Karosseriewerkzeuge",
    "Kernbohrtechnik",
    "Produktionswerkzeuge",
    "Schleifwerkzeuge",
    "Schneidwerkzeuge",
    "Sonderwerkzeugtechnik",
    "Spannwerkzeuge",
    "Verarbeitungswerkzeuge",
    "Werkzeuge",
    "Zerspanungswerkzeuge",
  ],
  Gastechnik: [
    "Gasdruckregelanlagen",
    "Gasgeräte",
    "Gasmanagementsysteme",
    "Gasreinigungssysteme",
    "Gasspeicher",
    "Mikrogasgenerator",
  ],
  Logistik: [
    "Beladesystem",
    "Entladetechnik",
    "Kommissioniertechnik",
    "Lagertechnik",
    "Transportgeräte",
    "Transportsicherung",
    "Transportwagen",
    "Verladetechnik",
  ],
  Werkzeugmaschinen: [
    "Abschermaschinen",
    "Bandsägemaschine",
    "Bausägen",
    "Biegemaschinen",
    "Blechbearbeitungsmaschinen",
    "Bohrmaschinen",
    "CNC-Bearbeitungszentren",
    "CNC-Bettfräsmaschinen",
    "CNC-Biegemaschinen",
    "CNC-Drehmaschinen",
    "CNC-Fräsmaschinen",
    "CNC-Maschinen",
    "Drehmaschinen",
    "Drehtechnik",
    "Elektrosägen",
    "Erodiermaschinen",
    "Fräsmaschinen",
    "Granulatoren",
    "Hobelmaschinen",
    "Honmaschinen",
    "Kreissäge",
    "Laserbearbeitungsmaschinen",
    "Läppmaschinen",
    "Plasmaschneidmaschine",
    "Pressen",
    "Prägemaschinen",
    "Richtmaschinen",
    "Räummaschinen",
    "Schleifgeräte",
    "Schleifmaschinen",
    "Schmiedemaschinen",
    "Stanzmaschine",
    "Sägeanlagen",
    "Sägemaschinen",
    "Sägen",
    "Umformmaschinen",
    "Walzmaschine",
    "Wasserstrahlschneidmaschinen",
    "Werkzeugmaschinenbau",
    "Zerspanungsmaschinen",
  ],
  Giessereiindustrie: [
    "Giessereianlagen",
    "Giessereimaschine",
    "Gussbearbeitung",
  ],
  Maschinenbau: [
    "Bearbeitungslinien",
    "Bearbeitungsmaschine",
    "Industriemaschinen",
    "Laminiermaschinen",
    "Metallbearbeitungsmaschinen",
    "Montagemaschinen",
    "Produktionsmaschinen",
    "Schneidemaschinen",
    "Sondermaschinenbau",
    "Sortiertechnik",
  ],
  Zerkleinerungstechnik: [
    "Brecher",
    "Granuliertechnik",
    "Holzzerkleinerung",
    "Kompaktiermaschine",
    "Mahlanlagen",
    "Mühlen",
    "Schneidmühlen",
    "Schreddersysteme",
    "Walzenbrecher",
    "Walzenzerkleinerer",
    "Zementmühle",
    "Zerhacker",
    "Zerkleinerungsanlagen",
    "Zerkleinerungsmaschinen",
  ],
  Hebetechnik: [
    "Arbeitsbühnen",
    "Greifer",
    "Hallenkrane",
    "Handhebetechnik",
    "Hebebühnen",
    "Hebemaschine",
    "Hubanlagen",
    "Hubtische",
    "Hubtransportwagen",
    "Industriekrane",
    "Kran",
    "Kranzubehör",
    "Portalheber",
    "Vakuumhebetechnik",
  ],
  Maschinenbaukomponenten: [
    "Energieführungen",
    "Greiferkomponenten",
    "Industriemaschinenteile",
    "Maschinenbedienteile",
    "Maschinenkomponenten",
    "Maschinenschutzsysteme",
    "Rundtischsystem",
  ],
  "UX Design": [
    "User Experience Consulting",
    "User Interface",
    "User Interface Konzepte",
    "User Interface Implementierung",
    "User Research",
    "Multitouch",
    "iPhone",
    "iPad",
    "Reality Based User Interfaces",
    "Cross Plattform",
    "HTML5",
    "Service Design",
    "HMIs für Industrie",
    "Inspirierende UI Lösungen",
    "User-Centered-Design",
  ],
};

export function Industries() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (index: number) => {
    if (!isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <section data-background="light" className="relative min-h-screen w-full">
      <YellowBackground />
      <div className="absolute inset-0 overflow-hidden">
        {/* <h2 className="text-gray-900 text-[5vw] z-10 md:text-[9vw] xl:text-[9vw] leading-[0.9] tracking-[-0.02em] px-4 md:px-8 lg:px-16 pt-4 md:pt-8">
          Branchen
        </h2> */}
        <div className="w-full px-2 md:px-8 lg:px-16 mt-4 md:mt-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(industries).map(([industry, items], index) => (
              <div key={index}>
                <button
                  className="w-full py-2 md:py-4 px-2 md:px-4 text-left text-black focus:outline-none flex items-center text-xl md:text-2xl lg:text-3xl"
                  onClick={() => toggleAccordion(index)}
                >
                  {!isMobile && (
                    <span className="mr-2 md:mr-4 text-2xl md:text-4xl lg:text-5xl font-bold">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  )}
                  <span className="font-semibold">{industry}</span>
                </button>
                {!isMobile && openIndex === index && (
                  <div className="px-8 md:px-16 py-2 md:py-4">
                    <div className="space-y-1 md:space-y-3">
                      {items.map((item, i) => (
                        <div key={i} className="text-black text-base md:text-xl lg:text-2xl">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}