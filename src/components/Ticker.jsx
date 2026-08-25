import { useContent } from "../data/ContentContext.jsx";

/**
 * Endlos laufendes Laufband wie der Titelbalken eines Magazins.
 * Die Liste wird verdoppelt, damit der Loop nahtlos ist.
 */
export default function Ticker({ reverse = false, tone = "magenta" }) {
  const { ticker } = useContent();
  const items = [...ticker, ...ticker];
  const bar =
    tone === "magenta"
      ? "border-y border-magenta/40 bg-magenta/10 text-magenta"
      : "border-y border-white/15 bg-white text-black";

  return (
    <div className={`relative overflow-hidden py-2.5 ${bar}`} aria-hidden="true">
      <div
        className={`flex w-max gap-8 whitespace-nowrap ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-[11px] font-medium uppercase tracking-[0.32em]"
          >
            {item}
            <span className={tone === "magenta" ? "text-magenta-soft" : "text-magenta"}>★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
