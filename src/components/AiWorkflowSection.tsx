interface AiWorkflowSectionProps {
  id: string;
  content?: {
    headline?: string;
    intro?: string;
    steps?: { title?: string; body?: string }[];
    outro?: string;
  };
}

const defaultSteps = [
  {
    title: '1) Frame the problem',
    body: 'Turn the brief into a clear question, assumptions, and success criteria so the team knows what “good” looks like.',
  },
  {
    title: '2) Explore with AI (fast, not final)',
    body: 'Use Claude/Cursor to generate options, edge cases, microcopy ideas, and alternative flows—then apply design judgment.',
  },
  {
    title: '3) Prototype what matters',
    body: 'Build a testable prototype (Figma or frontend) to validate the riskiest parts: comprehension, friction, and trust.',
  },
  {
    title: '4) Iterate with feedback loops',
    body: 'Run quick checks, refine hierarchy and states, and improve clarity. AI helps speed up iteration, not replace decisions.',
  },
];

export function AiWorkflowSection({ id, content }: AiWorkflowSectionProps) {
  const steps = content?.steps?.length ? content.steps : defaultSteps;

  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display), serif' }}>
          {content?.headline || 'My AI workflow'}
        </h2>
        <p className="mt-2 text-black/70 leading-relaxed">
          {content?.intro ||
            'I use AI as a practical accelerator: to explore options quickly, prototype faster, and improve quality through more iterations.'}
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((s, idx) => (
          <article
            key={s.title || 'step'}
            className={[
              'paper-card scrap-card rounded-3xl p-6 md:p-7',
              idx % 4 === 0 ? 'accent-blue' : '',
              idx % 4 === 1 ? 'accent-mint' : '',
              idx % 4 === 2 ? 'accent-purple' : '',
              idx % 4 === 3 ? 'accent-gold' : '',
              idx % 2 === 1 ? 'scrap-tilt-right' : '',
            ].join(' ')}
          >
            <h3 className="text-base font-semibold text-[var(--foreground)]">{s.title}</h3>
            <p className="mt-2 text-sm text-black/70 leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 paper-card-2 accent-purple rounded-3xl p-6 md:p-7">
        <p className="text-sm text-black/70 leading-relaxed">
          <span className="font-semibold text-[var(--foreground)]">What you get:</span>{' '}
          {content?.outro ||
            'faster prototyping, clearer UX writing, better edge-case coverage, and a tighter design→build handoff.'}
        </p>
      </div>
    </section>
  );
}

