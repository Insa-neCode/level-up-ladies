# Landingpage 2 — „KI-Power für Frauen"

Alles, was **nur** zur zweiten Landingpage gehört, liegt in diesem Ordner.

**URL:** `/frauen/` — lokal `http://localhost:5173/level-up-ladies/frauen/`

**Zielgruppe:** Frauen allgemein, nicht auf den Bildungsbereich beschränkt —
Einsteigerinnen ohne Vorerfahrung ebenso wie Frauen, die KI schon nutzen und ihre
Nutzung strukturiert und systematisch aufbauen wollen.

## Dateien in diesem Ordner

| Datei | Wofür |
|---|---|
| `index.html` | Einstiegsseite, Titel und Meta-Tags (SEO, Social Preview) |
| `main.jsx` | mountet die App mit dem Content aus diesem Ordner |
| `content.js` | **sämtliche Texte dieser Seite** — hier editieren |
| `AboutTeam.jsx` | die Sektion „Wer sind wir?" mit zwei Personen |

## Was diese Seite mit Seite 1 teilt

Design, Komponenten und Sektions-Reihenfolge kommen aus `../src/` und sind für beide
Seiten identisch (Hero, Ticker, Workshop-Karten, Serie, CTA, Footer, Farben, Fonts).
Eine Design-Änderung dort wirkt automatisch auf beiden Seiten — genau so ist es gewollt.

Getauscht werden nur zwei Dinge: der Content (`content.js` hier statt
`../src/data/content.js`) und die Über-Sektion (`AboutTeam.jsx` statt `About.jsx`).

## Inhaltliche Unterschiede zu Seite 1

- Hero-Banner: „KI-Power für Frauen — in Job, Business und Alltag"
- „Wer sind wir?" statt „Wer bin ich?" — Player 001 Insa, Player 002 Mareike
- zusätzlicher Block **„Für wen ist das?"** (Einsteigerin / Gelegenheits-Nutzerin /
  Systematikerin). Er erscheint, weil in `content.js` der Schlüssel `workshop.audience`
  gesetzt ist; auf Seite 1 fehlt er, dort bleibt der Block aus.
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

Außerdem: **`../public/mareike.jpg`** ablegen. Solange die Datei fehlt, zeigt die Karte
den Neon-Platzhalter statt eines kaputten Bildes. Der Bildausschnitt lässt sich über
`photoPosition` in `content.js` justieren (Standard `"50% 20%"`).

## Neue Sektion nur für diese Seite

Eine Sektion, die es auf Seite 1 nicht geben soll, kommt als eigene Datei in diesen
Ordner und wird in `main.jsx` eingehängt — so wie `AboutTeam.jsx`. Soll sie auf beiden
Seiten erscheinen, gehört sie nach `../src/components/`.
