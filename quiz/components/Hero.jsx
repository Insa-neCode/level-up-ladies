import Button from "./Button.jsx";
import Marker from "./Marker.jsx";
import Tape from "./Tape.jsx";
import Sticker from "./Sticker.jsx";
import { hero, questions } from "../content.js";

/**
 * Kopf des Leadmagneten. Gleicher Aufbau wie der Hero von /frauen/ —
 * statt Portraet steht rechts die Anzahl der Fragen als Magazin-Kachel.
 */
export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-ink pt-10 pb-16 md:pt-14 md:pb-24"
    >
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full bg-magenta/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-magenta/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-[1.45fr_0.55fr] md:items-center md:gap-10 md:px-10">
        {/* ---------------- Left: Titel ---------------- */}
        <div className="reveal relative">
          <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta">
            <span className="glow-text">{hero.issue}</span>
            <span aria-hidden="true" className="h-px w-10 bg-magenta/60" />
            <span className="text-white/70">{hero.season}</span>
          </p>

          <Marker
            underline
            className="absolute right-0 -top-3 hidden rotate-[-6deg] text-2xl sm:block lg:text-3xl"
          >
            {hero.scribbles.topRight}
          </Marker>

          <h1 className="font-display text-[46px] leading-[0.84] font-black italic tracking-[-0.02em] text-white glow-text-white sm:text-[68px] md:text-[86px] lg:text-[112px]">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="relative mt-7 inline-block">
            <p
              className="bg-magenta px-6 py-4 text-[18px] leading-tight font-bold text-white glow-box sm:text-[24px] md:text-[28px]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 92% 100%, 4% 100%, 0 84%)" }}
            >
              {hero.banner.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <Marker
              arrow="up-right"
              className="absolute -left-4 top-full mt-2 hidden text-xl sm:block"
            >
              {hero.scribbles.bottomLeft}
            </Marker>
          </div>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-dim sm:mt-20 md:text-lg">
            {hero.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button scrollTo="#test" pulse className="w-full sm:w-auto">
              {hero.ctaPrimary}
            </Button>
            <Button variant="outline" scrollTo="#gap" className="w-full sm:w-auto">
              {hero.ctaSecondary}
            </Button>
          </div>

          <p className="mt-8 max-w-md border-l-2 border-magenta/50 pl-4 text-[13px] leading-relaxed text-faint">
            {hero.privacy}
          </p>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-faint md:mt-10">
            {hero.byline}
          </p>
        </div>

        {/* ---------------- Right: Zahlen-Kachel ---------------- */}
        <div className="reveal relative mx-auto w-full max-w-[260px] md:ml-auto md:mr-0 md:max-w-[300px]">
          <Tape className="-left-4 -top-3 z-20" rotate={-14} width={120} />
          <Tape className="-right-5 bottom-6 z-20" rotate={-16} width={100} />

          <div className="relative border border-magenta/50 bg-ink-2 px-7 py-10 text-center glow-box">
            <p className="font-display text-[92px] leading-none font-black italic text-magenta glow-text">
              {questions.length}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white">
              Fragen
            </p>
            <div aria-hidden="true" className="my-6 h-px w-full bg-hair" />
            <p className="font-display text-[52px] leading-none font-black italic text-white">3</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white">
              Minuten
            </p>
            <div aria-hidden="true" className="my-6 h-px w-full bg-hair" />
            <p className="font-display text-[52px] leading-none font-black italic text-white">0 €</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white">
              Kosten
            </p>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <Sticker rotate={-5}>Kostenlos</Sticker>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
