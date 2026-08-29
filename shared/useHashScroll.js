import { useEffect } from "react";

/**
 * Springt zu dem Abschnitt, der in der URL steht (.../#ueber-uns).
 *
 * Warum das noetig ist: Die Seiten werden erst im Browser aufgebaut. Wenn die
 * index.html geladen wird, gibt es den Zielabschnitt noch gar nicht — der
 * Browser kann den Anker also nicht finden und bleibt oben stehen. Geteilte
 * Links landeten deshalb immer am Seitenanfang.
 *
 * Der Hook deckt drei Faelle ab:
 *   1. Seitenaufruf mit Anker in der Adresszeile
 *   2. Wechsel des Ankers ohne Neuladen (hashchange), etwa beim Klick auf
 *      einen zweiten Footer-Link oder ueber die Zurueck-Taste
 *   3. Layout, das durch spaet geladene Bilder und Schriften nachrutscht
 *
 * Ein Klick auf einen Anker innerhalb der fertigen Seite funktioniert auch
 * ohne diesen Hook — das erledigt der Browser dann selbst.
 */
export function useHashScroll() {
  useEffect(() => {
    // Bei einem Anker soll der Browser nicht zusaetzlich die alte
    // Scrollposition wiederherstellen, sonst gewinnt mal die eine,
    // mal die andere Seite.
    const vorherigeWiederherstellung =
      "scrollRestoration" in window.history ? window.history.scrollRestoration : null;

    let timer;
    let raf;

    const zielAusUrl = () =>
      decodeURIComponent(window.location.hash.replace("#", "")).trim();

    const springen = (sanft) => {
      const id = zielAusUrl();
      if (!id) return;
      const ziel = document.getElementById(id);
      if (!ziel) return;
      // Position selbst ausrechnen statt scrollIntoView: das Ergebnis ist
      // unabhaengig davon, welches Element der Browser als Scroll-Container
      // betrachtet.
      const y = ziel.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: sanft ? "smooth" : "auto" });
    };

    const starten = () => {
      if (!zielAusUrl()) return;

      if (vorherigeWiederherstellung !== null) {
        window.history.scrollRestoration = "manual";
      }

      const sanft = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let versuch = 0;

      // Mehrfach nachfassen: der Abschnitt kann eine Renderrunde spaeter da
      // sein, und Bilder koennen das Layout danach noch verschieben.
      const nachfassen = () => {
        springen(versuch === 0 && sanft);
        if (versuch++ < 6) {
          timer = setTimeout(nachfassen, 180);
        } else if (vorherigeWiederherstellung !== null) {
          // Fertig — ab jetzt darf der Browser Scrollpositionen wieder selbst
          // merken, etwa fuer die Zurueck-Taste.
          window.history.scrollRestoration = vorherigeWiederherstellung;
        }
      };

      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(nachfassen);
      });
    };

    starten();

    const beiHashwechsel = () => springen(true);
    window.addEventListener("hashchange", beiHashwechsel);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("hashchange", beiHashwechsel);
      if (vorherigeWiederherstellung !== null) {
        window.history.scrollRestoration = vorherigeWiederherstellung;
      }
    };
  }, []);
}
