// Inhalte des Leadmagneten "Der Level-Check" (/quiz/).
// Eigenstaendige Datei — Seite 1 (src/data/content.js) und Seite 2 (frauen/content.js)
// bleiben davon unberuehrt. Wording, Farben und Schriften folgen /frauen/.
//
// OFFEN / NOCH ZU PRUEFEN:
//   - gap.stats  -> Quellenangaben pruefen und in stats[].source eintragen,
//                   bevor die Seite oeffentlich beworben wird
//   - leadForm   -> sobald ein Tally-Formular steht (siehe ROADMAP 2.1) und die
//                   Datenschutzerklaerung existiert (ROADMAP 1.3), hier den Link
//                   eintragen. Bis dahin laeuft alles ueber die vorbereitete E-Mail.
//
// WICHTIG: Der Test rechnet ausschliesslich im Browser. Es werden keine Antworten
// gespeichert und nichts an einen Server geschickt — deshalb braucht diese Seite
// heute keine Einwilligung.

export const ticker = [
  "Klick. Prompt. Done.",
  "Der Level-Check",
  "Wo stehst du wirklich?",
  "Level up, Ladies",
  "Kein Talent-Problem — ein Zugangs-Problem",
  "Knowledge = Power",
  "Wir schließen den digitalen Gap",
  "Future is female",
];

export const hero = {
  issue: "Level Check",
  season: "3 Minuten · 10 Fragen",
  headline: ["Wo stehst du", "im KI-Gap?"],
  banner: ["Der Level-Check —", "kostenlos, in 3 Minuten"],
  tagline: [
    "Zehn Fragen. Zwei Werte: was du kannst und was du dir zutraust.",
    "Am Ende weißt du, welches Level du hast — und was dein nächster Schritt ist.",
  ],
  byline: "Von Insa Riese & Mareike Kirch · Level Up, Ladies!",
  scribbles: {
    topRight: "Ehrlich antworten!",
    bottomLeft: "Knowledge = Power",
  },
  ctaPrimary: "Test starten",
  ctaSecondary: "Warum dieser Test?",
  privacy:
    "Keine E-Mail nötig. Keine Anmeldung. Deine Antworten bleiben in deinem Browser und werden nirgends gespeichert.",
};

// --- Der Pain Point in Zahlen ------------------------------------------------
export const gap = {
  kicker: "The Gap",
  headline: "Wir gestalten die Zukunft.",
  intro:
    "KI lernt aus den Daten, die wir ihr geben. Wenn Frauen KI bauen und nutzen, profitieren ganze Branchen. Vielfältige Teams erkennen Risiken früher, vermeiden Bias und entwickeln relevantere Lösungen. Die Technologie braucht deine Perspektive.",
  stats: [
    { value: "12%", label: "Der Anteil von Frauen in der weltweiten KI-Forschung.", source: "" },
    { value: "22%", label: "Der Anteil von Frauen in professionellen KI-Rollen.", source: "" },
    { value: "18%", label: "Der Anteil von Frauen in C-Level-Positionen bei KI-Startups.", source: "" },
  ],
  scribble: "Keine Frage von Talent",
  closing:
    "Das ist kein Können-Problem. Es ist ein Zugangs-Problem — und ein Zutrauens-Problem. Genau diese beiden Werte misst der Test.",
  ctaLabel: "Los geht es",
};

