# /quiz/ — Der Level-Check

Der Leadmagnet: ein kostenloser Selbsttest, der Frauen zeigt, wo sie mit KI stehen —
und der von dort in den Workshop führt.

Eigenständiger Ordner wie `frauen/`. Farben, Schriften, Deko-Elemente und Wording sind
die von `/frauen/` (Neon-Magenta auf Schwarz, Playfair Display, Caveat-Marker,
IBM Plex Mono für Labels, Klebestreifen und Sticker).

## Die Idee dahinter

Der Test misst **zwei Werte statt einem**:

| Achse | Fragen | Was sie misst |
|---|---|---|
| **Praxis** | 01–06 | Was jemand heute tatsächlich mit KI macht |
| **Zutrauen** | 07–10 | Was sie sich dabei selbst zutraut |

Der Abstand zwischen beiden ist der **Gap** — und damit genau der Punkt, um den es bei
Level Up Ladies geht. Wer in der Praxis deutlich weiter ist als im Zutrauen, bekommt den
Satz zu lesen, der die ganze Seite trägt: *„Du kannst mehr, als du dir zutraust."*

Das Level selbst ergibt sich aus dem Praxis-Wert und führt die Zielgruppen-Namen der
Workshop-Seite weiter:

| Praxis | Level | Ergebnis |
|---|---|---|
| 0–24 % | Level 00 · The Watcher | Die Beobachterin |
| 25–49 % | Level 01 · The Rookie | Die Einsteigerin |
| 50–74 % | Level 02 · The Regular | Die Gelegenheits-Nutzerin |
| 75–100 % | Level 03 · The Architect | Die Systematikerin |

Jedes Ergebnis liefert Diagnose, blinden Fleck, drei konkrete Schritte und **einen
fertigen Prompt zum Mitnehmen** — das ist der eigentliche Gegenwert des Leadmagneten.

## Datenschutz: warum diese Seite heute schon live darf

Der Test rechnet ausschließlich im Browser. Es wird **nichts gespeichert** — kein
localStorage, kein Cookie, keine Übertragung an einen Server. Damit werden keine
personenbezogenen Daten erhoben und die Seite braucht keine Einwilligung.

Der Weg vom Ergebnis zur Anmeldung läuft über dieselbe vorbereitete E-Mail wie auf den
anderen Seiten (`signupHref` in `content.js`) — nur trägt sie hier zusätzlich das
erreichte Level in Betreff und Text. So seht ihr bei jeder Anfrage sofort, wer auf
welchem Level einsteigt, ganz ohne Formular.

**Sobald ein echtes Formular dazukommt** (ROADMAP 2.1, z. B. Tally): in `content.js` den
Export `leadForm` füllen. Die Ergebnisseite blendet den zusätzlichen Button dann von
selbst ein, an den Komponenten ist nichts zu ändern. Vorher muss die
Datenschutzerklärung stehen (ROADMAP 1.3).

## Inhalte ändern

Alles steht in **`content.js`**:

| Export | Was drinsteht |
|---|---|
| `ticker` | Laufband-Zeilen |
| `hero` | Kopfbereich, Claim, Datenschutz-Hinweis |
| `gap` | Die drei Prozentzahlen und der Text dazu |
| `questions` | Die zehn Fragen mit Achse und Punktwerten |
| `results` | Die vier Level mit Diagnose, Schritten und Prompt |
| `gapReadout` | Die drei Fälle Praxis-höher / Mut-höher / gleichauf |
| `cta`, `footer` | Anmeldung und Fußzeile |
| `signupHref(level)` | Die vorbereitete Anmelde-Mail |
| `leadForm` | Platzhalter für das spätere Formular |

Die Rechnung selbst steht in **`scoring.js`** und ist von React getrennt.

## Offen

- [ ] **Quellen für die drei Prozentzahlen** in `gap.stats[].source` eintragen. Solange
      das Feld leer ist, erscheint keine Quellenzeile. Bevor die Seite beworben wird,
      sollten die Zahlen belegt sein.
- [ ] `leadForm` füllen, sobald Formular und Datenschutzerklärung stehen.

## Struktur

```
quiz/
  index.html            Einstieg (eigene Meta-Tags, Open Graph)
  main.jsx  App.jsx     Sektionsreihenfolge: Hero — Gap — Test — Anmeldung
  content.js            sämtliche Inhalte
  scoring.js            Auswertung (Prozente, Level, Gap-Fall, Textexport)
  index.css             Kopie der Design-Tokens
  hooks/useReveal.js    Kopie
  components/
    Hero.jsx            Kopf mit Zahlen-Kachel (10 Fragen / 3 Minuten / 0 €)
    GapSection.jsx      12 % · 22 % · 18 % — der Pain Point
    Quiz.jsx            Ablauf: Frage für Frage, dann Auswertung
    QuestionCard.jsx    eine Frage mit vier Antwortfeldern
    Result.jsx          Ergebnisseite
    GapMeter.jsx        die beiden Balken Praxis / Zutrauen
    CtaSection.jsx Footer.jsx Ticker.jsx Button.jsx
    SectionHeading.jsx Marker.jsx Sticker.jsx Tape.jsx GoodiebagIcon.jsx
```

`Quiz.jsx`, `QuestionCard.jsx` und `Result.jsx` verzichten bewusst auf die Klasse
`.reveal`: Der Scroll-Beobachter aus `useReveal` hängt sich einmal beim Laden an alle
vorhandenen Elemente. Was erst nach einem Klick entsteht, sieht er nicht mehr und bliebe
unsichtbar.

## Verlinkung

| Von | Wo | Text |
|---|---|---|
| `/frauen/` | unter den Hero-Buttons | „Erst mal testen: Wo stehst du im KI-Gap?" |
| `/frauen/` | Fußzeile | „Der Level-Check: Wo stehst du im KI-Gap?" |
| `/` | Fußzeile | „Der Level-Check: Wo stehst du im KI-Gap?" |
| `/quiz/` | Fußzeile und Ergebnis | zurück zur Workshop-Seite |

Gesteuert über `hero.quizLink` bzw. `footer.quizLink` in den jeweiligen Content-Dateien.
Wird der Eintrag entfernt, verschwindet der Link.
