"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

function ClickToExpandHint({ className }: { className?: string }) {
  return (
    <div
      className={[
        'pointer-events-none absolute inset-0',
        'opacity-100 md:opacity-0 md:group-hover:opacity-100',
        'transition-opacity duration-200',
        className || '',
      ].join(' ')}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0" />
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-[var(--muted)] border-2 border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)] shadow-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path
            d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>Click to view</span>
      </div>
    </div>
  );
}

const oakedexImages = [
  {
    src: '/projects/oakedex/00-app-icon.png',
    alt: 'Oakedex app logo',
  },
  {
    src: '/projects/oakedex/04-binder-cover.png',
    alt: 'Oakedex binder cover screen',
  },
  {
    src: '/projects/oakedex/06-collection-grid.png',
    alt: 'Oakedex collection grid screen',
  },
  {
    src: '/projects/oakedex/01-binder-choose-card.png',
    alt: 'Oakedex choose card modal',
  },
  {
    src: '/projects/oakedex/05-add-missing-card.png',
    alt: 'Oakedex add missing card modal',
  },
  {
    src: '/projects/oakedex/02-trainer-id.png',
    alt: 'Oakedex trainer ID screen',
  },
];

const cmdrtoolsImages = [
  {
    src: '/projects/cmdrtools/99-logo.png',
    alt: 'CMDRtools logo',
  },
  {
    src: '/projects/cmdrtools/01-welcome.png',
    alt: 'CMDRtools welcome screen',
  },
  {
    src: '/projects/cmdrtools/02-decks.png',
    alt: 'CMDRtools decks screen',
  },
  {
    src: '/projects/cmdrtools/03-stats.png',
    alt: 'CMDRtools stats screen',
  },
  {
    src: '/projects/cmdrtools/04-new-game.png',
    alt: 'CMDRtools new game screen',
  },
];

const clarivoImages = [
  {
    src: '/projects/clarivo/00-app-icon.png',
    alt: 'Clarivo app icon',
  },
  {
    src: '/projects/clarivo/01-home.png',
    alt: 'Clarivo home screen',
  },
  {
    src: '/projects/clarivo/02-ask.png',
    alt: 'Clarivo ask screen',
  },
  {
    src: '/projects/clarivo/03-result.png',
    alt: 'Clarivo result insight screen',
  },
  {
    src: '/projects/clarivo/04-ideas.png',
    alt: 'Clarivo topic ideas screen',
  },
];

const noyerOverwatchImages = [
  {
    src: '/projects/noyer-overwatch/00-logo.png',
    alt: 'Noyer Overwatch logo',
  },
  {
    src: '/projects/noyer-overwatch/01-tracked-sales.png',
    alt: 'Noyer Overwatch dashboard - tracked sales',
  },
  {
    src: '/projects/noyer-overwatch/02-archive.png',
    alt: 'Noyer Overwatch dashboard - archive',
  },
  {
    src: '/projects/noyer-overwatch/03-alert-email.png',
    alt: 'Noyer Overwatch alert email template',
  },
];

type ProjectsContent = {
  headline?: string;
  intro?: string;
  items?: {
    key?: string;
    title?: string;
    subtitle?: string;
    summary?: string;
    tools?: string[];
    sections?: {
      problem?: string;
      role?: string;
      process?: string;
      solutionBullets?: string[];
      outcome?: string;
    };
  }[];
};

function getProjectCopy(content: ProjectsContent | undefined, key: string) {
  const item = content?.items?.find((i) => i.key === key);
  return {
    title: item?.title,
    subtitle: item?.subtitle,
    summary: item?.summary,
    tools: item?.tools,
    sections: {
      problem: item?.sections?.problem,
      role: item?.sections?.role,
      process: item?.sections?.process,
      solutionBullets: item?.sections?.solutionBullets,
      outcome: item?.sections?.outcome,
    },
  };
}

