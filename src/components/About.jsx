import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import Marker from "./Marker.jsx";
import Tape from "./Tape.jsx";
import Sticker from "./Sticker.jsx";
import { useContent } from "../data/ContentContext.jsx";

/**
 * Das Foto liegt unter public/insa.jpg. Fehlt es, faellt die Sektion
 * automatisch auf den Platzhalter zurueck — die Seite bleibt heil.
 */
export default function About() {
  const { about } = useContent();
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section id="ueber-mich" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-10">
        {/* Foto mit Klebestreifen */}
        <div className="reveal relative mx-auto w-full max-w-[340px] md:max-w-none">
          <Tape className="-left-5 -top-4 z-20" rotate={-12} width={130} />
          <Tape className="-right-4 -bottom-4 z-20" rotate={-9} width={110} />

          <div className="relative aspect-4/5 w-full overflow-hidden bg-black">
            {hasPhoto ? (
              <img
                src={`${import.meta.env.BASE_URL}insa.jpg`}
                alt={about.photoAlt}
                onError={() => setHasPhoto(false)}
                className="h-full w-full object-cover object-[60%_16%] grayscale contrast-115"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-magenta/40 bg-linear-to-br from-black to-[#1a1a1f]">
                <span className="font-display text-6xl italic text-magenta glow-text">LU</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {about.photoLabel}
                </span>
              </div>
            )}

            {/* Neon-Rahmen ueber dem Foto */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border border-magenta/60 glow-box-sm"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-3 h-10 w-10 border-l-2 border-t-2 border-magenta glow-text"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 right-3 h-10 w-10 border-b-2 border-r-2 border-magenta"
            />
          </div>

          <div className="absolute -bottom-4 left-6 z-20">
            <Sticker rotate={-7}>{about.kicker}</Sticker>
          </div>
        </div>

        {/* Text */}
        <div className="reveal relative">
          <SectionHeading kicker="The Founder" tone="dark">
            {about.headline}
          </SectionHeading>

          <div className="mt-7 space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-black/85 md:text-[17px]">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-end gap-6">
            <p className="font-display text-4xl font-black italic text-magenta md:text-5xl">
              {about.accent}
            </p>
            <Marker className="text-2xl md:text-3xl" underline>
              {about.scribble}
            </Marker>
          </div>
        </div>
      </div>

      {/* Abschluss-Band wie im Deck: schwarze Didone auf Weiss */}
      <p className="reveal mx-auto mt-16 max-w-6xl px-5 font-display text-[26px] leading-[1.05] font-black text-black md:mt-20 md:px-10 md:text-[44px]">
        {about.closing}
      </p>
    </section>
  );
}
