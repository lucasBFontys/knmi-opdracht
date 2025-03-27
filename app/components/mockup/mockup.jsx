"use client";

import React, { useState, useEffect } from "react";

const images = ["/weersverwachting.jpeg", "/actuele-weersituatie.png"];

export default function Page() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const index = Math.min(Math.floor(scrollY / 400), images.length - 1);
        setImageIndex(index);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div className="  py-10 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6 text-center">
        <h1 class=" mt-20 mb-10 text-2xl font-bold leading-none tracking-tight text-[#0c2340] md:text-3xl lg:text-4xl  font-heading">
          Met de KNMI-app ben je voorbereid op <br /> gevaarlijk weer
        </h1>
        <p class="mb-10 text-[16px] font-normal text-gray-500 sm:px-16 xl:px-48 font-body">
          Ontvang realtime waarschuwingen voor stormen, hevige regenval of
          andere extreme weersomstandigheden, zodat je veilig kunt handelen. Of
          je nu thuis bent of onderweg, de app helpt je voorbereid te zijn op
          wat het weer ook brengt.
        </p>

        {/* Cirkel Achtergrond + mockup */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <svg
              width="auto"
              height="804"
              viewBox="0 0 846 804"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask
                  id="mask0"
                  maskUnits="userSpaceOnUse"
                  x="47"
                  y="46"
                  width="751"
                  height="776"
                >
                  <ellipse
                    cx="422.778"
                    cy="434"
                    rx="387.88"
                    ry="374.818"
                    transform="rotate(-82.4081 422.778 434)"
                    fill="white"
                  />
                </mask>
              </defs>
              <g mask="url(#mask0)">
                <circle
                  cx="424.08"
                  cy="321.48"
                  r="326.786"
                  transform="rotate(-28.4055 424.08 321.48)"
                  stroke="#92AEC3"
                  strokeDasharray="10 10"
                />
              </g>
              {/* Cirkel + Titel: Linksboven */}
              <circle cx="117.643" cy="209.5" r="5.64303" fill="#92AEC3" />
              <text
                x="80"
                y="215"
                fill={imageIndex === 0 ? "var(--color-blauw)" : "#B0B0B0"}
                fontSize="20"
                fontFamily="font-['Montserrat']"
                textAnchor="end"
              >
                <tspan fontWeight="bold">Neerslagradar</tspan>
                <tspan x="80" dy="35" fontSize="16" fontWeight="normal">
                  Toont actuele neerslag zoals regen
                </tspan>
                <tspan x="20" dy="20" fontSize="16" fontWeight="normal">
                  of sneeuw in de omgeving
                </tspan>
              </text>
              {/* /* Cirkel + Titel: Linksmidden  */}
              <circle cx="99.643" cy="374.5" r="5.64303" fill="#92AEC3" />
              <text
                x="80"
                y="380"
                fill={imageIndex === 1 ? "var(--color-blauw)" : "#B0B0B0"}
                fontSize="20"
                fontFamily="Arial"
                textAnchor="end"
              >
                <tspan fontWeight="bold">UV-Index</tspan>
                <tspan x="80" dy="35" fontSize="16">
                  Toont de sterkte van de zonnestraling
                </tspan>
                <tspan x="52" dy="20" fontSize="16">
                  en het risico op huidbeschadiging
                </tspan>
              </text>
              {/* Cirkel + Titel: Linksonder */}
              <circle cx="166.726" cy="523.775" r="5.64303" fill="#92AEC3" />
              <text
                x="145"
                y="530"
                fill={imageIndex === 0 ? "var(--color-blauw)" : "#B0B0B0"}
                fontSize="20"
                fontFamily="Arial"
                textAnchor="end"
              >
                <tspan fontWeight="bold">Weerwaarschuwingen</tspan>
                <tspan x="145" dy="35" fontSize="16">
                  Waarschuwt voor extreem weer, zoals
                </tspan>
                <tspan x="70" dy="20" fontSize="16">
                  stormen of hevige regenval
                </tspan>
              </text>
              {/* Cirkel + Titel: Rechtsboven */}
              <circle cx="732.054" cy="212.896" r="5.64303" fill="#92AEC3" />
              <text
                x="765"
                y="215"
                fill={imageIndex === 1 ? "var(--color-blauw)" : "#B0B0B0"}
                fontSize="20"
                fontFamily="Arial"
                fontWeight="normal"
              >
                <tspan fontWeight="bold">Actuele weersituatie</tspan>
                <tspan x="765" dy="35" fontSize="16">
                  Geeft de huidige weersomstandig-
                </tspan>
                <tspan x="765" dy="20" fontSize="16">
                  heden, zoals temperatuur, wind en
                </tspan>
                <tspan x="765" dy="20" fontSize="16">
                  neerslag, weer
                </tspan>
              </text>
              {/* Cirkel + Titel: Rechtsmidden */}
              <circle cx="746.418" cy="375.005" r="5.64303" fill="#92AEC3" />
              <text
                x="765"
                y="380"
                fill={imageIndex === 0 ? "var(--color-blauw)" : "#B0B0B0"}
                fontSize="20"
                fontFamily="Arial"
              >
                <tspan fontWeight="bold">Weersverwachting</tspan>
                <tspan x="765" dy="35" fontSize="16" fontWeight="normal">
                  Biedt voorspellingen voor het weer
                </tspan>
                <tspan x="765" dy="20" fontSize="16" fontWeight="normal">
                  in de komende uren en dagen
                </tspan>
              </text>
              {/* /* Cirkel + Titel: Rechtsonder */}
              <circle cx="681.78" cy="523.775" r="5.64303" fill="#92AEC3" />
              <text
                x="700"
                y="530"
                fill={imageIndex === 1 ? "var(--color-blauw)" : "#B0B0B0"}
                fontSize="20"
                fontFamily="Arial"
              >
                <tspan fontWeight="bold">Windvoorspelling</tspan>
                <tspan x="700" dy="35" fontSize="16" fontWeight="normal">
                  Laat zien hoe sterk de wind zal zijn en
                </tspan>
                <tspan x="700" dy="20" fontSize="16" fontWeight="normal">
                  uit welke richting deze komt.
                </tspan>
              </text>
            </svg>
          </div>

          {/* Telefoon Mockup */}
          <div className="relative w-72 h-[600px] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900 mt-16">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[22px] bg-zinc-900 rounded-full z-20"></div>

            <div className="absolute -inset-[1px] border-[3px] border-zinc-700 border-opacity-40 rounded-[37px] pointer-events-none"></div>

            <div className="relative w-full h-full rounded-[37px] overflow-hidden flex items-center justify-center bg-zinc-900/10">
              <img
                key={imageIndex}
                src={images[imageIndex]}
                alt=""
                className="transition-opacity duration-500"
              />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-12 bg-zinc-600 blur-[80px]"></div>
            </div>

            <div className="absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
            <div className="absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
            <div className="absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
            <div className="absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
