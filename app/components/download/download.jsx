'use client';
import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative bg-white py-20 px-6 md:px-12 font-['Montserrat']">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Tekst + knoppen */}
        <div className="md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-8 leading-snug font-['Inter']">
            Download de KNMI Weerapp en Blijf <br />
            Altijd Op de Hoogte van het Weer!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Apple knop */}
            <a
              href="#"
              className="bg-[#038a6f] hover:bg-[#026e59] text-white font-normal text-[16px] rounded-full px-6 py-3 flex items-center gap-2 shadow-md transition font-['Montserrat']"
            >
              <svg
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.3-36.6 16.2-64.4 50.7-85.1-18.9-27.6-47.5-43.1-84.6-46-35.5-2.8-74.2 21.2-88 21.2-14.1 0-47.3-20.5-72.9-20-37.6.5-72.4 21.9-91.9 55.6-39.3 68-10 168.2 28.2 223.2 18.7 27.1 41 57.6 70.4 56.4 28.2-1.1 38.9-18.3 72.8-18.3 33.9 0 43.2 18.3 72.9 17.8 29.9-.5 48.9-27.8 67.5-55.1 11.5-17.2 16.2-26 25.2-45.5-66.4-25.3-77-119.7-11.3-156.2zM249.7 74.2C265.2 54.2 276 27.6 271.2 0c-23.8 1-51.8 16.2-68.3 36.1-15 18.1-28.2 47.2-24.7 75 26.3 2 53.5-13.3 71.5-36.9z" />
              </svg>
              Download
            </a>

            {/* Google knop */}
            <a
              href="#"
              className="bg-[#038a6f] hover:bg-[#026e59] text-white font-normal text-[16px] rounded-full px-6 py-3 flex items-center gap-2 shadow-md transition font-['Montserrat']"
            >
              <svg
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M325.3 234.3L104.6 25.5C97.1 18.7 86.8 16.6 77.4 20.7c-9.4 4.1-15.5 13.2-15.5 23.4v423.8c0 10.2 6.1 19.3 15.5 23.4 3.3 1.5 6.7 2.3 10.1 2.3 6.4 0 12.7-2.5 17.5-7.3l220.7-208.9 35.3-33.1-35.3-33zM373.6 279l48.4 45.8 51.3-24.1c10.4-4.9 17.1-15.4 17.1-27.6s-6.7-22.7-17.1-27.6l-51.3-24.1-48.4 45.8zM346.5 256l31.1-29.4-31.1-29.4L117.1 64.2l-10.5 9.9 193.2 182.3-193.2 182.3 10.5 9.9L346.5 256z" />
              </svg>
              Download
            </a>
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
