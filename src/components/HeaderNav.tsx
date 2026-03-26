"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "alexanderbghenriksen@gmail.com";
const CONTACT_LINKEDIN = "https://www.linkedin.com/in/alexander-henriksen-298699383/";

export function HeaderNav() {
  const [contactOpen, setContactOpen] = useState(false);

  const navItemBase =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base md:text-lg font-semibold text-secondary bg-primary/10 border border-transparent hover:bg-primary/20 hover:border-[var(--border)] transition-all";
  const navItemActive = "bg-primary/20 border-[var(--border)]";

  useEffect(() => {
    if (!contactOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactOpen]);

  return (
    <>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-black/20 backdrop-blur px-3 py-3">
          <a
            href="/"
            className={navItemBase}
          >
            Home
          </a>
          <a
            href="/#projects"
            className={navItemBase}
          >
            My work
          </a>
          <a
            href="/resume"
            className={navItemBase}
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className={[navItemBase, contactOpen ? navItemActive : ""].join(" ")}
          >
            Contact
          </button>
        </div>
      </nav>

      {contactOpen ? (
        <div
          className="fixed inset-0 z-[80] bg-black/70 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Contact"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setContactOpen(false);
          }}
        >
          <div className="w-full max-w-2xl rounded-2xl border border-[var(--border)] bg-background shadow-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[var(--border)] flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-secondary font-semibold text-lg">Contact me!</p>
                <p className="text-sm text-white/60 mt-1">Send me a message and I’ll get back to you.</p>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="px-3 py-2 rounded-xl bg-muted/60 border border-[var(--border)] text-secondary/90 hover:bg-muted/90 transition-colors"
              >
                Close
              </button>
            </div>

            <div className="p-5 grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-xl border border-[var(--border)] bg-primary/10 hover:bg-primary/15 transition-colors p-4"
                >
                  <p className="text-sm font-semibold text-secondary">Email</p>
                  <p className="text-sm text-white/70 mt-1 break-all">{CONTACT_EMAIL}</p>
                </a>
                <a
                  href={CONTACT_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[var(--border)] bg-primary/10 hover:bg-primary/15 transition-colors p-4"
                >
                  <p className="text-sm font-semibold text-secondary">LinkedIn</p>
                  <p className="text-sm text-white/70 mt-1 break-all">{CONTACT_LINKEDIN}</p>
                </a>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-muted/25 p-4">
                <p className="text-sm font-semibold text-secondary">Send me a message</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Clicking the button below will open your email app, so you can write a message to me.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-secondary text-black hover:opacity-90 transition-opacity"
                >
                  Open email app
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

