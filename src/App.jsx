import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import About from "./components/About.jsx";
import WorkshopDeepDive from "./components/WorkshopDeepDive.jsx";
import SeriesTeaser from "./components/SeriesTeaser.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";

/**
 * Gemeinsame Seiten-Shell beider Landingpages.
 *
 * Die Ueber-Sektion wird hereingereicht, damit diese Datei nichts ueber die
 * einzelnen Seiten wissen muss:
 *   Seite 1 (/)        -> About      ("Wer bin ich?",  Insa)
 *   Seite 2 (/frauen/) -> AboutTeam  ("Wer sind wir?", Insa + Mareike)
 */
export default function App({ AboutSection = About }) {
  useReveal();

  return (
    <>
      <main id="hauptinhalt">
        <Ticker />
        <Hero />
        <Ticker tone="light" reverse />
        <AboutSection />
        <Ticker />
        <WorkshopDeepDive />
        <SeriesTeaser />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
