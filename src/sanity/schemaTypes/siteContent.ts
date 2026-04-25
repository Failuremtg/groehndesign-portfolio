import { defineField, defineType } from 'sanity';
import { defaultSiteContent } from '@/sanity/defaultSiteContent';

export const siteContent = defineType({
  name: 'siteContent',
  title: 'Site content',
  type: 'document',
  initialValue: () => ({
    title: defaultSiteContent.title,
    hero: defaultSiteContent.hero,
    strengths: defaultSiteContent.strengths,
    aiWorkflow: defaultSiteContent.aiWorkflow,
    capabilities: defaultSiteContent.capabilities,
    projects: defaultSiteContent.projects,
    about: defaultSiteContent.about,
    contact: defaultSiteContent.contact,
  }),
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subheadline', title: 'Subheadline', type: 'text', rows: 3 },
        {
          name: 'ctaPrimary',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
        {
          name: 'ctaSecondary',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
        {
          name: 'bullets',
          title: 'Hero bullets',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'portraitCaptionTitle',
          title: 'Portrait caption title',
          type: 'string',
        },
        {
          name: 'portraitCaptionBody',
          title: 'Portrait caption body',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'strengths',
      title: 'Strengths',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'body', title: 'Body', type: 'text', rows: 2 },
              ],
            },
          ],
        },
        { name: 'summary', title: 'Summary line', type: 'string' },
      ],
    }),
    defineField({
      name: 'aiWorkflow',
      title: 'AI workflow',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 2 },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'body', title: 'Body', type: 'text', rows: 2 },
              ],
            },
          ],
        },
        { name: 'outro', title: 'Outro line', type: 'string' },
      ],
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 2 },
        {
          name: 'groups',
          title: 'Groups',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                {
                  name: 'items',
                  title: 'Items',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Project items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'key',
                  title: 'Key',
                  type: 'string',
                  description: 'Must match one of: oakedex, cmdrtools, clarivo, noyer-overwatch',
                },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'subtitle', title: 'Subtitle', type: 'string' },
                { name: 'summary', title: 'Summary paragraph', type: 'text', rows: 3 },
                {
                  name: 'sections',
                  title: 'Case study sections',
                  type: 'object',
                  fields: [
                    { name: 'problem', title: 'Problem', type: 'text', rows: 2 },
                    { name: 'role', title: 'Role', type: 'text', rows: 2 },
                    { name: 'process', title: 'Process', type: 'text', rows: 2 },
                    {
                      name: 'solutionBullets',
                      title: 'Solution bullets',
                      type: 'array',
                      of: [{ type: 'string' }],
                    },
                    { name: 'outcome', title: 'Outcome', type: 'text', rows: 2 },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'meta', title: 'Meta line', type: 'string' },
        { name: 'tagline', title: 'Tagline', type: 'string' },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                {
                  name: 'paragraphs',
                  title: 'Paragraphs',
                  type: 'array',
                  of: [{ type: 'text', rows: 2 }],
                },
                { name: 'highlight', title: 'Highlight line (optional)', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'string' },
        { name: 'widgetTitle', title: 'Widget title', type: 'string' },
        { name: 'widgetSubtitle', title: 'Widget subtitle', type: 'string' },
        { name: 'widgetButtonLabel', title: 'Widget button label', type: 'string' },
      ],
    }),
  ],
});

