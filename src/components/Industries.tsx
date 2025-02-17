"use client";


import { YellowBackground } from './BG/YellowBackground';
import { useState } from "react";



const industries = {
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
          
          className="relative min-h-screen w-full"
        >
          <YellowBackground />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 md:px-8 lg:px-16"> {/* Padding auf der X-Achse hinzugefügt */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(industries).map(([industry, items], index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                <button
              className="w-full p-4 bg-gray-100 flex justify-between items-center text-left"
              onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-gray-700">{industry}</span>
                </button>
                {openIndex === index && (
              <div className="p-4 border-t bg-white">
                <ul className="list-disc pl-5">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
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
