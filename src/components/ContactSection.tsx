interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-2xl font-bold md:text-3xl text-secondary">Contact me!</h2>
      <p className="mt-2 opacity-80">Get in touch</p>
      <ul className="mt-6 flex flex-wrap gap-4">
        <li>
          <a
            href="mailto:alexanderbghenriksen@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-[var(--border)] px-4 py-2.5 text-sm text-secondary hover:bg-primary/20 transition-all hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4 text-secondary"
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
            className="inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-[var(--border)] px-4 py-2.5 text-sm text-secondary hover:bg-primary/20 transition-all hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4 text-secondary"
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
