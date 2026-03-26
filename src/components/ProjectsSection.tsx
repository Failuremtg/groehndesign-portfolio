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
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/50 border border-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur">
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
        <span>Click to expand</span>
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

export function ProjectsSection({ id }: { id: string }) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeImage, setActiveImage] = useState<(typeof oakedexImages)[number]>(oakedexImages[0]!);
  const [activeCmdrtoolsImage, setActiveCmdrtoolsImage] = useState<(typeof cmdrtoolsImages)[number]>(
    cmdrtoolsImages[0]!,
  );
  const [activeClarivoImage, setActiveClarivoImage] = useState<(typeof clarivoImages)[number]>(
    clarivoImages[0]!,
  );
  const [clarivoLogoSrc, setClarivoLogoSrc] = useState('/projects/clarivo/00-logo.png');
  const [activeNoyerOverwatchImage, setActiveNoyerOverwatchImage] = useState<
    (typeof noyerOverwatchImages)[number]
  >(noyerOverwatchImages[0]!);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-8 md:mb-10">
        <h2 className="text-2xl font-bold md:text-3xl text-secondary">Projects</h2>
        <p className="mt-2 opacity-80">A few things I’ve built and designed.</p>
      </header>

      <article className="rounded-2xl border border-[var(--border)] bg-muted/25 overflow-hidden">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image
                src="/projects/oakedex/00-app-icon.png"
                alt="Oakedex logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-secondary">Oakedex</h3>
                <p className="text-sm text-white/60">Digital Pokémon TCG binder app</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/85 leading-relaxed">
              Oakedex is a digital binder that helps collectors track and organize Pokémon cards
              across master sets and single‑Pokémon binders. The app focuses on fast browsing,
              clear progress feedback, and frictionless “missing card” flows.
            </p>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-primary/10 p-4">
                <p className="text-sm font-semibold text-secondary">How it was built (Vite workflow)</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  Built with a modern React + Vite development setup for fast iteration and tight
                  feedback loops. Components and UI states were developed incrementally with a
                  focus on reusable patterns, responsive layouts, and clean data flows. The basic
                  layout was first structured as wireframes in Figma before implementation.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Product thinking & UX approach</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  The project started from a clear collector problem: tracking multiple collections
                  without losing overview. I designed the flows around quick recognition (visual
                  cards + progress indicators), low-friction updates (single-tap collect actions),
                  and clear states for missing variants and special prints.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Architecture & implementation</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  I structured the app around reusable UI components and predictable state handling,
                  so binder screens, modal flows, and card grids could share logic. The Vite-based
                  setup made iteration fast during feature spikes, while still keeping the codebase
                  maintainable as the number of collections and card states grew.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Highlights</p>
                <ul className="mt-2 text-sm text-white/75 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Binder collections with progress tracking</li>
                  <li>Card selection modals for variant handling</li>
                  <li>Consistent dark UI with clear hierarchy</li>
                  <li>Designed for fast daily collector usage on mobile</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-[var(--border)] bg-background/30 p-6 md:p-8">
            <button
              type="button"
              onClick={() => setSelectedImage(activeImage)}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] bg-muted/30 text-left"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-cover hover:scale-[1.01] transition-transform"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <ClickToExpandHint />
            </button>

            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {oakedexImages.map((img) => (
                <button
                  type="button"
                  key={img.src}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden border bg-muted/30 hover:opacity-90 transition-opacity ${
                    activeImage.src === img.src ? 'border-secondary' : 'border-[var(--border)]'
                  }`}
                  title="Open image"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      <article className="mt-8 rounded-2xl border border-[var(--border)] bg-muted/25 overflow-hidden">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image
                src={cmdrtoolsImages[0]!.src}
                alt="CMDRtools logo"
                width={64}
                height={64}
                className="h-11 w-11 rounded-2xl border border-[var(--border)] bg-primary/10 object-contain p-1.5"
              />
              <div>
                <h3 className="text-xl font-semibold text-secondary">CMDRtools</h3>
                <p className="text-sm text-white/60">Commander deck & match tracker</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/85 leading-relaxed">
              CMDRtools is a companion app for Magic: The Gathering Commander players. It helps you
              organize decks, track games, and capture match results in a way that supports both
              casual playgroups and more structured sessions.
            </p>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-primary/10 p-4">
                <p className="text-sm font-semibold text-secondary">How it was built</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  Built as a mobile-first product with a fast iteration workflow and reusable UI
                  components. Data is modeled around decks, playgroups, and match history to keep
                  the core flows simple and quick to use during game nights. The basic layout was
                  initially designed as wireframes in Figma.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Product thinking & UX approach</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  The UX is designed for “in-the-moment” interaction: large tap targets, minimal
                  friction, and clear information hierarchy. The goal is to make tracking feel
                  effortless while still producing useful stats and history after the game.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Architecture & implementation</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  The app is structured around reusable feature modules for decks, match tracking,
                  player setup, and statistics. Shared UI components keep the experience consistent
                  across screens, while the data model is organized to support quick updates during
                  live games and reliable history views afterwards.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Highlights</p>
                <ul className="mt-2 text-sm text-white/75 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Deck organization and quick access during play</li>
                  <li>Match tracking flows designed for speed</li>
                  <li>Clear, consistent UI built for dark environments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-[var(--border)] bg-background/30 p-6 md:p-8">
            <button
              type="button"
              onClick={() => setSelectedImage(activeCmdrtoolsImage)}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] bg-muted/30 text-left"
            >
              <Image
                src={activeCmdrtoolsImage.src}
                alt={activeCmdrtoolsImage.alt}
                fill
                className="object-cover hover:scale-[1.01] transition-transform"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <ClickToExpandHint />
            </button>

            <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-3">
              {cmdrtoolsImages.map((img) => (
                <button
                  type="button"
                  key={img.src}
                  onClick={() => setActiveCmdrtoolsImage(img)}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden border bg-muted/30 hover:opacity-90 transition-opacity ${
                    activeCmdrtoolsImage.src === img.src ? 'border-secondary' : 'border-[var(--border)]'
                  }`}
                  title="Open image"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      <article className="mt-8 rounded-2xl border border-[var(--border)] bg-muted/25 overflow-hidden">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image
                src={clarivoLogoSrc}
                alt="Clarivo logo"
                width={64}
                height={64}
                className="h-11 w-11 object-contain"
                onError={() => setClarivoLogoSrc('/projects/clarivo/01-home.png')}
              />
              <div>
                <h3 className="text-xl font-semibold text-secondary">Clarivo</h3>
                <p className="text-sm text-white/60">AI “parent insight” guide for games & slang</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/85 leading-relaxed">
              Clarivo helps parents understand the online games, hobbies, trends, and slang their
              child talks about. You can type a word or phrase (for example something you heard at
              the dinner table), and Clarivo returns a calm explanation plus conversation starters
              so parents can connect without sounding out of touch.
            </p>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-primary/10 p-4">
                <p className="text-sm font-semibold text-secondary">How it was built</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  Built as an Expo React Native app (Expo Router) with a component-driven UI system.
                  The basic layout was first structured as wireframes in Figma before implementation.
                  Insights are generated with Claude AI, with mock insights and a safe fallback when
                  AI is unavailable.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Product thinking & UX approach</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  The tone is intentionally calm, warm, and non-alarmist. The UX supports quick “help
                  me understand this” moments: short answers, plain language, and actionable
                  conversation starters—so it feels supportive rather than judgmental.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Architecture & implementation</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  The app is structured around a clear “parent insight” module: prompt building,
                  JSON-shaped responses (what it is / why kids care / conversation starters), and
                  small UI components for consistent presentation. Search history and favorites are
                  stored locally so parents can revisit insights later.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Highlights</p>
                <ul className="mt-2 text-sm text-white/75 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Ask screen with example prompts to reduce friction</li>
                  <li>Results designed for clarity + conversation starters</li>
                  <li>Favorites and history for quick revisits</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-[var(--border)] bg-background/30 p-6 md:p-8">
            <button
              type="button"
              onClick={() => setSelectedImage(activeClarivoImage)}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] bg-muted/30 text-left"
            >
              <Image
                src={activeClarivoImage.src}
                alt={activeClarivoImage.alt}
                fill
                className="object-cover hover:scale-[1.01] transition-transform"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <ClickToExpandHint />
            </button>

            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {clarivoImages.map((img) => (
                <button
                  type="button"
                  key={img.src}
                  onClick={() => setActiveClarivoImage(img)}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden border bg-muted/30 hover:opacity-90 transition-opacity ${
                    activeClarivoImage.src === img.src ? 'border-secondary' : 'border-[var(--border)]'
                  }`}
                  title="Open image"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      <article className="mt-8 rounded-2xl border border-[var(--border)] bg-muted/25 overflow-hidden">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image
                src="/projects/noyer-overwatch/00-logo.png"
                alt="Noyer Overwatch logo"
                width={64}
                height={64}
                className="h-11 w-11 rounded-2xl border border-[var(--border)] bg-primary/10 object-contain p-1.5 invert brightness-200"
              />
              <div>
                <h3 className="text-xl font-semibold text-secondary">Noyer Overwatch</h3>
                <p className="text-sm text-white/60">
                  Internship project for <span className="text-white/70">noyer.dk</span> • Sales alert dashboard
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/85 leading-relaxed">
              Noyer Overwatch is an automated “sales alert robot” built during my internship at noyer.dk. It monitors
              open sales across Shopify and e-conomic, checks how long each sale has been waiting based on per-item
              thresholds, and sends email alerts when something needs attention.
            </p>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-primary/10 p-4">
                <p className="text-sm font-semibold text-secondary">How it was built</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  Built as a Node.js service with an Express dashboard. A scheduled poll cycle fetches open orders from
                  Shopify and documents from e-conomic, normalizes them into a shared “sale” model, and runs a rule
                  engine to decide when to alert. Alerts are sent via SMTP email (Nodemailer), with a dry-run mode for
                  safe testing.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Product thinking & UX approach</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  The dashboard is designed for operational clarity: a simple “are we OK?” status header, a sales table
                  sorted by urgency, and quick management of tracked items (SKU / product number) with human-friendly
                  units (days / weeks / months). Everything is optimized for fast daily checks.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Architecture & implementation</p>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  The system is split into adapters (Shopify + e-conomic), a rule engine that applies “lowest threshold
                  wins” across matched line items, and pluggable storage (Firestore when available, otherwise JSON
                  files). The dashboard exposes authenticated endpoints for status, sales, tracked items, and an archive
                  flow that supports restoring an order with a future alert date.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-muted/30 p-4">
                <p className="text-sm font-semibold text-secondary">Highlights</p>
                <ul className="mt-2 text-sm text-white/75 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Monitors both Shopify orders and e-conomic documents with one unified model</li>
                  <li>Per-item thresholds with unit conversion (days / weeks / months)</li>
                  <li>Manual “Poll Now” trigger + progress reporting during long Shopify scans</li>
                  <li>Alert archive + restore workflow (set a new alert date)</li>
                  <li>Demo mode and dry-run mode for safer development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-[var(--border)] bg-background/30 p-6 md:p-8">
            <button
              type="button"
              onClick={() => setSelectedImage(activeNoyerOverwatchImage)}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] bg-muted/30 text-left"
            >
              <Image
                src={activeNoyerOverwatchImage.src}
                alt={activeNoyerOverwatchImage.alt}
                fill
                className="object-cover hover:scale-[1.01] transition-transform"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <ClickToExpandHint />
            </button>

            <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-3">
              {noyerOverwatchImages.map((img) => (
                <button
                  type="button"
                  key={img.src}
                  onClick={() => setActiveNoyerOverwatchImage(img)}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden border bg-muted/30 hover:opacity-90 transition-opacity ${
                    activeNoyerOverwatchImage.src === img.src ? 'border-secondary' : 'border-[var(--border)]'
                  }`}
                  title="Open image"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[60] bg-black/80 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[var(--border)] bg-background">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 rounded-xl bg-black/40 border border-[var(--border)] px-3 py-1.5 text-sm text-white/90 hover:bg-black/60"
            >
              Close
            </button>
            <div className="relative w-full h-[78vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain bg-black/30"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

