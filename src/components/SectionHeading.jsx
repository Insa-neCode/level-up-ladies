/**
 * Magazin-Headline: Kicker in Mono, darunter die grosse Didone-Serife.
 */
export default function SectionHeading({
  kicker,
  children,
  tone = "light", // "light" = weisse Schrift auf Schwarz, "dark" = schwarz auf Weiss
  className = "",
}) {
  const isLight = tone === "light";

  return (
    <div className={className}>
      {kicker && (
        <p
          className={`mb-3 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] ${
            isLight ? "text-magenta glow-text" : "text-magenta"
          }`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-magenta" />
          {kicker}
        </p>
      )}
      <h2
        className={`font-display text-[38px] leading-[0.9] font-black tracking-tight sm:text-[52px] md:text-[68px] ${
          isLight ? "text-white glow-text-white" : "text-black"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
