import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import GapSection from "./components/GapSection.jsx";
import Quiz from "./components/Quiz.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { useHashScroll } from "../shared/useHashScroll.js";

/**
 * Sektions-Reihenfolge des Leadmagneten (/quiz/):
 * Aufhaenger — Zahlen zum Gap — der Test — Anmeldung.
 * Eigenstaendige Kopie, aendert nichts an Seite 1 und Seite 2.
 */
export default function App() {
  useReveal();
  useHashScroll();

  return (
    <>
      <a
        href="#test"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-magenta focus:px-5 focus:py-3 focus:font-mono focus:text-sm focus:uppercase focus:tracking-[0.18em] focus:text-white"
      >
        Direkt zum Test
      </a>

      <main id="hauptinhalt">
        <Ticker />
        <Hero />
        <Ticker tone="light" reverse />
        <GapSection />
        <Ticker />
        <Quiz />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
