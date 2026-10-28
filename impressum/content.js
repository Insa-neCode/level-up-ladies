// Impressum-Inhalte.
// Eine Telefonnummer ist nicht zwingend, solange eine schnelle elektronische
// Kontaktaufnahme moeglich ist (E-Mail). Falls doch gewuenscht, hier wieder
// eine Zeile { label: "Telefon", value: "...", href: "tel:..." } ergaenzen.

// ---------------------------------------------------------------------------
import { kontaktMail, kontaktHinweis, kontaktEintrag } from "../shared/kontakt.js";
// Anbieterin ist die Mareike Kirch Holding GmbH, Level Up, Ladies! ist ein
// Produkt der Holding (Entscheidung 28.10.2026). Angaben wie im Impressum von
// design-your-career-mareike.netlify.app (Stand 12.10.2026). Keine
// Wohnadressen von Insa und Mareike verwenden.
// ---------------------------------------------------------------------------

export const impressum = {
  kicker: "Legal",
  headline: "Impressum",
  intro: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).",

  anbieterHeadline: "Anbieterin",
  anbieter: [
    {
      name: "Mareike Kirch Holding GmbH",
      rolle: "Level Up, Ladies! ist ein Angebot der Mareike Kirch Holding GmbH",
      adresse: ["Robert-Stolz-Str. 30", "44139 Dortmund", "Deutschland"],
      mail: kontaktMail,
    },
  ],

  kontaktHeadline: "Kontakt und Registerangaben",
  kontakt: [
    { label: "Vertreten durch", value: "Mareike Kirch (Geschäftsführerin)" },
    { label: "E-Mail", value: kontaktMail || kontaktHinweis, href: kontaktEintrag.href },
    { label: "Registergericht", value: "Amtsgericht Dortmund" },
    { label: "Registernummer", value: "HRB 32511" },
    { label: "USt-IdNr.", value: "DE338410376 (gemäß § 27a UStG)" },
  ],

  verantwortlichHeadline: "Verantwortlich für den Inhalt",
  verantwortlichText:
    "Verantwortlich nach § 18 Abs. 2 MStV, jeweils erreichbar unter der Anschrift der Mareike Kirch Holding GmbH: Insa Riese für die Inhalte des Bildungsbereichs (Startseite und Adventskalender für Lehrkräfte), Mareike Kirch für die Inhalte zu Job, Business und Alltag (Seite /frauen/, Level-Check und Adventskalender „Job, Business und Alltag“).",

  abschnitte: [
    {
      titel: "Haftung für Inhalte",
      text: "Als Diensteanbieterin sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen entfernen wir diese Inhalte umgehend.",
    },
    {
      titel: "Haftung für Links",
      text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets die jeweilige Anbieterin oder der jeweilige Anbieter der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.",
    },
    {
      titel: "Urheberrecht",
      text: "Die durch Insa Riese und Mareike Kirch erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
    },
    {
      titel: "Bildnachweise",
      text: "Die Porträt- und Hintergrundmotive im Kopfbereich sind KI-generiert (Google Gemini) und stammen aus dem Präsentationsmaterial von Level Up, Ladies!. Die Fotos von Insa Riese und Mareike Kirch sind private Aufnahmen und werden mit Einwilligung der abgebildeten Personen verwendet.",
    },
    {
      titel: "Verbraucherstreitbeilegung",
      text: "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).",
    },
  ],

  stand: "Stand: Oktober 2026",
  zurueck: "Zurück zur Startseite",
};
