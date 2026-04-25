"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "alexanderbghenriksen@gmail.com";
const CONTACT_LINKEDIN = "https://www.linkedin.com/in/alexander-henriksen-298699383/";

export function HeaderNav() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemBase =
    "paper-button bg-[var(--muted)] hover:bg-[var(--muted-2)] inline-flex items-center justify-center rounded-2xl px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base font-semibold text-[var(--foreground)] whitespace-nowrap transition-transform";
  const navItemActive = "bg-[var(--muted-2)]";
  const brand = "Alexander";

  const t = {
    home: "Forside",
    work: "Projekter",
    resume: "CV",
    contact: "Kontakt",
    contactTitle: "Kontakt mig!",
    contactSubtitle: "Send mig en besked, så vender jeg tilbage.",
    email: "Email",
    linkedin: "LinkedIn",
    sendMessage: "Send mig en besked",
    openEmail: "Åbn mail-app",
    openEmailHint: "Knappen åbner din mail-app, så du kan skrive til mig.",
  };

  const hrefHome = "/";
  const hrefProjects = "/#projects";
  const hrefResume = "/resume";

  useEffect(() => {
    if (!contactOpen && !mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (contactOpen) setContactOpen(false);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactOpen, mobileMenuOpen]);

  return (
    <>
      <nav className="container mx-auto px-3 md:px-4 py-2 md:py-3 flex items-center justify-center relative">
        <div className="hidden md:inline-flex items-center gap-2 md:gap-3 rounded-3xl border-2 border-[var(--border)] bg-[var(--background)] px-2 md:px-3 py-2 md:py-3 shadow-[var(--shadow)]">
          <a
            href={hrefHome}
            className={navItemBase}
          >
            {t.home}
          </a>
          <a
            href={hrefProjects}
            className={navItemBase}
          >
            {t.work}
          </a>
          <a
            href={hrefResume}
            className={navItemBase}
          >
            {t.resume}
          </a>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className={[navItemBase, contactOpen ? navItemActive : ""].join(" ")}
          >
            {t.contact}
          </button>
        </div>

        <div className="md:hidden w-full flex items-center justify-between gap-2">
          <a
            href={hrefHome}
            className="paper-button bg-[var(--muted)] hover:bg-[var(--muted-2)] inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-semibold text-[var(--foreground)] whitespace-nowrap"
            onClick={() => setMobileMenuOpen(false)}
          >
            {brand}
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="paper-button bg-[var(--muted)] hover:bg-[var(--muted-2)] inline-flex items-center justify-center rounded-2xl p-2.5 text-[var(--foreground)] transition-transform"
            aria-expanded={mobileMenuOpen}
            aria-label="Åbn menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div className="md:hidden container mx-auto px-3 pb-3">
          <div className="rounded-3xl border-2 border-[var(--border)] bg-[var(--background)] p-2 grid gap-2 shadow-[var(--shadow)]">
            <a href={hrefHome} onClick={() => setMobileMenuOpen(false)} className={navItemBase}>
              {t.home}
            </a>
            <a href={hrefProjects} onClick={() => setMobileMenuOpen(false)} className={navItemBase}>
              {t.work}
            </a>
            <a href={hrefResume} onClick={() => setMobileMenuOpen(false)} className={navItemBase}>
              {t.resume}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setContactOpen(true);
              }}
              className={[navItemBase, contactOpen ? navItemActive : ""].join(" ")}
            >
              {t.contact}
            </button>
          </div>
        </div>
      ) : null}

      {contactOpen ? (
        <div
          className="fixed inset-0 z-[80] bg-black/50 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Contact"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setContactOpen(false);
          }}
        >
          <div className="paper-card w-full max-w-2xl rounded-3xl overflow-hidden bg-[var(--background)]">
            <div className="px-5 py-4 border-b-2 border-[var(--border)] flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-secondary font-semibold text-lg">{t.contactTitle}</p>
                <p className="text-sm text-[var(--text-subtle)] mt-1">{t.contactSubtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="paper-button px-3 py-2 rounded-2xl text-[var(--foreground)]"
              >
                Luk
              </button>
            </div>

            <div className="p-5 grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="paper-card-2 rounded-3xl p-4 hover:opacity-95 transition-opacity"
                >
                  <p className="text-sm font-semibold text-secondary">{t.email}</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1 break-all">{CONTACT_EMAIL}</p>
                </a>
                <a
                  href={CONTACT_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="paper-card-2 rounded-3xl p-4 hover:opacity-95 transition-opacity"
                >
                  <p className="text-sm font-semibold text-secondary">{t.linkedin}</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1 break-all">{CONTACT_LINKEDIN}</p>
                </a>
              </div>

              <div className="paper-card-2 rounded-3xl p-4">
                <p className="text-sm font-semibold text-secondary">{t.sendMessage}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                  {t.openEmailHint}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="paper-button mt-4 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
                >
                  {t.openEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

