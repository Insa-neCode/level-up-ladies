import { datenschutz } from "./content.js";

/**
 * Rechtsseite im Magazin-Layout — gleicher Aufbau wie das Impressum.
 */
export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-ink pb-24 pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-magenta/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-3xl px-5 md:px-10">
        <a
          href={import.meta.env.BASE_URL}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-magenta transition-colors hover:text-magenta-soft"
        >
          <span aria-hidden="true">←</span>
          {datenschutz.zurueck}
        </a>

        <p className="mt-12 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
          <span aria-hidden="true" className="h-px w-8 bg-magenta" />
          {datenschutz.kicker}
        </p>
        <h1 className="mt-3 font-display text-[46px] leading-[0.9] font-black italic text-white glow-text-white md:text-[68px]">
          {datenschutz.headline}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-dim">{datenschutz.intro}</p>

        <h2 className="mt-16 font-display text-[26px] font-black italic text-white md:text-[32px]">
          {datenschutz.verantwortlichHeadline}
        </h2>
        <address className="mt-5 border-l-4 border-magenta bg-ink-2 p-6 not-italic text-sm leading-relaxed text-dim">
          {datenschutz.verantwortlich.map((zeile) => (
            <span key={zeile} className="block">
              {zeile}
            </span>
          ))}
        </address>

        {datenschutz.abschnitte.map((a, i) => (
          <section key={a.titel} className="mt-14">
            <h2 className="flex items-baseline gap-4 font-display text-[24px] font-black italic text-white md:text-[28px]">
              <span className="font-mono text-xs not-italic text-magenta glow-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              {a.titel}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-dim">{a.text}</p>
          </section>
        ))}

        <p className="mt-16 border-t border-hair pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
          {datenschutz.stand}
        </p>
      </div>
    </main>
  );
}
