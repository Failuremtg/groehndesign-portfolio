interface SkillsSectionProps {
  id: string;
  content?: {
    headline?: string;
    intro?: string;
    groups?: { title?: string; items?: string[] }[];
  };
}

function GroupIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' as const, 'aria-hidden': true };
  const stroke = { stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  if (n.includes('ux') || n.includes('research')) {
    return (
      <svg {...common}>
        <path {...stroke} d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
        <path {...stroke} d="M21 21l-4.35-4.35" />
        <path {...stroke} d="M10 8v4l2.5 1.5" />
      </svg>
    );
  }
  if (n.includes('design') || n.includes('proto')) {
    return (
      <svg {...common}>
        <path {...stroke} d="M4 20h6l10-10a2 2 0 0 0-6-6L4 14v6Z" />
        <path {...stroke} d="M13 5l6 6" />
      </svg>
    );
  }
  if (n.includes('frontend') || n.includes('web')) {
    return (
      <svg {...common}>
        <path {...stroke} d="M10 20l4-16" />
        <path {...stroke} d="M18 8l4 4-4 4" />
        <path {...stroke} d="M6 8l-4 4 4 4" />
      </svg>
    );
  }
  if (n.includes('ai')) {
    return (
      <svg {...common}>
        <path {...stroke} d="M12 2v3M12 19v3M4 12H2M22 12h-2" />
        <path {...stroke} d="M7.5 7.5l-2-2M18.5 18.5l-2-2M16.5 7.5l2-2M5.5 18.5l2-2" />
        <path {...stroke} d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
      </svg>
    );
  }
  if (n.includes('analytics')) {
    return (
      <svg {...common}>
        <path {...stroke} d="M4 19V5" />
        <path {...stroke} d="M4 19h16" />
        <path {...stroke} d="M8 15v-4" />
        <path {...stroke} d="M12 15V9" />
        <path {...stroke} d="M16 15v-7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path {...stroke} d="M12 3v18" />
      <path {...stroke} d="M3 12h18" />
    </svg>
  );
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

  const accentTopBar =
    'absolute inset-x-0 top-0 h-[3px] opacity-80 bg-[linear-gradient(90deg,var(--primary),rgba(62,43,246,0.0))]';

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
          <article
            key={g.title}
            className={`paper-card ${g.accentClass} relative overflow-hidden rounded-3xl p-6 md:p-7`}
          >
            <div className={accentTopBar} aria-hidden />
            <div className="flex items-start gap-3">
              <div
                className={[
                  'h-10 w-10 rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-sm flex items-center justify-center flex-shrink-0',
                  'text-[var(--foreground)]',
                ].join(' ')}
                aria-hidden
              >
                <GroupIcon name={g.title || ''} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-[var(--foreground)] leading-snug">{g.title}</h3>
                <p className="mt-1 text-xs text-[var(--text-subtle)] leading-relaxed">
                  Udvalgte færdigheder jeg bruger i praksis.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="paper-pill accent inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                >
                  {it}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

