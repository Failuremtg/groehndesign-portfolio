"use client";
import { useEffect, useMemo, useState } from 'react';

export function PdfModal({
  open,
  onClose,
  pdfUrl,
  title,
  description,
}: {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description?: string;
}) {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (!open) return;
    setPageNumber(1);
  }, [open, pdfUrl]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setPageNumber((p) => p + 1);
      if (e.key === 'ArrowLeft') setPageNumber((p) => Math.max(1, p - 1));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const pageSrc = useMemo(() => `${pdfUrl}#page=${pageNumber}`, [pdfUrl, pageNumber]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`PDF viewer: ${title}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-4xl rounded-2xl border border-[var(--border)] bg-background shadow-xl overflow-hidden">
        <div className="flex items-start justify-between gap-4 px-4 py-3 border-b border-[var(--border)]">
          <div className="min-w-0">
            <p className="text-secondary font-medium truncate">{title}</p>
            {description ? (
              <p className="text-xs text-white/60 mt-1">{description}</p>
            ) : null}
            <p className="text-xs text-white/60 mt-1">Page {pageNumber}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
              disabled={pageNumber === 1}
              className="px-3 py-1.5 rounded-lg bg-primary/20 border border-[var(--border)] text-secondary/90 hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setPageNumber((p) => p + 1)}
              className="px-3 py-1.5 rounded-lg bg-primary/20 border border-[var(--border)] text-secondary/90 hover:bg-primary/30"
            >
              Next
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-muted/60 border border-[var(--border)] text-secondary/90 hover:bg-muted/90"
            >
              Close
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="rounded-xl bg-muted/30 border border-[var(--border)] overflow-hidden">
            <iframe
              title={`${title} - page ${pageNumber}`}
              src={pageSrc}
              className="w-full border-0"
              style={{ height: pageNumber === 1 ? 420 : '72vh' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

