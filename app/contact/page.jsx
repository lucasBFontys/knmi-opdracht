"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Features() {
  // Custom component voor geanimeerde paragraaf
  function AnimatedParagraph({ children }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: false, // Blijft reageren op scroll
      threshold: 0.99, // Tekst moet voor 99% in beeld zijn om te activeren
    });

    useEffect(() => {
      if (inView) {
        controls.start({ color: "#000000", transition: { duration: 0.6 } });
      } else {
        controls.start({ color: "#F1F6FD", transition: { duration: 0.6 } });
      }
    }, [controls, inView]);

    return (
      <motion.p
        ref={ref}
        animate={controls}
        initial={{ color: "#F1F6FD" }}
        className="mb-6 text-1xl md:text-2xl font-semibold" 
      >
        {children}
      </motion.p>
    );
  }

  return (
    <div className="w-full px-6 bg-[var(--color-offwit)] text-left flex items-center">
      <div className="max-w-2xl mx-auto text-lg md:text-xl pt- lg:pt-48">
        <AnimatedParagraph>
          Weerapps zijn er genoeg. Maar hoe vaak open je er één en word je overspoeld met advertenties, 
          vage voorspellingen en overbodige extra’s?
        </AnimatedParagraph>
        <AnimatedParagraph>Dat kan anders.</AnimatedParagraph>
        <AnimatedParagraph>
          De KNMI-app is er voor iedereen. Gemaakt voor het volk, 
          zonder advertenties, zonder ruis. Gewoon betrouwbaar weer, direct van de bron.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Met een unieke functie die écht telt: officiële weerswaarschuwingen 
          bij gevaarlijk weer. Storm, gladheid, extreme hitte—je weet het als eerste.
        </AnimatedParagraph>
        <AnimatedParagraph>
          Duidelijk, snel, betrouwbaar. Zodat jij altijd voorbereid bent.
        </AnimatedParagraph>
      </div>
    </div>
  );
}
