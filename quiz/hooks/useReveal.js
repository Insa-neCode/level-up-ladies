import { useEffect } from "react";

/**
 * Dezenter Fade-in: Elemente mit .reveal bekommen .is-visible,
 * sobald sie den Viewport erreichen.
 *
 * Der unsichtbare Startzustand wird erst durch .js-reveal am <html> aktiviert —
 * ohne laufendes JS bleibt die Seite vollstaendig lesbar.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    root.classList.add("js-reveal");

    // Alles, was beim Laden schon im Viewport liegt, sofort einblenden.
    const show = (n) => n.classList.add("is-visible");
    const inViewport = (n) => {
      const r = n.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    nodes.filter(inViewport).forEach(show);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((n) => {
      if (!n.classList.contains("is-visible")) observer.observe(n);
    });

    // Sicherheitsnetz: falls der Observer nie feuert (z. B. Tab war beim Laden
    // im Hintergrund), spaetestens beim Sichtbarwerden nachziehen.
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        nodes.filter(inViewport).forEach(show);
      }
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
      root.classList.remove("js-reveal");
    };
  }, []);
}
