import Features from "./components/features/page.jsx";
import Mockup from "./components/mockup/mockup.jsx"
import Reviews from "./components/reviews/reviews.jsx";

import "./globals.css";

export default function Home() {
  return (
    <main>
      <Mockup/>
      <Features/>
      <Reviews />
    </main>
  );
}
