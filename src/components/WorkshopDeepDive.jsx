import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";
import Marker from "./Marker.jsx";
import Tape from "./Tape.jsx";
import Sticker from "./Sticker.jsx";
import { useContent } from "../data/ContentContext.jsx";

export default function WorkshopDeepDive() {
  const { workshop } = useContent();
  return (
    <section id="workshop" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-magenta/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        {/* Titelzeile im Folien-Stil: LEVEL 01 · THE SETUP */}
        <div className="reveal">
          <p className="flex flex-wrap items-baseline gap-x-4 font-display text-[30px] leading-none font-black uppercase tracking-tight text-white sm:text-[44px] md:text-[58px]">
            <span>{workshop.level}</span>
            <span aria-hidden="true" className="text-magenta glow-text">
              ·
            </span>
            <span className="italic text-magenta glow-text">{workshop.levelTitle}</span>
          </p>
          <SectionHeading className="mt-4">{workshop.headline}</SectionHeading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
            {workshop.intro}
          </p>
        </div>

        {/* Optionaler Zielgruppen-Block — erscheint nur, wenn im Content gepflegt */}
        {workshop.audience && (
          <div className="reveal mt-14">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
              {workshop.audience.kicker}
            </p>
            <h3 className="mt-3 font-display text-[30px] leading-tight font-black italic text-white md:text-[40px]">
              {workshop.audience.headline}
            </h3>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {workshop.audience.items.map((item) => (
                <div
                  key={item.title}
                  className="border border-hair bg-ink-2 p-6 transition-colors duration-300 hover:border-magenta/60"
                >
                  <p className="font-display text-xl leading-snug font-bold text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-dim">{item.body}</p>
                </div>
              ))}
            </div>

            {workshop.audience.note && (
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-faint">
                {workshop.audience.note}
              </p>
            )}
          </div>
        )}

        {/* Drei nummerierte Felder — Raster wie auf der Folie */}
        <div className="relative mt-16">
          <Tape className="-left-3 -top-5 z-20 hidden sm:block" rotate={-12} width={130} />
          <div className="absolute -top-9 left-32 z-20 hidden sm:block">
            <Sticker rotate={-8}>{workshop.tapeLabel}</Sticker>
          </div>

          <div className="grid grid-cols-1 border border-hair sm:grid-cols-3">
            {workshop.cards.map((card) => (
              <article
                key={card.no}
                className={`reveal group relative border-b border-hair p-7 transition-all duration-300 sm:border-b-0 sm:border-r sm:last:border-r-0 ${
                  card.highlight
                    ? "bg-magenta text-black glow-box"
                    : "bg-ink-2 text-white hover:bg-ink-3"
                }`}
              >
                <p
                  className={`font-display text-4xl font-black italic ${
                    card.highlight ? "text-black" : "text-magenta glow-text"
                  }`}
                >
                  {card.no}
                </p>
                <h3
                  className={`mt-2 font-display text-[26px] leading-tight font-black ${
                    card.highlight ? "text-black" : "text-white"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-4 text-[15px] leading-relaxed ${
                    card.highlight ? "text-black/80" : "text-dim"
                  }`}
                >
                  {card.body}
                </p>
                <p
                  className={`mt-6 font-mono text-[10px] uppercase tracking-[0.24em] ${
                    card.highlight ? "text-black/70" : "text-faint group-hover:text-magenta"
                  }`}
                >
                  {card.tag}
                </p>
              </article>
            ))}
          </div>

          <Marker
            arrow="up-right"
            className="absolute -bottom-16 right-0 hidden text-2xl md:block"
          >
            {workshop.cardScribble}
          </Marker>
        </div>

        {/* The Loot */}
        <div className="reveal mt-24 grid grid-cols-1 gap-10 border-t border-hair pt-12 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
              {workshop.outcomesKicker}
            </p>
            <h3 className="mt-3 font-display text-[30px] leading-tight font-black italic text-white md:text-[40px]">
              {workshop.outcomesHeadline}
            </h3>
          </div>

          <ul className="space-y-4">
            {workshop.outcomes.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-hair pb-4 text-base text-white"
              >
                <span className="font-mono text-xs text-magenta glow-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
                <span aria-hidden="true" className="ml-auto text-magenta">
                  ✓
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Stats */}
        <div className="reveal mt-20 border-t border-hair pt-12">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
            {workshop.detailsKicker}
          </p>
          <h3 className="mt-3 font-display text-[30px] leading-tight font-black italic text-white md:text-[40px]">
            {workshop.detailsHeadline}
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <dl className="divide-y divide-hair border border-hair bg-ink-2">
              {workshop.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-5 px-6 py-5">
                  <dt className="w-36 shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-xl font-bold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="relative border border-magenta/50 bg-ink-2 p-6 glow-box-sm">
              <Tape className="-right-4 -top-4 z-20" rotate={12} width={90} />
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
                {workshop.bringHeadline}
              </p>
              <ul className="mt-5 space-y-4">
                {workshop.bring.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-magenta glow-box-sm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Button variant="outline">{workshop.ctaLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
