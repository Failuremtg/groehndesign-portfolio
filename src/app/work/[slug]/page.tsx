import Link from 'next/link';
import { projects } from '@/data/work';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkViewPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const pdfUrl = `/work/${project.pdfSlug}.pdf`;

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0a14]">
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[#0f0a14] px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-secondary hover:text-secondary-hover transition-colors"
          >
            ← Back to Work
          </Link>
          <h1 className="text-lg font-semibold text-secondary truncate max-w-[60vw]">{project.title}</h1>
          <p className="text-xs text-secondary/80 mt-1">{project.category}</p>
        </div>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-secondary-hover transition-colors text-sm"
        >
          Open in new tab
        </a>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <iframe
          src={pdfUrl}
          title={project.title}
          className="w-full max-w-4xl h-[calc(100vh-4rem)] rounded-lg border border-[var(--border)] bg-white"
        />
      </main>
    </div>
  );
}
