"use client";

import { useEffect, useState } from 'react';

const EMAIL = 'alexanderbghenriksen@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/alexander-henriksen-298699383/';

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    setHasOpened(true);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Animated hint arrow (only when closed) */}
      {!open && !hasOpened ? (
        <div
          className="pointer-events-none absolute -top-12 right-10 opacity-0 animate-[hint_2.6s_ease-in-out_infinite]"
          aria-hidden
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/80 bg-black/30 border border-[var(--border)] rounded-full px-4 py-1.5">
              Click me
            </span>
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              className="text-secondary drop-shadow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8c4.5 0 8 3.5 9.5 8.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M16.2 14.2l-.7 2.9-2.8-1"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : null}

      {/* Popup */}
      {open ? (
        <div className="w-[min(94vw,460px)] rounded-3xl border border-[var(--border)] bg-background shadow-2xl overflow-hidden">
          <div
            className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]"
            style={{
              background:
                'linear-gradient(135deg, rgba(91, 44, 111, 0.55), rgba(228, 168, 83, 0.18))',
            }}
          >
            <div className="min-w-0">
              <p className="text-secondary font-semibold leading-tight text-lg">Contact me</p>
              <p className="text-sm text-white/70 mt-1">
                Got an idea or a project? Let&apos;s talk.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-secondary/80 hover:text-secondary hover:bg-white/10 transition-colors"
              aria-label="Close contact popup"
            >
              ✕
            </button>
          </div>

          <div className="p-5 space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="w-full inline-flex items-center gap-4 rounded-2xl bg-primary/10 border border-[var(--border)] px-5 py-4 text-secondary hover:bg-primary/20 transition-all hover:-translate-y-0.5"
            >
              <span className="w-12 h-12 rounded-2xl bg-primary/20 border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 8v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">Email</span>
                <span className="block text-white/70 truncate text-sm">{EMAIL}</span>
              </span>
              <span className="ml-auto text-white/50 text-sm">→</span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center gap-4 rounded-2xl bg-primary/10 border border-[var(--border)] px-5 py-4 text-secondary hover:bg-primary/20 transition-all hover:-translate-y-0.5"
            >
              <span className="w-12 h-12 rounded-2xl bg-primary/20 border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4V9h4v2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2 9h4v12H2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">LinkedIn</span>
                <span className="block text-white/70 truncate text-sm">Open profile</span>
              </span>
              <span className="ml-auto text-white/50 text-sm">→</span>
            </a>

            <p className="text-xs text-white/50 pt-1">
              Tip: press <span className="text-white/70">Esc</span> to close.
            </p>
          </div>
        </div>
      ) : null}

      {/* Launcher button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 ml-auto inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-5 py-4 text-base text-secondary transition-all shadow-2xl hover:-translate-y-0.5"
        style={{
          background:
            'linear-gradient(135deg, rgba(228, 168, 83, 0.25), rgba(91, 44, 111, 0.35))',
        }}
        aria-label={open ? 'Close contact popup' : 'Open contact popup'}
      >
        <span className="relative w-11 h-11 rounded-full bg-primary/25 border border-[var(--border)] flex items-center justify-center">
          <span className="absolute -inset-1 rounded-full bg-primary/10 blur-sm" aria-hidden />
          <svg className="w-5 h-5 text-secondary relative" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <span className="font-semibold">Let&apos;s connect</span>
      </button>

      {/* Local keyframes for hint animation */}
      <style jsx>{`
        @keyframes hint {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          15% {
            opacity: 1;
            transform: translateY(0px);
          }
          65% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(6px);
          }
        }
      `}</style>
    </div>
  );
}

