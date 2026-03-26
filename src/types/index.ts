export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  /** PDF filename in public/work/ (e.g. 'my-project' for my-project.pdf) */
  pdfSlug: string;
  category: WorkCategory;
  /** Optional: tags */
  tags?: string[];
}

export type WorkCategory = 'Ux design' | 'Vite coding' | 'School projects';
