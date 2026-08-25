/**
 * Abstract Neon Graphic als Platzhalter fuer das Hero-Bild.
 * Ersetzbar durch ein Foto: <img src="/hero.jpg" ... /> statt dieser Komponente.
 */
export default function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 400 460"
      role="img"
      aria-label="Abstrakte Neon-Grafik: geometrische Linien und Klammern in Pink"
      className="h-auto w-full max-w-[240px] sm:max-w-[320px] md:max-w-[420px]"
    >
      <defs>
        <linearGradient id="neonFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff006e" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff006e" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Raster */}
      <g stroke="#555555" strokeWidth="1" opacity="0.35">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`h${i}`} x1="20" y1={40 + i * 62} x2="380" y2={40 + i * 62} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`v${i}`} x1={40 + i * 80} y1="20" x2={40 + i * 80} y2="440" />
        ))}
      </g>

      {/* Grosse Klammer */}
      <path
        d="M120 60 L60 60 L60 400 L120 400"
        fill="none"
        stroke="#ff006e"
        strokeWidth="6"
      />
      <path
        d="M280 60 L340 60 L340 400 L280 400"
        fill="none"
        stroke="#ff006e"
        strokeWidth="6"
      />

      {/* Aufsteigende Balken: Level Up */}
      <rect x="110" y="300" width="42" height="100" fill="url(#neonFade)" />
      <rect x="168" y="230" width="42" height="170" fill="url(#neonFade)" />
      <rect x="226" y="140" width="42" height="260" fill="#ff006e" />

      {/* Pfeil nach oben rechts */}
      <path
        d="M110 250 L180 190 L230 215 L310 110"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
      />
      <path d="M280 110 L310 110 L310 140" fill="none" stroke="#ffffff" strokeWidth="4" />

      <circle cx="310" cy="110" r="9" fill="#ff006e" />
    </svg>
  );
}
