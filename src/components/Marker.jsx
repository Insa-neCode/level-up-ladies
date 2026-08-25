/**
 * Handschriftliches Marker-Scribble in Neon-Magenta — wie die Anmerkungen
 * auf den Folien. Optional mit Pfeil oder Unterstrich.
 */
export default function Marker({
  children,
  arrow = null, // "down-left" | "down-right" | "up-right" | null
  underline = false,
  className = "",
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-marker text-magenta glow-text ${className}`}
    >
      <span className="relative inline-block leading-[0.95]">
        {children}
        {underline && (
          <svg
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            className="absolute -bottom-1 left-0 h-2.5 w-full"
          >
            <path
              d="M3 8 C 45 2, 92 11, 140 4 S 190 6, 197 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      {arrow && <ScribbleArrow direction={arrow} />}
    </span>
  );
}

function ScribbleArrow({ direction }) {
  const rotation = {
    "down-left": "rotate(200deg)",
    "down-right": "rotate(-20deg)",
    "up-right": "rotate(-70deg)",
    right: "rotate(0deg)",
  }[direction];

  return (
    <svg
      viewBox="0 0 90 60"
      className="mt-1 block h-8 w-12"
      style={{ transform: rotation }}
    >
      <path
        d="M4 44 C 22 40, 44 30, 66 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M50 12 L70 11 L67 31"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
