import React from "react";

export default function Nieuws() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-1 gap-10 items-start">
        {/* Tekstgedeelte */}
        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Nieuws en Updates
            </h2>
          </div>

          {/* 1 */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-base font-semibold text-gray-700">
                KNMI Weer - 12 maart 2025
              </p>
              <p className="text-lg font-bold text-gray-900 mt-2">
                Nieuw in de KNMI App!
              </p>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet. Aut aliquam sunt qui galisum omnis
                ea error perspiciatis et debitis inventore ex quasi laboriosam
                qui inventore magnam?
              </p>
            </div>
            <img src="/nieuws-1.png" alt="Nieuws 1" />
          </div>

          {/* 2 */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-base font-semibold text-gray-700">
                KNMI Weer - 11 januari 2025
              </p>
              <p className="text-lg font-bold text-gray-900 mt-2">
                Code oranje voor gladheid door ijzel
              </p>
              <p className="text-gray-700 mt-2">
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
              <p className="text-base font-semibold text-gray-700">
                KNMI Weer - 9 januari 2025
              </p>
              <p className="text-lg font-bold text-gray-900 mt-2">
                Code oranje voor gladheid door sneeuw
              </p>
              <p className="text-gray-700 mt-2">
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
