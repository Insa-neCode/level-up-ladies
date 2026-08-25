# Level Up, Ladies! — Landingpage

React + Vite + Tailwind CSS v4. Dark Theme, Neon-Pink Akzente, Struktur exakt nach
`level_up_ladies_landingpage_blueprint.md`.

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

Alle Texte, Ticker-Zeilen und Workshop-Daten stehen in **`src/data/content.js`** — nicht in
den Komponenten. Noch zu ersetzen:

- `cta.note` → `[DATUM]`
- **Links**: bewusst noch keine gesetzt. Die Buttons sind echte `<button>` ohne Ziel, die
  Footer-Einträge reiner Text. Sobald die Ziele feststehen, in `Button` ein `href` übergeben
  (siehe `src/components/Button.jsx`).

## Bilder einsetzen

| Stelle | Datei | Status |
|---|---|---|
| Hero-Porträt | `public/hero-portrait.png` | liegt bereits da — aus der Titelfolie der Präsentation freigestellt |
| Über mich | `public/insa.jpg` | **noch abzulegen**: dein Foto als `insa.jpg` in `public/` speichern, dann erscheint es automatisch. Fehlt die Datei, zeigt die Seite den Platzhalter. |

Der Bildausschnitt für `insa.jpg` sitzt auf `object-[60%_16%]` (Gesicht oben rechts).
Passt der Ausschnitt nicht, den Wert in `src/components/About.jsx` anpassen.

## Struktur

```
src/
  App.jsx                     Sektions-Reihenfolge
  index.css                   Design-Tokens (Farben, Font, Reveal-Animation)
  data/content.js             sämtliche Inhalte
  hooks/useReveal.js          Fade-in beim Scrollen
  components/
    Hero.jsx                  1. Hero (Dark, 100vh Desktop)
    HeroGraphic.jsx           Abstract Neon Graphic
    About.jsx                 2. Über mich (White)
    WorkshopDeepDive.jsx      3. Workshop 1 (Light Gray, 3 Cards + Outcomes + Details)
    SeriesTeaser.jsx          4. Workshop-Serie (Dark)
    CtaSection.jsx            5. CTA (Neon Pink)
    Footer.jsx                6. Footer (Charcoal)
    Button.jsx                Primary / Secondary / Ghost
    SectionHeading.jsx        H2 Bold Italic + Neon-Klammer
```

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
