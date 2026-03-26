'use client';

import { useEffect, useState } from 'react';

const FADE_DISTANCE = 1400; // px scroll over which hero gradually fades to 5%
const MIN_OPACITY = 0.05;
const HEADER_HEIGHT_PX = 64; // matches `top-16` header height

export function HeroScrollFade({ children }: { children: React.ReactNode }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const y = typeof window !== 'undefined' ? window.scrollY : 0;
      const progress = Math.min(y / FADE_DISTANCE, 1);
      const value = 1 - progress * (1 - MIN_OPACITY);
      setOpacity(value);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer so page has scroll space while hero is fixed */}
      <div style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX}px)` }} aria-hidden />
      {/* Fixed hero: does not scroll at all */}
      <div
        className="fixed inset-x-0 z-0 transition-opacity duration-200"
        style={{
          top: HEADER_HEIGHT_PX,
          height: `calc(100vh - ${HEADER_HEIGHT_PX}px)`,
          opacity,
        }}
      >
        {children}
      </div>
    </>
  );
}
