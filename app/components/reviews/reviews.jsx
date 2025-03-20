export default function Page() {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl font-heading font-bold text-black dark:">Onze stralende reviews</h2>
                </div>

                <div className="grid gap-8 mb-6 lg:mb-12 md:grid-cols-3">
                    {[...Array(3)].map((_, review) => (
                        <div key={review} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-pretty">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src="/path/to/image.png"
                                    alt="Reviewer"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                                />
                                <h3 className="text-xl font-heading text-gray-900">Sophie</h3>
                                <div className="flex items-center mt-4 mb-4 ml-24">
                                    {[...Array(5)].map((_, sterren) => (
                                        <svg key={sterren} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-600 italic font-body">“De KNMI-app is een absolute lifesaver! Als iemand die in een gebied woont waar vaak extreem weer voorkomt, heb ik deze app al meerdere keren kunnen gebruiken om me voor te bereiden op gevaarlijke weersomstandigheden.”</p>
                        </div>
                    ))}
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {[...Array(3)].map((_, review) => (
                        <div key={review} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-pretty">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src="/path/to/image.png"
                                    alt="Reviewer"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                                />
                                <h3 className="text-xl font-heading text-gray-900">Sophie</h3>
                                <div className="flex items-center mt-4 mb-4 ml-24">
                                    {[...Array(5)].map((_, sterren) => (
                                        <svg key={sterren} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-600 italic font-body">“De KNMI-app is een absolute lifesaver! Als iemand die in een gebied woont waar vaak extreem weer voorkomt, heb ik deze app al meerdere keren kunnen gebruiken om me voor te bereiden op gevaarlijke weersomstandigheden.”</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

