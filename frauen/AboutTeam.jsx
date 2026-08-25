import { useState } from "react";
import SectionHeading from "../src/components/SectionHeading.jsx";
import Marker from "../src/components/Marker.jsx";
import Tape from "../src/components/Tape.jsx";
import Sticker from "../src/components/Sticker.jsx";
import { useContent } from "../src/data/ContentContext.jsx";

/**
 * "Wer sind wir?" — die Variante fuer zwei Personen (Player 001 + Player 002).
 * Design identisch zu About.jsx, nur zweispaltig statt Foto-neben-Text.
 *
 * Die Fotos liegen unter public/<photo>. Fehlt eine Datei, faellt die Karte
 * automatisch auf den Neon-Platzhalter zurueck — die Seite bleibt heil.
 */
export default function AboutTeam() {
  const { about } = useContent();

  return (
    <section id="ueber-uns" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="reveal max-w-3xl">
          <SectionHeading kicker={about.kicker} tone="dark">
            {about.headline}
          </SectionHeading>
          <p className="mt-7 text-base leading-relaxed text-black/85 md:text-[17px]">
            {about.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-2 md:gap-12">
          {about.people.map((person, i) => (
            <Person key={person.tag} person={person} index={i} />
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap items-end gap-6 border-t border-black/10 pt-10">
          <p className="font-display text-4xl font-black italic text-magenta md:text-5xl">
            {about.accent}
          </p>
          <Marker className="text-2xl md:text-3xl" underline>
            {about.scribble}
          </Marker>
        </div>
      </div>

      {/* Abschluss-Band wie im Deck: schwarze Didone auf Weiss */}
      <p className="reveal mx-auto mt-16 max-w-6xl px-5 font-display text-[26px] leading-[1.05] font-black text-black md:mt-20 md:px-10 md:text-[44px]">
        {about.closing}
      </p>
    </section>
  );
}

function Person({ person, index }) {
  const [hasPhoto, setHasPhoto] = useState(true);
  const even = index % 2 === 0;

  return (
    <article className="reveal relative">
      <div className="relative mx-auto w-full max-w-[340px] md:max-w-none">
        <Tape
          className={`z-20 ${even ? "-left-5 -top-4" : "-right-5 -top-4"}`}
          rotate={even ? -12 : 11}
          width={130}
        />
        <Tape
          className={`z-20 ${even ? "-right-4 -bottom-4" : "-left-4 -bottom-4"}`}
          rotate={even ? -9 : 9}
          width={110}
        />

        <div className="relative aspect-4/5 w-full overflow-hidden bg-black">
          {hasPhoto && person.photo ? (
            <img
              src={`${import.meta.env.BASE_URL}${person.photo}`}
              alt={person.photoAlt}
              onError={() => setHasPhoto(false)}
              className="h-full w-full object-cover grayscale contrast-115"
              style={{ objectPosition: person.photoPosition ?? "50% 20%" }}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-magenta/40 bg-linear-to-br from-black to-[#1a1a1f]">
              <span className="font-display text-6xl italic text-magenta glow-text">
                {person.initials}
              </span>
              <span className="px-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                {person.photoLabel}
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

        <div className={`absolute -bottom-4 z-20 ${even ? "left-6" : "right-6"}`}>
          <Sticker rotate={even ? -7 : 6}>{person.tag}</Sticker>
        </div>
      </div>

      <h3 className="mt-10 font-display text-[34px] leading-none font-black italic text-black md:text-[44px]">
        {person.name}
      </h3>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-magenta">
        {person.role}
      </p>

      <div className="mt-6 space-y-4">
        {person.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="text-base leading-relaxed text-black/85">
            {p}
          </p>
        ))}
      </div>

      {person.quote && (
        <p className="mt-7 border-l-4 border-magenta pl-5 font-display text-xl leading-snug font-bold italic text-black md:text-2xl">
          {person.quote}
        </p>
      )}
    </article>
  );
}
