"use client";
import { useState } from "react";
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
    category: "📱 App-functionaliteiten",
    items: [
      {
        question: "Kan ik meerdere locaties toevoegen in de app?",
        answer:
          "Ja, je kunt meerdere favoriete locaties instellen om snel het weer op verschillende plekken te checken.",
      },
      {
        question: "Kan ik de widget gebruiken op mijn startscherm?",
        answer:
          "Ja, de KNMI Weer-app biedt widgets voor zowel Android als iOS, waarmee je direct het actuele weer kunt bekijken zonder de app te openen.",
      },
      {
        question: "Hoe stel ik een voorkeurseenheid in (Celsius/Fahrenheit)?",
        answer:
          "Ga naar Instellingen en kies de gewenste temperatuureenheid.",
      },
    ],
  },
  {
    category: "⚡ Extreme Weer",
    items: [
      {
        question: "Wat moet ik doen bij een weeralarm?",
        answer:
          "Volg de waarschuwingen in de app en raadpleeg de officiële richtlijnen van het KNMI.",
      },
      {
        question: "Geeft de app waarschuwingen voor hittegolven?",
        answer:
          "Ja, bij langdurige hitte kunnen waarschuwingen en adviezen in de app verschijnen.",
      },
      {
        question: "Kan ik waarschuwingen ontvangen voor bliksem in mijn omgeving?",
        answer:
          "Ja, de app kan meldingen sturen bij naderend onweer als deze optie is ingeschakeld.",
      },
    ],
  },
  {
    category: "📊 Weerdata en Wetenschap",
    items: [
      {
        question: "Waar haalt de app haar data vandaan?",
        answer:
          "De gegevens komen rechtstreeks van het KNMI, satellieten en meteorologische stations in Nederland.",
      },
      {
        question: "Hoe werkt de neerslagvoorspelling?",
        answer:
          "De app gebruikt radarbeelden en modellen om de neerslagintensiteit en -beweging te voorspellen.",
      },
      {
        question: "Waarom verandert de weersvoorspelling soms?",
        answer:
          "Weervoorspellingen worden continu geüpdatet op basis van de nieuwste satelliet- en radargegevens.",
      },
    ],
  },
  {
    category: "🛠️ Probleemoplossing",
    items: [
      {
        question: "Ik krijg geen meldingen, hoe los ik dit op?",
        answer:
          "Controleer of meldingen in de instellingen zijn ingeschakeld en of de app toestemming heeft om meldingen te sturen.",
      },
      {
        question: "Waarom werkt de locatiebepaling niet goed?",
        answer:
          "Controleer of je GPS is ingeschakeld en of de app toegang heeft tot je locatie.",
      },
      {
        question: "De app crasht, wat kan ik doen?",
        answer:
          "Probeer de app opnieuw op te starten, je cache te legen of de nieuwste update te installeren.",
      },
    ],
  },
  {
    category: "🌎 Klimaat en Milieu",
    items: [
      {
        question: "Geeft de app informatie over klimaatverandering?",
        answer:
          "Ja, in de app zijn soms updates en nieuwsartikelen te vinden over klimaatverandering en extreme weersituaties.",
      },
      {
        question: "Kan ik luchtkwaliteit en pollenvoorspellingen zien?",
        answer:
          "Ja, afhankelijk van de regio toont de app soms luchtkwaliteitsinformatie en pollenwaarschuwingen.",
      },
    ],
  },
  {
    category: "🔗 Integraties",
    items: [
      {
        question: "Kan ik de app koppelen met mijn smartwatch?",
        answer:
          "Ja, de app ondersteunt integraties met bepaalde smartwatches, zoals Apple Watch en Android Wear.",
      },
      {
        question: "Ondersteunt de app Siri of Google Assistant?",
        answer:
          "Ja, je kunt spraakcommando’s gebruiken om snel het weer op te vragen.",
      },
    ],
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-10 px-4 md:px-10">
      <div className="max-w-4xl w-full">
        <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
          <div>
            <h1 className='text-4xl font-bold text-blue-900 mb-2'>FAQ</h1>
            <h2 className='text-2xl font-bold text-blue-700 mb-4'>Veelgestelde Vragen</h2>
            <p className='text-lg text-gray-700'>
              Welkom bij de veelgestelde vragen over de KNMI Weer-app. Hier vind je antwoorden op de meest voorkomende vragen over de weersverwachtingen, meldingen en instellingen.
            </p>
          </div>
          <div className='mt-6 md:mt-0'>
            <Image
              src='/pop.png'
              alt='KNMI Weerapp Mascotte'
              width={250}
              height={250}
              className='mx-auto'
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">FAQ</h1>
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
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-blue-300 shadow-md rounded-lg p-4 mb-4">
      <button className="w-full flex justify-between items-center text-lg font-medium focus:outline-none text-blue-900" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="text-xl text-[#038a6f]">{isOpen ? "−" : "+"}</span>
      </button>
      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden mt-2">
        <p className="text-gray-700">{answer}</p>
      </motion.div>
    </div>
  );
}
