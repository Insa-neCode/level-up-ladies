import SectionHeading from "./SectionHeading.jsx";
import Marker from "./Marker.jsx";
import Sticker from "./Sticker.jsx";
import Tape from "./Tape.jsx";
import { useContent } from "../data/ContentContext.jsx";

export default function SeriesTeaser() {
  const { series } = useContent();
  return (
    <section id="serie" className="relative overflow-hidden bg-ink-2 py-20 md:py-28">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[460px] w-[460px] rounded-full bg-magenta/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker={series.kicker}>{series.headline}</SectionHeading>
          <Marker className="hidden text-2xl md:block lg:text-3xl" underline>
            {series.scribble}
          </Marker>
        </div>

        <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-dim">{series.intro}</p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {series.workshops.map((w, i) => (
            <article
              key={w.level}
              className="reveal group relative border border-hair bg-ink p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-magenta hover:glow-box-sm"
            >
              {i === 0 && <Tape className="-left-3 -top-4 z-20" rotate={-14} width={90} />}

              <p className="font-display text-3xl font-black italic text-magenta glow-text">
                {w.level}
              </p>
              <h4 className="mt-3 font-display text-xl leading-snug font-bold text-white">
                {w.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-dim">{w.description}</p>

              <p className="mt-6 flex flex-wrap items-center gap-2">
                <span className="border border-white/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  {w.duration}
                </span>
                <span className="border border-magenta/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-magenta">
                  {w.tag}
                </span>
              </p>
            </article>
          ))}

          {/* Platzhalter-Karte fuer den Rest der Season */}
          <div className="reveal relative flex flex-col justify-between border-2 border-dashed border-magenta/50 bg-magenta/5 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
              {series.moreHint}
            </p>
            <p className="mt-4 font-display text-3xl leading-none font-black italic text-white glow-text-white">
              + {series.moreLabel}
            </p>
            <div className="mt-6">
              <Sticker tone="outline" rotate={-5}>
                Coming soon
              </Sticker>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
