"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Features() {
  function AnimatedParagraph({ children }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.9,
    });

    useEffect(() => {
      if (inView) {
        controls.start({ color: "#000000", transition: { duration: 0.6 } });
      } else {
        controls.start({ color: "#9CA3AF", transition: { duration: 0.6 } });
      }
    }, [controls, inView]);

    return (
      <motion.p
        ref={ref}
        animate={controls}
        initial={{ color: "#F1F6FD" }}
        className="mb-6 text-lg md:text-xl font-semibold"
      >
        {children}
      </motion.p>
    );
  }

  return (
    <div className="w-full px-6 py-12 bg-[var(--color-offwit)] text-left">
      <div className="max-w-2xl mx-auto">
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
