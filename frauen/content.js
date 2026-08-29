// Inhalte der zweiten Landingpage — Zielgruppe: alle Frauen, nicht nur Bildung.
// Eigenstaendige Datei — Seite 1 hat ihre eigene unter src/data/content.js.
//
// OFFEN / NOCH ZU ERSETZEN:
//   - about.people[1]  -> alle Angaben zu Mareike (Nachname, Rolle, Text, Zitat)
//   - hero.byline      -> Nachname Mareike
//   - footer.contact   -> Kontaktdaten Mareike
//   - cta.note         -> [DATUM]
//   - public/frauen/mareike.jpg ablegen (sonst greift der Neon-Platzhalter)
//
// BILDER: liegen in public/frauen/ — eigener Ordner nur fuer diese Seite.
import { kontaktEintrag, kontaktMail } from "../shared/kontakt.js";

export const ticker = [
  "Klick. Prompt. Done.",
  "Das ist dein Glow-up",
  "Level up, Ladies",
  "Future is female",
  "Keine Passagiere — wir lenken das Spiel",
  "Vom Zufalls-Prompt zum System",
  "Knowledge = Power",
  "Wir nehmen uns den Raum",
];

export const hero = {
  issue: "Issue 01",
  season: "Season: Glow up",
  headline: ["Level Up,", "Ladies."],
  banner: ["KI-Power für Frauen —", "in Job, Business und Alltag"],
  tagline: [
    "Wir schließen den digitalen Gap.",
    "Gemeinsam. Mit Claude. Ohne Angst.",
  ],
  byline: "Insa Riese & Mareike · Wir schließen den digitalen Gap",
  scribbles: {
    topRight: "Future is female",
    midRight: "Hack the system",
    bottomLeft: "Knowledge = Power",
  },
  ctaPrimary: "Jetzt anmelden",
  ctaSecondary: "Level 01 ansehen",
  // Leadmagnet: der kostenlose Selbsttest unter /quiz/
  quizLink: { label: "Erst mal testen: Wo stehst du im KI-Gap?", to: "quiz/" },
  portraitAlt: "Porträt einer Frau in Schwarz-Weiß mit Neon-Pink Akzenten",
};

export const about = {
  kicker: "The Founders",
  headline: "Wer sind wir?",
  intro:
    "Zwei Frauen, ein Ziel: KI raus aus der Buzzword-Blase und rein in deinen Alltag. Wir halten die Workshops zu zweit — mit zwei Perspektiven, zwei Arbeitsweisen und einer Haltung: Das Problem ist nie die Technologie. Es ist der Zugang.",
  people: [
    {
      tag: "Player 001",
      name: "Insa",
      role: "Lehrerin · Mathe, Informatik, GL",
      linkedin: "https://www.linkedin.com/in/insa-riese-303946316/",
      initials: "IR",
      photo: "insa.jpg",
      photoPosition: "60% 16%",
      photoAlt: "Insa Riese, Gründerin von Level Up Ladies",
      photoLabel: "Foto: public/frauen/insa.jpg",
      paragraphs: [
        "Ich bin Insa. Hauptberuflich unterrichte ich an einer Gesamtschule in NRW, daneben bringe ich Erwachsenen bei, wie sie mit KI arbeiten — statt sie nur auszuprobieren.",
        "Ich sehe überall dasselbe Muster: Frauen, die KI längst nutzen könnten, sich aber nicht rantrauen. Oder sie nutzen, ohne je über den ersten Chat hinauszukommen. Genau da setzen wir an.",
      ],
      quote: "Ohne Angst. Ohne Zauberei. Ohne die ganzen Buzzwords.",
    },
    {
      tag: "Player 002",
      name: "Mareike",
      role: "Karriere-Expertin · Gründerin, Design Your Career",
      linkedin: "https://www.linkedin.com/in/mareikekirch/",
      initials: "MK",
      photo: "mareike.jpg",
      photoPosition: "62% 22%",
      photoAlt: "Mareike Kirch, Expertin für Karriereentwicklung",
      photoLabel: "Foto: public/frauen/mareike.jpg",
      paragraphs: [
        "Ich bin Mareike. Ich begleite Frauen ab 30 durch den Umbruch: Jobwechsel, Neuausrichtung, KI im Arbeitsalltag. Heute als Gründerin und Geschäftsführerin von Design Your Career, davor als Co-Founderin und CEO von Coding Bootcamps Europe.",
        "In der Beratung sehe ich es täglich: Es fehlt nicht das Können, es fehlt der Zugang. Wer ihre Werkzeuge beherrscht, verhandelt anders – über ihr Gehalt, ihre Rolle und ihre Zukunft.",
      ],
      quote: "Kein Talent-Problem. Ein Zugangs-Problem.",
    },
  ],
  accent: "Knowledge = Power",
  scribble: "Nicht warten, bis man uns fragt",
  closing: "Nicht warten, bis man uns fragt. Wir machen das einfach selbst.",
};

