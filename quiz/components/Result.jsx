import { useState } from "react";
import Button from "./Button.jsx";
import Marker from "./Marker.jsx";
import Tape from "./Tape.jsx";
import Sticker from "./Sticker.jsx";
import GoodiebagIcon from "./GoodiebagIcon.jsx";
import GapMeter from "./GapMeter.jsx";
import { resultUi, gapReadout, quizUi, leadForm, signupHref, cta } from "../content.js";
import { alsText } from "../scoring.js";

/**
 * Die Ergebnisseite des Level-Checks.
 *
 * Bewusst ohne .reveal — dieser Block entsteht erst nach dem Klick auf die
 * letzte Antwort, der Scroll-Beobachter aus useReveal laeuft da laengst.
 */
export default function Result({ ergebnis, onRestart }) {
  const { praxis, mut, level, gapFall } = ergebnis;
  const [kopiert, setKopiert] = useState(false);

  async function promptKopieren() {
    try {
      await navigator.clipboard.writeText(level.prompt);
      setKopiert(true);
      setTimeout(() => setKopiert(false), 2200);
    } catch {
      // Ohne Zwischenablage-Rechte bleibt der Text sichtbar und markierbar.
      setKopiert(false);
    }
  }

  function ergebnisSichern() {
    const blob = new Blob([alsText(ergebnis)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "level-check-ergebnis.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-4">
      {/* ---------- Level ---------- */}
      <div className="relative border border-magenta/50 bg-ink-2 p-7 glow-box md:p-10">
        <Tape className="-left-4 -top-4 z-20" rotate={-12} width={120} />
        <div className="absolute -top-4 right-6 z-20">
          <Sticker rotate={6}>{resultUi.kicker}</Sticker>
        </div>

        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
          {resultUi.levelHeadline}
        </p>

        {/* Titelzeile im Folien-Stil, wie auf der Workshop-Seite: LEVEL 03 · THE ARCHITECT */}
        <p className="mt-4 flex flex-wrap items-baseline gap-x-4 font-display text-[26px] leading-none font-black uppercase tracking-tight text-white sm:text-[36px]">
          <span>{level.level}</span>
          <span aria-hidden="true" className="text-magenta glow-text">
            ·
          </span>
          <span className="italic text-magenta glow-text">{level.levelTitle}</span>
        </p>

        <h3 className="mt-3 font-display text-[38px] leading-[0.92] font-black italic text-white glow-text-white sm:text-[52px] md:text-[68px]">
          {level.title}
        </h3>

        <Marker underline className="mt-6 block text-2xl md:text-3xl">
          {level.scribble}
        </Marker>
      </div>

      {/* ---------- Praxis vs. Zutrauen ---------- */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <GapMeter praxis={praxis} mut={mut} />

        <div className="relative border border-hair bg-ink-2 p-7 md:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-magenta">
            {gapReadout.kicker}
          </p>
          <h4 className="mt-4 font-display text-[26px] leading-tight font-black italic text-white md:text-[34px]">
            {gapFall.title}
          </h4>
          <p className="mt-5 text-[15px] leading-relaxed text-dim md:text-base">{gapFall.body}</p>
          <p className="mt-6 border-l-2 border-magenta pl-4 text-[15px] leading-relaxed text-white">
            {gapFall.todo}
          </p>
          <Marker className="mt-6 block text-2xl">{gapFall.scribble}</Marker>
        </div>
      </div>

      {/* ---------- Diagnose + blinder Fleck ---------- */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="border border-hair bg-ink-2 p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
            {resultUi.diagnosisLabel}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-dim md:text-base">
            {level.diagnosis}
          </p>
        </div>

        <div className="border border-hair bg-ink-2 p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
            {resultUi.blindspotLabel}
          </p>
          <p className="mt-4 font-display text-[19px] leading-snug font-bold text-white md:text-[22px]">
            {level.blindspot}
          </p>
        </div>
      </div>

      {/* ---------- Die drei Schritte ---------- */}
      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-hair pt-12 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <div>
          <div className="flex items-center gap-4">
            <GoodiebagIcon className="h-14 w-14 shrink-0 md:h-16 md:w-16" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
              {resultUi.stepsKicker}
            </p>
          </div>
          <h4 className="mt-3 font-display text-[30px] leading-tight font-black italic text-white md:text-[40px]">
            {resultUi.stepsHeadline}
          </h4>
        </div>

        <ol className="space-y-4">
          {level.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-4 border-b border-hair pb-4 text-base text-white"
            >
              <span className="font-mono text-xs text-magenta glow-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* ---------- Der Prompt zum Mitnehmen ---------- */}
      <div className="relative mt-12 border border-magenta/50 bg-ink-2 p-7 glow-box-sm md:p-9">
        <Tape className="-right-4 -top-4 z-20" rotate={12} width={95} />

        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
          {level.promptLabel}
        </p>

        <p className="mt-5 border border-hair bg-ink p-5 font-mono text-[13px] leading-relaxed text-white md:text-[14px]">
          {level.prompt}
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={promptKopieren}
            className="inline-flex cursor-pointer items-center justify-center gap-3 border-2 border-magenta px-7 py-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-magenta transition-all duration-300 hover:bg-magenta hover:text-white glow-box-sm"
          >
            {kopiert ? resultUi.copiedLabel : resultUi.copyLabel}
            <span aria-hidden="true">{kopiert ? "✓" : "⧉"}</span>
          </button>
          <p className="text-[13px] leading-relaxed text-faint">{resultUi.promptHint}</p>
        </div>
      </div>

      {/* ---------- Mitnehmen + Anmeldung ---------- */}
      <div className="mt-12 grid grid-cols-1 gap-6 border-t border-hair pt-12 md:grid-cols-2">
        <div className="border border-hair bg-ink-2 p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
            {resultUi.shareHeadline}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-dim">{resultUi.shareBody}</p>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={ergebnisSichern}
              className="inline-flex cursor-pointer items-center justify-center gap-3 border border-hair px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-magenta hover:text-magenta"
            >
              {resultUi.downloadLabel}
              <span aria-hidden="true">↓</span>
            </button>

            <button
              type="button"
              onClick={onRestart}
              className="inline-flex cursor-pointer items-center justify-center gap-3 px-6 py-3 font-mono text-[13px] uppercase tracking-[0.18em] text-faint transition-colors duration-300 hover:text-magenta"
            >
              {resultUi.restartLabel}
              <span aria-hidden="true">↺</span>
            </button>
          </div>
        </div>

        <div className="relative border border-magenta/50 bg-ink-2 p-7 glow-box-sm">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
            {cta.kicker}
          </p>
          <h4 className="mt-4 font-display text-[26px] leading-tight font-black italic text-white md:text-[32px]">
            {cta.subheading[1]}
          </h4>
          <p className="mt-5 text-[15px] leading-relaxed text-dim">{cta.note}</p>

          <div className="mt-7 flex flex-col gap-3">
            <Button href={signupHref(level.title)} className="w-full">
              {cta.button}
            </Button>

            {/* Erscheint automatisch, sobald leadForm in content.js gefuellt ist. */}
            {leadForm && (
              <>
                <Button href={leadForm.href} variant="outline" className="w-full">
                  {leadForm.label}
                </Button>
                <p className="text-[12px] leading-relaxed text-faint">{leadForm.note}</p>
              </>
            )}

            <Button
              href={`${import.meta.env.BASE_URL}frauen/`}
              variant="outline"
              className="w-full"
            >
              {cta.secondary}
            </Button>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        {quizUi.hint}
      </p>
    </div>
  );
}
