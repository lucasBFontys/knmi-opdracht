import React from "react";

export default function Page() {
  return (
    <section>
      <div className="  py-10 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6 text-center">
        <h1 class="mb-10 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl  font-heading">
          Met de KNMI-app ben je voorbereid op <br /> gevaarlijk weer
        </h1>
        <p class="mb-10 text-[16px] font-normal text-gray-500 sm:px-16 xl:px-48 font-body">
          Ontvang realtime waarschuwingen voor stormen, hevige regenval of
          andere extreme weersomstandigheden, zodat je veilig kunt handelen. Of
          je nu thuis bent of onderweg, de app helpt je voorbereid te zijn op
          wat het weer ook brengt.
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-groen rounded-[29.50px] mr-4"
        >
          {/* Buttons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
            />
          </svg>
          Download
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-groen rounded-[29.50px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="m22.018 13.298l-3.919 2.218l-3.515-3.493l3.543-3.521l3.891 2.202a1.49 1.49 0 0 1 0 2.594M1.337.924a1.5 1.5 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087zm12.207 10.065l3.258-3.238L3.45.195a1.47 1.47 0 0 0-.946-.179zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54z"
            />
          </svg>
          Download
        </a>

        {/* Cirkel Achtergrond + mockup */}
        <div class="relative flex items-center justify-center ">
          <div class="absolute inset-0 flex items-center justify-center -z-10 ">
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
                fill="#92AEC3"
                fontSize="20"
                fontFamily="Arial"
                textAnchor="end"
              >
                Actuele weersituatie
                <tspan x="80" dy="35" fontSize="16">
                  Geeft de huidige weersomstandig-
                </tspan>
                <tspan x="20" dy="20" fontSize="16">
                  heden, zoals temperatuur,
                </tspan>
                <tspan x="0" dy="20" fontSize="16">
                  wind en neerslag, weer
                </tspan>
              </text>

              {/* Cirkel + Titel: Linksmidden */}
              <circle cx="99.643" cy="374.5" r="5.64303" fill="#92AEC3" />
              <text
                x="80"
                y="380"
                fill="#92AEC3"
                fontSize="20"
                fontFamily="Arial"
                textAnchor="end"
              >
                Weersverwachting
                <tspan x="80" dy="35" fontSize="16">
                  Biedt voorspellingen voor het weer
                </tspan>
                <tspan x="47" dy="20" fontSize="16">
                  in de komende uren en dagen
                </tspan>
              </text>

              {/* Cirkel + Titel: Linksonder */}
              <circle cx="166.726" cy="523.775" r="5.64303" fill="#92AEC3" />
              <text
                x="145"
                y="530"
                fill="#92AEC3"
                fontSize="20"
                fontFamily="Arial"
                textAnchor="end"
              >
                UV-Index
                <tspan x="145" dy="35" fontSize="16">
                  Toont de sterkte van de zonnestraling en het
                </tspan>
                <tspan x="20" dy="20" fontSize="16">
                  risico op huidbeschadiging
                </tspan>
              </text>

              {/* Cirkel + Titel: Rechtsboven */}
              <circle cx="732.054" cy="212.896" r="5.64303" fill="#92AEC3" />
              <text
                x="765"
                y="215"
                fill="#92AEC3"
                fontSize="20"
                fontFamily="Arial"
              >
                Neerslagradar
                <tspan x="765" dy="35" fontSize="16">
                  Toon actuele neerslag zoals regen of
                </tspan>
                <tspan x="765" dy="20" fontSize="16">
                  sneeuw in de omgeving
                </tspan>
              </text>

              {/* Cirkel + Titel: Rechtsmidden */}
              <circle cx="746.418" cy="375.005" r="5.64303" fill="#92AEC3" />
              <text
                x="765"
                y="380"
                fill="#92AEC3"
                fontSize="20"
                fontFamily="Arial"
              >
                Windvoorspelling
                <tspan x="765" dy="35" fontSize="16">
                  Laat zien hoe sterk de wind zal zijn en uit
                </tspan>
                <tspan x="765" dy="20" fontSize="16">
                  welke richting deze komt.
                </tspan>
              </text>

              {/* Cirkel + Titel: Rechtsonder */}
              <circle cx="681.78" cy="523.775" r="5.64303" fill="#92AEC3" />
              <text
                x="700"
                y="530"
                fill="#92AEC3"
                fontSize="20"
                fontFamily="Arial"
              >
                Weerwaarschuwingen
                <tspan x="700" dy="35" fontSize="16">
                  Waarschuwt voor extreem weer, zoals stormen
                </tspan>
                <tspan x="700" dy="20" fontSize="16">
                  of hevige regenval
                </tspan>
              </text>
            </svg>
          </div>

          {/* Telefoon Mockup */}

          <div class="relative w-72 h-[600px] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900 mt-16">
            <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[22px] bg-zinc-900 rounded-full z-20"></div>

            <div class="absolute -inset-[1px] border-[3px] border-zinc-700 border-opacity-40 rounded-[37px] pointer-events-none"></div>

            <div class="relative w-full h-full rounded-[37px] overflow-hidden flex items-center justify-center bg-zinc-900/10">
              <img src="/weersverwachting.jpeg" alt="" />

              <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-12 bg-zinc-600 blur-[80px]"></div>
            </div>

            <div class="absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
            <div class="absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
            <div class="absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
            <div class="absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
