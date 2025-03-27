export default function Contact() {
    return (
        <section className=" overflow-hidden">

            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-heading font-bold text-center text-black">
                    Neem contact op
                </h2>
                <p className="mb-8 lg:mb-16 font-body text-center text-pretty text-black sm:text-xl">
                    Heb je een technisch probleem? Wil je feedback geven over de app? Meer weten over ons de KNMI? Laat het ons weten.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-body font-medium text-gray-900">
                            Jouw e-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 font-accent font-extralight text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="naam@voorbeeld.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-body font-medium text-gray-900">
                            Onderwerp
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm font-accent font-extralight text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Laat ons weten hoe we je kunnen helpen"
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-body font-medium text-gray-900">
                            Jouw bericht
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm font-accent font-extralight text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Laat een bericht achter..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-body text-center text-wit rounded-lg bg-groen sm:w-fit hover:bg-groendark focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                        Bericht versturen
                    </button>

                </form>
            </div>
        </section>
    );
}
