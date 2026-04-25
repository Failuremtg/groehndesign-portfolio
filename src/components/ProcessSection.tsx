interface ProcessSectionProps {
  id: string;
  content?: {
    headline?: string;
    intro?: string;
    steps?: { title?: string; body?: string }[];
  };
}

const defaultSteps = [
  { title: 'Discover', body: 'Forstå brugerne, konteksten og de reelle constraints.' },
  { title: 'Define', body: 'Afklar problemet, succeskriterierne og hvad vi tester.' },
  { title: 'Design', body: 'Design flows, states og hierarki, der reducerer friktion og forvirring.' },
  { title: 'Prototype', body: 'Byg en testbar prototype (Figma eller frontend) og valider det vigtigste.' },
  { title: 'Test', body: 'Tjek forståelse, edge cases og usability — og iterér hurtigt.' },
  { title: 'Improve', body: 'Forfin med feedback. AI kan øge tempoet, men erstatter ikke UX‑dømmekraft.' },
];

export function ProcessSection({ id, content }: ProcessSectionProps) {
  const steps = content?.steps?.length ? content.steps : defaultSteps;
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl">
        <h2
          className="text-2xl font-bold md:text-3xl text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          {content?.headline || 'Proces'}
        </h2>
        <p className="mt-2 text-[var(--text-muted)] leading-relaxed">
          {content?.intro ||
            'Discover → Define → Design → Prototype → Test → Improve. AI‑værktøjer kan gøre ideation, kodning og iteration hurtigere — men beslutninger skal stadig være forankret i brugerbehov.'}
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s, idx) => (
          <article key={`${s.title || 'step'}-${idx}`} className="paper-card rounded-3xl p-6 md:p-7">
            <h3 className="text-base font-semibold text-[var(--foreground)]">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

