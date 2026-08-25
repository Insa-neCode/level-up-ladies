import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import QuestionCard from "./QuestionCard.jsx";
import Result from "./Result.jsx";
import { questions, quizUi } from "../content.js";
import { auswerten } from "../scoring.js";

const LEER = Array(questions.length).fill(null);

/**
 * Der Test selbst: eine Frage nach der anderen, am Ende die Auswertung.
 *
 * Alles bleibt im Speicher dieser Komponente. Es wird nichts in localStorage
 * gelegt, nichts gesendet und nichts gesetzt — deshalb kommt die Seite ohne
 * Einwilligung aus.
 */
export default function Quiz() {
  const [answers, setAnswers] = useState(LEER);
  const [idx, setIdx] = useState(0);
  const [fertig, setFertig] = useState(false);
  const anker = useRef(null);
  const timer = useRef(null);

  // Offener Timer darf nach dem Ausbauen nicht mehr feuern.
  useEffect(() => () => clearTimeout(timer.current), []);

  function anKopfScrollen() {
    anker.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function antworten(optionIndex) {
    const naechste = [...answers];
    naechste[idx] = optionIndex;
    setAnswers(naechste);

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (idx < questions.length - 1) {
        setIdx(idx + 1);
      } else {
        setFertig(true);
      }
      anKopfScrollen();
    }, 260);
  }

  function zurueck() {
    clearTimeout(timer.current);
    if (fertig) {
      setFertig(false);
      setIdx(questions.length - 1);
    } else if (idx > 0) {
      setIdx(idx - 1);
    }
    anKopfScrollen();
  }

  function neustart() {
    clearTimeout(timer.current);
    setAnswers(LEER);
    setIdx(0);
    setFertig(false);
    anKopfScrollen();
  }

  // answers haelt Options-Indizes; Punkte entstehen erst bei der Auswertung.
  const punkte = answers.map((a, i) => (a === null ? 0 : questions[i].options[a].score));

  const gewaehlt = answers[idx];
  const beantwortet = answers.filter((a) => a !== null).length;
  const fortschritt = fertig ? 100 : Math.round((beantwortet / questions.length) * 100);

  return (
    <section id="test" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[460px] w-[460px] rounded-full bg-magenta/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl px-5 md:px-10">
        <span ref={anker} aria-hidden="true" className="block scroll-mt-6" />

        <div className="reveal">
          <SectionHeading kicker={quizUi.kicker}>
            {fertig ? "Das ist dein Level." : "Zehn Fragen."}
          </SectionHeading>
        </div>

        {/* Fortschritt */}
        <div className="mt-9">
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
            <span>
              {beantwortet} / {questions.length} beantwortet
            </span>
            <span className="text-magenta">{fortschritt}%</span>
          </div>
          <div className="mt-2.5 h-1.5 w-full bg-ink-3">
            <div
              className="h-full bg-magenta transition-[width] duration-500 ease-out motion-reduce:transition-none glow-box-sm"
              style={{ width: `${fortschritt}%` }}
              role="progressbar"
              aria-valuenow={beantwortet}
              aria-valuemin={0}
              aria-valuemax={questions.length}
              aria-label="Fortschritt im Level-Check"
            />
          </div>
        </div>

        {/* Frage oder Ergebnis */}
        <div className="mt-12" aria-live="polite">
          {fertig ? (
            <Result ergebnis={auswerten(punkte)} onRestart={neustart} />
          ) : (
            <QuestionCard
              question={questions[idx]}
              index={idx}
              total={questions.length}
              selected={gewaehlt}
              onSelect={antworten}
            />
          )}
        </div>

        {/* Fussleiste der Fragenansicht */}
        {!fertig && (
          <div className="mt-10 flex flex-col-reverse gap-5 border-t border-hair pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={zurueck}
              disabled={idx === 0}
              className="inline-flex cursor-pointer items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.22em] text-faint transition-colors duration-300 hover:text-magenta disabled:cursor-default disabled:opacity-35 disabled:hover:text-faint"
            >
              <span aria-hidden="true">←</span>
              {quizUi.backLabel}
            </button>

            <p className="text-[13px] leading-relaxed text-faint sm:text-right">{quizUi.hint}</p>
          </div>
        )}
      </div>
    </section>
  );
}
