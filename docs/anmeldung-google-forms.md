# Anmeldung über Google Forms

Schritt für Schritt, damit „Jetzt anmelden" und „Platz sichern" auf euer Formular zeigen.

---

## 1. Formular anlegen

Auf [forms.google.com](https://forms.google.com) ein leeres Formular starten.

**Titel:** Anmeldung — Level Up, Ladies!
**Beschreibung:** Workshop am 12. September 2026, 10:30 Uhr. Plätze sind limitiert.

**Diese Felder empfehlen sich:**

| Feld | Typ | Pflicht |
|---|---|---|
| Name | Kurzantwort | ja |
| E-Mail-Adresse | Kurzantwort (Antwortvalidierung: E-Mail) | ja |
| Schule / Fach bzw. Womit arbeitest du? | Kurzantwort | nein |
| Wie sicher fühlst du dich mit KI? | Multiple Choice: gar nicht / etwas / ganz gut | nein |
| Einwilligung | Kontrollkästchen, Pflicht | ja |

**Text für das Einwilligungsfeld:**

> Ich bin damit einverstanden, dass meine Angaben zur Organisation des Workshops
> gespeichert und verarbeitet werden. Die Daten werden nicht weitergegeben. Ich kann
> meine Einwilligung jederzeit per E-Mail an insariese@gmail.com widerrufen.

In den Einstellungen unter **Antworten** die Option *E-Mail-Adressen erfassen* nur
aktivieren, wenn ihr sie wirklich braucht — ihr fragt sie ohnehin als Feld ab.

---

## 2. Link holen und eintragen

Im Formular oben rechts auf **Senden** → Link-Symbol (🔗) → **Link kopieren**
(„URL kürzen" ist optional).

Diesen Link an zwei Stellen eintragen, jeweils bei `googleFormUrl`:

- `src/data/content.js` — Seite für den Bildungsbereich
- `frauen/content.js` — Seite für Job, Business und Alltag

```js
export const signup = {
  googleFormUrl: "https://forms.gle/xxxxxxxx",
  mailTo: "insariese@gmail.com",
};
```

Danach `npm run build`, committen und pushen — fertig. Solange das Feld leer bleibt,
öffnen die Buttons weiterhin eine vorbereitete E-Mail.

---

## 3. Platzzahl begrenzen

Google Forms kann das **nicht von sich aus**. Zwei Wege:

**a) Von Hand:** Im Reiter *Antworten* den Schalter „Antworten annehmen" ausschalten,
sobald die Plätze voll sind. Reicht, wenn ihr ohnehin mitlest.

**b) Automatisch per Skript:** Im Formular oben rechts ⋮ → *Apps Script*, den folgenden
Code einfügen, `MAX_PLAETZE` anpassen und speichern. Dann links auf *Trigger* (Uhr-Symbol)
→ *Trigger hinzufügen* → Funktion `beiAnmeldung`, Ereignisquelle *Aus Formular*,
Ereignistyp *Bei Formularübermittlung*.

```javascript
const MAX_PLAETZE = 20;

function beiAnmeldung() {
  const formular = FormApp.getActiveForm();
  const anzahl = formular.getResponses().length;

  if (anzahl >= MAX_PLAETZE) {
    formular.setAcceptingResponses(false);
    formular.setCustomClosedFormMessage(
      'Der Workshop ist ausgebucht. Schreib uns an insariese@gmail.com, ' +
      'dann setzen wir dich auf die Warteliste für den nächsten Termin.'
    );
  }
}
```

Beim ersten Speichern fragt Google nach Berechtigungen — das ist normal, das Skript
gehört zu eurem eigenen Formular.

---

## 4. Was ihr rechtlich noch braucht

**Datenschutzerklärung.** Sobald das Formular live ist, werden personenbezogene Daten
erhoben — Art. 13 DSGVO verlangt dann eine Information darüber, wer die Daten erhält,
wofür, wie lange sie gespeichert werden und welche Rechte die Teilnehmerinnen haben.
Sie muss stehen, **bevor** das Formular verlinkt wird, und auch Google als Empfänger nennen.

**Der Haken bei Google:** Für eine DSGVO-konforme Verarbeitung braucht ihr einen
Auftragsverarbeitungsvertrag mit dem Anbieter. Den gibt es bei Google nur im Rahmen von
Google Workspace (kostenpflichtig), **nicht für private Gmail-Konten**. Wenn ihr das
Formular mit einem privaten Konto betreibt, bleibt eine Lücke — für ein kostenloses
Angebot im kleinen Rahmen ein überschaubares, aber reales Risiko.

Wollt ihr das sauber haben, ohne zu zahlen: Tally sitzt in Belgien, hostet in Frankfurt
und stellt einen AV-Vertrag bereit. Der Aufbau ist derselbe wie oben — ihr müsstet nur
dort statt bei Google ein Formular anlegen und mir den Link geben.
