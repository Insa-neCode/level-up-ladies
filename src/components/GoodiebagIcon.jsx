/**
 * Handgezeichnete Goodiebag im Marker-Stil — dieselbe Neon-Magenta-Optik wie
 * die Scribbles. Die Linien sind absichtlich schief, die Kanten wellig und
 * einzelne Striche doppelt gezogen, damit es nach Filzstift aussieht und
 * nicht nach Icon-Set.
 */
export default function GoodiebagIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 72 80"
      fill="none"
      aria-hidden="true"
      className={`text-magenta [filter:drop-shadow(0_0_5px_rgba(253,5,212,0.85))_drop-shadow(0_0_16px_rgba(253,5,212,0.5))] ${className}`}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Henkel: eine grosse Marker-Schlaufe, hinten ein blasserer Strich */}
        <path
          d="M24.5 27.5 C 22.5 11.5, 28.5 4.5, 36.5 4.8 C 44.8 5.1, 49.5 12, 47.5 27"
          strokeWidth="3"
        />
        <path
          d="M29 26.5 C 27.8 15.5, 31.5 10.5, 36.4 10.6 C 41.4 10.7, 44.2 15.8, 43.2 26"
          strokeWidth="1.7"
          opacity="0.45"
        />

        {/* Tuete: schiefe Seiten, welliger Boden */}
        <path
          d="M12.8 26.6 C 27 24.6, 46 24.4, 59.8 26.2
             C 58.4 40, 57.2 55.5, 55.6 68.4
             C 55.2 71, 53.4 72.4, 50.8 72.4
             C 42 73, 29 72.6, 21.4 72.2
             C 18.8 72, 17.4 70.6, 17.1 68.2
             C 15.9 55, 14.2 40, 12.8 26.6 Z"
          strokeWidth="3"
        />
        {/* zweiter, versetzter Strich an der Oberkante — Filzstift-Effekt */}
        <path
          d="M16.5 30.4 C 27 28.9, 38 28.7, 47 29.4"
          strokeWidth="1.7"
          opacity="0.4"
        />

        {/* Stern auf der Tuete, bewusst krumm */}
        <path
          d="M36.2 40.5 L 39.4 47.6 L 47 48.6 L 41.4 53.9 L 43 61.4 L 36.2 57.6 L 29.4 61.2 L 30.8 53.8 L 25.4 48.4 L 33 47.5 Z"
          strokeWidth="2.4"
        />

        {/* Funkeln oben rechts */}
        <path
          d="M63 9 C 63.6 13.2, 64.4 14.4, 68.4 15.2
             C 64.4 16, 63.6 17.2, 63 21.4
             C 62.4 17.2, 61.6 16, 57.6 15.2
             C 61.6 14.4, 62.4 13.2, 63 9 Z"
          strokeWidth="2.2"
        />
      </g>
    </svg>
  );
}
