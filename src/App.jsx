import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import About from "./components/About.jsx";
import WorkshopDeepDive from "./components/WorkshopDeepDive.jsx";
import SeriesTeaser from "./components/SeriesTeaser.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";

export default function App() {
  useReveal();

  return (
    <>
      <main id="hauptinhalt">
        <Ticker />
        <Hero />
        <Ticker tone="light" reverse />
        <About />
        <Ticker />
        <WorkshopDeepDive />
        <SeriesTeaser />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
