/**
 * Schräg aufgeklebtes Label in Neon-Magenta ("BONUS", "PRO-LEVEL", …).
 */
export default function Sticker({ children, rotate = -6, tone = "solid", className = "" }) {
  const styles =
    tone === "solid"
      ? "bg-magenta text-black glow-box-sm"
      : "border-2 border-magenta text-magenta glow-box-sm bg-ink";

  return (
    <span
      aria-hidden="true"
      className={`inline-block px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${styles} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
