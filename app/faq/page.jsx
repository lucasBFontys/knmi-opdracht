"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    category: "🌍 Algemeen",
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
    category: "☁️ Weersverwachtingen en informatie",
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
  {
    category: "📡 Weerradar en kaarten",
    items: [
      {
        question: "Hoe werkt de regenradar?",
        answer:
          "De regenradar toont een real-time kaart van neerslag in Nederland. Je kunt vooruit en achteruit scrollen om de regenverwachting te bekijken.",
      },
      {
        question: "Kan ik de windrichting en windsnelheid zien?",
        answer:
          "Ja, de app toont informatie over windrichting, windsnelheid en windstoten op basis van actuele meetgegevens.",
      },
    ],
  },
  {
    category: "🔔 Meldingen en instellingen",
    items: [
      {
        question: "Kan ik meldingen krijgen voor slecht weer?",
        answer:
          "Ja, je kunt notificaties instellen voor weerwaarschuwingen en specifieke locaties.",
      },
      {
        question: "Hoe pas ik mijn locatie-instellingen aan?",
        answer:
          "Ga naar Instellingen > Mijn Locatie en voeg handmatig plaatsen toe of gebruik GPS voor automatische updates.",
      },
      {
        question: "Kan ik kiezen tussen een lichte en donkere modus?",
        answer:
          "Ja, de app ondersteunt zowel licht als dark mode, aan te passen rechtsbovenaan de pagina.",
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
            <h1 className="text-4xl font-bold text-blue-900 font-['Inter'] mb-2">FAQ</h1>
            <h2 className="text-2xl font-bold text-blue-700 font-['Inter'] mb-4">Veelgestelde Vragen</h2>
            <p className="text-lg text-gray-700 font-['Montserrat'] font-['Montserrat']">
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
              priority
            />
          </div>
        </div>
        <div className="space-y-6">
          {faqs.length > 0 && faqs.map((section, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 font-['Inter'] mb-3 flex items-center">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.length > 0 && section.items.map((faq, i) => (
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
    <div className="bg-white border border-blue-300 shadow-md rounded-lg p-4 mb-4">
      <button
        className="w-full flex justify-between items-center text-lg font-medium focus:outline-none text-blue-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-xl text-[#038a6f]">{isOpen ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden mt-2"
      >
        <p className="text-gray-700 font-['Montserrat']">{answer}</p>
      </motion.div>
    </div>
  );
} 