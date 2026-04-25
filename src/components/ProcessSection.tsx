interface ProcessSectionProps {
  id: string;
}

const steps = [
  { title: 'Discover', body: 'Understand the users, the context, and the real constraints.' },
  { title: 'Define', body: 'Clarify the problem, success criteria, and what we’re testing.' },
  { title: 'Design', body: 'Create flows, states, and hierarchy that reduce friction and confusion.' },
  { title: 'Prototype', body: 'Build a testable prototype (Figma or frontend) to validate what matters.' },
  { title: 'Test', body: 'Check comprehension, edge cases, and usability — iterate quickly.' },
  { title: 'Improve', body: 'Refine based on feedback. AI helps speed up iteration, not replace UX judgment.' },
];

export function ProcessSection({ id }: ProcessSectionProps) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl">
        <h2
          className="text-2xl font-bold md:text-3xl text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Process
        </h2>
        <p className="mt-2 text-[var(--text-muted)] leading-relaxed">
          Discover → Define → Design → Prototype → Test → Improve. AI tools speed up ideation, coding, and iteration —
          but decisions stay grounded in user needs.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <article key={s.title} className="paper-card rounded-3xl p-6 md:p-7">
            <h3 className="text-base font-semibold text-[var(--foreground)]">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

