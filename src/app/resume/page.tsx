import { ProgramLogos } from '@/components/ProgramLogos';

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <main className="flex-1 p-4">
        <div className="container mx-auto max-w-4xl py-10 md:py-14" id="resume-print-area">
          <section className="paper-card rounded-3xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex items-start gap-6 min-w-[260px]">
                <div className="min-w-[220px]">
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary">Alexander B. Henriksen</h2>
                  <p className="mt-2 text-sm text-[var(--text-subtle)]">
                    Multimedia designer student • UX design • Vite coding • Event cordinator • Educator
                  </p>
                  <div className="mt-4">
                    <ProgramLogos />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 paper-card rounded-3xl p-6 md:p-7">
            <h3 className="text-lg font-semibold text-secondary">Skills</h3>
            <ul className="mt-5 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-2">
              <li>UX design, user research, and user journey mapping</li>
              <li>Prototyping, ideation, and translating insights into design solutions</li>
              <li>AI-assisted product development (e.g. Cursor, Claude) for prototyping and build</li>
              <li>Professional communication, interviews, and cross-team collaboration</li>
              <li>Event coordination, teaching, and retail / customer-facing roles</li>
            </ul>
          </section>

          <section className="mt-8 paper-card rounded-3xl p-6 md:p-7">
            <h3 className="text-lg font-semibold text-secondary">Work experience</h3>
            <div className="mt-5 space-y-6">
              <article>
                <p className="font-medium text-secondary/90">Nærumgaard - Caretaker</p>
                <p className="text-sm text-[var(--text-subtle)]">2011–2014</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Take care of children and youngsters with autism and other mental disabilities.</p>
                <ul className="mt-2 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-1">
                  <li>Nightguard</li>
                  <li>Activity planner</li>
                </ul>
              </article>

              <article>
                <p className="font-medium text-secondary/90">Eventyrridderne - &quot;Børnetæmmer&quot; Event worker</p>
                <p className="text-sm text-[var(--text-subtle)]">2015–2016</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Create and execute events for children ages 9–15.</p>
                <ul className="mt-2 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-1">
                  <li>Planning events</li>
                  <li>Play roles/characters in events</li>
                </ul>
              </article>

              <article>
                <p className="font-medium text-secondary/90">Faraos Cigarer As - Part Time</p>
                <p className="text-sm text-[var(--text-subtle)]">2017–2020</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Stocking shelves, customer relations, and cashier work.</p>
                <ul className="mt-2 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-1">
                  <li>Working at the counter</li>
                  <li>Taking care of customers coming in the shop</li>
                </ul>
              </article>

              <article>
                <p className="font-medium text-secondary/90">Utterslev skole - Substitute Teacher</p>
                <p className="text-sm text-[var(--text-subtle)]">2018–2019</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Teacher for all grades in primary English and social studies.</p>
                <ul className="mt-2 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-1">
                  <li>Teaching and social training</li>
                </ul>
              </article>

              <article>
                <p className="font-medium text-secondary/90">Faraos Cigarer As - Full time Department responsible</p>
                <p className="text-sm text-[var(--text-subtle)]">2020–2023</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Ordering stock, B2B relations, keeping track of stock, cashier and customer relations.</p>
                <ul className="mt-2 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-1">
                  <li>Creating growth in the department</li>
                  <li>Daily retail tasks</li>
                </ul>
              </article>

              <article>
                <p className="font-medium text-secondary/90">Sputnik skolerne - Teacher</p>
                <p className="text-sm text-[var(--text-subtle)]">2023–2024</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Special education teacher with expertise in nerdy culture and social training.
                </p>
                <ul className="mt-2 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-1">
                  <li>Teaching ages 11–18</li>
                  <li>Directing social events and classes</li>
                </ul>
              </article>

              <article>
                <p className="font-medium text-secondary/90">Luftens Helte Band - Merchandise seller (volunteer work)</p>
                <p className="text-sm text-[var(--text-subtle)]">2023–now</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Merchandise coordinator and sales person.</p>
                <ul className="mt-2 text-sm text-[var(--text-muted)] list-disc pl-5 space-y-1">
                  <li>Setting up merchandise for concerts</li>
                  <li>Manning the stand during concerts</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="mt-8 paper-card rounded-3xl p-6 md:p-7">
            <h3 className="text-lg font-semibold text-secondary">Education</h3>
            <div className="mt-5 space-y-5">
              <div>
                <p className="font-medium text-secondary/90">VUC HILLERØD (HF)</p>
                <p className="text-sm text-[var(--text-subtle)]">2015–2017</p>
              </div>
              <div>
                <p className="font-medium text-secondary/90">Læreruddanelsen KP København</p>
                <p className="text-sm text-[var(--text-subtle)]">2017–2020</p>
              </div>
              <div>
                <p className="font-medium text-secondary/90">EK Lyngby - Multimedie design</p>
                <p className="text-sm text-[var(--text-subtle)]">2024–now</p>
              </div>
            </div>
          </section>

          <section className="mt-6 paper-card rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-secondary">Contact</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
