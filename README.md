# Level Up, Ladies! — Landingpage

React + Vite + Tailwind CSS v4. Dark Theme, Neon-Pink Akzente, Struktur exakt nach
`level_up_ladies_landingpage_blueprint.md`.

## Drei Seiten, ein Projekt

| Seite | URL | Zielgruppe | Wo liegt sie? | Bilder |
|---|---|---|---|---|
| 1 | `/` | Frauen im Bildungsbereich (Lehrerinnen) | `index.html` + `src/` | `public/` |
| 2 | `/frauen/` | Alle Frauen — Einsteigerinnen und alle, die KI systematisch nutzen wollen | **`frauen/`** (vollstaendig, mit eigener README) | `public/frauen/` |
| 3 | `/quiz/` | Leadmagnet: kostenloser Selbsttest „Der Level-Check" | **`quiz/`** (vollstaendig, mit eigener README) | keine |

**Die Seiten teilen sich keine Datei.** Der Ordner `frauen/` enthaelt eigene
Kopien von Komponenten, Design-Tokens und Bildern. Wer nur an Seite 2 arbeitet, findet
dort alles und kann Seite 1 nicht versehentlich veraendern — und umgekehrt.

Der Preis dieser Trennung: **eine Design-Aenderung, die auf beiden Seiten ankommen soll,
muss zweimal gemacht werden** — einmal in `src/`, einmal in `frauen/`. Das gilt auch fuer
`index.css` und fuer ausgetauschte Fotos.

Die Fussleisten verlinken wechselseitig aufeinander (`footer.crossLink` im jeweiligen Content).

Offene Punkte und was dafür noch fehlt: **[ROADMAP.md](ROADMAP.md)**

## Lokal starten

```bash
npm install
npm run dev
```

Läuft auf http://localhost:5173

## Bauen

```bash
npm run build
```

Ergebnis liegt in `dist/`. Vorschau des Builds: `npm run preview`.

## Inhalte ändern

Alle Texte, Ticker-Zeilen und Workshop-Daten stehen in **`src/data/content.js`** (Seite 1)
bzw. **`frauen/content.js`** (Seite 2) — nicht in den Komponenten. Noch zu ersetzen:

- `cta.note` → `[DATUM]` (in beiden Dateien)
- **Seite 2 — Mareike**: offene Punkte stehen in `frauen/README.md`.
- **Links**: bewusst noch keine gesetzt. Die Buttons sind echte `<button>` ohne Ziel, die
  Footer-Einträge reiner Text. Sobald die Ziele feststehen, in `Button` ein `href` übergeben
  (siehe `src/components/Button.jsx`).

## Bilder einsetzen

| Stelle | Datei | Status |
|---|---|---|
| Hero-Porträt Seite 1 | `public/hero-portrait.png` | liegt bereits da — aus der Titelfolie der Präsentation freigestellt |
| Über mich, Seite 1 | `public/insa.jpg` | liegt bereits da |
| Hero-Porträt Seite 2 | `public/frauen/hero-portrait.png` | Kopie, liegt bereits da |
| Wer sind wir, Insa | `public/frauen/insa.jpg` | Kopie, liegt bereits da |
| Wer sind wir, Mareike | `public/frauen/mareike.jpg` | **noch abzulegen**. Fehlt die Datei, zeigt die Karte den Neon-Platzhalter. |

Jede Seite hat ihren eigenen Bildordner. Ein Foto, das auf beiden Seiten vorkommt, liegt
deshalb doppelt — beim Austauschen beide Kopien ersetzen.

Der Bildausschnitt für `insa.jpg` sitzt auf `object-[60%_16%]` (Gesicht oben rechts).
Passt der Ausschnitt nicht, den Wert in `src/components/About.jsx` anpassen. Auf Seite 2
steuert `photoPosition` je Person in `frauen/content.js` den Ausschnitt.

## Struktur

