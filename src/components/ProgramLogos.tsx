const logos: { id: string; title: string; description: string; svg: React.ReactNode }[] = [
  {
    id: 'photoshop',
    title: 'Photoshop',
    description: 'Image editing and design.',
    svg: (
      <img src="/icons/adobe-photoshop.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
  {
    id: 'illustrator',
    title: 'Illustrator',
    description: 'Vector graphics and illustration.',
    svg: (
      <img src="/icons/adobe-illustrator.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
  {
    id: 'indesign',
    title: 'InDesign',
    description: 'Layout and publishing.',
    svg: (
      <img src="/icons/adobe-indesign.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
  {
    id: 'figma',
    title: 'Figma',
    description: 'UI/UX design and prototyping.',
    svg: (
      <img src="/icons/figma.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
  {
    id: 'claude',
    title: 'Claude AI',
    description: 'AI assistant for writing and coding.',
    svg: (
      <img src="/icons/claude-ai.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
  {
    id: 'cursor',
    title: 'Cursor',
    description: 'AI-powered code editor.',
    svg: (
      <img src="/icons/cursor.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
  {
    id: 'tinkercad',
    title: 'Tinkercad',
    description: '3D modeling for printing and design.',
    svg: (
      <img src="/icons/tinkercad.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
  {
    id: 'shopify',
    title: 'Shopify',
    description: 'E-commerce platform for online stores.',
    svg: (
      <img src="/icons/shopify.svg" alt="" className="w-full h-full ink-icon" aria-hidden />
    ),
  },
];

export function ProgramLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8 flex-1 min-h-0 content-start">
      {logos.map(({ id, title, description, svg }) => (
        <div
          key={id}
          className="group relative flex flex-col items-center justify-center gap-3 w-[calc((100%-3rem)/3)] md:w-[calc((100%-6rem)/4)] flex-shrink-0"
          title={title}
        >
          {/* Hover overlay */}
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 px-3 py-3 rounded-xl bg-muted border border-[var(--border)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[140px] max-w-[200px]"
            role="tooltip"
            aria-label={`${title}: ${description}`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 border border-[var(--border)] flex-shrink-0">
                <span className="w-6 h-6 block [&>img]:w-full [&>img]:h-full">{svg}</span>
              </span>
              <p className="text-xs text-[var(--text-muted)] text-center leading-snug">
                {description}
              </p>
            </div>
            {/* Arrow pointing down to icon */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[6px] border-transparent border-t-[var(--muted)] w-0 h-0" aria-hidden />
          </div>

          <span
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-xl bg-primary/20 border border-[var(--border)] flex-shrink-0"
            aria-hidden
          >
            <span className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 block [&>img]:w-full [&>img]:h-full">{svg}</span>
          </span>
          <span className="text-sm text-[var(--text-muted)] text-center leading-tight" aria-hidden>
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
