import { impressum } from "./content.js";

/**
 * Rechtsseite im Magazin-Layout: ruhiger als die Landingpages,
 * gleiche Typografie und Neon-Akzente.
 */
export default function Impressum() {
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
          {impressum.zurueck}
        </a>

        <p className="mt-12 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
          <span aria-hidden="true" className="h-px w-8 bg-magenta" />
          {impressum.kicker}
        </p>
        <h1 className="mt-3 font-display text-[46px] leading-[0.9] font-black italic text-white glow-text-white md:text-[68px]">
          {impressum.headline}
        </h1>
        <p className="mt-5 text-base text-dim">{impressum.intro}</p>

        {/* Diensteanbieterinnen */}
        <h2 className="mt-16 font-display text-[26px] font-black italic text-white md:text-[32px]">
          {impressum.anbieterHeadline}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {impressum.anbieter.map((a) => (
            <div key={a.name} className="border-l-4 border-magenta bg-ink-2 p-6">
              <p className="font-display text-2xl font-bold text-white">{a.name}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-magenta">
                {a.rolle}
              </p>
              <address className="mt-4 not-italic text-sm leading-relaxed text-dim">
                {a.adresse.map((zeile) => (
                  <span key={zeile} className="block">
                    {zeile}
                  </span>
                ))}
                <a
                  href={`mailto:${a.mail}`}
                  className="mt-3 block text-magenta transition-colors hover:text-magenta-soft"
                >
                  {a.mail}
                </a>
              </address>
            </div>
          ))}
        </div>

        {/* Kontakt */}
        <h2 className="mt-16 font-display text-[26px] font-black italic text-white md:text-[32px]">
          {impressum.kontaktHeadline}
        </h2>
        <dl className="mt-6 divide-y divide-hair border border-hair bg-ink-2">
          {impressum.kontakt.map((k) => (
            <div key={k.label} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 px-6 py-4">
              <dt className="w-40 shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-magenta">
                {k.label}
              </dt>
              <dd className="text-base text-white">
                {k.href ? (
                  <a href={k.href} className="transition-colors hover:text-magenta">
                    {k.value}
                  </a>
                ) : (
                  k.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Verantwortlich */}
        <h2 className="mt-16 font-display text-[26px] font-black italic text-white md:text-[32px]">
          {impressum.verantwortlichHeadline}
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-dim">
          {impressum.verantwortlichText}
        </p>

        {/* Rechtstexte */}
        {impressum.abschnitte.map((a) => (
          <section key={a.titel} className="mt-14">
            <h2 className="font-display text-[24px] font-black italic text-white md:text-[28px]">
              {a.titel}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-dim">{a.text}</p>
          </section>
        ))}

        <p className="mt-16 border-t border-hair pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
          {impressum.stand}
        </p>
      </div>
    </main>
  );
}
