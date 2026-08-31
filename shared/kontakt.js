// Gemeinsame Kontaktadresse fuer Level Up Ladies.
//
// Diese Adresse gilt fuer alles, was Insa und Mareike gemeinsam machen.
// Sie erscheint als klickbarer Mailto-Link im Footer beider Landingpages und
// der Quiz-Seite sowie in Impressum und Datenschutzerklaerung.
//
// Bleibt der Wert leer, zeigt der Footer stattdessen den Hinweistext unten,
// ohne Link — so geht nichts Totes live.
export const kontaktMail = "riesekirch@gmail.com";

export const kontaktHinweis = "E-Mail folgt in Kürze";

export const kontaktLabel = "Level Up Ladies";

/**
 * Ein Footer-Eintrag im Format, das die Footer-Komponenten erwarten.
 * Ohne gesetzte Adresse fehlt href — die Komponente rendert dann reinen Text.
 */
export const kontaktEintrag = kontaktMail
  ? { label: kontaktLabel, value: kontaktMail, href: `mailto:${kontaktMail}` }
  : { label: kontaktLabel, value: kontaktHinweis, href: null };
