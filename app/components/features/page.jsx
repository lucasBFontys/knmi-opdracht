"use client";

import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Features() {
  // AnimatedParagraph component met kleurverandering op basis van scrollpositie
  function AnimatedParagraph({ children }) {
    const controls = useAnimation();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 50%", "end 50%"], // Triggert wanneer de tekst in het midden van het scherm zit
    });

    useEffect(() => {
      scrollYProgress.on("change", (latest) => {
        if (latest > 0.5) {
          controls.start({ color: "#000000", transition: { duration: 0.6 } });
        } else {
          controls.start({ color: "#9CA3AF", transition: { duration: 0.6 } }); // Lichtgrijs standaard
        }
      });
    }, [scrollYProgress, controls]);

    return (
      <motion.p
        ref={ref}
        animate={controls}
        initial={{ color: "#9CA3AF" }} // Tekst standaard zichtbaar in lichtgrijs
        className="mb-6 text-lg md:text-xl font-semibold"
      >
        {children}
      </motion.p>
    );
  }

  return (
    <div className="w-full px-6 pt-24 bg-[var(--color-offwit)] text-left">
      <div className="max-w-2xl mx-auto">
        <AnimatedParagraph>
          Weerapps zijn er genoeg. Maar hoe vaak open je er één en word je overspoeld met advertenties 📢, 
          vage voorspellingen en overbodige extra’s?
        </AnimatedParagraph>
        <AnimatedParagraph>Dat kan anders.</AnimatedParagraph>
        <AnimatedParagraph>
          De KNMI-app is er voor iedereen. Gemaakt voor het volk 👥, 
          zonder advertenties 🚫📢, zonder ruis. Gewoon betrouwbaar weer 🌤️, direct van de bron.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Met een unieke functie die écht telt: officiële weerswaarschuwingen 
          bij gevaarlijk weer. Storm ⛈️, gladheid ❄️, extreme hitte ☀️ je weet het als eerste.
        </AnimatedParagraph>
        <div className="flex items-center">
          <AnimatedParagraph>
            Duidelijk, snel, betrouwbaar ✅. Zodat jij altijd voorbereid bent 🎯.
          </AnimatedParagraph>
        </div>
      </div>
    </div>
  );
}

