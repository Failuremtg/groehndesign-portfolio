interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-2xl font-bold md:text-3xl text-[var(--foreground)]">Lad os arbejde sammen</h2>
      <p className="mt-2 text-[var(--text-muted)]">
        Åben for praktik, junior UX‑roller, freelanceprojekter og samarbejde.
      </p>
      <ul className="mt-6 flex flex-wrap gap-4">
        <li>
          <a
            href="mailto:alexanderbghenriksen@gmail.com"
            className="paper-button inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm text-[var(--foreground)] transition-all hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4 text-[var(--foreground)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 8v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            alexanderbghenriksen@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexander-henriksen-298699383/"
            target="_blank"
            rel="noopener noreferrer"
            className="paper-button inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm text-[var(--foreground)] transition-all hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4 text-[var(--foreground)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4V9h4v2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2 9h4v12H2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
            LinkedIn
          </a>
        </li>
      </ul>

    </section>
  );
}
