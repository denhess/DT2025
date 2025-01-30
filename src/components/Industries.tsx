"use client";

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { YellowBackground } from './BG/YellowBackground';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  "Antriebstechnik", "Automationstechnik", "Drucktechnik", "Elektrotechnik", "Fahrzeuge",
  "Fluidtechnik", "Fördertechnik", "Gastechnik", "Giessereiindustrie", "Hebetechnik",
  "Holzindustrie", "Holzindustrieanlagen", "Industrieroboter", "Informationstechnik", "Klimatechnik",
  "Labortechnik", "Lebensmitteltechnik", "Logistik", "Maschinenbau", "Maschinenbaukomponenten",
  "Medizintechnik", "Messtechnik", "Oberflächentechnik", "Reinigung", "Schweissen",
  "Trocknungstechnik", "Werkzeuge", "Werkzeugmaschinen", "Zerkleinerungstechnik", "UX Design"
];

// Inhalte für das Popup je Branche
const popupContent: { [key: string]: string[] } = {
  "Antriebstechnik": [
    "Antriebssysteme",
    "Elektroantriebe",
    "Gleitlagertechnik",
    "Industrieantriebe",
    "Lineartechnik",
    "Maschinenlager",
    "Servotechnik"
  ],
  "Holzindustrie": [
    "Forsttechnik",
    "Holzbearbeitungsmaschinen",
    "Spalttechnik",
    "Sägewerk"
  ],
  "Medizintechnik": [
    "Beatmungstechnik",
    "Medizinische Gerätetechnik",
    "Medizinische Instrumente",
    "Medizinmessgeräte",
    "Zahnmedizintechnik"
  ],
  "Automationstechnik": [
    "Automaten",
    "Automationsgeräte",
    "Automatisierung",
    "Automatisierungskomponenten",
    "Maschinensteuerungen",
    "Positioniersysteme",
    "Produktionsautomatisierung",
    "Steuergerät",
    "Steuerung",
    "Steuerungstechnik"
  ],
  "Anlagenbau": [
    "Anlagenbaukomponenten",
    "Anlagentechnik",
    "Fabrikationsanlage",
    "Industrieabsauganlagen",
    "Industrieanlagentechnik"
  ],
  "Messtechnik": [
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
    "Sensormesstechnik"
  ],
  "Drucktechnik": [
    "3D-Druck",
    "Digitaldruck",
    "Drucksysteme",
    "Offsetdruck",
    "Siebdruck",
    "Tampondruck",
    "Textildruck",
    "Thermodruck",
    "Tiefdruck",
    "Transferdruck"
  ],
  "Industrieroboter": [
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
    "Sechsachsroboter"
  ],
  "Oberflächentechnik": [
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
    "Pulverbeschichtungen"
  ],
  "Elektrotechnik": [
    "Anzeigeeinheiten",
    "Elektrogeräte",
    "Industrieelektronik",
    "Steckdose",
    "Stecker",
    "Steckverbinder",
    "Transformatoren"
  ],
  "Informationstechnik": [
    "Digitale Medien",
    "Informationselektronik",
    "Informationsleitsysteme",
    "Multimedia",
    "Terminalsysteme"
  ],
  "Reinigung": [
    "Bodenreinigungsmaschinen",
    "Hochdruckreinigungstechnik",
    "Industriereinigungstechnik",
    "Reinigungsanlagen",
    "Reinigungsgeräte",
    "Reinigungsmaschinen",
    "Waschanlagen",
    "Wasserstrahlen"
  ],
  "Fahrzeuge": [
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
    "Transportfahrzeuge"
  ],
  "Klimatechnik": [
    "Klimaanlagen",
    "Klimageräte",
    "Kältemaschinen",
    "Kühlanlagen",
    "Kühler",
    "Luftkühlsysteme",
    "Lüftungsanlagen"
  ],
  "Schweissen": [
    "Handschweisstechnik",
    "Schweissaggregate",
    "Schweissanlagen",
    "Schweissgeräte",
    "Schweissmaschinen",
    "Schweissroboter"
  ],
  "Fluidtechnik": [
    "Druckluftanlagen",
    "Druckluftwerkzeuge",
    "Hochdrucktechnik",
    "Hydraulikanlagen",
    "Hydraulikprodukte",
    "Hydraulikwerkzeuge",
    "Kompressoren",
    "Pneumatik"
  ],
  "Labortechnik": [
    "Laboranlagen",
    "Laborkühlgeräte",
    "Labormaschine",
    "Labormesstechnik",
    "Laborschüttler",
    "Laborsterilisatoren",
    "Laborsysteme",
    "Labortrockenschrank",
    "Laborzentrifugen",
    "Laboröfen"
  ],
  "Trocknungstechnik": [
    "Industrietrockner",
    "Trockenöfen",
    "Trocknungsanlagen",
    "Trocknungsgeräte",
    "Trocknungsmaschinen"
  ],
  "Fördertechnik": [
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
    "Werkstückfördersysteme"
  ],
  "Lebensmitteltechnik": [
    "Backanlagen",
    "Bäckereimaschinen",
    "Fleischereimaschinen",
    "Konditoreimaschinen",
    "Lebensmittelanlagen",
    "Lebensmittelmaschine"
  ],
  "Werkzeuge": [
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
    "Zerspanungswerkzeuge"
  ],
  "Gastechnik": [
    "Gasdruckregelanlagen",
    "Gasgeräte",
    "Gasmanagementsysteme",
    "Gasreinigungssysteme",
    "Gasspeicher",
    "Mikrogasgenerator"
  ],
  "Logistik": [
    "Beladesystem",
    "Entladetechnik",
    "Kommissioniertechnik",
    "Lagertechnik",
    "Transportgeräte",
    "Transportsicherung",
    "Transportwagen",
    "Verladetechnik"
  ],
  "Werkzeugmaschinen": [
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
    "Zerspanungsmaschinen"
  ],
  "Giessereiindustrie": [
    "Giessereianlagen",
    "Giessereimaschine",
    "Gussbearbeitung"
  ],
  "Maschinenbau": [
    "Bearbeitungslinien",
    "Bearbeitungsmaschine",
    "Industriemaschinen",
    "Laminiermaschinen",
    "Metallbearbeitungsmaschinen",
    "Montagemaschinen",
    "Produktionsmaschinen",
    "Schneidemaschinen",
    "Sondermaschinenbau",
    "Sortiertechnik"
  ],
  "Zerkleinerungstechnik": [
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
    "Zerkleinerungsmaschinen"
  ],
  "Hebetechnik": [
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
    "Vakuumhebetechnik"
  ],
  "Maschinenbaukomponenten": [
    "Energieführungen",
    "Greiferkomponenten",
    "Industriemaschinenteile",
    "Maschinenbedienteile",
    "Maschinenkomponenten",
    "Maschinenschutzsysteme",
    "Rundtischsystem"
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
    "User-Centered-Design"
  ]
};

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [openPopup, setOpenPopup] = useState<keyof typeof popupContent | null>(null);

  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 70%',
        end: 'center center',
        scrub: 1,
      },
    });
  }, []);

  const handlePopupOpen = (industry: string) => {
    setOpenPopup(industry); // Set the clicked industry for the popup
  };

  const handlePopupClose = () => {
    setOpenPopup(null); // Close the popup
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex justify-center items-center"
    >
      <YellowBackground />
      <div className="w-full max-w-full px-0 md:px-16 lg:px-24 py-12">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="inline-block border border-black rounded-full px-12 py-4 my-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 z-10 flex justify-center items-center"
              onClick={() => handlePopupOpen(industry)} // Open popup on click
            >
              <span className="text-2xl font-semibold text-black text-center">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popup für zusätzliche Infos */}
      {openPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">{openPopup}</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {popupContent[openPopup]?.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
            <div
              className="inline-block border border-black rounded-full px-8 py-3 my-8 cursor-pointer hover:bg-black hover:text-[#FFFF00] transition-all duration-300 z-10"
            >
              <button
                onClick={handlePopupClose}
                className="text-2xl"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
