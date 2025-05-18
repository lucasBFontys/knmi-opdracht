export default function Over() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      {/* Content grid */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Titels + tekst */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Over ons</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              KNMI App
            </h3>
            <p className="text-gray-700 mt-4">
              Het Koninklijk Nederlands Meteorologisch Instituut (KNMI) is sinds
              1854 de autoriteit op het gebied van weer, klimaat en seismologie
              in Nederland. Met 48 meetstations levert het 24/7 betrouwbare
              metingen en voorspellingen die essentieel zijn voor veiligheid en
              leefbaarheid.
            </p>
            <p className="text-gray-700 mt-2">
              De weerkamer van het KNMI staat continu paraat om tijdige en
              gerichte waarschuwingen te geven bij gevaarlijk of extreem weer.
              Daarnaast voorzien onze meteorologen diverse sectoren, zoals
              luchtvaart, scheepvaart en transport, van op maat gemaakte
              weerinformatie om veiligheidsrisico's te minimaliseren.
            </p>
            <p className="text-gray-700 mt-2">
              Door voortdurende innovatie en wetenschappelijk onderzoek blijft
              het KNMI Nederland voorzien van accurate adviezen en
              waarschuwingen, met als doel een veilige en leefbare omgeving te
              waarborgen.
            </p>
          </div>
        </div>

        {/* Afbeelding aan de rechterkant */}
        <div className="flex justify-center items-center">
          <div className="w-[350px] bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/knmi app icon.png"
              alt="KNMI App op een telefoon"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
