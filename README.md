# Portfolio — Multimedia Designer

Portfolio site for a multimedia designer. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Setup

```bash
cd apps-dev/portfolio
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Deployment trigger: update

## Structure

- **`src/app/`** — App Router: `layout.tsx`, `page.tsx`, `globals.css`
- **`src/components/`** — Sections: `Hero`, `WorkSection`, `AboutSection`, `ContactSection`
- **`src/types/`** — Shared types (e.g. `Project` for work items)

## What’s included

- **Home** — One-pager: Hero, Work, About, Contact (scroll down). Nav: Home, Resume, Contact.
- **Resume** — Separate page at `/resume`. Put your PDF at `public/resume.pdf`.
- **Hero** — Name, title, short intro (placeholder text)
- **Work** — Grid of placeholder projects; each has title, description, and a slot for image/video
- **About** — Bio section (placeholder)
- **Contact** — Placeholder email and social links

## Next steps (when you’re ready)

1. **Content** — Replace placeholders in `Hero`, `AboutSection`, `ContactSection` and the `placeholderProjects` array in `WorkSection.tsx`
2. **Media** — Add images/videos under `public/` and use the `Project` type’s `mediaUrl` (and optional `link`) in your data
3. **Styling** — Adjust `tailwind.config.ts`, `globals.css`, and component classes
## Adding your work (PDF slides)

1. Put your PDF in `public/work/` (e.g. `branding-2024.pdf`).
2. Edit `src/data/work.ts`: add an entry with `title`, `description`, `slug`, and `pdfSlug` (filename without `.pdf`).

Clicking a project opens an on-site PDF viewer; "Open in new tab" opens the PDF directly.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start dev server         |
| `npm run build` | Production build      |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint              |
| `npm run typecheck` | Run TypeScript check |
