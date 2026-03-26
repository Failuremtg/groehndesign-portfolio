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
      className="aspect-video bg-muted rounded mb-4 flex items-center justify-center overflow-hidden text-secondary/80 relative"
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
        <div className="absolute inset-0 flex items-center justify-center text-sm opacity-80 bg-muted/20">
          Loading…
        </div>
      ) : null}
    </div>
  );
}

