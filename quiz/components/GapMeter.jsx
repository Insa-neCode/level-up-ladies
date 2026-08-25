import { useEffect, useState } from "react";
import { gapReadout } from "../content.js";

/**
 * Zwei Balken untereinander: Praxis und Zutrauen. Der Abstand dazwischen
 * ist der Gap — genau der Punkt, um den es auf der ganzen Seite geht.
 *
 * Die Balken wachsen einmal von 0 auf ihren Wert. Wer Bewegung reduziert
 * hat (prefers-reduced-motion), sieht sie sofort in voller Laenge.
 */
export default function GapMeter({ praxis, mut }) {
  const [gewachsen, setGewachsen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGewachsen(true), 60);
    return () => clearTimeout(t);
  }, []);

  const balken = [
    { label: gapReadout.praxisLabel, hint: gapReadout.praxisHint, wert: praxis, ton: "magenta" },
    { label: gapReadout.mutLabel, hint: gapReadout.mutHint, wert: mut, ton: "weiss" },
  ];

  return (
    <div className="border border-hair bg-ink-2 p-6 md:p-8">
      <div className="space-y-8">
        {balken.map((b) => (
          <div key={b.label}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-magenta">
                {b.label}
              </p>
              <p
                className={`font-display text-[34px] leading-none font-black italic md:text-[42px] ${
                  b.ton === "magenta" ? "text-magenta glow-text" : "text-white"
                }`}
              >
                {b.wert}%
              </p>
            </div>

            <div className="mt-3 h-3 w-full border border-hair bg-ink">
              <div
                className={`h-full transition-[width] duration-1000 ease-out motion-reduce:transition-none ${
                  b.ton === "magenta" ? "bg-magenta glow-box-sm" : "bg-white"
                }`}
                style={{ width: `${gewachsen ? b.wert : 0}%` }}
              />
            </div>

            <p className="mt-2.5 text-[13px] leading-relaxed text-faint">{b.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-baseline gap-4 border-t border-hair pt-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-magenta">
          {gapReadout.gapLabel}
        </p>
        <p className="font-display text-[26px] leading-none font-black italic text-white md:text-[32px]">
          {Math.abs(praxis - mut)}
          <span className="ml-2 font-sans text-sm font-normal not-italic text-faint">
            {" "}
            Punkte Abstand
          </span>
        </p>
      </div>
    </div>
  );
}