```
index.html                    ── SEITE 1  (/) ──
src/
  main.jsx                    Einstieg
  App.jsx                     Sektions-Reihenfolge
  index.css                   Design-Tokens (Farben, Font, Reveal-Animation)
  data/content.js             saemtliche Inhalte Seite 1
  hooks/useReveal.js          Fade-in beim Scrollen
  components/
    Hero.jsx                  1. Hero (Dark, 100vh Desktop)
    HeroGraphic.jsx           Abstract Neon Graphic
    About.jsx                 2. "Wer bin ich?" — eine Person
    Ticker.jsx                Laufband
    WorkshopDeepDive.jsx      3. Workshop 1 (Cards + Outcomes + Details)
    SeriesTeaser.jsx          4. Workshop-Serie (Dark)
    CtaSection.jsx            5. CTA (Neon Pink)
    Footer.jsx                6. Footer (Charcoal, optional Querverweis)
    Button.jsx                Primary / Secondary / Ghost
    SectionHeading.jsx        H2 Bold Italic + Neon-Klammer
    Marker.jsx Sticker.jsx Tape.jsx   Deko-Elemente

frauen/                       ── SEITE 2  (/frauen/) — eigenstaendig ──
  README.md                   was hier liegt, was noch offen ist
  index.html                  Einstieg
  main.jsx  App.jsx           wie oben, eigene Kopien
  content.js                  saemtliche Inhalte Seite 2
  index.css                   eigene Kopie der Design-Tokens
  hooks/  components/         eigene Kopien; statt About.jsx: AboutTeam.jsx
                              ("Wer sind wir?", zwei Personen)

quiz/                         ── LEADMAGNET  (/quiz/) — eigenstaendig ──
  README.md                   Konzept, Auswertungslogik, offene Punkte
  index.html  main.jsx  App.jsx
  content.js                  Fragen, Ergebnisse, Texte
  scoring.js                  Auswertung: Praxis- und Zutrauens-Wert, Level, Gap
  index.css  hooks/           eigene Kopien
  components/                 Quiz.jsx QuestionCard.jsx Result.jsx GapMeter.jsx
                              GapSection.jsx + Kopien der Deko-Komponenten

public/                       Bilder Seite 1
public/frauen/                Bilder Seite 2
```

Der Block **"Für wen ist das?"** steckt in `frauen/components/WorkshopDeepDive.jsx` und
erscheint, weil `workshop.audience` in `frauen/content.js` gesetzt ist. Die Fassung von
Seite 1 kennt den Block nicht.

## Deployment auf GitHub Pages

1. Repo anlegen und pushen:

```bash
git init && git add -A && git commit -m "Level Up Ladies Landingpage" && git branch -M main
```

```bash
git remote add origin https://github.com/<user>/<repo>.git && git push -u origin main
```

2. Auf GitHub: **Settings → Pages → Source: GitHub Actions**.

Der Workflow `.github/workflows/deploy.yml` baut bei jedem Push auf `main` und setzt
`BASE_PATH` automatisch auf `/<repo-name>/`. Danach ist die Seite unter
`https://<user>.github.io/<repo>/` erreichbar.

**Eigene Domain oder User-Page** (`<user>.github.io`): im Workflow `BASE_PATH="/"` setzen.

## Design-Tokens

| Token | Wert | Tailwind-Klasse |
|---|---|---|
| Neon Pink | `#FF006E` | `text-neon`, `bg-neon`, `border-neon` |
| Charcoal | `#1a1a1a` | `bg-charcoal` |
| Light Gray | `#f5f5f5` | `bg-graylight` |
| Medium Gray | `#555555` | `text-graymid` (nur auf hellem Grund — auf Dunkel `text-white/70`) |

## Zugänglichkeit

- Skip-Link zum Hauptinhalt, sichtbarer Fokus-Ring (Neon Pink)
- Kontraste geprüft: Pink/Charcoal 4.5:1, Pink/Weiß 3.8:1 (nur für große, fette Schrift verwendet)
- `prefers-reduced-motion` schaltet Animationen ab
- Ohne JavaScript bleibt der komplette Inhalt sichtbar
