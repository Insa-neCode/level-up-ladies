import Button from "./Button.jsx";
import { cta, signupHref } from "../content.js";

export default function CtaSection() {
  return (
    <section id="anmeldung" className="relative overflow-hidden bg-magenta py-24 md:py-32">
      {/* Dunkler Verlauf fuer Kontrast + Rasterlinien */}
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(90deg,#000_0_1px,transparent_1px_88px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[140px]"
      />

      <div className="reveal relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-white/90">
          {cta.kicker}
        </p>

        <h2 className="mt-4 font-display text-[64px] leading-[0.85] font-black italic text-white [text-shadow:0_0_28px_rgba(255,255,255,0.45)] sm:text-[88px] md:text-[112px]">
          {cta.headline}
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white md:text-lg">
          {cta.subheading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <p className="mt-8 font-marker text-3xl text-white [text-shadow:0_0_18px_rgba(255,255,255,0.6)] md:text-4xl">
          {cta.song}
        </p>

        <div className="mt-10 flex justify-center">
          <Button href={signupHref} variant="light" size="lg" className="w-full sm:w-auto">
            {cta.button}
          </Button>
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/85">
          {cta.note}
        </p>
      </div>
    </section>
  );
}
