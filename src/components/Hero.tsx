import Image from 'next/image';

type HeroContent = {
  badge?: string;
  headline?: string;
  subheadline?: string;
  ctaPrimary?: { label?: string; href?: string };
  ctaSecondary?: { label?: string; href?: string };
  bullets?: string[];
  portraitCaptionTitle?: string;
  portraitCaptionBody?: string;
};

const defaultHero: Required<Pick<
  HeroContent,
  'badge' | 'headline' | 'subheadline' | 'ctaPrimary' | 'ctaSecondary' | 'bullets' | 'portraitCaptionTitle' | 'portraitCaptionBody'
>> = {
  badge: 'The Practical AI‑Augmented UX Designer',
  headline: 'UX Designer building practical, user‑focused digital solutions',
  subheadline:
    'I combine UX research, clear communication, and AI‑assisted development workflows to turn messy problems into usable products.',
  ctaPrimary: { label: 'View my work', href: '#projects' },
  ctaSecondary: { label: 'Contact me', href: '#contact' },
  bullets: [
    'UX thinking: research, journeys, wireframes, prototypes, and clear decisions.',
    'AI‑assisted workflow: faster iteration from insight → prototype → build (Cursor + Claude).',
    'Practical, real‑world communication (retail + teaching background).',
  ],
  portraitCaptionTitle: 'Alexander B. Henriksen',
  portraitCaptionBody: 'UX design is not about what the designer prefers, but about what the user needs.',
};

export function Hero({ content }: { content?: HeroContent }) {
  const c: HeroContent = {
    ...defaultHero,
    ...content,
    ctaPrimary: { ...defaultHero.ctaPrimary, ...(content?.ctaPrimary || {}) },
    ctaSecondary: { ...defaultHero.ctaSecondary, ...(content?.ctaSecondary || {}) },
    bullets: content?.bullets?.length ? content.bullets : defaultHero.bullets,
  };

  return (
    <section className="container mx-auto px-4 h-full relative">
      <div className="h-full flex flex-col items-center justify-center gap-10 py-8 md:flex-row md:items-center md:gap-14 md:py-12">
        <div className="flex-1 min-w-0 text-center md:text-left">
          <p className="paper-pill accent inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm text-black/75">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
            {c.badge}
          </p>

          <h1
            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.03] tracking-tight text-[var(--foreground)]"
            style={{ fontFamily: 'var(--font-display), serif' }}
          >
            {c.headline}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {c.subheadline}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={c.ctaPrimary?.href || defaultHero.ctaPrimary.href}
              className="paper-button inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform"
            >
              {c.ctaPrimary?.label || defaultHero.ctaPrimary.label}
            </a>
            <a
              href={c.ctaSecondary?.href || defaultHero.ctaSecondary.href}
              className="paper-button inline-flex items-center justify-center rounded-2xl bg-secondary/20 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform"
            >
              {c.ctaSecondary?.label || defaultHero.ctaSecondary.label}
            </a>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-black/70 max-w-2xl mx-auto md:mx-0">
            {(c.bullets || []).map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex-shrink-0 w-full max-w-[18rem] sm:max-w-[22rem] aspect-[3/4] md:w-[36%] md:max-w-none rotate-[-2deg]">
          {/* Tape strips (hero only) */}
          <div className="paper-tape absolute -top-3 left-7 z-20 h-6 w-32 rotate-[-10deg] opacity-95" aria-hidden />
          <div className="paper-tape absolute -top-4 right-8 z-20 h-6 w-36 rotate-[12deg] opacity-90" aria-hidden />

          <div className="paper-card relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/hero-portrait.png"
              alt="Portrait"
              fill
              className="object-contain object-top"
              priority
              sizes="(max-width: 768px) 100vw, 36vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-[32%] sm:h-[30%] flex items-center justify-center px-4 sm:px-5 py-3 sm:py-4 text-center border-t-2 border-[var(--border)] bg-[var(--muted-2)]">
              <div className="flex-1 flex flex-col items-center justify-center gap-2 rotate-[1deg]">
                <p className="text-sm sm:text-base font-semibold text-[var(--foreground)]">{c.portraitCaptionTitle}</p>
                <p className="text-sm sm:text-base text-black/70 leading-snug">{c.portraitCaptionBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
