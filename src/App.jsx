import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import About from "./components/About.jsx";
import AboutTeam from "./components/AboutTeam.jsx";
import WorkshopDeepDive from "./components/WorkshopDeepDive.jsx";
import SeriesTeaser from "./components/SeriesTeaser.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";

/**
 * Gemeinsame Seiten-Shell beider Landingpages.
 *
 * aboutVariant="solo" -> "Wer bin ich?"  (Insa allein, Zielgruppe Bildung)
 * aboutVariant="team" -> "Wer sind wir?" (Insa + Mareike, Zielgruppe alle Frauen)
 */
export default function App({ aboutVariant = "solo" }) {
  useReveal();

  return (
    <>
      <main id="hauptinhalt">
        <Ticker />
        <Hero />
        <Ticker tone="light" reverse />
        {aboutVariant === "team" ? <AboutTeam /> : <About />}
        <Ticker />
        <WorkshopDeepDive />
        <SeriesTeaser />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
