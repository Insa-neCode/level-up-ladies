# Landingpage 2 — „KI-Power für Frauen"

**Dieser Ordner ist vollständig. Alles, was diese Seite braucht, liegt hier drin** —
Inhalte, Sektionen, Komponenten, Design-Tokens. Kein Verweis auf Seite 1.

**URL:** `/frauen/` — lokal `http://localhost:5173/level-up-ladies/frauen/`

**Zielgruppe:** Frauen allgemein, nicht auf den Bildungsbereich beschränkt —
Einsteigerinnen ohne Vorerfahrung ebenso wie Frauen, die KI schon nutzen und ihre
Nutzung strukturiert und systematisch aufbauen wollen.

## Was wo liegt

```
frauen/
  index.html              Einstiegsseite, Titel und Meta-Tags (SEO, Social Preview)
  main.jsx                startet die Seite
  App.jsx                 Reihenfolge der Sektionen
  content.js              ►► SÄMTLICHE TEXTE DIESER SEITE — hier editieren
  index.css               Design-Tokens: Farben, Fonts, Glow, Animationen
  hooks/
    useReveal.js          Fade-in beim Scrollen
  components/
    Hero.jsx              1. Hero (Dark, großer Titel + Porträt)
    Ticker.jsx            Laufband zwischen den Sektionen
    AboutTeam.jsx         2. „Wer sind wir?" — Insa + Mareike
    WorkshopDeepDive.jsx  3. Workshop 1 (Karten, „Für wen?", Outcomes, Stats)
    SeriesTeaser.jsx      4. Workshop-Serie
    CtaSection.jsx        5. CTA (Neon Pink)
    Footer.jsx            6. Footer
    Button.jsx            Buttons
    SectionHeading.jsx    Überschrift mit Kicker
    Marker.jsx            handschriftliche Scribbles
    Sticker.jsx           schräge Klebe-Labels
    Tape.jsx              rosa Klebestreifen
    HeroGraphic.jsx       Neon-Grafik (Ersatz, falls kein Foto)

../public/frauen/         die Bilder dieser Seite (eigener Ordner)
  insa.jpg                Kopie
  hero-portrait.png       Kopie
  mareike.jpg             ►► noch abzulegen
```

Die Bilder liegen eine Ebene höher, weil der Browser sie unter einer festen Adresse
abrufen muss — `public/` ist dafür der vorgeschriebene Ort. Innerhalb davon hat diese
Seite ihren eigenen Unterordner `frauen/` mit eigenen Kopien.

## Wichtig: Kopien, keine geteilten Dateien

Seite 1 (`../index.html` + `../src/`) und Seite 2 (dieser Ordner) sind vollständig
getrennt. Die Komponenten und `index.css` sind **Kopien** — sie sehen heute gleich aus,
sind aber zwei verschiedene Dateien.

Das heißt konkret:

- Eine Änderung hier wirkt **nur** auf Seite 2. Seite 1 bleibt unberührt.
- Soll eine Design-Änderung auf **beiden** Seiten ankommen, musst du sie **zweimal**
  machen: einmal hier, einmal in `../src/`.
- Auch die Bilder liegen doppelt (`public/insa.jpg` und `public/frauen/insa.jpg`).
  Tauschst du ein Foto aus, tausche beide.

## Inhaltliche Unterschiede zu Seite 1

- Hero-Banner: „KI-Power für Frauen — in Job, Business und Alltag"
- „Wer sind wir?" statt „Wer bin ich?" — Player 001 Insa, Player 002 Mareike
- zusätzlicher Block **„Für wen ist das?"** (Einsteigerin / Gelegenheits-Nutzerin /
  Systematikerin). Er erscheint, weil in `content.js` der Schlüssel `workshop.audience`
  gesetzt ist.
- keine schulspezifischen Formulierungen mehr: „dein Job, deine Themen, dein Ton" statt
  „dein Fach, deine Klasse"; Level 02 heißt „Von der Idee zum fertigen Dokument"
- Stats-Zeile „Leitung: Insa & Mareike"
- Footer verlinkt auf Seite 1 (`footer.crossLink`)

## Noch offen

In `content.js`:

- `about.people[1]` — **alle Angaben zu Mareike**: `role`, die beiden Absätze in
  `paragraphs`, optional `quote`. Aktuell stehen dort Platzhalter.
- `hero.byline` — Nachname Mareike
- `footer.contact` — Kontaktdaten Mareike
- `cta.note` — `[DATUM]` durch den Workshop-Termin ersetzen

Außerdem: **`../public/frauen/mareike.jpg`** ablegen. Solange die Datei fehlt, zeigt die
Karte den Neon-Platzhalter statt eines kaputten Bildes. Der Bildausschnitt lässt sich
über `photoPosition` in `content.js` justieren (Standard `"50% 20%"`).

## Neue Sektion nur für diese Seite

Neue Datei in `components/` anlegen und in `App.jsx` an der gewünschten Stelle einhängen.
Texte dazu kommen in `content.js`.
