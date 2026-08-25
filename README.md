# Level Up, Ladies! — Landingpage

React + Vite + Tailwind CSS v4. Dark Theme, Neon-Pink Akzente, Struktur exakt nach
`level_up_ladies_landingpage_blueprint.md`.

## Zwei Landingpages, ein Projekt

| Seite | URL | Zielgruppe | Wo liegt sie? |
|---|---|---|---|
| 1 | `/` | Frauen im Bildungsbereich (Lehrerinnen) | `index.html` + `src/` |
| 2 | `/frauen/` | Alle Frauen — Einsteigerinnen und alle, die KI systematisch nutzen wollen | **`frauen/`** (eigener Ordner, mit eigener README) |

Beide Seiten benutzen **dieselben Komponenten und dasselbe Design** aus `src/`.
Unterschieden wird nur ueber den Content, der per Context hereingereicht wird
(`src/data/ContentContext.jsx`), und ueber die Ueber-Sektion, die `App.jsx` als Prop
bekommt. Eine Design-Aenderung wirkt damit automatisch auf beiden Seiten.

Die Fussleisten verlinken wechselseitig aufeinander (`footer.crossLink` im jeweiligen Content).

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
| Hero-Porträt | `public/hero-portrait.png` | liegt bereits da — aus der Titelfolie der Präsentation freigestellt |
| Über mich / Wer sind wir | `public/insa.jpg` | liegt bereits da |
| Wer sind wir (Seite 2) | `public/mareike.jpg` | **noch abzulegen**: Mareikes Foto als `mareike.jpg` in `public/` speichern, dann erscheint es automatisch. Fehlt die Datei, zeigt die Karte den Neon-Platzhalter. |

Beide Seiten teilen sich den Ordner `public/` — ein Bild dort ist von beiden aus erreichbar.

Der Bildausschnitt für `insa.jpg` sitzt auf `object-[60%_16%]` (Gesicht oben rechts).
Passt der Ausschnitt nicht, den Wert in `src/components/About.jsx` anpassen. Auf Seite 2
steuert `photoPosition` je Person in `frauen/content.js` den Ausschnitt.

## Struktur

```
index.html                    Einstieg Seite 1  (/)

frauen/                       ── ALLES ZUR ZWEITEN LANDINGPAGE ──
  README.md                   was hier liegt, was noch offen ist
  index.html                  Einstieg Seite 2  (/frauen/)
  main.jsx                    mountet App mit dem Content aus diesem Ordner
  content.js                  saemtliche Inhalte Seite 2
  AboutTeam.jsx               "Wer sind wir?" — zwei Personen (nur Seite 2)

src/                          ── GEMEINSAM FUER BEIDE SEITEN ──
  main.jsx                    Einstieg Seite 1
  App.jsx                     Sektions-Reihenfolge; Ueber-Sektion kommt als Prop
  index.css                   Design-Tokens (Farben, Font, Reveal-Animation)
  data/ContentContext.jsx     reicht den Content an die Komponenten durch
  data/content.js             Inhalte Seite 1 (Bildungsbereich)
  hooks/useReveal.js          Fade-in beim Scrollen
  components/
    Hero.jsx                  1. Hero (Dark, 100vh Desktop)
    HeroGraphic.jsx           Abstract Neon Graphic
    About.jsx                 2. "Wer bin ich?" — eine Person (Seite 1)
    WorkshopDeepDive.jsx      3. Workshop 1 (3 Cards + optional "Für wen?" + Outcomes + Details)
    SeriesTeaser.jsx          4. Workshop-Serie (Dark)
    CtaSection.jsx            5. CTA (Neon Pink)
    Footer.jsx                6. Footer (Charcoal, optional Querverweis)
    Button.jsx                Primary / Secondary / Ghost
    SectionHeading.jsx        H2 Bold Italic + Neon-Klammer

public/                       Bilder, von beiden Seiten aus erreichbar
```

Der Block **"Für wen ist das?"** in `WorkshopDeepDive.jsx` erscheint nur, wenn im Content
`workshop.audience` gesetzt ist — auf Seite 1 fehlt der Schluessel, dort bleibt der Block aus.

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
