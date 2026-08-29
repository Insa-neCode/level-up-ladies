# Roadmap

Offene Punkte für Level Up, Ladies! — sortiert nach Dringlichkeit.
Jeder Punkt nennt, **was zu tun ist**, **wo** es passiert und **was dafür fehlt**.

Stand: 25.08.2026

---

## 1. Rechtliches

### 1.1 Impressum auf die Holding umstellen
**Wann:** Sobald das Angebot über die Mareike Kirch Holding läuft (also sobald Geld fließt oder die Holding als Anbieterin auftritt).
**Wo:** `impressum/content.js` — die fertige Vorlage liegt dort auskommentiert über `export const impressum`.
**Fehlt noch:**
- [ ] Rechtsform (GmbH, UG, …)
- [ ] Anschrift in Dortmund
- [ ] Registergericht + HRB-Nummer
- [ ] USt-IdNr., falls vorhanden

Bis dahin bleiben Insa und Mareike als private Diensteanbieterinnen eingetragen — das ist der Stand, der heute zutrifft.

### 1.2 Betreiberform klären
**Was:** Ihr betreibt das Angebot gemeinsam unter einer Adresse. Rechtlich kann das bereits eine GbR sein — dann gehört die GbR ins Impressum statt zwei Einzelpersonen.
**Wer:** Frage an Anwältin oder Steuerberatung, nicht am Rechner zu klären.

### 1.3 Datenschutzerklärung
**Stand:** Seite steht unter `/datenschutz/`, aus beiden Footern verlinkt.
Inhalt: `datenschutz/content.js`. Beschrieben sind Hosting über GitHub Pages,
Google Fonts, Kontakt per E-Mail, die geplante Anmeldung über Google Forms,
Betroffenenrechte und die zuständige Aufsichtsbehörde (LDI NRW).

- [ ] **Von einer Juristin prüfen lassen** — der Text ist sorgfältig, aber keine Rechtsberatung
- [ ] Abschnitt „Anmeldung zum Workshop" gilt erst, sobald das Google-Formular live ist
- [ ] Schriften selbst hosten, dann entfällt der Google-Fonts-Abschnitt ganz (kleiner Aufwand)

### 1.4 Sobald das Angebot kostenpflichtig wird
- [ ] Widerrufsbelehrung
- [ ] AGB
- [ ] Preisangaben nach PAngV

Dafür einmal anwaltlich draufschauen lassen — das ist kein Copy-Paste-Thema.

---

## 2. Funktion

### 2.1 Anmeldung
**Stand:** Die Buttons „Jetzt anmelden" und „Platz sichern" öffnen eine vorbereitete E-Mail
(Betreff, Termin, Namensfeld). Funktioniert ohne Konto und ohne Datenschutzerklärung,
zählt aber keine Plätze und verlangt von der Interessentin ein eingerichtetes Mailprogramm.
**Wo:** `signupHref` in `src/data/content.js` und `frauen/content.js`.

**Nächster Schritt — Google Forms** (entschieden am 25.08.2026).
Anleitung mit allen Feldern, dem Skript für die Platzbegrenzung und den
Datenschutz-Hinweisen: **[docs/anmeldung-google-forms.md](docs/anmeldung-google-forms.md)**

- [x] Formular bei Google angelegt
- [x] Link in `signup.googleFormUrl` eingetragen (Testformular — vor dem Bewerben gegen das echte tauschen)
- [ ] Platzbegrenzung: entweder von Hand abschalten oder das Apps-Script einrichten
- [ ] Datenschutzerklärung ergänzen (siehe 1.3) — **vorher nicht verlinken**

Der Level-Check unter `/quiz/` ist die Vorstufe davon: Er sammelt bewusst nichts ein und
rechnet nur im Browser, deshalb darf er schon jetzt online. Die Anmeldung aus dem
Ergebnis läuft über dieselbe vorbereitete E-Mail, trägt aber zusätzlich das erreichte
Level in den Betreff. Sobald das Formular steht, genügt ein Eintrag in
`quiz/content.js` (`leadForm`) — die Ergebnisseite blendet den Button dann selbst ein.
- [ ] Offen: Google bietet privaten Gmail-Konten keinen AV-Vertrag. Entweder Google
      Workspace nutzen oder später auf Tally wechseln (Belgien, Server Frankfurt, AV-Vertrag).

