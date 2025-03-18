"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    category: "Algemeen",
    items: [
      {
        question: "Wat is de KNMI Weer-app?",
        answer:
          "De KNMI Weer-app is de officiële applicatie van het Koninklijk Nederlands Meteorologisch Instituut (KNMI). De app biedt actuele weersinformatie en waarschuwingen voor Nederland.",
      },
      {
        question: "Is de KNMI Weer-app gratis?",
        answer: "Ja, de app is volledig gratis te downloaden en te gebruiken. Zonder reclame.",
      },
      {
        question: "Op welke apparaten werkt de KNMI Weer-app?",
        answer:
          "De app is beschikbaar voor iOS (Apple) en Android (Google Play Store).",
      },
    ],
  },
  {
    category: "Weersverwachtingen en informatie",
    items: [
      {
        question: "Hoe vaak wordt het weer geüpdatet?",
        answer:
          "De weersinformatie wordt continu bijgewerkt met de nieuwste gegevens van het KNMI. De verwachting wordt elk uur geüpdatet.",
      },
      {
        question: "Waar komt de weersinformatie vandaan?",
        answer:
          "Alle gegevens in de app zijn afkomstig van het KNMI, de officiële meteorologische dienst van Nederland.",
      },
      {
        question: "Wat betekenen de verschillende weerwaarschuwingen?",
        answer:
          "⚪ Wit – Wees alert bij kans op hinder door weersomstandigheden.\n🟠 Oranje – Wees extra voorzichtig, het weer kan gevaarlijk zijn.\n🔴 Rood – Grote impact mogelijk, het weer vormt risico’s voor veiligheid en verkeer.",
      },
      {
        question: "Hoe accuraat zijn de voorspellingen?",
        answer:
          "De KNMI Weer-app gebruikt de meest geavanceerde modellen en radarbeelden voor zo nauwkeurig mogelijke voorspellingen.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-4 md:px-10">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2">FAQ</h1>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Veelgestelde Vragen</h2>
            <p className="text-lg text-gray-700">
              Welkom bij de veelgestelde vragen over de KNMI Weer-app. Hier vind je antwoorden op de meest voorkomende vragen over de weersverwachtingen, meldingen en instellingen.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Image 
              src="/pop.png" 
              alt="KNMI Weerapp Mascotte" 
              width={250} 
              height={250} 
              className="mx-auto"
            />
          </div>
        </div>
        <div className="space-y-6">
          {faqs.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center py-3 text-lg font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-xl text-blue-700">{isOpen ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="py-2 text-gray-700 whitespace-pre-line">{answer}</p>
      </motion.div>
    </div>
  );
}
