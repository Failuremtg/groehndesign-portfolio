/* eslint-disable react/no-array-index-key */
"use client";

import { useMemo, useState } from 'react';
import type { Project, WorkCategory } from '@/types';
import { projects } from '@/data/work';
import dynamic from 'next/dynamic';

const PdfThumbnail = dynamic(
  () => import('@/components/work/PdfThumbnail').then((m) => m.PdfThumbnail),
  { ssr: false },
);

const PdfModal = dynamic(
  () => import('@/components/work/PdfModal').then((m) => m.PdfModal),
  { ssr: false },
);

interface WorkSectionProps {
  id: string;
}

function PdfCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const pdfUrl = `/work/${project.pdfSlug}.pdf`;

  return (
    <li className="rounded-lg border border-[var(--border)] bg-muted/50 overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block p-4 w-full text-left hover:bg-muted/70 transition-colors"
      >
        <PdfThumbnail pdfUrl={pdfUrl} alt={project.title} />
        <h3 className="font-semibold text-secondary">{project.title}</h3>
        <p className="mt-1 text-sm opacity-80">{project.description}</p>
        <p className="mt-2 text-sm text-secondary">View slides →</p>
      </button>
    </li>
  );
}

export function WorkSection({ id }: WorkSectionProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: WorkCategory[] = ['Ux design', 'Vite coding', 'School projects'];
  const activePdfUrl = useMemo(() => {
    if (!activeProject) return '';
    return `/work/${activeProject.pdfSlug}.pdf`;
  }, [activeProject]);

  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-2xl font-bold md:text-3xl text-secondary">Work</h2>
      <p className="mt-2 opacity-80">
        Selection of projects. Add PDFs in `public/work/` and list them in `src/data/work.ts`.
      </p>

      <div className="mt-8 space-y-10">
        {categories.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="text-lg font-semibold text-secondary mb-4">{category}</h3>
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project) => (
                  <PdfCard key={project.id} project={project} onOpen={setActiveProject} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <PdfModal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        pdfUrl={activePdfUrl}
        title={activeProject?.title ?? ''}
        description={activeProject?.description}
      />
    </section>
  );
}
