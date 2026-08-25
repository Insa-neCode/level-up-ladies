/**
 * Ein Button ohne Ziel bleibt ein <button> — Links kommen spaeter dazu.
 * Sobald in content.js ein href steht, wird daraus automatisch ein <a>.
 * scrollTo="#id" scrollt innerhalb der Seite.
 */
const VARIANTS = {
  primary:
    "bg-magenta text-white glow-box hover:bg-white hover:text-magenta hover:shadow-[0_0_30px_rgba(253,5,212,0.8)]",
  outline:
    "bg-transparent border-2 border-magenta text-magenta glow-box-sm hover:bg-magenta hover:text-white",
  light:
    "bg-white text-magenta hover:bg-magenta hover:text-white hover:shadow-[0_0_34px_rgba(255,255,255,0.5)]",
};

export default function Button({
  children,
  href = null,
  scrollTo = null,
  variant = "primary",
  size = "base",
  pulse = false,
  className = "",
}) {
  const sizing =
    size === "lg" ? "px-10 py-4.5 text-base md:text-lg" : "px-8 py-3.5 text-sm md:text-base";

  const classes = [
    "group inline-flex items-center justify-center gap-3 rounded-none font-mono font-semibold uppercase tracking-[0.18em]",
    "transition-all duration-300 ease-out cursor-pointer",
    VARIANTS[variant],
    sizing,
    pulse ? "animate-pulse-glow" : "",
    className,
  ].join(" ");

  const inner = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  if (scrollTo) {
    return (
      <button
        type="button"
        className={classes}
        onClick={() =>
          document.querySelector(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        {inner}
      </button>
    );
  }

  return (
    <button type="button" className={classes}>
      {inner}
    </button>
  );
}