// --- Die Fragen --------------------------------------------------------------
// axis: "praxis" = was du tatsächlich tust | "mut" = was du dir zutraust
// Jede Option zählt 0 bis 3 Punkte. Reihenfolge der Optionen = aufsteigend.
export const questions = [
  {
    axis: "praxis",
    no: "01",
    tag: "Alltag",
    text: "Wie oft nutzt du KI in einer normalen Arbeitswoche?",
    options: [
      { label: "Gar nicht.", score: 0 },
      { label: "Ein-, zweimal — wenn ich dran denke.", score: 1 },
      { label: "Mehrmals pro Woche.", score: 2 },
      { label: "Täglich, sie gehört zu meinem Ablauf.", score: 3 },
    ],
  },
  {
    axis: "praxis",
    no: "02",
    tag: "Methode",
    text: "Du öffnest eine KI. Wie fängst du an?",
    options: [
      { label: "Diese Situation gab es noch nicht.", score: 0 },
      { label: "Ich tippe drauflos und schaue, was kommt.", score: 1 },
      { label: "Ich beschreibe die Aufgabe ausführlich, jedes Mal neu.", score: 2 },
      { label: "Ich greife auf etwas zurück, das ich mir schon gebaut habe.", score: 3 },
    ],
  },
  {
    axis: "praxis",
    no: "03",
    tag: "Umfang",
    text: "Was war die größte Aufgabe, die du bisher mit KI erledigt hast?",
    options: [
      { label: "Noch keine.", score: 0 },
      { label: "Eine Frage stellen, die ich sonst gegoogelt hätte.", score: 1 },
      { label: "Einen Text schreiben oder überarbeiten lassen.", score: 2 },
      { label: "Einen ganzen Arbeitsschritt — Konzept, Auswertung, Angebot.", score: 3 },
    ],
  },
  {
    axis: "praxis",
    no: "04",
    tag: "Ausdauer",
    text: "Das Ergebnis passt nicht. Was machst du?",
    options: [
      { label: "Ich mache es doch wieder selbst.", score: 0 },
      { label: "Ich probiere es einmal neu, dann lasse ich es.", score: 1 },
      { label: "Ich frage nach und lasse überarbeiten, bis es passt.", score: 2 },
      { label: "Ich sage konkret, was fehlt — und merke mir, was funktioniert hat.", score: 3 },
    ],
  },
  {
    axis: "praxis",
    no: "05",
    tag: "System",
    text: "Hast du irgendwo etwas liegen, das du wiederverwendest?",
    options: [
      { label: "Nein.", score: 0 },
      { label: "Im Kopf, ungefähr.", score: 1 },
      { label: "Ein paar Prompts in einer Notiz oder im Verlauf.", score: 2 },
      { label: "Ja — feste Vorlagen oder ein eingerichtetes Profil.", score: 3 },
    ],
  },
  {
    axis: "praxis",
    no: "06",
    tag: "Sichtbarkeit",
    text: "Wer in deinem beruflichen Umfeld weiß, dass du mit KI arbeitest?",
    options: [
      { label: "Niemand — es gibt ja auch nichts zu wissen.", score: 0 },
      { label: "Niemand. Ich rede lieber nicht darüber.", score: 1 },
      { label: "Ein paar Menschen, denen ich vertraue.", score: 2 },
      { label: "Alle. Ich zeige es auch anderen.", score: 3 },
    ],
  },
  {
    axis: "mut",
    no: "07",
    tag: "Zutrauen",
    text: "„Ich verstehe genug von KI, um mitzureden.“ Wie sehr stimmst du zu?",
    options: [
      { label: "Überhaupt nicht.", score: 0 },
      { label: "Eher nicht — mir fehlen die Grundlagen.", score: 1 },
      { label: "Kommt aufs Gegenüber an.", score: 2 },
      { label: "Voll und ganz.", score: 3 },
    ],
  },
  {
    axis: "mut",
    no: "08",
    tag: "Haltung",
    text: "Im Meeting geht es um KI-Tools. Was machst du?",
    options: [
      { label: "Ich hoffe, dass ich nicht gefragt werde.", score: 0 },
      { label: "Ich höre zu und sage nichts.", score: 1 },
      { label: "Ich stelle eine Frage, wenn ich etwas nicht verstehe.", score: 2 },
      { label: "Ich bringe ein, was bei mir funktioniert.", score: 3 },
    ],
  },
  {
    axis: "mut",
    no: "09",
    tag: "Innensicht",
    text: "Du denkst an KI. Welcher Satz kommt zuerst?",
    options: [
      { label: "„Das ist nichts für mich.“", score: 0 },
      { label: "„Dafür bin ich zu spät dran.“", score: 1 },
      { label: "„Ich müsste mich mal richtig damit beschäftigen.“", score: 2 },
      { label: "„Was kann ich mir damit als Nächstes abnehmen lassen?“", score: 3 },
    ],
  },
  {
    axis: "mut",
    no: "10",
    tag: "Weitergeben",
    text: "Eine Kollegin bittet dich, ihr KI zu zeigen. Deine erste Reaktion?",
    options: [
      { label: "„Da bist du bei mir falsch.“", score: 0 },
      { label: "„Ich kann das doch selbst kaum.“", score: 1 },
      { label: "„Ich zeige dir, was ich weiß — ohne Gewähr.“", score: 2 },
      { label: "„Klar, setz dich dazu.“", score: 3 },
    ],
  },
];

