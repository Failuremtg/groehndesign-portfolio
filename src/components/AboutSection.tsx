import { ProgramLogos } from '@/components/ProgramLogos';

interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center container mx-auto px-4 py-16 md:py-20"
    >
      <header className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl font-bold md:text-4xl text-secondary">Hey, It&apos;s me!</h2>
        <p className="mt-2 text-xl text-secondary/90">Alexander</p>
        <p className="mt-2 text-sm md:text-base text-white/60 max-w-xl mx-auto">
          UX Design student @ EK Lyngby · Graduating summer 2026
        </p>
        <p className="mt-2 text-base md:text-lg text-secondary font-semibold">
          UX Designer / AI Product Builder
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
        {/* Row 1 left: The UX me (2 cols) */}
        <article className="md:col-span-2 rounded-2xl border border-[var(--border)] bg-muted/30 p-6 md:p-7 flex flex-col min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-secondary mb-3 flex-shrink-0">UX &amp; Product Mindset</h3>
          <div className="text-sm text-white/85 leading-relaxed space-y-3 min-h-0 flex-1 overflow-y-auto about-card-scroll pr-1">
            <p>
              My name is Alexander, I am 33 years old and currently studying UX Design as part of the Multimedia Design program at EK Lyngby, where I expect to graduate in the summer of 2026.
            </p>
            <p>
              Throughout my studies, I have specialized in UX Design with a focus on user research and user journey mapping. I am passionate about understanding user needs and transforming insights into concrete design solutions with the user in mind.
            </p>
            <p>
              Alongside my UX work, I have developed a strong interest in AI-assisted product development. I actively work with tools such as Cursor and Claude to support both ideation, prototyping, and development, allowing me to quickly turn concepts into functional solutions. I see AI as a natural extension of the design process, helping bridge the gap between idea, prototype, and implementation.
            </p>
            <p>
              In addition to my current studies, I have a background in teaching with English and Social Studies as my main subjects. Between my teacher training and my current education, I worked in retail as a department specialist.
            </p>
            <p>
              This experience provided me with strong professional communication skills, which I actively apply in my UX design practice, whether conducting interviews or collaborating across design teams and areas of expertise. I am particularly comfortable translating complex topics, such as AI-driven features, into clear and meaningful user experiences.
            </p>
          </div>
        </article>

        {/* Row 1 right: Business me (1 col) */}
        <article className="rounded-2xl border border-[var(--border)] bg-muted/30 p-6 md:p-7 flex flex-col min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-4-1V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 10a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-secondary mb-3 flex-shrink-0">Entrepreneurial Experience</h3>
          <div className="text-sm text-white/85 leading-relaxed space-y-3 min-h-0 flex-1 overflow-y-auto about-card-scroll pr-1">
            <p>
              Alongside my studies, I run a small 3D printing business where I design and sell custom products at markets and on a made-to-order basis. I have been running it independently for around two years, handling everything from concept development and production to customer interaction and sales.
            </p>
            <p>
              Currently, the business operates as a passion-driven side project, allowing me to explore ideas and experiment creatively in my spare time. While it remains a small-scale operation, it has given me valuable hands-on experience in building products from idea to finished result, as well as a deeper understanding of user needs and real-world feedback.
            </p>
          </div>
        </article>

        {/* Row 2 left: Programs I work with (2 cols) */}
        <article className="md:col-span-2 rounded-2xl border border-[var(--border)] bg-muted/30 p-6 md:p-7 flex flex-col min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-secondary mb-4 flex-shrink-0">Programs I work with</h3>
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="flex-1 min-h-0">
              <ProgramLogos />
            </div>
          </div>
        </article>

        {/* Row 2 right: The Private me (1 col) */}
        <article className="rounded-2xl border border-[var(--border)] bg-muted/30 p-6 md:p-7 flex flex-col min-h-[320px]">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 flex-shrink-0">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-secondary mb-3 flex-shrink-0">Personal Profile</h3>
          <div className="text-sm text-white/85 leading-relaxed space-y-3 min-h-0 flex-1 overflow-y-auto about-card-scroll pr-1">
            <p>
              When I&apos;m not at markets or studying, I like to play video games and collectible card games such as Magic the Gathering.
            </p>
            <p>
              Furthermore when I need to get grounded and just relax I am enjoying the family life with my lovely wife and stepson.
            </p>
            <p>
              I love that I can share all my nerdyness with both of them and that we can play board games, video games together.
            </p>
            <p className="text-secondary font-medium pt-3 border-t border-[var(--border)]">
              I am a nerd at heart, and I am very proud of it.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