export const workshop = {
  level: "Level 01",
  levelTitle: "The Setup",
  headline: "Claude kennt dich",
  intro:
    "Das ist dein erster Schritt in ein System, das dir dauerhaft Zeit spart. Im Workshop lernst du, wie Claude dich und deine Arbeit versteht – und wie du dein eigenes, maßgeschneidertes Setup aufbaust. Egal, ob du im Büro sitzt, dein eigenes Ding machst oder gerade erst anfängst.",
  audience: {
    kicker: "The Party",
    headline: "Für wen ist das?",
    items: [
      {
        title: "Die Einsteigerin",
        body: "Du hast von KI gehört, vielleicht mal etwas ausprobiert – aber richtig angekommen ist es nie. Hier fängst du bei null an, ohne dass dir jemand Vorwissen unterstellt.",
      },
      {
        title: "Die Gelegenheits-Nutzerin",
        body: "Du chattest ab und zu mit einer KI, tippst jedes Mal alles neu und bekommst mal Gold, mal Grütze. Hier lernst du, warum – und wie du es abstellst.",
      },
      {
        title: "Die Systematikerin",
        body: "Du nutzt KI schon regelmäßig und willst raus aus dem Zufall: feste Setups, wiederverwendbare Prompts, ein Ablauf, auf den du dich verlassen kannst.",
      },
    ],
    note: "Kein technischer Hintergrund nötig. Keine Branche ausgeschlossen. Du brauchst nur eine Aufgabe, die dich regelmäßig Zeit kostet.",
  },
  tapeLabel: "Essential",
  cards: [
    {
      no: "01",
      title: "Dein Profil",
      body: "Claude lernt, wer du bist: dein Job, deine Themen, dein Ton. Nur einmal einrichten – dann reicht ein Satz.",
      tag: "Character Setup",
    },
    {
      no: "02",
      title: "Dein Projekt",
      body: "Speichere, was du immer wieder brauchst: Mails, Angebote, Konzepte, Protokolle, Texte. Einmal gebaut, dauerhaft benutzbar.",
      tag: "Inventory",
    },
    {
      no: "03",
      title: "Deine Power",
      body: "Frag einfach. Claude weiß schon, wie du es brauchst. Keine langen Erklärungen mehr. Nur noch: Idea → Done.",
      tag: "Superpower",
      highlight: true,
    },
  ],
  cardScribble: "Klick. Prompt. Done.",
  outcomesKicker: "Dein Goodiebag",
  outcomesHeadline: "Das nimmst du mit:",
  outcomes: [
    "Ein Claude-Setup, das dich und deine Arbeit kennt",
    "Ein Projekt mit deinen eigenen, wiederverwendbaren Prompts",
    "Den Weg vom Zufalls-Prompt zur systematischen Nutzung",
    "Die Grundlage für alle weiteren Level",
  ],
  detailsKicker: "The Stats",
  detailsHeadline: "Der Workshop:",
  facts: [
    { label: "Dauer", value: "60 Minuten" },
    { label: "Level", value: "Einsteigerin & Optimiererin" },
    { label: "Voraussetzungen", value: "Keine — außer: ein Laptop und Mut" },
    { label: "Leitung", value: "Insa & Mareike" },
  ],
  bringHeadline: "Dein Loadout:",
  bring: [
    "Deinen Laptop",
    "10 Minuten Zeit für eine kurze Befragung",
    "Eine Aufgabe, die dich jede Woche Zeit kostet",
  ],
  ctaLabel: "Platz sichern",
};

