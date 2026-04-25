interface StrengthsSectionProps {
  id: string;
  content?: {
    headline?: string;
    intro?: string;
    items?: { title?: string; body?: string }[];
    summary?: string;
  };
}

const defaultStrengths = [
  {
    title: 'UX grounded in real user behavior',
    body: 'I use research, journey mapping, and clear interaction states to reduce friction and help people complete tasks confidently.',
  },
  {
    title: 'AI-assisted prototyping & iteration',
    body: 'I use tools like Cursor and Claude to explore ideas, generate quick prototypes, and iterate faster—without losing product judgment.',
  },
  {
    title: 'Frontend fluency',
    body: 'React / Next.js / Tailwind lets me collaborate closely with developers, design within constraints, and ship believable prototypes.',
  },
  {
    title: 'Business & communication background',
    body: 'Teaching and retail trained me to explain complex topics clearly, align stakeholders, and make practical trade-offs.',
  },
];

export function StrengthsSection({ id, content }: StrengthsSectionProps) {
  const items = content?.items?.length ? content.items : defaultStrengths;

  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display), serif' }}>
          {content?.headline || 'What I bring'}
        </h2>
        <p className="mt-2 text-black/70 leading-relaxed">
          {content?.intro ||
            'I’m not just making screens—I’m helping teams make better decisions, validate ideas quickly, and ship experiences that feel easy.'}
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((s, idx) => (
          <article
            key={s.title || 'item'}
            className={[
              'paper-card scrap-card rounded-3xl p-6 md:p-7',
              idx % 4 === 0 ? 'accent-purple' : '',
              idx % 4 === 1 ? 'accent-gold' : '',
              idx % 4 === 2 ? 'accent-mint' : '',
              idx % 4 === 3 ? 'accent-blue' : '',
              idx % 2 === 1 ? 'scrap-tilt-right' : '',
            ].join(' ')}
          >
            <h3 className="text-base font-semibold text-[var(--foreground)]">{s.title}</h3>
            <p className="mt-2 text-sm text-black/70 leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

