import React from "react";

export default function Nieuws() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-1 gap-10 items-start">
        {/* Tekstgedeelte */}
        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="text-3xl font-bold font-heading text-[#0c2340]">
              Nieuws en Updates
            </h2>
          </div>

          {/* 1 */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 font-accent">
                KNMI Weer - 12 maart 2025
              </p>
              <p className="text-xl font-bold text-gray-900 mt-2 font-heading">
                Nieuw in de KNMI App!
              </p>
              <p className="text-gray-700 mt-2 font-body">
                De nieuwste update brengt nauwkeurigere weerwaarschuwingen, een
                verbeterde radar, en snellere pushmeldingen. Stel jouw favoriete
                locaties in en ontvang persoonlijke updates. Download nu de
                update en blijf altijd voorbereid!
              </p>
            </div>
            <img src="/nieuws-1.png" alt="Nieuws 1" />
          </div>

          {/* 2 */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 font-accent">
                KNMI Weer - 11 januari 2025
              </p>
              <p className="text-xl font-bold text-gray-900 mt-2 font-heading">
                Code oranje voor gladheid door ijzel
              </p>
              <p className="text-gray-700 mt-2 font-body">
                Opnieuw code oranje uitgegeven, ditmaal voor Friesland en
                Groningen vanwege ijzel. Deze weersomstandigheden veroorzaakten
                gevaarlijke rijomstandigheden en leidden tot diverse
                verkeersincidenten.
              </p>
            </div>
            <img src="/nieuws-2.png" alt="Nieuws 2" />
          </div>

          {/* 3 */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 font-accent">
                KNMI Weer - 9 januari 2025
              </p>
              <p className="text-xl font-bold text-gray-900 mt-2 font-heading">
                Code oranje voor gladheid door sneeuw
              </p>
              <p className="text-gray-700 mt-2 font-body text">
                Het KNMI heeft code oranje afgegeven voor Noord-Brabant en
                Limburg vanwege verwachte gladheid door sneeuwval. De
                waarschuwing benadrukte de kans op overlast en vertragingen
                tijdens de ochtendspits.
              </p>
            </div>
            <img src="/nieuws-3.png" alt="Nieuws 3" />
          </div>
        </div>
      </div>
    </div>
  );
}
