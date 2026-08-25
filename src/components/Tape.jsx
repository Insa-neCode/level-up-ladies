/**
 * Rosa Klebestreifen mit gerissenen Kanten — das wiederkehrende Deko-Element
 * der Präsentation. Rein dekorativ.
 */
export default function Tape({ className = "", rotate = -8, width = 110 }) {
  return (
    <span
      aria-hidden="true"
      className={`tape pointer-events-none absolute block h-7 ${className}`}
      style={{ width: `${width}px`, transform: `rotate(${rotate}deg)` }}
    />
  );
}
