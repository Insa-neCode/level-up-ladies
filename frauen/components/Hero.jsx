import Button from "./Button.jsx";
import Marker from "./Marker.jsx";
import Tape from "./Tape.jsx";
import { hero, signupHref } from "../content.js";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-ink pt-10 pb-16 md:min-h-screen md:pt-14 md:pb-20"
    >
      {/* Hintergrund: Raster + Neon-Schleier */}
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full bg-magenta/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-magenta/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-[1.4fr_0.6fr] md:items-center md:gap-8 md:px-10">
        {/* ---------------- Left: Titel ---------------- */}
        <div className="reveal relative">
          <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta">
            <span className="glow-text">{hero.issue}</span>
            <span aria-hidden="true" className="h-px w-10 bg-magenta/60" />
            <span className="text-white/70">{hero.season}</span>
          </p>

          {/* Scribble oben */}
          <Marker
            underline
            className="absolute right-0 -top-3 hidden rotate-[-6deg] text-2xl sm:block lg:text-3xl"
          >
            {hero.scribbles.topRight}
          </Marker>

          <h1 className="font-display text-[52px] leading-[0.82] font-black italic tracking-[-0.02em] text-white glow-text-white sm:text-[76px] md:text-[96px] lg:text-[128px] xl:text-[146px]">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Scribble mit Pfeil zur Headline */}
          <Marker
            arrow="down-left"
            className="absolute right-4 top-[48%] hidden text-xl leading-tight sm:block lg:text-2xl"
          >
            {hero.scribbles.midRight}
          </Marker>

          {/* Magenta-Banner wie auf der Titelfolie */}
          <div className="relative mt-7 inline-block">
            <p
              className="bg-magenta px-6 py-4 text-[19px] leading-tight font-bold text-white glow-box sm:text-[26px] md:text-[30px]"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 78%, 92% 100%, 4% 100%, 0 84%)",
              }}
            >
              {hero.banner.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <Marker
              arrow="up-right"
              className="absolute -left-4 top-full mt-2 hidden text-xl sm:block"
            >
              {hero.scribbles.bottomLeft}
            </Marker>
          </div>

          <p className="mt-8 max-w-md text-base leading-relaxed text-dim sm:mt-24 md:text-lg">
            {hero.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={signupHref} pulse className="w-full sm:w-auto">
              {hero.ctaPrimary}
            </Button>
            <Button variant="outline" scrollTo="#workshop" className="w-full sm:w-auto">
              {hero.ctaSecondary}
            </Button>
          </div>

          {/* Leadmagnet: kostenloser Selbsttest, ohne Anmeldung */}
          {hero.quizLink && (
            <a
              href={`${import.meta.env.BASE_URL}${hero.quizLink.to}`}
              className="mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-magenta underline decoration-magenta/40 underline-offset-[6px] transition-colors duration-300 hover:text-magenta-soft hover:decoration-magenta"
            >
              {hero.quizLink.label}
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-faint md:mt-14">
            {hero.byline}
          </p>
        </div>

        {/* ---------------- Right: Porträt ---------------- */}
        <div className="reveal relative mx-auto w-full max-w-[250px] md:ml-auto md:mr-0 md:max-w-[340px]">
          <Tape className="-left-4 -top-3 z-20" rotate={-14} width={120} />
          <Tape className="-right-5 bottom-8 z-20" rotate={-16} width={100} />

          <div className="relative border border-magenta/50 glow-box">
            <img
              src={`${import.meta.env.BASE_URL}frauen/hero-portrait.png`}
              alt={hero.portraitAlt}
              className="block h-auto w-full"
              width="324"
              height="687"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent"
            />
          </div>

          {/* Scribble nur auf Mobile, wo die absoluten Marker ausgeblendet sind */}
          <Marker underline className="mt-5 block text-center text-2xl sm:hidden">
            {hero.scribbles.topRight}
          </Marker>
        </div>
      </div>
    </section>
  );
}