export const quizUi = {
  kicker: "Der Level-Check",
  progressLabel: "Frage",
  ofLabel: "von",
  backLabel: "Zurück",
  hint: "Es gibt keine falschen Antworten. Nur ehrliche und unehrliche.",
  axisLabels: { praxis: "Praxis", mut: "Zutrauen" },
};

// --- Die vier Ergebnisse -----------------------------------------------------
// Zuordnung über den Praxis-Wert in Prozent (from/to jeweils einschließlich).
export const results = [
  {
    from: 0,
    to: 24,
    level: "Level 00",
    levelTitle: "The Watcher",
    title: "Die Beobachterin",
    scribble: "Der Anfang ist der Anfang",
    diagnosis:
      "Du stehst am Rand und schaust zu, wie alle über KI reden. Das ist kein Rückstand, das ist ein Startpunkt — und zwar ein guter. Du hast noch keine schlechten Gewohnheiten, die du dir abtrainieren müsstest.",
    blindspot:
      "Du wartest auf den richtigen Moment. Den gibt es nicht. Es gibt nur die erste Aufgabe, die du abgibst.",
    steps: [
      "Such dir eine einzige Aufgabe aus, die dich jede Woche nervt. Nicht die wichtigste — die nervigste.",
      "Öffne eine KI und beschreibe diese Aufgabe in ganz normalen Sätzen, so wie du es einer Kollegin erklären würdest.",
      "Lies das Ergebnis und sag der KI, was daran nicht passt. Genau da fängt es an zu funktionieren.",
    ],
    promptLabel: "Dein erster Prompt",
    prompt:
      "Ich arbeite als [dein Job] und mache jede Woche [die nervige Aufgabe]. Stell mir fünf Fragen, um zu verstehen, wie ich das genau mache. Danach zeigst du mir, wie du mir diese Aufgabe abnehmen kannst.",
  },
  {
    from: 25,
    to: 49,
    level: "Level 01",
    levelTitle: "The Rookie",
    title: "Die Einsteigerin",
    scribble: "Läuft — nur nicht zuverlässig",
    diagnosis:
      "Du hast es probiert, es hat manchmal funktioniert und manchmal nicht. Deshalb ist es nie zur Gewohnheit geworden. Das liegt nicht an dir, sondern daran, dass jede Sitzung bei null anfängt.",
    blindspot:
      "Du bewertest die KI nach dem ersten Ergebnis. Das erste Ergebnis ist nie das Ergebnis — es ist der Anfang eines Gesprächs.",
    steps: [
      "Hör auf, jedes Mal neu zu erklären, wer du bist. Schreib es einmal auf und leg es dir bereit.",
      "Nimm dir eine Aufgabe, die regelmäßig wiederkommt, und arbeite so lange nach, bis das Ergebnis wirklich passt.",
      "Speichere den Prompt, der funktioniert hat. Er ist mehr wert als zehn neue.",
    ],
    promptLabel: "Dein Kontext-Prompt",
    prompt:
      "Hier ist mein Kontext: Ich bin [Rolle], arbeite in [Bereich], meine Texte sollen [Ton] klingen. Merk dir das für alles, was jetzt kommt. Erste Aufgabe: [Aufgabe].",
  },
  {
    from: 50,
    to: 74,
    level: "Level 02",
    levelTitle: "The Regular",
    title: "Die Gelegenheits-Nutzerin",
    scribble: "Mal Gold, mal Grütze",
    diagnosis:
      "Du nutzt KI regelmäßig und kommst damit gut durch. Aber jede Sitzung ist Handarbeit: neu erklären, neu formulieren, hoffen. Dein Ergebnis hängt an deiner Tagesform statt an einem System.",
    blindspot:
      "Du sammelst Erfahrung, aber du sicherst sie nicht. Alles, was funktioniert hat, verschwindet im Verlauf.",
    steps: [
      "Geh deinen Verlauf durch und zieh die drei Prompts raus, die richtig gut waren. Das ist dein Grundstock.",
      "Richte ein Profil ein, das deinen Job, deine Themen und deinen Ton kennt — dann reicht ab jetzt ein Satz.",
      "Leg ein Projekt an: ein Ort für deine wiederkehrenden Aufgaben statt zwanzig verstreute Chats.",
    ],
    promptLabel: "Dein System-Prompt",
    prompt:
      "Ich zeige dir gleich drei Prompts, mit denen ich gute Ergebnisse hatte. Analysiere, was sie gemeinsam haben, und bau mir daraus eine wiederverwendbare Vorlage mit Platzhaltern.",
  },
  {
    from: 75,
    to: 100,
    level: "Level 03",
    levelTitle: "The Architect",
    title: "Die Systematikerin",
    scribble: "Jetzt weitergeben",
    diagnosis:
      "Du arbeitest nicht mehr mit KI, du arbeitest durch sie. Setup steht, Prompts sind wiederverwendbar, du weißt, wann du besser selbst rangehst. Damit bist du weiter als die meisten in deinem Umfeld.",
    blindspot:
      "Du hältst das für selbstverständlich. Ist es nicht. Was für dich Routine ist, ist für deine Kollegin genau der Zugang, den sie sucht.",
    steps: [
      "Bau dein bestes Setup so um, dass eine andere Person es benutzen könnte. Das deckt jede Lücke auf.",
      "Erzähl in einem beruflichen Kontext konkret, was du automatisiert hast — mit Zahlen, nicht mit Bescheidenheit.",
      "Zeig es einer Frau in deinem Umfeld. Genau so schließt sich der Gap.",
    ],
    promptLabel: "Dein Weitergabe-Prompt",
    prompt:
      "Hier ist mein Setup: [einfügen]. Schreib daraus eine Anleitung für eine Kollegin ohne Vorwissen. Erklär jeden Schritt so, dass sie ihn nachbauen kann, und markiere die Stellen, die sie an sich anpassen muss.",
  },
];

