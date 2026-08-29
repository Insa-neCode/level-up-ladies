import { questions, results, gapReadout } from "./content.js";

/**
 * Auswertung des Level-Checks — reine Rechnung, kein React, kein Speichern.
 *
 * Zwei Achsen:
 *   praxis = was jemand tatsaechlich mit KI macht  (Fragen 01-05)
 *   mut    = was sie sich dabei selbst zutraut     (Fragen 06-10)
 *
 * Der Abstand zwischen beiden ist der Punkt der ganzen Sache: Wer in der Praxis
 * deutlich weiter ist als im Zutrauen, hat kein Koennens-Problem.
 */

const MAX_PRO_FRAGE = 3;

/** Prozentwert einer Achse; 0, solange keine Frage der Achse beantwortet ist. */
function achsenWert(answers, axis) {
  const indizes = questions
    .map((q, i) => (q.axis === axis ? i : -1))
    .filter((i) => i >= 0);

  const erreicht = indizes.reduce((summe, i) => summe + (answers[i] ?? 0), 0);
  const moeglich = indizes.length * MAX_PRO_FRAGE;

  return moeglich === 0 ? 0 : Math.round((erreicht / moeglich) * 100);
}

/** Das Level ergibt sich aus dem Praxis-Wert. */
function levelFuer(praxis) {
  return (
    results.find((r) => praxis >= r.from && praxis <= r.to) ?? results[results.length - 1]
  );
}

/** Welcher der drei Gap-Faelle beschreibt dieses Ergebnis? */
function gapFallFuer(praxis, mut) {
  const diff = praxis - mut;

  const passt = (fall) => {
    if (fall.when === "praxis-hoeher") return diff >= fall.minDiff;
    if (fall.when === "mut-hoeher") return -diff >= fall.minDiff;
    return true; // "gleichauf" faengt den Rest auf
  };

  return gapReadout.cases.find(passt) ?? gapReadout.cases[gapReadout.cases.length - 1];
}

/**
 * answers: Array mit einem Punktwert (0-3) je Frage, gleiche Reihenfolge wie
 * `questions`. Unbeantwortete Fragen zaehlen als 0.
 */
export function auswerten(answers) {
  const praxis = achsenWert(answers, "praxis");
  const mut = achsenWert(answers, "mut");

  return {
    praxis,
    mut,
    diff: praxis - mut,
    level: levelFuer(praxis),
    gapFall: gapFallFuer(praxis, mut),
  };
}

/** Ergebnis als Text — fuer "Als Textdatei sichern". */
export function alsText({ praxis, mut, level, gapFall }) {
  const zeilen = [
    "LEVEL UP, LADIES! — DER LEVEL-CHECK",
    "===================================",
    "",
    `Dein Level:   ${level.level} — ${level.title}`,
    `Deine Praxis: ${praxis} %`,
    `Dein Zutrauen: ${mut} %`,
    `Dein Gap:     ${Math.abs(praxis - mut)} Punkte`,
    "",
    gapFall.title,
    gapFall.body,
    "",
    "WAS DAS HEISST",
    level.diagnosis,
    "",
    "DEIN BLINDER FLECK",
    level.blindspot,
    "",
    "DEINE NAECHSTEN DREI SCHRITTE",
    ...level.steps.map((s, i) => `${i + 1}. ${s}`),
    "",
    level.promptLabel.toUpperCase(),
    level.prompt,
    "",
    "-----------------------------------",
    "Level Up, Ladies! — KI-Power fuer Frauen in Job, Business und Alltag",
    "Workshop 'Claude kennt dich' am 12. September 2026, 10:30 Uhr",
    "Insa Riese & Mareike Kirch",
  ];

  return zeilen.join("\r\n");
}
