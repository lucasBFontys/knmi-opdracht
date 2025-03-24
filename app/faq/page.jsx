"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      {
        question: "Is de KNMI Weer-app betrouwbaar?",
        answer:
          "Ja, de app wordt ontwikkeld en onderhouden door het KNMI Nederland, de officiële bron voor weergegevens in Nederland.",
      },
      {
        question: "Waarom heeft de KNMI Weer-app geen reclame?",
        answer:
          "De KNMI Weer-app is een publieke dienst gefinancierd door de overheid en bevat geen advertenties om de kwaliteit en objectiviteit van de weersinformatie te waarborgen.",
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
        question: "Waar komt de weerinformatie vandaan?",
        answer:
          "Alle gegevens in de app zijn afkomstig van het KNMI, de officiële meteorologische dienst van Nederland.",
      },
      {
        question: "Hoe ver vooruit kan ik de weersvoorspelling bekijken?",
        answer:
          "De app biedt weersvoorspellingen tot 14 dagen vooruit. Hoe verder vooruit, hoe groter de onzekerheid.",
      },
      {
        question: "Waarom verandert de weersvoorspelling soms?",
        answer:
          "Weermodellen worden continu bijgewerkt met nieuwe data, waardoor verwachtingen kunnen veranderen naarmate er meer zekerheid is.",
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
      {
        question: "Zijn er ook weerkaarten voor temperatuur en luchtdruk?",
        answer:
          "Ja, naast neerslag toont de app ook temperatuur- en luchtdrukkaarten voor een volledig overzicht van het weer.",
      },
      {
        question: "Hoe nauwkeurig is de regenradar?",
        answer:
          "De radar geeft een real-time beeld van neerslag, maar kleine en lokale buien kunnen soms moeilijk te voorspellen zijn.",
      },
      {
        question: "Kan ik de KNMI weerkaarten ook buiten Nederland gebruiken?",
        answer:
          "De app is primair gericht op Nederland, maar toont ook delen van de omliggende landen op de weerkaarten.",
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
      {
        question: "Kan ik aangepaste meldingen ontvangen voor specifieke weersomstandigheden?",
        answer:
          "Ja, je kunt notificaties instellen voor specifieke weersomstandigheden, zoals zware regenval, storm of extreme hitte.",
      },
      {
        question: "Kan ik meldingen ontvangen voor meerdere locaties?",
        answer:
          "Ja, je kunt meerdere locaties opslaan en meldingen ontvangen voor elk van deze locaties.",
      },
      {
        question: "Hoe stel ik een drempelwaarde in voor waarschuwingen?",
        answer:
          "In de instellingen kun je aangeven vanaf welke windsnelheid of neerslagintensiteit je een melding wilt ontvangen.",
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
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Veelgestelde Vragen</h2>
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
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((section, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-3">{section.category}</h3>
              <div className="space-y-4">
                {section.items.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[18px] text-gray-700 mb-4">Heb je nog verdere vragen?</p>
          <Link href="/contact">
            <button className="bg-[#038a6f] hover:bg-[#026e59] text-white font-normal py-3 px-6 rounded-md transition duration-300 text-[18px] font-['Montserrat']">
              Ga naar de contactpagina
            </button>
          </Link>
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
        className="w-full flex justify-between items-center text-[20px] font-semibold focus:outline-none text-black"
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
        <p className="text-[18px] text-gray-700">{answer}</p>
      </motion.div>
    </div>
  );
}
