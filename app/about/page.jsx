export default function About() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      {/* Blauwe bollen */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-300 to-transparent bottom-20 -left-32 opacity-50"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-300 to-transparent -top-10 -right-32 opacity-50"></div>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Tekstgedeelte */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Over ons</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">KNMI App</h3>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet. Aut aliquam sunt qui galisum omnis ea error perspiciatis
            et debitis inventore ex quasi laboriosam qui inventore magnam? Non atque fugiat ut iste
            velit aut dolorem quas et animi dicta qui quia rerum.
          </p>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet. Aut aliquam sunt qui galisum omnis ea error perspiciatis
            et debitis inventore ex quasi laboriosam qui inventore magnam? Non atque fugiat ut iste
            velit aut dolorem quas et animi dicta qui quia rerum.
          </p>

          {/* Download knoppen */}
          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 bg-groen text-white px-6 py-3 rounded-lg hover:bg-groendark">
              Download
            </button>
            <button className="flex items-center gap-2 bg-groen text-white px-6 py-3 rounded-lg hover:bg-groendark">
              Download
            </button>
          </div>
        </div>

        {/* Afbeelding naast tekst */}
        <div className="flex justify-center">
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



