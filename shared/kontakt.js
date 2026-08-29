// Gemeinsame Kontaktadresse fuer Level Up Ladies.
//
// HIER EINTRAGEN, sobald das Postfach steht — mehr ist nicht zu tun.
// Die Adresse erscheint dann automatisch als klickbarer Mailto-Link im Footer
// beider Landingpages und der Quiz-Seite.
//
// Solange der Wert leer ist, zeigt der Footer stattdessen den Hinweistext
// unten, ohne Link. So geht nichts Totes live.
//
// NICHT betroffen: Impressum und Datenschutzerklaerung. Dort verlangt das
// Gesetz eine Adresse, unter der ihr tatsaechlich erreichbar seid — die wird
// erst umgestellt, wenn info@ wirklich Mails empfaengt.
export const kontaktMail = "";

export const kontaktHinweis = "E-Mail folgt in Kürze";

export const kontaktLabel = "Level Up Ladies";

/**
 * Ein Footer-Eintrag im Format, das die Footer-Komponenten erwarten.
 * Ohne gesetzte Adresse fehlt href — die Komponente rendert dann reinen Text.
 */
export const kontaktEintrag = kontaktMail
  ? { label: kontaktLabel, value: kontaktMail, href: `mailto:${kontaktMail}` }
  : { label: kontaktLabel, value: kontaktHinweis, href: null };
