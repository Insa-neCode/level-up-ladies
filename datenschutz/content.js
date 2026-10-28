// Datenschutzerklärung.
// ACHTUNG: Von einer Juristin prüfen lassen, bevor das Anmeldeformular live geht.
// Der Abschnitt "Anmeldung zum Workshop" beschreibt Google Forms — er gilt erst,
// sobald signup.googleFormUrl gesetzt ist. Bis dahin bitte auskommentiert lassen
// oder den Hinweissatz darin stehen lassen.
import { kontaktMail, kontaktHinweis } from "../shared/kontakt.js";

export const datenschutz = {
  kicker: "Legal",
  headline: "Datenschutz",
  intro:
    "Wir verarbeiten so wenige Daten wie möglich. Diese Seite setzt keine Cookies, bindet keine Werbung ein und misst kein Besucherverhalten. Hier steht, was trotzdem anfällt.",
  zurueck: "Zurück zur Startseite",

  verantwortlichHeadline: "Verantwortliche",
  verantwortlich: [
    "Mareike Kirch Holding GmbH",
    "Robert-Stolz-Str. 30",
    "44139 Dortmund",
    "Geschäftsführerin: Mareike Kirch",
    kontaktMail || kontaktHinweis,
  ],

  abschnitte: [
    {
      titel: "Aufruf der Website (Hosting)",
      text: "Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Seite überträgt dein Browser technisch notwendige Daten an GitHub, darunter deine IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite und Angaben zu Browser und Betriebssystem. Diese Verarbeitung ist erforderlich, um die Seite überhaupt ausliefern zu können; Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und funktionsfähigen Angebot (Art. 6 Abs. 1 lit. f DSGVO). GitHub speichert diese Angaben in Server-Logfiles, unter anderem zum Schutz vor Missbrauch und Angriffen. Wir selbst haben keinen Zugriff auf diese Server-Logs, werten sie nicht aus und führen sie nicht mit anderen Datenquellen zusammen. Die Datenschutzerklärung von GitHub findest du unter docs.github.com/site-policy.",
    },
    {
      titel: "SSL-/TLS-Verschlüsselung",
      text: "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Du erkennst eine verschlüsselte Verbindung an „https://“ in der Adresszeile und am Schloss-Symbol deines Browsers. So können Daten, die du an uns überträgst, nicht von Dritten mitgelesen werden.",
    },
    {
      titel: "Schriftarten (Google Fonts)",
      text: "Für die Darstellung nutzen wir Schriftarten, die beim Seitenaufruf von Servern der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, geladen werden. Dabei wird deine IP-Adresse an Google übertragen. Rechtsgrundlage ist unser berechtigtes Interesse an einer einheitlichen Darstellung (Art. 6 Abs. 1 lit. f DSGVO). Wir prüfen, die Schriften künftig selbst auszuliefern, damit diese Übertragung entfällt.",
    },
    {
      titel: "Kontaktaufnahme per E-Mail",
      text: "Wenn du uns schreibst — etwa über die Anmelde-Schaltflächen, die eine vorbereitete E-Mail öffnen — verarbeiten wir deine Angaben ausschließlich, um dein Anliegen zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) beziehungsweise lit. f DSGVO. Wir löschen die Nachrichten, sobald sie nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.",
    },
    {
      titel: "Anmeldung zum Workshop",
      text: "Für Workshop-Anmeldungen setzen wir Google Forms ein, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Wenn du dich anmeldest, verarbeiten wir die von dir angegebenen Daten — in der Regel Name, E-Mail-Adresse und freiwillige Angaben zu deinem Arbeitsumfeld — ausschließlich zur Organisation und Durchführung des Workshops. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du jederzeit formlos per E-Mail widerrufen kannst; die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt davon unberührt. Wir löschen die Anmeldedaten spätestens sechs Monate nach dem Workshop. Google bindet in das Formular zusätzlich reCAPTCHA zum Schutz vor automatisierten Eingaben ein; dabei werden technische Daten wie IP-Adresse und Browserangaben an Google übermittelt. Zur möglichen Übermittlung in die USA siehe den Abschnitt „Übermittlung in Drittländer“.",
    },
    {
      titel: "Adventskalender: Adventsmails, Newsletter und Warteliste",
      text: "Im Adventskalender kannst du dich ab Tür 6 mit deiner E-Mail-Adresse eintragen. Wir verarbeiten dann ausschließlich deine E-Mail-Adresse: für eine kurze Erinnerung an das neue Türchen jeden Morgen vom 7. bis 24. Dezember 2026, im Kalender „Job, Business und Alltag“ zusätzlich für den Newsletter von Mareike Kirch mit KI-Hacks und Informationen zum Workshop, im Kalender für Lehrkräfte zusätzlich für die Warteliste von Insa Riese, über die du erfährst, wann die Workshop-Season startet. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du jederzeit mit Wirkung für die Zukunft widerrufen kannst – über den Abmeldelink in jeder Mail oder per E-Mail an uns. Wir nutzen das Double-Opt-in-Verfahren: Nach der Eintragung bestätigst du in einer Mail, dass die Adresse dir gehört. Den Zeitpunkt von Eintragung und Bestätigung speichern wir, um die Einwilligung nachweisen zu können (Art. 6 Abs. 1 lit. f DSGVO). Für den Versand nutzen wir Brevo, Anbieter ist [Anbieterangaben laut Auftragsverarbeitungsvertrag mit Brevo]. Brevo verarbeitet deine Daten in unserem Auftrag auf Grundlage eines Auftragsverarbeitungsvertrags. Wir werten nicht aus, ob du unsere Mails öffnest oder Links darin anklickst. Deine Adresse speichern wir, bis du dich abmeldest; danach löschen wir sie, sie kann aber auf einer Sperrliste bleiben, damit du keine Mails mehr bekommst. Die Eintragung ist freiwillig; die Türen 1 bis 5 öffnen sich auch ohne.",
    },
    {
      titel: "Adventskalender: Speicherung im Browser",
      text: "Damit sich der Adventskalender merkt, dass du dich eingetragen hast, und die Türen für dich offen bleiben, speichert er einen kurzen Vermerk im lokalen Speicher deines Browsers (localStorage). Der Vermerk enthält keine personenbezogenen Daten wie deine E-Mail-Adresse und wird nicht an uns übertragen. Die Speicherung ist für die von dir gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Du kannst den Vermerk jederzeit über die Einstellungen deines Browsers löschen. Die Prompts im Kalender kopierst du per Button in die Zwischenablage deines Geräts; dabei werden keine Daten übertragen. Links zu KI-Diensten wie Claude, ChatGPT oder Gemini sind gewöhnliche Links – erst wenn du einen öffnest, gelten dort die Datenschutzbestimmungen des jeweiligen Anbieters.",
    },
    {
      titel: "Keine Cookies, kein Tracking",
      text: "Diese Website speichert keine Cookies auf deinem Gerät, bindet keine Analyse- oder Werbedienste ein und erstellt keine Profile. Es gibt deshalb auch kein Einwilligungsbanner. Einzige Ausnahme ist der oben beschriebene Vermerk des Adventskalenders im lokalen Speicher deines Browsers.",
    },
    {
      titel: "Externe Links",
      text: "Unsere Seiten verlinken auf externe Angebote, etwa LinkedIn-Profile. Sobald du einem solchen Link folgst, gilt die Datenschutzerklärung des jeweiligen Anbieters. Eine Datenübertragung findet erst beim Klick statt, nicht schon beim Laden unserer Seite.",
    },
    {
      titel: "Übermittlung in Drittländer",
      text: "Einige der eingesetzten Dienste gehören zu Unternehmen mit Sitz in den USA: GitHub Inc. (Hosting dieser Website) und Google (Google Forms einschließlich reCAPTCHA sowie Google Fonts; unser Vertragspartner ist die Google Ireland Limited). Dabei können personenbezogene Daten, etwa deine IP-Adresse, in die USA übermittelt werden. Für die USA gibt es mit dem EU-US Data Privacy Framework einen Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO) für Unternehmen, die nach diesem Rahmen zertifiziert sind; das gilt für GitHub und Google. Zusätzlich stützen sich die Anbieter auf Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO). Brevo, unser Dienst für den Mailversand, hat seinen Sitz in der EU.",
    },
    {
      titel: "Deine Rechte",
      text: "Du hast uns gegenüber jederzeit folgende Rechte. Wende dich dafür formlos per E-Mail an uns:",
      liste: [
        "Auskunft über die zu dir gespeicherten Daten (Art. 15 DSGVO)",
        "Berichtigung falscher Daten (Art. 16 DSGVO)",
        "Löschung deiner Daten (Art. 17 DSGVO)",
        "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Datenübertragbarkeit (Art. 20 DSGVO)",
        "Widerspruch gegen Verarbeitungen, die auf unserem berechtigten Interesse beruhen (Art. 21 DSGVO); gegen Direktwerbung auch ohne Angabe von Gründen",
        "Widerruf einer Einwilligung jederzeit mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO); die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt unberührt",
      ],
    },
    {
      titel: "Beschwerderecht",
      text: "Wenn du der Ansicht bist, dass wir deine Daten nicht rechtmäßig verarbeiten, kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf.",
    },
    {
      titel: "Automatisierte Entscheidungen",
      text: "Im Rahmen der hier beschriebenen Verarbeitung treffen wir keine ausschließlich automatisierten Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung für dich.",
    },
    {
      titel: "Aktualität dieser Erklärung",
      text: "Wir passen diese Datenschutzerklärung an, wenn sich unser Angebot oder die Rechtslage ändert. Es gilt jeweils die hier veröffentlichte Fassung.",
    },
  ],

  stand: "Stand: Oktober 2026",
};
