"use client";
import React from "react";
import Image from "next/image";

export default function Page() {
  const handleRedirect = () => {
    const userAgent =
      typeof window !== "undefined"
        ? navigator.userAgent || navigator.vendor || window.opera
        : "";

    if (/android/i.test(userAgent)) {
      window.open(
        "https://play.google.com/store/apps/details?id=nl.knmi.weer&hl=nl&gl=US",
        "_blank"
      );
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open(
        "https://apps.apple.com/nl/app/knmi-weer/id1643626602",
        "_blank"
      );
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=nl.knmi.weer&hl=nl&gl=US",
        "_blank"
      );
    }
  };

  return (
    <div className="relative pb-50 px-6 md:px-12 font-['Montserrat']">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Tekst + knop */}
        <div className="md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-8 leading-snug font-['Inter']">
            Download de KNMI Weerapp en Blijf <br />
            Altijd Op de Hoogte van het Weer!
          </h2>

          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={handleRedirect}
              className="bg-[#038a6f] hover:bg-[#026e59] text-white font-normal text-[16px] rounded-full px-6 py-3 flex items-center gap-2 shadow-md transition font-['Montserrat']"
            >
              Probeer het nu
            </button>
          </div>
        </div>

        {/* Afbeelding */}
        <div className="w-full max-w-md relative z-10">
          <Image
            src="/phone.png"
            alt="KNMI App Preview"
            width={500}
            height={350}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Achtergrond blur effecten */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#038a6f] opacity-10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#038a6f] opacity-10 rounded-full blur-[100px] -z-10" />
    </div>
  );
}

