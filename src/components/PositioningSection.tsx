interface PositioningSectionProps {
  id: string;
}

const cards = [
  {
    title: 'UX thinking',
    body: 'Research, personas, user journeys, wireframes, prototypes — and clear reasoning behind decisions.',
    accentClass: 'accent-purple',
  },
  {
    title: 'AI-assisted workflow',
    body: 'Cursor + Claude help me move faster from idea → prototype → working UI, while UX decisions stay grounded in user needs.',
    accentClass: 'accent-gold',
  },
  {
    title: 'Real-world understanding',
    body: 'Retail + teaching trained me to communicate clearly, handle constraints, and understand real user behavior.',
    accentClass: 'accent-mint',
  },
];

export function PositioningSection({ id }: PositioningSectionProps) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl">
        <h2
          className="text-2xl font-bold md:text-3xl text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          The Practical AI‑Augmented UX Designer
        </h2>
        <p className="mt-2 text-[var(--text-muted)] leading-relaxed">
          I’m not just a visual designer. I solve real user problems — and use modern AI tools to iterate faster from
          research to prototype to working product.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <article key={c.title} className={`paper-card ${c.accentClass} rounded-3xl p-6 md:p-7`}>
            <h3 className="text-base font-semibold text-[var(--foreground)]">{c.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

