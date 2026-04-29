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
  process: {
    headline: 'Proces',
    intro:
      'Discover → Define → Design → Prototype → Test → Improve. AI‑værktøjer kan gøre ideation, kodning og iteration hurtigere — men beslutninger skal stadig være forankret i brugerbehov.',
    steps: [
      { title: 'Discover', body: 'Forstå brugerne, konteksten og de reelle constraints.' },
      { title: 'Define', body: 'Afklar problemet, succeskriterierne og hvad vi tester.' },
      { title: 'Design', body: 'Design flows, states og hierarki, der reducerer friktion og forvirring.' },
      { title: 'Prototype', body: 'Byg en testbar prototype (Figma eller frontend) og valider det vigtigste.' },
      { title: 'Test', body: 'Tjek forståelse, edge cases og usability — og iterér hurtigt.' },
      { title: 'Improve', body: 'Forfin med feedback. AI kan øge tempoet, men erstatter ikke UX‑dømmekraft.' },
    ],
  },
  skills: {
    headline: 'Kompetencer',
    intro: 'Et praktisk værktøjssæt til at gøre brugerbehov til testbare digitale løsninger.',
    groups: [
      {
        title: 'UX & Research',
        items: ['Brugerinterviews', 'Personas', 'User journeys', 'Usability checks', 'Syntese af indsigter'],
      },
      {
        title: 'Design & Prototyping',
        items: ['Informationshierarki', 'Wireframes', 'Prototyper (Figma)', 'Interaction states', 'UX writing'],
      },
      {
        title: 'Frontend & Web',
        items: ['React', 'Next.js', 'Tailwind', 'Expo/React Native', 'Komponentsystemer'],
      },
      {
        title: 'AI‑værktøjer',
        items: ['Cursor', 'Claude', 'Prompt‑iteration', 'Hurtig prototyping', 'Edge‑case exploration'],
      },
      {
        title: 'Analytics',
        items: ['Grundlæggende event‑tænkning', 'Qual + quant framing', 'Funnel‑tænkning', 'Succesmål (metrics)'],
      },
    ],
  },
  projects: {
    headline: 'Projekter',
    intro: 'Udvalgte case studies — skrevet så de er nemme at scanne: problem, rolle, proces, løsning og resultat/læring.',
    items: [
      {
        key: 'oakedex',
        title: 'Oakedex',
        subtitle: 'Digital Pokémon TCG binder-app',
        summary:
          'Oakedex er en digital binder, der hjælper samlere med at tracke og organisere Pokémon-kort på tværs af master sets og single‑Pokémon binders. Fokus er hurtig browsing, tydelig progress og et friktionsfrit “mangler-kort” flow.',
        tools: ['UX-research', 'Figma', 'React', 'TCG APIs'],
        sections: {
          problem:
            'Samlere tracker flere sets og single‑Pokémon binders — og mister hurtigt overblikket. Produktet skulle gøre det nemt at browse, se progress og opdatere status uden friktion.',
          role: 'UX + produktbeslutninger, interaktionsdesign og implementering (React). Wireframes i Figma → responsivt UI og genbrugelige komponenter.',
          process:
            'Startede med kerneflows (browse → find mangler → opdater), designede nøgle-states (ejet / mangler / varianter) og itererede UI’et med korte feedback-loops direkte i kode.',
          solutionBullets: [
            'Binder-collections med progress tracking',
            'Kortvælger-modals til håndtering af varianter',
            'Klar informationshierarki og tydelige states',
            'Designet til hurtig “daglig” brug på mobil',
          ],
          outcome:
            'En komplet end-to-end prototype med reelle flows og UI-states. Læring: små state-beslutninger (varianter, manglende prints) betyder meget for oplevet kvalitet hos samlere.',
        },
      },
      {
        key: 'cmdrtools',
        title: 'CMDRtools',
        subtitle: 'Commander deck- og match-tracker',
        summary:
          'CMDRtools er en companion-app til Magic: The Gathering Commander. Den hjælper med at organisere decks, tracke games og gemme resultater — uden at stjæle fokus fra selve spilaftenen.',
        tools: ['UX-design', 'Expo', 'React Native', 'Firebase'],
        sections: {
          problem:
            'Commander-aftener er travle — tracking af spil og stats bliver hurtigt en distraktion. App’en skulle have hurtig opsætning, store tap-targets og nyttig historik uden friktion.',
          role: 'UX-design + interaktionsmønstre + implementering. Fokus på mobile-first flows til brug “i øjeblikket”.',
          process:
            'Skitsede flows i Figma og byggede derefter i Expo/React Native. Itererede komponenter for at reducere antal taps og holde oplevelsen let under spil.',
          solutionBullets: [
            'Deck-organisering og hurtig adgang under spil',
            'Match-tracking flows designet til speed',
            'Konsistent UI med fokus på overblik',
          ],
          outcome:
            'En brugbar mobil companion med gentagelige flows og en struktureret datamodel til decks + historik. Læring: “i øjeblikket” UX handler især om at reducere beslutninger og taps.',
        },
      },
      {
        key: 'clarivo',
        title: 'Clarivo',
        subtitle: 'AI “parent insight”-guide til spil & slang',
        summary:
          'Clarivo hjælper forældre med at forstå online spil, trends og slang, som deres barn nævner. Skriv et ord/udtryk, og få en rolig forklaring + samtalestartere.',
        tools: ['Prompting', 'TypeScript', 'UI-design', 'AI APIs'],
        sections: {
          problem:
            'Forældre hører gaming-slang og trends, men ved ikke hvordan de skal reagere. De har brug for rolige forklaringer og samtalestartere — hurtigt og uden at føle sig “bagud”.',
          role: 'UX + tone-of-voice, prompt design og UI-implementering. Designede et struktureret resultatformat (hvad det er / hvorfor børn går op i det / samtalestartere).',
          process:
            'Itererede prompts og UI sammen: eksempel-chips reducerer blank-state friktion, struktureret output øger konsistens, og historik/favoritter understøtter gentagen brug.',
          solutionBullets: [
            '“Spørg”-skærm med eksempler for at reducere friktion',
            'Resultater designet til klarhed + samtalestartere',
            'Favoritter og historik til hurtige genbesøg',
          ],
          outcome:
            'En venlig AI-guide med sikre fallbacks og gentagelig struktur. Læring: tone og struktur betyder lige så meget som “korrekthed”, når tillid er produktet.',
        },
      },
      {
        key: 'noyer-overwatch',
        title: 'Noyer Overwatch',
        subtitle: 'Praktikprojekt • Salgsalert-dashboard',
        summary:
          'Noyer Overwatch er en automatiseret “salgsalert-robot”, bygget under mit praktikforløb hos noyer.dk. Den overvåger åbne salg på tværs af Shopify og e-conomic og sender mails, når noget kræver opfølgning.',
        tools: ['Product framing', 'Node.js', 'Express', 'Shopify/e-conomic'],
        sections: {
          problem:
            'Opfølgning kan glide, når ordrer ligger for længe på tværs af systemer. Teamet havde brug for et simpelt dagligt overblik og proaktive alerts baseret på thresholds per vare.',
          role: 'Praktikprojekt: product framing, dashboard-UX og full-stack implementering (Node.js + Express).',
          process:
            'Kortlagde workflow, definerede “urgency”-regler og byggede derefter et dashboard optimeret til hurtige daglige checks. Itererede regler og UI sammen for at holde alerts troværdige.',
          solutionBullets: [
            'Overvåger både Shopify-ordrer og e-conomic-dokumenter via én samlet model',
            'Per-vare thresholds med enhedskonvertering (dage / uger / måneder)',
            'Manuel “Poll Now” + progress-indikator under lange Shopify-scans',
            'Alert-arkiv + restore-workflow (sæt ny alert-dato)',
            'Demo mode og dry-run mode for sikrere udvikling',
          ],
          outcome:
            'Et fungerende internt værktøj med automatiske alerts og et klart dashboard til opfølgning. Læring: operational UX handler om klarhed, prioritering og at undgå falske alarmer.',
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
    widgetTitle: 'Kontakt mig',
    widgetSubtitle: 'Har du en idé eller et projekt? Lad os tage en snak.',
    widgetButtonLabel: 'Kontakt',
  },
} as const;

