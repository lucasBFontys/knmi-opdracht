"use client";

import { useState, useEffect } from "react";

const images = ["/weersverwachting.jpeg", "/actuele-weersituatie.png"];

export default function Page() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const index = Math.min(Math.floor(scrollY / 500), images.length - 1);
        setImageIndex(index);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6 text-center ">
        <h1 className="mt-20 mb-10 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl font-heading">
          Met de KNMI-app ben je voorbereid op <br /> gevaarlijk weer
        </h1>
        <p className="mb-10 text-[16px] font-normal text-gray-500 sm:px-16 xl:px-48 font-body mb-100">
          Ontvang realtime waarschuwingen voor stormen, hevige regenval of
          andere extreme weersomstandigheden, zodat je veilig kunt handelen. Of
          je nu thuis bent of onderweg, de app helpt je voorbereid te zijn op
          wat het weer ook brengt.
        </p>

        {/* De minimale hoogte voor het scrollen*/}
        <div className="relative min-h-[1500px] mb-[-500px]">
          {/* De container voor mockup en svg dat vastgezet wordt*/}
          <div className="sticky top-1/2 transform -translate-y-1/2 w-full h-[800px] z-10">
            {/* SVG background now inside the sticky container */}
            <div className="absolute inset-0 flex items-center justify-center">
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
                {/* Cirkels op de lijn */}
                <circle cx="117.643" cy="209.5" r="5.64303" fill="#92AEC3" />
                <circle cx="99.643" cy="374.5" r="5.64303" fill="#92AEC3" />
                <circle cx="166.726" cy="523.775" r="5.64303" fill="#92AEC3" />
                <circle cx="732.054" cy="212.896" r="5.64303" fill="#92AEC3" />
                <circle cx="746.418" cy="375.005" r="5.64303" fill="#92AEC3" />
                <circle cx="681.78" cy="523.775" r="5.64303" fill="#92AEC3" />
              </svg>
            </div>

            {/* De gepositoneerde tekst rondom de mockup*/}

            {/* Linksboven */}
            <div className="absolute left-[250px] top-[190px] text-right max-w-[273px] transform translate-x-[-100%]">
              <h3
                className={`text-xl font-bold ${
                  imageIndex === 0
                    ? "text-[var(--color-blauw)]"
                    : "text-[#B0B0B0]"
                }`}
              >
                Neerslagradar{" "}
                <span
                  className={`transition-opacity duration-300 ${
                    imageIndex === 0 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  🌧️
                </span>
              </h3>
              <p
                className={`text-left mt-2 ${
                  imageIndex === 0 ? "text-black" : "text-[#B0B0B0]"
                }`}
              >
                Toont actuele neerslag zoals regen of sneeuw in de omgeving
              </p>
            </div>

            {/* Linksmidden */}
            <div className="absolute left-[250px] top-[360px] text-right max-w-[300px] transform translate-x-[-100%]">
              <h3
                className={`text-xl font-bold ${
                  imageIndex === 1
                    ? "text-[var(--color-blauw)]"
                    : "text-[#B0B0B0]"
                }`}
              >
                UV-Index{" "}
                <span
                  className={`transition-opacity duration-300 ${
                    imageIndex === 1 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  ☀️
                </span>
              </h3>
              <p
                className={`text-left mt-2 ${
                  imageIndex === 1 ? "text-black" : "text-[#B0B0B0]"
                }`}
              >
                Toont de sterkte van de zonnestraling <br />
                en het risico op huidbeschadiging
              </p>
            </div>

            {/* Linksonder */}
            <div className="absolute left-[320px] top-[510px] text-right max-w-[300px] transform translate-x-[-100%]">
              <h3
                className={`text-xl font-bold ${
                  imageIndex === 0
                    ? "text-[var(--color-blauw)]"
                    : "text-[#B0B0B0]"
                }`}
              >
                Weerwaarschuwingen{" "}
                <span
                  className={`transition-opacity duration-300 ${
                    imageIndex === 0 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  ⚠️
                </span>
              </h3>
              <p
                className={`text-left mt-2 ${
                  imageIndex === 0 ? "text-black" : "text-[#B0B0B0]"
                }`}
              >
                Waarschuwt voor extreem weer, zoals stormen of hevige regenval
              </p>
            </div>

            {/* Rechtsboven */}
            <div className="absolute right-[-40px] top-[195px] text-left w-[300px]">
              <h3
                className={`text-xl font-bold ${
                  imageIndex === 1
                    ? "text-[var(--color-blauw)]"
                    : "text-[#B0B0B0]"
                }`}
              >
                Actuele weersituatie{" "}
                <span
                  className={`transition-opacity duration-300 ${
                    imageIndex === 1 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  🌡️
                </span>
              </h3>
              <p
                className={`text-base mt-2 ${
                  imageIndex === 1 ? "text-black" : "text-[#B0B0B0]"
                }`}
              >
                Geeft de huidige weersomstandigheden, zoals temperatuur, wind en
                neerslag, weer
              </p>
            </div>

            {/* Rechtsmidden */}
            <div className="absolute right-[-40px] top-[360px] text-left w-[300px]">
              <h3
                className={`text-xl font-bold ${
                  imageIndex === 0
                    ? "text-[var(--color-blauw)]"
                    : "text-[#B0B0B0]"
                }`}
              >
                Weersverwachting{" "}
                <span
                  className={`transition-opacity duration-300 ${
                    imageIndex === 0 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  📅
                </span>
              </h3>
              <p
                className={`text-base mt-2 ${
                  imageIndex === 0 ? "text-black" : "text-[#B0B0B0]"
                }`}
              >
                Biedt voorspellingen voor het weer in de komende uren en dagen
              </p>
            </div>

            {/* Rechtsonder */}
            <div className="absolute right-[20px] top-[510px] text-left w-[300px]">
              <h3
                className={`text-xl font-bold ${
                  imageIndex === 1
                    ? "text-[var(--color-blauw)]"
                    : "text-[#B0B0B0]"
                }`}
              >
                Windvoorspelling{" "}
                <span
                  className={`transition-opacity duration-300 ${
                    imageIndex === 1 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  💨
                </span>
              </h3>
              <p
                className={`text-left mt-2 ${
                  imageIndex === 1 ? "text-black" : "text-[#B0B0B0]"
                }`}
              >
                Laat zien hoe sterk de wind zal zijn en uit welke richting deze
                komt.
              </p>
            </div>

            {/* Telefoon Mockup */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-[600px] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900 ">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[22px] bg-zinc-900 rounded-full z-20"></div>

              <div className="absolute -inset-[1px] border-[3px] border-zinc-700 border-opacity-40 rounded-[37px] pointer-events-none"></div>

              <div className="relative w-full h-full rounded-[37px] overflow-hidden flex items-center justify-center bg-zinc-900/10">
                <img
                  key={imageIndex}
                  src={images[imageIndex] || "/placeholder.svg"}
                  alt=""
                  className="transition-opacity duration-00"
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
      </div>
    </section>
  );
}
