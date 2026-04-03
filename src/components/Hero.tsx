import Image from 'next/image';

export function Hero() {
  return (
    <section className="container mx-auto px-4 h-full relative">
      <div className="h-full flex flex-col items-center justify-center gap-8 py-6 md:flex-row md:items-center md:gap-12 md:py-12">
        <div className="flex-1 min-w-0 text-center md:text-left">
          <p
            className="text-5xl sm:text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
            style={{ fontFamily: 'var(--font-brush), cursive' }}
          >
            <span className="hero-type-line">
              <span style={{ color: '#5b2c6f' }}>Hallo, I am </span>
              <span style={{ color: '#e4a853' }}>alexander,</span>
            </span>
            <br />
            <span className="hero-type-line hero-type-line-2">
              <span style={{ color: '#5b2c6f' }}>a </span>
              <span style={{ color: '#e4a853' }}>multimedia </span>
              <span style={{ color: '#5b2c6f' }}>designer.</span>
            </span>
          </p>
        </div>
        <div
          className="relative flex-shrink-0 w-full max-w-[18rem] sm:max-w-[22rem] aspect-[3/4] md:w-[36%] md:max-w-none rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Image
            src="/hero-portrait.png"
            alt="Portrait"
            fill
            className="object-contain object-top"
            priority
            sizes="(max-width: 768px) 100vw, 36vw"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[32%] sm:h-[30%] flex items-center justify-center px-4 sm:px-5 py-3 sm:py-4 text-center"
            style={{
              background: 'linear-gradient(to top, rgba(91, 44, 111, 0.95), rgba(91, 44, 111, 0.85))',
            }}
          >
            <blockquote className="text-base sm:text-lg font-medium leading-relaxed md:text-xl italic flex-1 flex items-center justify-center" style={{ color: '#c4a574' }}>
              <span className="max-w-full">
                &ldquo;UX design is not about what the designer prefers, but about what the user needs.&rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
