interface SkillsSectionProps {
  id: string;
}

const groups = [
  {
    title: 'UX & Research',
    items: ['User interviews', 'Personas', 'User journeys', 'Usability checks', 'Insight synthesis'],
    accentClass: 'accent-purple',
  },
  {
    title: 'Design & Prototyping',
    items: ['Information hierarchy', 'Wireframes', 'Prototypes (Figma)', 'Interaction states', 'UX writing'],
    accentClass: 'accent-gold',
  },
  {
    title: 'Frontend & Web',
    items: ['React', 'Next.js', 'Tailwind', 'Expo/React Native', 'Component systems'],
    accentClass: 'accent-blue',
  },
  {
    title: 'AI Tools',
    items: ['Cursor', 'Claude', 'Prompt iteration', 'Rapid prototyping', 'Edge-case exploration'],
    accentClass: 'accent-mint',
  },
  {
    title: 'Analytics',
    items: ['Basic event thinking', 'Qual + quant framing', 'Funnel reasoning', 'Success metrics'],
    accentClass: 'accent-purple',
  },
];

export function SkillsSection({ id }: SkillsSectionProps) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl">
        <h2
          className="text-2xl font-bold md:text-3xl text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Skills
        </h2>
        <p className="mt-2 text-[var(--text-muted)] leading-relaxed">
          A practical toolkit for turning user needs into working, testable digital solutions.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {groups.map((g) => (
          <article key={g.title} className={`paper-card ${g.accentClass} rounded-3xl p-6 md:p-7`}>
            <h3 className="text-base font-semibold text-[var(--foreground)]">{g.title}</h3>
            <ul className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed list-disc pl-5 space-y-1.5">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

