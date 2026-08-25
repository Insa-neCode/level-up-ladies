import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import AboutTeam from "./components/AboutTeam.jsx";
import WorkshopDeepDive from "./components/WorkshopDeepDive.jsx";
import SeriesTeaser from "./components/SeriesTeaser.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";

/**
 * Sektions-Reihenfolge der zweiten Landingpage (/frauen/).
 * Eigenstaendige Kopie — aendert nichts an Seite 1.
 */
export default function App() {
  useReveal();

  return (
    <>
      <main id="hauptinhalt">
        <Ticker />
        <Hero />
        <Ticker tone="light" reverse />
        <AboutTeam />
        <Ticker />
        <WorkshopDeepDive />
        <SeriesTeaser />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
