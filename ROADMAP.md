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
**Was:** Fehlt bislang komplett. Sobald ein Anmeldeformular Daten entgegennimmt (Punkt 2.1), ist sie Pflicht — die Informationspflicht nach Art. 13 DSGVO greift, sobald personenbezogene Daten erhoben werden.
**Nebenpunkt:** Die Seiten laden Schriften von Google Fonts, also entsteht bei jedem Aufruf eine Verbindung zu Google-Servern mit IP-Adresse der Besucherin. Sauberste Lösung: Schriften selbst hosten (`public/fonts/`), dann entfällt das Thema. Aufwand: gering.

### 1.4 Sobald das Angebot kostenpflichtig wird
- [ ] Widerrufsbelehrung
- [ ] AGB
- [ ] Preisangaben nach PAngV

Dafür einmal anwaltlich draufschauen lassen — das ist kein Copy-Paste-Thema.

---

## 2. Funktion

### 2.1 Anmeldung
**Was:** Die vier CTA-Buttons („Jetzt anmelden", „Platz sichern") sind bewusst noch ohne Ziel — echte `<button>`-Elemente ohne Link.
**Wo:** `src/components/Button.jsx` (bzw. `frauen/components/Button.jsx`) — sobald ein `href` übergeben wird, entsteht automatisch ein Link.
**Optionen:**

| Weg | Aufwand | Was ihr braucht |
|---|---|---|
| Formular über Formspree/Tally | klein | kostenloser Account, ich baue die Formular-ID ein |
| Formular öffnet das Mailprogramm | sehr klein | nichts — wirkt aber weniger professionell |
| Externes Tool (Eventbrite o.ä.) | klein | Link zur Veranstaltung |

**Entscheidung offen.** Bei einem kostenlosen Angebot reicht die erste Variante völlig.

### 2.2 Restliche Links
**Was:** Im Footer stehen „Über Level Up Ladies", „Die Workshop-Season", „Anmeldung", „Kontakt" noch als reiner Text. Instagram fehlt als Kanal.
**Wo:** `src/data/content.js` und `frauen/content.js`, jeweils `footer.links` / `footer.social`.

---

## 3. Inhalt

### 3.1 Workshops 2 bis 9
**Was:** Die Season-Sektion zeigt Level 02–04 plus „+ 5 weitere Level". Titel und Beschreibungen der übrigen Workshops fehlen, ebenso eigene Detailseiten.
**Wo:** `series.workshops` in beiden Content-Dateien.

### 3.2 Weitere Termine
**Was:** Aktuell ist ein Termin hinterlegt: 12. September 2026, 10:30 Uhr.
**Wo:** `cta.note` in beiden Content-Dateien.

---

## 4. Technik

### 4.1 Doppelter Komponenten-Baum
**Was:** `src/` und `frauen/` enthalten dieselben Komponenten zweimal. Jede Design-Änderung muss doppelt gemacht werden — genau das ist bei „Dein Goodiebag" und beim Footer-Umbau passiert.
**Vorschlag:** Gemeinsame Komponenten in einen geteilten Ordner ziehen, Inhalte bleiben getrennt. Lohnt sich, sobald eine dritte Seite dazukommt.

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
