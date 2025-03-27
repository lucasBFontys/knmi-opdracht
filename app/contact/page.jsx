"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="overflow-hidden">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-8">
                <h2 className="mb-4 text-4xl tracking-tight font-heading font-bold text-center text-[#0c2340]">
                    Neem contact op
                </h2>
                <p className="mb-8 lg:mb-16 font-body text-center text-pretty text-black sm:text-lg">
                    Heb je een technisch probleem? Wil je feedback geven over de app? Meer weten over de KNMI? Laat het ons weten.
                </p>
                <form action="#" className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                    >
                        <label htmlFor="email" className="block mb-2 text-sm font-body font-medium text-gray-900">
                            Jouw e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-white border border-lblauw text-gray-900 font-accent font-extralight text-sm rounded-lg focus:ring-blauw focus:border-blauw block w-full p-2.5"
                            placeholder="naam@voorbeeld.com"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                    >
                        <label htmlFor="subject" className="block mb-2 text-sm font-body font-medium text-gray-900">
                            Onderwerp
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm font-accent font-extralight text-gray-900 bg-white rounded-lg border border-lblauw shadow-sm focus:ring-blauw focus:border-blauw"
                            placeholder="Laat ons weten hoe we je kunnen helpen"
                            required
                        />
                    </motion.div>

                    <motion.div
                        className="sm:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
                    >
                        <label htmlFor="message" className="block mb-2 text-sm font-body font-medium text-gray-900">
                            Jouw bericht
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm font-accent font-extralight text-gray-900 bg-white rounded-lg shadow-sm border border-lblauw focus:ring-blauw focus:border-blauw"
                            placeholder="Laat een bericht achter..."
                        ></textarea>
                    </motion.div>

                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-body text-center text-white rounded-full bg-groen sm:w-fit hover:bg-groendark focus:ring-4 focus:outline-none focus:ring-primary-300 shadow-lg"
                    >
                        Bericht versturen
                    </button>
                </form>
            </div>
        </section>
    );
}
