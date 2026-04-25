export const defaultSiteContent = {
  title: 'Main',
  hero: {
    badge: 'UX Designer + AI Product Builder',
    headline: 'I design products that feel simple to use — and I build fast prototypes to prove what works.',
    subheadline:
      'I combine user research, prototyping, and AI-assisted development to turn messy problems into clear, testable solutions. Background in teaching and retail means I’m strong at communication and real-world constraints.',
    ctaPrimary: { label: 'View selected projects', href: '#projects' },
    ctaSecondary: { label: 'Open resume', href: '/resume' },
    bullets: [
      'UX grounded in behavior: clear journeys, states, and decision points.',
      'AI workflows for ideation → prototype → iteration (Cursor + Claude).',
      'Frontend fluency (React / Next.js / Tailwind) to collaborate and ship.',
    ],
    portraitCaptionTitle: 'Alexander B. Henriksen',
    portraitCaptionBody: 'UX design is not about what the designer prefers, but about what the user needs.',
  },
  strengths: {
    headline: 'What I bring',
    intro:
      'I’m not just making screens—I’m helping teams make better decisions, validate ideas quickly, and ship experiences that feel easy.',
    items: [
      {
        title: 'UX grounded in real user behavior',
        body: 'I use research, journey mapping, and clear interaction states to reduce friction and help people complete tasks confidently.',
      },
      {
        title: 'AI-assisted prototyping & iteration',
        body: 'I use tools like Cursor and Claude to explore ideas, generate quick prototypes, and iterate faster—without losing product judgment.',
      },
      {
        title: 'Frontend fluency',
        body: 'React / Next.js / Tailwind lets me collaborate closely with developers, design within constraints, and ship believable prototypes.',
      },
      {
        title: 'Business & communication background',
        body: 'Teaching and retail trained me to explain complex topics clearly, align stakeholders, and make practical trade-offs.',
      },
    ],
    summary: 'strong communication skills and hands-on frontend understanding.',
  },
  aiWorkflow: {
    headline: 'My AI workflow',
    intro:
      'I use AI as a practical accelerator: to explore options quickly, prototype faster, and improve quality through more iterations.',
    steps: [
      {
        title: '1) Frame the problem',
        body: 'Turn the brief into a clear question, assumptions, and success criteria so the team knows what “good” looks like.',
      },
      {
        title: '2) Explore with AI (fast, not final)',
        body: 'Use Claude/Cursor to generate options, edge cases, microcopy ideas, and alternative flows—then apply design judgment.',
      },
      {
        title: '3) Prototype what matters',
        body: 'Build a testable prototype (Figma or frontend) to validate the riskiest parts: comprehension, friction, and trust.',
      },
      {
        title: '4) Iterate with feedback loops',
        body: 'Run quick checks, refine hierarchy and states, and improve clarity. AI helps speed up iteration, not replace decisions.',
      },
    ],
    outro: 'faster prototyping, clearer UX writing, better edge-case coverage, and a tighter design→build handoff.',
  },
  capabilities: {
    headline: 'Capabilities',
    intro:
      'The work I can support end-to-end—especially when you need both strong UX and a fast path to a working prototype.',
    groups: [
      {
        title: 'UX research',
        items: ['Interview planning + synthesis', 'Behavior + needs mapping', 'Insights → design principles'],
      },
      {
        title: 'UX design',
        items: ['User journeys, flows, and states', 'Wireframes → prototypes', 'Information hierarchy + clarity'],
      },
      {
        title: 'Product & delivery',
        items: ['Scope and trade-offs', 'Prototype-to-build collaboration', 'Design systems mindset'],
      },
      {
        title: 'Frontend & AI-assisted build',
        items: ['React / Next.js / Tailwind', 'Rapid prototyping with Cursor + Claude', 'Component thinking and UI states'],
      },
    ],
    tags: ['Figma', 'React', 'Next.js', 'Tailwind', 'Expo', 'Cursor', 'Claude', 'User journeys', 'Prototyping'],
  },
  projects: {
    headline: 'Projects',
    intro:
      'Selected case studies. Each one is framed like a recruiter would scan: problem, role, process, solution, and outcome.',
    items: [
      {
        key: 'oakedex',
        title: 'Oakedex',
        subtitle: 'Digital Pokémon TCG binder app',
        summary:
          'Oakedex is a digital binder that helps collectors track and organize Pokémon cards across master sets and single‑Pokémon binders. The app focuses on fast browsing, clear progress feedback, and frictionless “missing card” flows.',
        sections: {
          problem:
            'Collectors track multiple sets and single‑Pokémon binders—and quickly lose overview. The product needed fast browsing, clear progress feedback, and low-friction updates.',
          role: 'UX + product decisions, interaction design, and implementation (React). Wireframes in Figma → responsive UI and reusable components.',
          process:
            'Started with core flows (browse → find missing → update), designed key states (owned / missing / variants), then iterated the UI with tight feedback loops in code.',
          solutionBullets: [
            'Binder collections with progress tracking',
            'Card selection modals for variant handling',
            'Consistent dark UI with clear hierarchy',
            'Designed for fast daily collector usage on mobile',
          ],
          outcome:
            'A complete end-to-end prototype with real flows and UI states. Key learning: small state design decisions (variants, missing prints) drive perceived quality for collectors.',
        },
      },
      {
        key: 'cmdrtools',
        title: 'CMDRtools',
        subtitle: 'Commander deck & match tracker',
        summary:
          'CMDRtools is a companion app for Magic: The Gathering Commander players. It helps you organize decks, track games, and capture match results in a way that supports both casual playgroups and more structured sessions.',
        sections: {
          problem:
            'Commander nights are busy—tracking games and stats often becomes a distraction. The app needed quick setup, big tap targets, and useful history without friction.',
          role: 'UX design + interaction patterns + implementation. Focused on mobile-first flows for real-time use.',
          process:
            'Sketched flows in Figma, then built and refined components in Expo/React Native to reduce taps and keep the “game night” experience lightweight.',
          solutionBullets: [
            'Deck organization and quick access during play',
            'Match tracking flows designed for speed',
            'Clear, consistent UI built for dark environments',
          ],
          outcome:
            'A usable mobile companion with repeatable flows and a structured data model for decks + history. Learning: designing for “in the moment” use is mostly about reducing decisions and taps.',
        },
      },
      {
        key: 'clarivo',
        title: 'Clarivo',
        subtitle: 'AI “parent insight” guide for games & slang',
        summary:
          'Clarivo helps parents understand the online games, hobbies, trends, and slang their child talks about. Type a word or phrase, and Clarivo returns a calm explanation plus conversation starters.',
        sections: {
          problem:
            'Parents hear game slang and trends but don’t know how to respond. They need calm explanations and conversation starters—fast, without feeling judged or “out of touch”.',
          role: 'UX + tone-of-voice, prompt design, and UI implementation. Designed a structured result format (what it is / why kids care / conversation starters).',
          process:
            'Iterated prompts and UI components together: example chips reduce blank-state friction, structured JSON output improves consistency, and history/favorites support repeat use.',
          solutionBullets: [
            'Ask screen with example prompts to reduce friction',
            'Results designed for clarity + conversation starters',
            'Favorites and history for quick revisits',
          ],
          outcome:
            'A friendly AI-powered guide with safe fallbacks and repeatable structure. Learning: tone and structure matter as much as “accuracy” when trust is the product.',
        },
      },
      {
        key: 'noyer-overwatch',
        title: 'Noyer Overwatch',
        subtitle: 'Internship project • Sales alert dashboard',
        summary:
          'Noyer Overwatch is an automated “sales alert robot” built during my internship at noyer.dk. It monitors open sales across Shopify and e-conomic and sends email alerts when something needs attention.',
        sections: {
          problem:
            'Sales follow-up can slip when orders sit too long across systems. The team needed a simple daily overview and proactive alerts based on per-item thresholds.',
          role: 'Internship project: product framing, dashboard UX, and full-stack implementation (Node.js + Express).',
          process:
            'Mapped operational workflow, defined “urgency” rules, then built a dashboard optimized for quick daily checks. Iterated rules and UI together to keep alerts trustworthy.',
          solutionBullets: [
            'Monitors both Shopify orders and e-conomic documents with one unified model',
            'Per-item thresholds with unit conversion (days / weeks / months)',
            'Manual “Poll Now” trigger + progress reporting during long Shopify scans',
            'Alert archive + restore workflow (set a new alert date)',
            'Demo mode and dry-run mode for safer development',
          ],
          outcome:
            'A working internal tool with automated alerts and a clear dashboard for follow-up. Learning: operational UX is about clarity, prioritization, and preventing false alarms.',
        },
      },
    ],
  },
  about: {
    headline: 'About',
    name: 'Alexander',
    meta: 'UX Design student @ EK Lyngby · Graduating summer 2026',
    tagline: 'UX Designer / AI Product Builder',
    cards: [
      {
        title: 'UX & Product Mindset',
        paragraphs: [
          'I’m Alexander—soon graduating from EK Lyngby’s Multimedia Design program (summer 2026) with a strong focus on UX.',
          'I work from user behavior: research, journeys, and clear interaction states. My goal is to make complex topics feel obvious and calm to use.',
          'I also build. Using AI-assisted workflows (Cursor + Claude), I move quickly from idea → prototype → iteration, which helps teams validate direction earlier and reduce ambiguity.',
          'Before UX, I trained as a teacher and worked in retail. That background shaped how I communicate: clear, structured, and grounded in the real world.',
          'I’m especially comfortable translating “technical” or AI-driven features into experiences that feel trustworthy and understandable.',
        ],
      },
      {
        title: 'Entrepreneurial Experience',
        paragraphs: [
          'Alongside my studies, I run a small 3D printing business where I design and sell custom products at markets and on a made-to-order basis.',
          'It keeps my product instincts sharp: pricing, feedback loops, constraints, and making something real that people actually choose to buy.',
        ],
      },
      {
        title: 'Programs I work with',
        paragraphs: ['(This card shows your logos automatically — no text needed.)'],
      },
      {
        title: 'Personal Profile',
        paragraphs: [
          'Outside of work, I’m into video games and collectible card games (especially Magic: The Gathering).',
          'I’m happiest when I’m grounded—spending time with my wife and stepson.',
          'We share the nerdy life together: board games, video games, and small projects.',
        ],
        highlight: 'I’m a nerd at heart—and I’m proud of it.',
      },
    ],
  },
  contact: {
    email: 'alexanderbghenriksen@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alexander-henriksen-298699383/',
    widgetTitle: 'Contact me',
    widgetSubtitle: 'Got an idea or a project? Let’s talk.',
    widgetButtonLabel: "Let’s connect",
  },
} as const;

