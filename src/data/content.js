// Alle Inhalte der Landingpage — hier editieren, nicht in den Komponenten.
// LINKS: bewusst noch keine. Buttons und Footer-Eintraege sind vorerst ohne Ziel.
// Sobald die Ziele feststehen: hier eine "href"-Angabe ergaenzen, die Komponenten
// machen daraus automatisch einen Link (siehe Button.jsx).

export const ticker = [
  "Klick. Prompt. Done.",
  "Das ist dein Glow-up",
  "Level up, Ladies",
  "Future is female",
  "Keine Passagiere — wir lenken das Spiel",
  "Hack the system",
  "Knowledge = Power",
  "Wir nehmen uns den Raum",
];

export const hero = {
  issue: "Issue 01",
  season: "Season: Glow up",
  headline: ["Level Up,", "Ladies."],
  banner: ["KI-Power für Frauen", "im Bildungsbereich"],
  tagline: ["Wir schließen den digitalen Gap.", "Gemeinsam. Mit Claude. Ohne Angst."],
  byline: "Insa Riese · Wir schließen den digitalen Gap",
  scribbles: {
    topRight: "Future is female",
    midRight: "Hack the system",
    bottomLeft: "Knowledge = Power",
  },
  ctaPrimary: "Jetzt anmelden",
  ctaSecondary: "Level 01 ansehen",
  portraitAlt: "Porträt einer Frau in Schwarz-Weiß mit Neon-Pink Akzenten",
};

