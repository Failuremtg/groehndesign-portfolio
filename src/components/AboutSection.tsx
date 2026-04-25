import { ProgramLogos } from '@/components/ProgramLogos';

interface AboutSectionProps {
  id: string;
  content?: {
    headline?: string;
    name?: string;
    meta?: string;
    tagline?: string;
    cards?: { title?: string; paragraphs?: string[]; highlight?: string }[];
  };
}

export function AboutSection({ id, content }: AboutSectionProps) {
  const cards = content?.cards || [];

  return (
    <section
      id={id}
      className="flex flex-col justify-center container mx-auto px-4 py-14 md:py-20 md:min-h-screen"
    >
      <header className="text-center mb-12 md:mb-16">
        <h2
          className="text-3xl font-bold md:text-4xl text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          {content?.headline || 'About'}
        </h2>
        <p className="mt-2 text-xl text-[var(--foreground)]">{content?.name || 'Alexander'}</p>
        <p className="mt-2 text-sm md:text-base text-[var(--text-subtle)] max-w-xl mx-auto">
          {content?.meta || 'UX Design student @ EK Lyngby · Graduating summer 2026'}
        </p>
        <p className="mt-2 text-base md:text-lg text-[var(--text-muted)] font-semibold">
          {content?.tagline || 'UX Designer / AI Product Builder'}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
        {/* Row 1 left: The UX me (2 cols) */}
        <article className="paper-card scrap-card md:col-span-2 rounded-3xl p-6 md:p-7 flex flex-col min-h-[260px] md:min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3 flex-shrink-0">
            {cards[0]?.title || 'UX & Product Mindset'}
          </h3>
          <div className="text-sm text-[var(--text-muted)] leading-relaxed space-y-3 min-h-0 flex-1 overflow-y-auto about-card-scroll pr-1">
            {(cards[0]?.paragraphs?.length
              ? cards[0].paragraphs
              : [
                  'I’m Alexander — a multimedia designer focused on UX design and AI‑assisted digital development.',
                  'I design practical solutions based on real user needs: research, journeys, clear states, and decisions you can explain.',
                  'I also build. With AI‑assisted workflows (Cursor + Claude), I move faster from insight → prototype → working UI so teams can test direction earlier.',
                  'My background in retail and teaching gives me strong communication skills and a practical understanding of real users.',
                ]
            ).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </article>

        {/* Row 1 right: Business me (1 col) */}
        <article className="paper-card scrap-card scrap-tilt-right rounded-3xl p-6 md:p-7 flex flex-col min-h-[260px] md:min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-4-1V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 10a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3 flex-shrink-0">
            {cards[1]?.title || 'Entrepreneurial Experience'}
          </h3>
          <div className="text-sm text-[var(--text-muted)] leading-relaxed space-y-3 min-h-0 flex-1 overflow-y-auto about-card-scroll pr-1">
            {(cards[1]?.paragraphs?.length
              ? cards[1].paragraphs
              : [
                  'Alongside my studies, I run a small 3D printing business where I design and sell custom products at markets and on a made-to-order basis.',
                  'It keeps my product instincts sharp: pricing, feedback loops, constraints, and making something real that people actually choose to buy.',
                ]
            ).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </article>

        {/* Row 2 left: Programs I work with (2 cols) */}
        <article className="paper-card scrap-card md:col-span-2 rounded-3xl p-6 md:p-7 flex flex-col min-h-[260px] md:min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 flex-shrink-0">
            {cards[2]?.title || 'Programs I work with'}
          </h3>
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="flex-1 min-h-0">
              <ProgramLogos />
            </div>
          </div>
        </article>

        {/* Row 2 right: The Private me (1 col) */}
        <article className="paper-card scrap-card scrap-tilt-right rounded-3xl p-6 md:p-7 flex flex-col min-h-[260px] md:min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3 flex-shrink-0">
            {cards[3]?.title || 'Personal Profile'}
          </h3>
          <div className="text-sm text-[var(--text-muted)] leading-relaxed space-y-3 min-h-0 flex-1 overflow-y-auto about-card-scroll pr-1">
            {(cards[3]?.paragraphs?.length
              ? cards[3].paragraphs
              : [
                  'Outside of work, I’m into video games and collectible card games (especially Magic: The Gathering).',
                  'I’m happiest when I’m grounded—spending time with my wife and stepson.',
                  'We share the nerdy life together: board games, video games, and small projects.',
                ]
            ).map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="text-[var(--foreground)] font-medium pt-3 border-t border-[var(--border)]">
              {cards[3]?.highlight || 'I’m a nerd at heart—and I’m proud of it.'}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
