"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function InfiniteReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [duration, setDuration] = useState(40);

    useEffect(() => {
        axios
            .get("/data/reviews.json")
            .then((response) => {
                setReviews(response.data.reviews);
                setLoading(false);
            })
            .catch(() => {
                setError("Fout bij ophalen van reviews");
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const calculateDuration = () => {
            const viewportWidth = window.innerWidth;
            const newDuration = Math.max(20, 40 * (viewportWidth / 1000));
            setDuration(newDuration);
        };

        calculateDuration();
        window.addEventListener("resize", calculateDuration);

        return () => {
            window.removeEventListener("resize", calculateDuration);
        };
    }, []);

    if (loading) {
        return <h1 className="text-blue-500 flex justify-center p-8 font-bold font-heading">Reviews worden geladen...</h1>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!reviews.length) {
        return <p className="text-red-500">Geen reviews beschikbaar</p>;
    }

    const extendedReviews = [...reviews, ...reviews, ...reviews];

    return (
        <section className="relative py-12 md:py-16 lg:py-24 w-full overflow-hidden my-8 md:my-12 lg:my-16">
            <div className="text-center mx-auto max-w-screen-sm mb-10 lg:mb-16">
                <h2 className="mb-6 text-4xl font-bold font-heading text-black">Onze stralende reviews</h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="mb-4 md:mb-8 overflow-hidden w-full">
                    <motion.div
                        className="flex space-x-8"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            duration: duration,
                            ease: "linear",
                        }}
                    >
                        {extendedReviews.map((review, index) => (
                            <ReviewCard key={`row1-1-${index}`} review={review} />
                        ))}
                        {extendedReviews.map((review, index) => (
                            <ReviewCard key={`row1-2-${index}`} review={review} />
                        ))}
                    </motion.div>
                </div>

                <div className="overflow-hidden w-full mb-8">
                    <motion.div
                        className="flex space-x-8"
                        initial={{ x: "-50%" }}
                        animate={{ x: 0 }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            duration: duration,
                            ease: "linear",
                        }}
                    >
                        {extendedReviews.map((review, index) => (
                            <ReviewCard key={`row2-1-${index}`} review={review} />
                        ))}
                        {extendedReviews.map((review, index) => (
                            <ReviewCard key={`row2-2-${index}`} review={review} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 w-96 flex-shrink-0">
            <div className="flex items-center mb-6">
                <div className="flex items-center">
                    <img
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border-gray-300 mr-4"
                    />
                    <h3 className="text-xl font-bold font-heading text-gray-900">{review.name}</h3>
                </div>
                <div className="flex items-center ml-auto">
                    {[...Array(review.rating)].map((_, i) => (
                        <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                        </svg>
                    ))}
                </div>
            </div>

            <p className="text-gray-600 italic font-body">"{review.text}"</p>
        </div>
    );
}
