"use client"

import React from 'react';
import { YellowBackgroundTop } from "@/components/BG/YellowBackgroundTop";
import { Footer } from "@/components/Footer";
import { Job } from '@/components/Job';
import { ContactJob } from '@/components/ContactJob';

export default function IndustrialDesignInternship() {
  return (
    <>
      <section className="relative h-screen w-full" data-background="light">
        <YellowBackgroundTop/>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-8 md:px-8 lg:px-8">
            <p className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
              Industrial Design Internship
            </p>
            <p className="text-gray-900 text-[5vw] md:text-[4vw] xl:text-[3vw] leading-tight tracking-[-0.02em]">
              Gestalten, was zählt.
            </p>
          </div>
        </div>
      </section>
      
      <div className="py-16" data-background="light">
        <div className="text-black">
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>Gestalten, was zählt.</b>
                <br />
                <br />
                Du studierst Industrial Design und willst dein Können endlich in der echten Welt anwenden?
                <br />
                <br />
                Bei Design Tech arbeitest du nicht an Übungsaufgaben, sondern an realen Maschinenprojekten – für echte Kund*innen, mit echtem Impact.
                <br />
                <br />
                Gemeinsam mit erfahrenen Designerinnen und Ingenieurinnen entwickelst du Gestaltung, die produziert wird – und lernst, wie technisches Denken und ästhetische Klarheit zusammenwirken.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>Was dich erwartet</b>
                <br />
                <ul className="list-none pl-0">
                  <li>_ Reale Industrieprojekte statt Simulation</li>
                  <li>_ Verantwortung vom ersten Tag an</li>
                  <li>_ Klarer Designprozess: Von der Skizze zur Umsetzung</li>
                  <li>_ Hochmotiviertes Team mit über 40 Jahren Erfahrung</li>
                  <li>_ Technologische Tiefe, kreative Freiheit, ehrliches Feedback</li>
                </ul>
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>Was du mitbringen solltest</b>
                <br />
                <ul className="list-none pl-0">
                  <li>_ Studium im Bereich Industrial Design oder einem verwandten Feld</li>
                  <li>_ Leidenschaft für funktionales, nachhaltiges und innovatives Design</li>
                  <li>_ Technisches Grundverständnis (z. B. CAD, Adobe CC, SolidWorks)</li>
                  <li>_ Freude am eigenverantwortlichen Arbeiten im Team</li>
                  <li>_ Neugier und Anspruch</li>
                </ul>
              </p>
            </div>

            <div className="mb-8">
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>Was du mitnimmst</b>
                <br />
                <ul className="list-none pl-0">
                  <li>_ Ein aussagekräftiges Praxisprojekt für dein Portfolio</li>
                  <li>_ Einen echten Einblick in die Maschinenbau-Industrie</li>
                  <li>_ Feedback, das dich weiterbringt</li>
                  <li>_ Kontakte, die Türen öffnen</li>
                </ul>
              </p>
            </div>

            <div>
              <p className="text-black text-lg sm:text-xl leading-relaxed text-left">
                <b>Bewirb dich jetzt</b>
                <br />
                <br />
                Sende uns deine Bewerbung für ein mindestens 5-monatiges Pflichtpraktikum – oder melde dich einfach direkt bei uns.
                <br />
                <br />
                <b>Wir freuen uns auf deine Ideen!</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactJob />
      <Job />
      <Footer />
    </>
  );
}