// --- Der Gap zwischen Können und Zutrauen ------------------------------------
export const gapReadout = {
  kicker: "Dein Ergebnis",
  praxisLabel: "Deine Praxis",
  praxisHint: "Was du heute tatsächlich mit KI machst",
  mutLabel: "Dein Zutrauen",
  mutHint: "Was du dir dabei selbst zutraust",
  gapLabel: "Dein Gap",
  // Reihenfolge zählt: Der erste Fall, der zutrifft, wird angezeigt.
  cases: [
    {
      when: "praxis-hoeher",
      minDiff: 15,
      title: "Du kannst mehr, als du dir zutraust.",
      body: "Deine Praxis liegt über deinem Zutrauen — und zwar deutlich. Das ist der Gap, über den wir reden. Er kostet dich keine Fähigkeiten, er kostet dich Sichtbarkeit: Aufgaben, die du übernehmen könntest, Sätze, die du im Meeting nicht sagst, eine Rolle, nach der du nicht fragst.",
      scribble: "Das ist der Gap",
      todo: "Dein nächster Schritt ist kein Tool. Es ist ein Satz, den du laut sagst.",
    },
    {
      when: "mut-hoeher",
      minDiff: 15,
      title: "Dein Mut ist da. Deine Praxis noch nicht.",
      body: "Du hast keine Berührungsangst — dir fehlt schlicht die Übung. Das ist die angenehmste Ausgangslage von allen, denn Übung lässt sich planen. Zutrauen nicht.",
      scribble: "Gute Ausgangslage",
      todo: "Dein nächster Schritt ist kein Mutmachen. Es sind zwei Stunden mit einer echten Aufgabe.",
    },
    {
      when: "gleichauf",
      minDiff: 0,
      title: "Praxis und Zutrauen liegen bei dir gleichauf.",
      body: "Du schätzt dich realistisch ein — das ist seltener, als du denkst. Du machst dich weder kleiner noch größer, als du bist. Was heißt: Alles, was du dazulernst, kommt auch wirklich bei dir an.",
      scribble: "Realistisch — selten genug",
      todo: "Dein nächster Schritt ist einfach der nächste Schritt.",
    },
  ],
};