export const series = {
  kicker: "Season 01",
  headline: "Und danach?",
  intro:
    "Dieser Workshop ist dein Einstieg. Aber es geht weiter — Level für Level. Hier ein Überblick:",
  scribble: "Level 3: Endgegner",
  workshops: [
    {
      level: "Level 02",
      title: "Von der Idee zum fertigen Dokument",
      description: "Vom leeren Blatt zum fertigen Text in einer Sitzung: Konzept, Angebot, Handout.",
      duration: "60 Min",
      tag: "Einsteigerin",
    },
    {
      level: "Level 03",
      title: "PowerPoint automatisieren",
      description: "Präsentationen, die sich fast von selbst bauen.",
      duration: "75 Min",
      tag: "Glow up",
    },
    {
      level: "Level 04",
      title: "Visuell gestalten",
      description: "Grafiken, die aussehen wie gekauft – ohne Design-Studium.",
      duration: "60 Min",
      tag: "Pro-Level",
    },
  ],
  moreLabel: "5 weitere Level",
  moreHint: "Die komplette Season",
};

export const cta = {
  kicker: "Ready?",
  headline: "Glow up.",
  subheading: ["Lass uns den digitalen Gap schließen.", "Gemeinsam. Mit Claude. Ohne Angst."],
  song: "Klick. Prompt. Done. – Das ist dein Glow-up.",
  button: "Jetzt anmelden",
  note: "Plätze sind limitiert. Der Workshop startet am 12. September 2026 um 10:30 Uhr.",
};

export const footer = {
  brand: "Level Up, Ladies!",
  tagline: "KI-Power für Frauen — in Job, Business und Alltag",
  linksHeadline: "Backstage",
  // "Über Level Up Ladies" zeigt vorerst auf den Über-uns-Bereich dieser Seite.
  // Geplant ist eine eigene Seite zur Philosophie hinter Level Up Ladies (ROADMAP 3.4).
  links: [
    { label: "Über Level Up Ladies", to: "#ueber-uns" },
    { label: "Die Workshop-Season", to: "#serie" },
  ],
  contactHeadline: "Kontakt",
  contact: [kontaktEintrag],
  socialHeadline: "Social",
  social: [
    { label: "LinkedIn Insa", href: "https://www.linkedin.com/in/insa-riese-303946316/" },
    { label: "LinkedIn Mareike", href: "https://www.linkedin.com/in/mareikekirch/" },
  ],
  outro: "Setup gemacht. Masterprompt läuft. Kreativ gestartet.",
  crossLink: { label: "Du bist Lehrerin? → Zur Seite für den Bildungsbereich", to: "" },
  quizLink: { label: "Der Level-Check: Wo stehst du im KI-Gap?", to: "quiz/" },
  legal: [
    { label: "Impressum", to: "impressum/" },
    { label: "Datenschutz", to: "datenschutz/" },
  ],
  copyright: "© 2026 Level Up Ladies | Von Frauen, für Frauen",
  madeWith: "Made with ❤️ and Claude",
};

// Anmeldung.
// 1. Google-Formular anlegen, dann "Senden" -> Link-Symbol -> Link kopieren.
// 2. Den Link hier eintragen. Ab dann fuehren alle Anmelde-Buttons dorthin.
// Solange das Feld leer ist, oeffnen die Buttons eine vorbereitete E-Mail —
// die Seite funktioniert also in jedem Fall.
export const signup = {
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSewJBJ9aKOCzzsMVyLf5RTiJwdLGbUws9mINSYqgWMp_XOcuw/viewform",
  mailTo: kontaktMail,
};

const mailFallback =
  "mailto:" +
  signup.mailTo +
  "?subject=Anmeldung%3A%20Level%20Up%2C%20Ladies%21%20am%2012.09.2026" +
  "&body=Hallo%20Insa%20und%20Mareike%2C%0D%0A%0D%0A" +
  "ich%20moechte%20mir%20einen%20Platz%20im%20Workshop%20am%2012.%20September%202026%20um%2010%3A30%20Uhr%20sichern.%0D%0A%0D%0A" +
  "Name%3A%0D%0AWomit%20arbeitest%20du%3F%0D%0A%0D%0AViele%20Gruesse";

export const signupHref = signup.googleFormUrl || mailFallback;
