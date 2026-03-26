import type { Project } from '@/types';

/**
 * Add your work here. For each project:
 * 1. Put your PDF in public/work/ as {pdfSlug}.pdf
 * 2. Add an entry below with title, description, slug (URL-friendly id), pdfSlug (filename without .pdf)
 * 3. Set `category` to group it on the Work page
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'Short description of the project.',
    slug: 'project-one',
    pdfSlug: 'project-one',
    category: 'School projects',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Another project — replace with your own.',
    slug: 'project-two',
    pdfSlug: 'project-two',
    category: 'Vite coding',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Third project.',
    slug: 'project-three',
    pdfSlug: 'project-three',
    category: 'Ux design',
  },
  {
    id: '4',
    title: 'Airport terminal design',
    description:
      'Design a new British Airways airport terminal with backpackers in focus.',
    slug: 'airport-terminal-design-british-airways',
    pdfSlug: 'airport-design-british-airways',
    category: 'School projects',
  },
];