export const resultUi = {
  kicker: "Auswertung",
  levelHeadline: "Dein Level",
  diagnosisLabel: "Was das heißt",
  blindspotLabel: "Dein blinder Fleck",
  stepsKicker: "Dein Goodiebag",
  stepsHeadline: "Deine nächsten drei Schritte:",
  promptHint: "Kopieren, Platzhalter ersetzen, einfügen. Klick. Prompt. Done.",
  copyLabel: "Prompt kopieren",
  copiedLabel: "Kopiert",
  shareHeadline: "Ergebnis mitnehmen",
  shareBody:
    "Wir speichern nichts — auch dein Ergebnis nicht. Wenn du es behalten willst, nimm es dir selbst mit.",
  downloadLabel: "Als Textdatei sichern",
  restartLabel: "Test nochmal machen",
};

export const cta = {
  kicker: "Ready?",
  headline: "Glow up.",
  subheading: [
    "Der Test zeigt dir, wo du stehst.",
    "Der Workshop bringt dich aufs nächste Level.",
  ],
  song: "Klick. Prompt. Done. – Das ist dein Glow-up.",
  button: "Platz sichern",
  secondary: "Zur Workshop-Seite",
  note: "Plätze sind limitiert. Der Workshop startet am 12. September 2026 um 10:30 Uhr.",
};

export const footer = {
  brand: "Level Up, Ladies!",
  tagline: "KI-Power für Frauen — in Job, Business und Alltag",
  linksHeadline: "Backstage",
  links: ["Der Level-Check", "Die Workshop-Season", "Anmeldung", "Kontakt"],
  contactHeadline: "Kontakt",
  contact: [
    { label: "Insa Riese", value: "insariese@gmail.com", href: "mailto:insariese@gmail.com" },
    {
      label: "Mareike Kirch",
      value: "mareike.kirch@googlemail.com",
      href: "mailto:mareike.kirch@googlemail.com",
    },
  ],
  socialHeadline: "Social",
  social: [
    { label: "LinkedIn Insa", href: "https://www.linkedin.com/in/insa-riese-303946316/" },
    { label: "LinkedIn Mareike", href: "https://www.linkedin.com/in/mareikekirch/" },
  ],
  outro: "Nicht warten, bis man uns fragt.",
  crossLink: { label: "Zur Workshop-Seite für Job, Business und Alltag", to: "frauen/" },
  legal: { label: "Impressum", to: "impressum/" },
  copyright: "© 2026 Level Up Ladies | Von Frauen, für Frauen",
  madeWith: "Made with ❤️ and Claude",
};

// Anmeldung: wie auf den anderen Seiten eine vorbereitete E-Mail. Das Ergebnis
// des Tests wandert in Betreff und Text — so seht ihr direkt, wer auf welchem
// Level anfragt, ganz ohne Formular, Server und Einwilligung.
export function signupHref(levelTitle) {
  const level = levelTitle ? encodeURIComponent(levelTitle) : null;

  const subject = level
    ? `Anmeldung%3A%20Level%20Up%2C%20Ladies%21%20am%2012.09.2026%20%E2%80%94%20${level}`
    : "Anmeldung%3A%20Level%20Up%2C%20Ladies%21%20am%2012.09.2026";

  const body =
    "Hallo Insa und Mareike,%0D%0A%0D%0A" +
    (level
      ? `ich habe den Level-Check gemacht. Mein Ergebnis: ${level}.%0D%0A`
      : "") +
    "Ich moechte mir einen Platz im Workshop am 12. September 2026 um 10:30 Uhr sichern." +
    "%0D%0A%0D%0AName:%0D%0AWomit%20arbeitest%20du%3F%0D%0A%0D%0AViele Gruesse";

  return `mailto:insariese@gmail.com?subject=${subject}&body=${body}`;
}

// Sobald ein Formular steht (ROADMAP 2.1) und die Datenschutzerklaerung
// veroeffentlicht ist (ROADMAP 1.3): hier den Link eintragen. Ist der Wert
// gesetzt, zeigt die Ergebnisseite automatisch zusaetzlich den Formular-Button.
export const leadForm = null;
// Beispiel:
// export const leadForm = {
//   href: "https://tally.so/r/XXXXXX",
//   label: "Ergebnis per Mail bekommen",
//   note: "Wir schicken dir dein Level und die Prompts zu. Abmeldung jederzeit moeglich.",
// };
