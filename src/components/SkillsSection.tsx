interface SkillsSectionProps {
  id: string;
  content?: {
    headline?: string;
    intro?: string;
    groups?: { title?: string; items?: string[] }[];
  };
}

const defaultGroups = [
  {
    title: 'UX & Research',
    items: ['Brugerinterviews', 'Personas', 'User journeys', 'Usability checks', 'Syntese af indsigter'],
    accentClass: 'accent-purple',
  },
  {
    title: 'Design & Prototyping',
    items: ['Informationshierarki', 'Wireframes', 'Prototyper (Figma)', 'Interaction states', 'UX writing'],
    accentClass: 'accent-gold',
  },
  {
    title: 'Frontend & Web',
    items: ['React', 'Next.js', 'Tailwind', 'Expo/React Native', 'Komponentsystemer'],
    accentClass: 'accent-blue',
  },
  {
    title: 'AI‑værktøjer',
    items: ['Cursor', 'Claude', 'Prompt‑iteration', 'Hurtig prototyping', 'Edge‑case exploration'],
    accentClass: 'accent-mint',
  },
  {
    title: 'Analytics',
    items: ['Grundlæggende event‑tænkning', 'Qual + quant framing', 'Funnel‑tænkning', 'Succesmål (metrics)'],
    accentClass: 'accent-purple',
  },
];

export function SkillsSection({ id, content }: SkillsSectionProps) {
  const groups = (content?.groups?.length ? content.groups : defaultGroups).map((g, idx) => ({
    title: g.title,
    items: g.items || [],
    accentClass: defaultGroups[idx % defaultGroups.length]?.accentClass || 'accent-purple',
  }));
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl">
        <h2
          className="text-2xl font-bold md:text-3xl text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          {content?.headline || 'Kompetencer'}
        </h2>
        <p className="mt-2 text-[var(--text-muted)] leading-relaxed">
          {content?.intro || 'Et praktisk værktøjssæt til at gøre brugerbehov til testbare digitale løsninger.'}
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

