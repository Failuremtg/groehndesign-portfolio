import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/sanity/schemaTypes';
import { deskStructure } from './src/sanity/deskStructure';
import { FillDefaultsAction } from './src/sanity/studioActions/fillDefaults';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Edit website',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
  ],
  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'siteContent') {
        return [...prev, FillDefaultsAction];
      }
      return prev;
    },
  },
  schema: {
    types: schemaTypes,
  },
});