### 2.2 Restliche Links
**Stand:** Die Footer-Liste „Backstage" ist entschlackt. „Anmeldung" und „Kontakt" sind
raus — der Anmelde-Button steht ohnehin darüber, der Kontaktblock direkt daneben.
Die verbliebenen zwei Einträge springen jetzt zu den passenden Abschnitten.
**Wo:** `footer.links` in `src/data/content.js`, `frauen/content.js` und `quiz/content.js`.

- [ ] Instagram fehlt noch als Kanal in `footer.social`

---

## 3. Inhalt

### 3.1 Workshops 2 bis 9
**Was:** Die Season-Sektion zeigt Level 02–04 plus „+ 5 weitere Level". Titel und Beschreibungen der übrigen Workshops fehlen, ebenso eigene Detailseiten.
**Wo:** `series.workshops` in beiden Content-Dateien.

### 3.2 Quellen für die Zahlen im Level-Check
**Was:** Die Sektion „The Gap" auf `/quiz/` nennt 12 %, 22 % und 18 %. Die Zahlen stammen
aus der Kampagnengrafik, die Belegstellen fehlen noch.
**Wo:** `quiz/content.js`, `gap.stats[].source` — solange das Feld leer ist, erscheint
keine Quellenzeile.
**Warum wichtig:** Sobald die Seite beworben wird, sollten die Zahlen belegbar sein.

### 3.3 Weitere Termine
**Was:** Aktuell ist ein Termin hinterlegt: 12. September 2026, 10:30 Uhr.
**Wo:** `cta.note` in beiden Content-Dateien.

### 3.4 Seite „Über Level Up Ladies"
**Was:** Eine eigene Seite zur Philosophie hinter Level Up Ladies — warum es das Angebot
gibt, woran ihr glaubt, was ihr mit „Wir schließen den digitalen Gap" meint. Der
Footer-Eintrag „Über Level Up Ladies" soll später dorthin führen.
**Stand:** Inhalt noch nicht erarbeitet. Bis dahin springt der Link auf den Über-Bereich
der jeweiligen Seite: `#ueber-mich` im Bildungsbereich, `#ueber-uns` bei den Frauen.
**Wo:** `footer.links` in beiden Content-Dateien, sobald die Seite steht auf den neuen Pfad zeigen.
**Fehlt noch:**
- [ ] Text zur Philosophie schreiben
- [ ] Entscheiden, ob eine Seite für beide Zielgruppen reicht oder zwei Fassungen nötig sind

---

## 4. Technik

### 4.1 Doppelter Komponenten-Baum
**Was:** `src/`, `frauen/` und `quiz/` enthalten dieselben Deko-Komponenten dreimal. Jede Design-Änderung muss doppelt gemacht werden — genau das ist bei „Dein Goodiebag" und beim Footer-Umbau passiert.
**Vorschlag:** Gemeinsame Komponenten in einen geteilten Ordner ziehen, Inhalte bleiben getrennt. Mit `/quiz/` ist die dritte Seite jetzt da — ab hier lohnt es sich.

### 4.2 Veraltete Actions im Deploy-Workflow
**Was:** GitHub warnt bei jedem Lauf, dass `actions/checkout@v4`, `actions/setup-node@v4` und `actions/upload-artifact@v4` auf Node 20 zielen und ersatzweise auf Node 24 laufen. Funktioniert, sollte aber irgendwann auf `@v5` gehoben werden.
**Wo:** `.github/workflows/deploy.yml`

---

## Erledigt

- [x] Landingpage Bildungsbereich im Fashion-Magazine-Stil
- [x] Zweite Landingpage `/frauen/` für Job, Business und Alltag
- [x] Beide Seiten auf GitHub Pages veröffentlicht
- [x] Insa und Mareike als Team, mit Fotos und LinkedIn-Profilen
- [x] Impressum mit Anschrift Köln, aus beiden Footern verlinkt
- [x] Workshop-Termin 12.09.2026, 10:30 Uhr
- [x] „Dein Goodiebag" mit handgezeichnetem Tüten-Icon
- [x] Leadmagnet `/quiz/` — „Der Level-Check", verlinkt aus beiden Landingpages
