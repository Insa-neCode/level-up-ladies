import { createContext, useContext } from "react";

/**
 * Beide Landingpages teilen sich dieselben Komponenten und unterscheiden sich
 * nur im Inhalt. Der Content wird deshalb nicht mehr direkt importiert, sondern
 * ueber diesen Context hereingereicht:
 *
 *   src/main.jsx     -> src/data/content.js  (Seite 1, Zielgruppe Bildungsbereich)
 *   frauen/main.jsx  -> frauen/content.js     (Seite 2, Zielgruppe: alle Frauen)
 */
const ContentContext = createContext(null);

export function ContentProvider({ value, children }) {
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const value = useContext(ContentContext);
  if (!value) {
    throw new Error("useContent muss innerhalb von <ContentProvider> benutzt werden.");
  }
  return value;
}
