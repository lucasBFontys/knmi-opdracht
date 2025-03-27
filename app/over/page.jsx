export default function Over() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center px-6">
      {/* Content grid */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Titels + tekst */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold font-heading text-[#0c2340]">Over ons</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-2 font-heading">KNMI App</h3>
            <p className="text-gray-700 mt-4 font-body">
              De KNMI Weerapp is dé officiële weerapp van het Koninklijk Nederlands Meteorologisch Instituut.
              Ontwikkeld door de overheid, speciaal voor iedereen in Nederland.
              Of je nu een bui wilt ontwijken, actuele waarschuwingen nodig hebt of gewoon het weer in de gaten wilt houden.
            </p>
            <p className="text-gray-700 mt-2 font-body">
              De KNMI Weerapp biedt betrouwbare en onafhankelijke informatie, direct van de bron.
              Zo ben je altijd goed voorbereid, waar je ook bent.
            </p>
          </div>

          {/* Download knoppen (mogen uitsteken) */}
          <div className="mt-6 flex gap-4 self-start">
            <button className="flex items-center gap-2 bg-groen text-white px-6 py-3 rounded-full hover:bg-groendark">
              Probeer het uit!
            </button>
          </div>
        </div>

        {/* Afbeelding aan de rechterkant */}
        <div className="flex justify-center items-center">
          <div className="w-[350px] bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src="/knmi about.png"
              alt="KNMI App op een telefoon"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