export const about = {
  kicker: "The Founders",
  headline: "Wer sind wir?",
  intro:
    "Zwei Frauen, ein Ziel: KI raus aus der Buzzword-Blase und rein in deinen Schulalltag. Wir halten die Workshops zu zweit — mit zwei Perspektiven, zwei Arbeitsweisen und einer Haltung: Das Problem ist nie die Technologie. Es ist der Zugang.",
  people: [
    {
      tag: "Player 001",
      name: "Insa",
      role: "Lehrerin · Mathe, Informatik, GL",
      initials: "IR",
      photo: "insa.jpg",
      photoPosition: "60% 16%",
      photoAlt: "Insa Riese, Gründerin von Level Up Ladies",
      photoLabel: "Foto: public/insa.jpg",
      linkedin: "https://www.linkedin.com/in/insa-riese-303946316/",
      paragraphs: [
        "Ich bin Insa. Lehrerin für Mathe, Informatik und GL an einer Gesamtschule in NRW. Ich sehe jeden Tag: Viele Lehrerinnen haben Angst vor KI oder kennen sie gar nicht. Das Problem ist nicht die Technologie – es ist der Zugang.",
        "Deshalb mache ich Level Up Ladies: Um zu zeigen, dass KI ein Werkzeug ist, das du für dich nutzen kannst. Einmal richtig eingerichtet – und es arbeitet für dich.",
      ],
      quote: "Ohne Angst. Ohne Zauberei. Ohne die ganzen Buzzwords.",
    },
    {
      tag: "Player 002",
      name: "Mareike",
      role: "Karriere-Expertin · Gründerin, Design Your Career",
      initials: "MK",
      photo: "mareike.jpg",
      photoPosition: "62% 22%",
      photoAlt: "Mareike Kirch, Expertin für Karriereentwicklung",
      photoLabel: "Foto: public/mareike.jpg",
      linkedin: "https://www.linkedin.com/in/mareikekirch/",
      paragraphs: [
        "Ich bin Mareike. Ich begleite Frauen ab 30 durch den Umbruch: Jobwechsel, Neuausrichtung, KI im Arbeitsalltag. Heute als Gründerin und Geschäftsführerin von Design Your Career, davor als Co-Founderin und CEO von Coding Bootcamps Europe.",
        "In der Beratung sehe ich es täglich: Es fehlt nicht das Können, es fehlt der Zugang. Wer ihre Werkzeuge beherrscht, verhandelt anders – über ihre Zeit, ihre Rolle und ihre Zukunft.",
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
    "Das ist dein erster Schritt in ein System, das dir dauerhaft Zeit spart. Im Workshop lernst du, wie Claude dich und deine Arbeit versteht – und wie du dein eigenes, maßgeschneidertes Setup aufbaust.",
  tapeLabel: "Essential",
  cards: [
    {
      no: "01",
      title: "Dein Profil",
      body: "Claude lernt, wer du bist: Dein Fach, deine Klasse, deine Standards. Nur einmal – dann reicht ein Satz.",
      tag: "Character Setup",
    },
    {
      no: "02",
      title: "Dein Projekt",
      body: "Speichere deine wiederkehrenden Aufgaben. Arbeitsblatt-Vorlagen, Feedback-Skripte, alles was du regelmäßig brauchst.",
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
    "Ein Claude-Setup, das dich kennt",
    "Ein Projekt mit deinen eigenen Prompts",
    'Das erste Erfolgserlebnis ("Ja, das geht!")',
    "Die Grundlage für alle weiteren Level",
  ],
  detailsKicker: "The Stats",
  detailsHeadline: "Der Workshop:",
  facts: [
    { label: "Dauer", value: "60 Minuten" },
    { label: "Level", value: "Anfängerin (wirklich!)" },
    { label: "Voraussetzungen", value: "Keine — außer: ein Laptop und Mut" },
  ],
  bringHeadline: "Dein Loadout:",
  bring: [
    "Deinen Laptop",
    "10 Minuten Zeit für eine kurze Befragung",
    "Die Bereitschaft, was Neues zu probieren",
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
      title: "Von der Idee zum Arbeitsblatt",
      description: "Prozentrechnung: vom leeren Blatt zum fertigen Material in einer Sitzung.",
      duration: "60 Min",
      tag: "Einsteigerin",
    },
    {
      level: "Level 03",
      title: "Visuell gestalten mit Canva",
      description: "Material, das aussieht wie gekauft – ohne Design-Studium.",
      duration: "60 Min",
      tag: "Glow up",
    },
    {
      level: "Level 04",
      title: "PowerPoint automatisieren",
      description: "Präsentationen, die sich fast von selbst bauen.",
      duration: "75 Min",
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
  tagline: "KI-Power für Frauen im Bildungsbereich",
  linksHeadline: "Backstage",
  links: ["Über Level Up Ladies", "Die Workshop-Season", "Anmeldung", "Kontakt"],
  contactHeadline: "Kontakt",
  contact: ["Insa Riese", "insariese@gmail.com"],
  socialHeadline: "Social",
  social: [
    { label: "LinkedIn Insa", href: "https://www.linkedin.com/in/insa-riese-303946316/" },
    { label: "LinkedIn Mareike", href: "https://www.linkedin.com/in/mareikekirch/" },
  ],
  legal: [
    { label: "Impressum", to: "impressum/" },
    { label: "Datenschutz", to: "datenschutz/" },
  ],
  outro: "Setup gemacht. Masterprompt läuft. Kreativ gestartet.",
  crossLink: { label: "Nicht aus der Schule? → Die Seite für alle Frauen", to: "frauen/" },
  quizLink: { label: "Der Level-Check: Wo stehst du im KI-Gap?", to: "quiz/" },
  copyright: "© 2026 Level Up Ladies | Für Lehrerinnen, von einer Lehrerin",
  madeWith: "Made with ❤️ and Claude",
};

// Anmeldung.
// 1. Google-Formular anlegen, dann "Senden" -> Link-Symbol -> Link kopieren.
// 2. Den Link hier eintragen. Ab dann fuehren alle Anmelde-Buttons dorthin.
// Solange das Feld leer ist, oeffnen die Buttons eine vorbereitete E-Mail —
// die Seite funktioniert also in jedem Fall.
export const signup = {
  googleFormUrl: "",
  mailTo: "insariese@gmail.com",
};

const mailFallback =
  "mailto:" +
  signup.mailTo +
  "?subject=Anmeldung%3A%20Level%20Up%2C%20Ladies%21%20am%2012.09.2026" +
  "&body=Hallo%20Insa%20und%20Mareike%2C%0D%0A%0D%0A" +
  "ich%20moechte%20mir%20einen%20Platz%20im%20Workshop%20am%2012.%20September%202026%20um%2010%3A30%20Uhr%20sichern.%0D%0A%0D%0A" +
  "Name%3A%0D%0ASchule%20%2F%20Fach%3A%0D%0A%0D%0AViele%20Gruesse";

export const signupHref = signup.googleFormUrl || mailFallback;
