import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";
import Marker from "./Marker.jsx";
import Tape from "./Tape.jsx";
import Sticker from "./Sticker.jsx";
import { gap } from "../content.js";

/**
 * Der Pain Point in drei Zahlen — das Motiv aus der Kampagnengrafik,
 * uebersetzt in die Magazin-Sprache der Landingpages.
 */
export default function GapSection() {
  return (
    <section id="gap" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-[420px] w-[420px] rounded-full bg-magenta/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="reveal">
          <SectionHeading kicker={gap.kicker}>{gap.headline}</SectionHeading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
            {gap.intro}
          </p>
        </div>

        <div className="relative mt-14">
          <Tape className="-left-3 -top-5 z-20 hidden sm:block" rotate={-12} width={130} />
          <div className="absolute -top-9 left-32 z-20 hidden sm:block">
            <Sticker rotate={-8}>Status quo</Sticker>
          </div>

          <div className="grid grid-cols-1 border border-hair sm:grid-cols-3">
            {gap.stats.map((stat) => (
              <div
                key={stat.value}
                className="reveal group border-b border-hair bg-ink-2 p-7 transition-colors duration-300 last:border-b-0 hover:bg-ink-3 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="font-display text-[68px] leading-none font-black text-magenta glow-text md:text-[86px]">
                  {stat.value}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-dim">{stat.label}</p>
                {stat.source && (
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {stat.source}
                  </p>
                )}
              </div>
            ))}
          </div>

          <Marker arrow="up-right" className="absolute -bottom-16 right-0 hidden text-2xl md:block">
            {gap.scribble}
          </Marker>
        </div>

        <div className="reveal mt-24 border-t border-hair pt-12 md:mt-28">
          <p className="max-w-2xl font-display text-[24px] leading-snug font-bold text-white md:text-[30px]">
            {gap.closing}
          </p>
          <div className="mt-9">
            <Button scrollTo="#test" variant="outline">
              {gap.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