export function ProjectsSection({ id, content }: { id: string; content?: ProjectsContent }) {
  const [selected, setSelected] = useState<{
    projectKey: 'oakedex' | 'cmdrtools' | 'clarivo' | 'noyer-overwatch';
    imageSrc: string;
  } | null>(null);

  const isLogoLikeImage = (src: string) =>
    /logo\.(png|jpg|jpeg|webp)$/i.test(src) || /(^|\/)00-.*logo.*\.(png|jpg|jpeg|webp)$/i.test(src);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (!selected) return;
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

      const direction = e.key === 'ArrowRight' ? 1 : -1;
      const project = projects.find((p) => p.key === selected.projectKey);
      if (!project) return;
      const idx = project.images.findIndex((img) => img.src === selected.imageSrc);
      const nextIdx = (idx + direction + project.images.length) % project.images.length;
      const next = project.images[nextIdx];
      if (next) setSelected({ projectKey: selected.projectKey, imageSrc: next.src });
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  const sectionHeadline = content?.headline;
  const sectionIntro = content?.intro;
  const oakedex = getProjectCopy(content, 'oakedex');
  const cmdrtools = getProjectCopy(content, 'cmdrtools');
  const clarivo = getProjectCopy(content, 'clarivo');
  const noyer = getProjectCopy(content, 'noyer-overwatch');

  const oakedexTools = oakedex.tools?.length ? oakedex.tools : ['UX research', 'Figma', 'React', 'TCG APIs'];
  const cmdrtoolsTools = cmdrtools.tools?.length ? cmdrtools.tools : ['UX design', 'Expo', 'React Native', 'Firebase'];
  const clarivoTools = clarivo.tools?.length ? clarivo.tools : ['Prompting', 'TypeScript', 'UI design', 'AI APIs'];
  const noyerTools = noyer.tools?.length ? noyer.tools : ['Product framing', 'Node.js', 'Express', 'Shopify/e-conomic'];

  const projects = [
    {
      key: 'oakedex' as const,
      title: oakedex.title || 'Oakedex',
      subtitle: oakedex.subtitle || 'Digital Pokémon TCG binder app',
      summary:
        oakedex.summary ||
        'A digital binder that helps collectors track and organize Pokémon cards across master sets and single‑Pokémon binders.',
      tools: oakedexTools,
      images: oakedexImages,
      sections: {
        problem:
          oakedex.sections.problem ||
          'Collectors track multiple sets and single‑Pokémon binders—and quickly lose overview. The product needed fast browsing, clear progress feedback, and low-friction updates.',
        role:
          oakedex.sections.role ||
          'UX + product decisions, interaction design, and implementation (React). Wireframes in Figma → responsive UI and reusable components.',
        outcome:
          oakedex.sections.outcome ||
          'A complete end-to-end prototype with real flows and UI states. Key learning: small state design decisions (variants, missing prints) drive perceived quality for collectors.',
        process:
          oakedex.sections.process ||
          'Started with core flows (browse → find missing → update), designed key states (owned / missing / variants), then iterated the UI with tight feedback loops in code.',
        solutionBullets:
          oakedex.sections.solutionBullets?.length
            ? oakedex.sections.solutionBullets
            : [
                'Binder collections with progress tracking',
                'Card selection modals for variant handling',
                'Clear hierarchy + fast daily mobile usage',
              ],
      },
    },
    {
      key: 'cmdrtools' as const,
      title: cmdrtools.title || 'CMDRtools',
      subtitle: cmdrtools.subtitle || 'Commander deck & match tracker',
      summary:
        cmdrtools.summary ||
        'A companion app for Commander players to organize decks, track games, and capture match results with low friction.',
      tools: cmdrtoolsTools,
      images: cmdrtoolsImages,
      sections: {
        problem:
          cmdrtools.sections.problem ||
          'Commander nights are busy—tracking games and stats often becomes a distraction. The app needed quick setup, big tap targets, and useful history without friction.',
        role:
          cmdrtools.sections.role ||
          'UX design + interaction patterns + implementation. Focused on mobile-first flows for real-time use.',
        outcome:
          cmdrtools.sections.outcome ||
          'A usable mobile companion with repeatable flows and a structured data model for decks + history.',
        process:
          cmdrtools.sections.process ||
          'Sketched flows in Figma, then built and refined components in Expo/React Native to reduce taps and keep the “game night” experience lightweight.',
        solutionBullets:
          cmdrtools.sections.solutionBullets?.length
            ? cmdrtools.sections.solutionBullets
            : ['Deck organization and quick access during play', 'Match tracking designed for speed', 'Clear, consistent UI'],
      },
    },
    {
      key: 'clarivo' as const,
      title: clarivo.title || 'Clarivo',
      subtitle: clarivo.subtitle || 'AI “parent insight” guide for games & slang',
      summary:
        clarivo.summary ||
        'Helps parents understand online games, slang, and trends with calm explanations and conversation starters.',
      tools: clarivoTools,
      images: clarivoImages,
      sections: {
        problem:
          clarivo.sections.problem ||
          'Parents hear game slang and trends but don’t know how to respond. They need calm explanations and conversation starters—fast, without feeling judged.',
        role:
          clarivo.sections.role ||
          'UX + tone-of-voice, prompt design, and UI implementation. Designed a structured result format.',
        outcome:
          clarivo.sections.outcome ||
          'A friendly AI-powered guide with safe fallbacks and repeatable structure. Learning: tone and structure matter as much as accuracy when trust is the product.',
        process:
          clarivo.sections.process ||
          'Iterated prompts and UI together: example chips reduce blank-state friction, structured output improves consistency, and history/favorites support repeat use.',
        solutionBullets:
          clarivo.sections.solutionBullets?.length
            ? clarivo.sections.solutionBullets
            : ['Example prompts reduce friction', 'Structured results for clarity', 'Favorites and history for revisits'],
      },
    },
    {
      key: 'noyer-overwatch' as const,
      title: noyer.title || 'Noyer Overwatch',
      subtitle:
        noyer.subtitle ||
        'Internship project • Sales alert dashboard for noyer.dk',
      summary:
        noyer.summary ||
        'An automated sales alert robot that monitors open sales across systems and emails the team when something needs attention.',
      tools: noyerTools,
      images: noyerOverwatchImages,
      sections: {
        problem:
          noyer.sections.problem ||
          'Sales follow-up can slip when orders sit too long across systems. The team needed a simple daily overview and proactive alerts based on per-item thresholds.',
        role:
          noyer.sections.role ||
          'Internship project: product framing, dashboard UX, and full-stack implementation (Node.js + Express).',
        outcome:
          noyer.sections.outcome ||
          'A working internal tool with automated alerts and a clear dashboard for follow-up.',
        process:
          noyer.sections.process ||
          'Mapped workflow, defined urgency rules, then built a dashboard optimized for quick daily checks. Iterated rules and UI together to keep alerts trustworthy.',
        solutionBullets:
          noyer.sections.solutionBullets?.length
            ? noyer.sections.solutionBullets
            : ['Unified sales model across systems', 'Per-item thresholds + unit conversion', 'Alert archive + restore workflow'],
      },
    },
  ];

  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-8 md:mb-10">
        <h2
          className="text-2xl font-bold md:text-3xl text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          {sectionHeadline || 'Projects'}
        </h2>
        <p className="mt-2 text-[var(--text-muted)] leading-relaxed max-w-3xl">
          {sectionIntro || (
            <>
              A quick visual preview first. Click any project to view a larger gallery.
            </>
          )}
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((p) => {
          const cover = p.images[0];
          if (!cover) return null;
          const coverIsLogo = isLogoLikeImage(cover.src);
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setSelected({ projectKey: p.key, imageSrc: cover.src })}
              className="paper-card group relative overflow-hidden rounded-3xl text-left"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  className={[
                    'transition-transform duration-200 group-hover:scale-[1.01]',
                    coverIsLogo ? 'object-contain p-6 bg-[var(--background)]' : 'object-cover',
                  ].join(' ')}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <ClickToExpandHint />
              </div>
              <div className="border-t-2 border-[var(--border)] bg-[var(--muted)] p-3">
                <p className="text-sm font-semibold text-[var(--foreground)] leading-snug">{p.title}</p>
                <p className="mt-0.5 text-xs text-[var(--text-subtle)] leading-snug line-clamp-2">{p.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[60] bg-black/50 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          {(() => {
            const project = projects.find((p) => p.key === selected.projectKey);
            if (!project) return null;
            const active =
              project.images.find((img) => img.src === selected.imageSrc) || project.images[0]!;
            const activeIdx = project.images.findIndex((img) => img.src === active.src);
            const prev = project.images[(activeIdx - 1 + project.images.length) % project.images.length]!;
            const next = project.images[(activeIdx + 1) % project.images.length]!;

            return (
              <div className="paper-card relative w-full max-w-6xl rounded-3xl overflow-hidden bg-[var(--background)]">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="paper-button absolute top-3 right-3 z-10 rounded-2xl px-3 py-1.5 text-sm text-[var(--foreground)]"
            >
              Close
            </button>

                <div className="grid md:grid-cols-[1fr_360px]">
                  <div className="relative h-[64vh] md:h-[78vh] bg-[var(--background)]">
                    <Image
                      src={active.src}
                      alt={active.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 70vw"
                      priority
                    />

                    <button
                      type="button"
                      onClick={() => setSelected({ projectKey: project.key, imageSrc: prev.src })}
                      className="paper-button absolute left-3 top-1/2 -translate-y-1/2 rounded-2xl px-3 py-2 text-sm text-[var(--foreground)]"
                      aria-label="Previous image"
                      title="Previous (←)"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected({ projectKey: project.key, imageSrc: next.src })}
                      className="paper-button absolute right-3 top-1/2 -translate-y-1/2 rounded-2xl px-3 py-2 text-sm text-[var(--foreground)]"
                      aria-label="Next image"
                      title="Next (→)"
                    >
                      →
                    </button>

                    <div className="absolute bottom-3 left-3 rounded-2xl border-2 border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-xs text-[var(--text-muted)]">
                      {activeIdx + 1} / {project.images.length}
                    </div>
                  </div>

                  <aside className="border-t-2 md:border-t-0 md:border-l-2 border-[var(--border)] bg-[var(--muted)] p-5 md:p-6 overflow-auto max-h-[52vh] md:max-h-[78vh]">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{project.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-subtle)]">{project.subtitle}</p>
                    <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{project.summary}</p>

                    <div className="mt-4 grid gap-3">
                      <div className="paper-card-2 rounded-3xl p-4">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Problem</p>
                        <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{project.sections.problem}</p>
                      </div>
                      <div className="paper-card-2 rounded-3xl p-4">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Role</p>
                        <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{project.sections.role}</p>
                      </div>
                      <div className="paper-card-2 rounded-3xl p-4">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Tools</p>
                        <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{project.tools.join(' · ')}</p>
                      </div>
                      <div className="paper-card-2 rounded-3xl p-4">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Outcome / learning</p>
                        <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{project.sections.outcome}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-[var(--text-subtle)]">
                      Tip: use <span className="text-[var(--foreground)]">←</span> and <span className="text-[var(--foreground)]">→</span> to navigate.
                    </p>

                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {project.images.map((img) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => setSelected({ projectKey: project.key, imageSrc: img.src })}
                          className={`relative aspect-[3/4] overflow-hidden rounded-2xl border-2 bg-[var(--background)] ${
                            img.src === active.src ? 'border-[var(--foreground)]' : 'border-[var(--border)]'
                          }`}
                          title="Open image"
                        >
                          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="12vw" />
                        </button>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            );
          })()}
        </div>
      ) : null}
    </section>
  );
}

