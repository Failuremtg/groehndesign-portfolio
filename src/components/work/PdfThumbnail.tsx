"use client";

import { useMemo, useState } from 'react';

export function PdfThumbnail({
  pdfUrl,
  alt,
}: {
  pdfUrl: string;
  alt: string;
}) {
  const src = useMemo(() => `${pdfUrl}#page=1`, [pdfUrl]);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="aspect-video bg-[var(--muted)] border-2 border-[var(--border)] rounded-2xl mb-4 flex items-center justify-center overflow-hidden text-[var(--text-muted)] relative"
      aria-label={alt}
      role="img"
    >
      <iframe
        title={`${alt} (page 1)`}
        src={src}
        className="w-full h-full border-0"
        onLoad={() => setLoaded(true)}
      />
      {!loaded ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--text-muted)] bg-[var(--muted-2)]">
          Loading…
        </div>
      ) : null}
    </div>
  );
}

