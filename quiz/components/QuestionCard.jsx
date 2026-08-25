import { quizUi } from "../content.js";

/**
 * Eine Frage mit vier Antwortfeldern im Raster der Workshop-Karten.
 * Die gewaehlte Antwort ist magenta ausgefuellt — wie die Highlight-Karte
 * auf der Workshop-Seite.
 *
 * Bewusst ohne .reveal: Fragen erscheinen erst nach dem Laden, der
 * Scroll-Beobachter aus useReveal sieht sie nicht mehr.
 */
export default function QuestionCard({ question, index, total, selected, onSelect }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-magenta glow-text">
          {quizUi.progressLabel} {question.no} {quizUi.ofLabel} {String(total).padStart(2, "0")}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
          {question.tag}
        </p>
      </div>

      <h3
        className="mt-5 font-display text-[27px] leading-[1.12] font-black text-white sm:text-[34px] md:text-[42px]"
        id={`frage-${index}`}
      >
        {question.text}
      </h3>

      <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((option, i) => {
          const aktiv = selected === i;

          return (
            <li key={option.label}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-pressed={aktiv}
                className={`group flex h-full w-full cursor-pointer items-start gap-4 border p-6 text-left transition-all duration-200 ${
                  aktiv
                    ? "border-magenta bg-magenta text-black glow-box"
                    : "border-hair bg-ink-2 text-white hover:border-magenta/60 hover:bg-ink-3"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 shrink-0 font-mono text-xs tracking-[0.2em] ${
                    aktiv ? "text-black/70" : "text-magenta"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-[15px] leading-relaxed md:text-base">{option.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
