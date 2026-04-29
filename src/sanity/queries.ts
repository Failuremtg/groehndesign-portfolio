import { groq } from 'next-sanity';
import { unstable_noStore as noStore } from 'next/cache';
import { sanityClient, sanityConfigured } from './client';

export type SiteContent = {
  hero?: {
    badge?: string;
    headline?: string;
    subheadline?: string;
    ctaPrimary?: { label?: string; href?: string };
    ctaSecondary?: { label?: string; href?: string };
    bullets?: string[];
    portraitCaptionTitle?: string;
    portraitCaptionBody?: string;
  };
  strengths?: {
    headline?: string;
    intro?: string;
    items?: { title?: string; body?: string }[];
    summary?: string;
  };
  aiWorkflow?: {
    headline?: string;
    intro?: string;
    steps?: { title?: string; body?: string }[];
    outro?: string;
  };
  process?: {
    headline?: string;
    intro?: string;
    steps?: { title?: string; body?: string }[];
  };
  skills?: {
    headline?: string;
    intro?: string;
    groups?: { title?: string; items?: string[] }[];
  };
  projects?: {
    headline?: string;
    intro?: string;
    items?: {
      key?: string;
      title?: string;
      subtitle?: string;
      summary?: string;
      tools?: string[];
      sections?: {
        problem?: string;
        role?: string;
        process?: string;
        solutionBullets?: string[];
        outcome?: string;
      };
    }[];
  };
  about?: {
    headline?: string;
    name?: string;
    meta?: string;
    tagline?: string;
    cards?: { title?: string; paragraphs?: string[]; highlight?: string }[];
  };
  contact?: {
    email?: string;
    linkedin?: string;
    widgetTitle?: string;
    widgetSubtitle?: string;
    widgetButtonLabel?: string;
  };
};

function siteContentQueryForId(id: string) {
  return groq`*[_type == "siteContent" && _id == "${id}"][0]{
    hero,
    projects,
    strengths,
    about,
    aiWorkflow,
    process,
    skills,
    contact
  }`;
}

export async function getSiteContent(): Promise<SiteContent | null> {
  // Always fetch fresh content in dev and on server renders.
  // Prevents Next.js data cache from showing stale CMS copy after publishing.
  noStore();
  if (!sanityConfigured || !sanityClient) return null;
  try {
    const legacySingleton = await sanityClient.fetch(siteContentQueryForId('siteContent'));
    if (legacySingleton) return legacySingleton;

    // Backward-compatible fallback if a non-singleton doc already exists
    return await sanityClient.fetch(
      groq`*[_type == "siteContent"][0]{hero,projects,strengths,about,aiWorkflow,process,skills,contact}`,
    );
  } catch {
    return null;
  }
}

