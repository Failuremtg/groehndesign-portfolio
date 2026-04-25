"use client";

import { useEffect, useMemo, useState } from 'react';

export type ContactWidgetContent = {
  email?: string;
  linkedin?: string;
  widgetTitle?: string;
  widgetSubtitle?: string;
  widgetButtonLabel?: string;
};

const defaultContent: Required<ContactWidgetContent> = {
  email: 'alexanderbghenriksen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alexander-henriksen-298699383/',
  widgetTitle: 'Contact me',
  widgetSubtitle: "Got an idea or a project? Let's talk.",
  widgetButtonLabel: "Let's connect",
};

export function ContactWidget({ content }: { content?: ContactWidgetContent }) {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const c = useMemo(
    () => ({
      ...defaultContent,
      ...content,
    }),
    [content],
  );

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
            <span className="text-sm text-[var(--foreground)] bg-[var(--muted)] border-2 border-[var(--border)] rounded-full px-4 py-1.5 shadow-sm">
              Click me
            </span>
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--foreground)]"
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
        <div className="paper-card w-[min(94vw,460px)] rounded-3xl overflow-hidden bg-[var(--background)]">
          <div
            className="flex items-center justify-between px-5 py-4 border-b-2 border-[var(--border)] bg-[var(--muted-2)]"
          >
            <div className="min-w-0">
              <p className="text-secondary font-semibold leading-tight text-lg">{c.widgetTitle}</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                {c.widgetSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="paper-button rounded-2xl px-3 py-2 text-[var(--foreground)]"
              aria-label="Close contact popup"
            >
              ✕
            </button>
          </div>

          <div className="p-5 space-y-4">
            <a
              href={`mailto:${c.email}`}
              className="paper-card-2 w-full inline-flex items-center gap-4 rounded-3xl px-5 py-4 text-[var(--foreground)] transition-all hover:-translate-y-0.5"
            >
              <span className="w-12 h-12 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 8v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">Email</span>
                <span className="block text-[var(--text-muted)] truncate text-sm">{c.email}</span>
              </span>
              <span className="ml-auto text-[var(--text-faint)] text-sm">→</span>
            </a>

            <a
              href={c.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-card-2 w-full inline-flex items-center gap-4 rounded-3xl px-5 py-4 text-[var(--foreground)] transition-all hover:-translate-y-0.5"
            >
              <span className="w-12 h-12 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4V9h4v2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2 9h4v12H2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">LinkedIn</span>
                <span className="block text-[var(--text-muted)] truncate text-sm">Open profile</span>
              </span>
              <span className="ml-auto text-[var(--text-faint)] text-sm">→</span>
            </a>

            <p className="text-xs text-[var(--text-faint)] pt-1">
              Tip: press <span className="text-[var(--text-muted)]">Esc</span> to close.
            </p>
          </div>
        </div>
      ) : null}

      {/* Launcher button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="paper-button mt-4 ml-auto inline-flex items-center gap-3 rounded-full px-5 py-4 text-base text-[var(--foreground)] transition-all hover:-translate-y-0.5"
        aria-label={open ? 'Close contact popup' : 'Open contact popup'}
      >
        <span className="relative w-11 h-11 rounded-full bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-[var(--foreground)] relative" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <span className="font-semibold">{c.widgetButtonLabel}</span>
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

