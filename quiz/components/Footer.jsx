import { footer } from "../content.js";

/**
 * Noch ohne Links: Die Eintraege stehen als Text da, bis die Ziele feststehen.
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 pb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-magenta/12 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <p className="reveal font-display text-[34px] leading-[0.95] font-black italic text-white glow-text-white md:text-[52px]">
          {footer.brand}
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-magenta glow-text">
          {footer.tagline}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-hair pt-10 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-magenta">
              {footer.linksHeadline}
            </p>
            <ul className="mt-4 space-y-2.5">
              {footer.links.map((item) => (
                <li key={item.label} className="text-sm text-white/75">
                  {item.to ? (
                    <a href={item.to} className="transition-colors hover:text-magenta">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white/45">{item.label} (Link folgt)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-magenta">
              {footer.contactHeadline}
            </p>
            <ul className="mt-4 space-y-2.5">
              {footer.contact.map((item) => (
                <li key={item.label} className="text-sm text-white/75">
                  <span className="block">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-magenta transition-colors hover:text-magenta-soft"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white/45">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-magenta">
              {footer.socialHeadline}
            </p>
            <ul className="mt-4 space-y-2.5">
              {footer.social.map((item) => (
                <li key={item.label} className="text-sm text-white/75">
                  {item.href?.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-magenta"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white/45">{item.label} (Link folgt)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Querverweis auf die jeweils andere Landingpage */}
        {/* Querverweise: andere Landingpage und der kostenlose Level-Check */}
        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          {footer.crossLink && (
            <a
              href={`${import.meta.env.BASE_URL}${footer.crossLink.to}`}
              className="inline-flex items-center gap-3 border border-magenta/50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-magenta transition-colors duration-300 hover:bg-magenta hover:text-white"
            >
              {footer.crossLink.label}
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}

          {footer.quizLink && (
            <a
              href={`${import.meta.env.BASE_URL}${footer.quizLink.to}`}
              className="inline-flex items-center gap-3 border border-magenta bg-magenta/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-magenta transition-colors duration-300 glow-box-sm hover:bg-magenta hover:text-white"
            >
              {footer.quizLink.label}
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>

        <p className="mt-12 font-marker text-2xl text-magenta glow-text md:text-3xl">
          {footer.outro}
        </p>

        <div className="mt-8 flex flex-col gap-2 border-t border-hair pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-5">
            {footer.legal && (
              <a
                href={`${import.meta.env.BASE_URL}${footer.legal.to}`}
                className="uppercase tracking-[0.2em] text-white/75 underline-offset-4 transition-colors duration-300 hover:text-magenta hover:underline"
              >
                {footer.legal.label}
              </a>
            )}
            <p>{footer.madeWith}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
