export default function About() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Download
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Download
            </button>
          </div>
        </div>

        {/* Afbeelding */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src="public/phone-mockup.png"
              alt="KNMI App op een telefoon"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
