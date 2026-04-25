import type { StructureResolver } from 'sanity/desk';

const SITE_CONTENT_ID = 'siteContent';

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('Edit website')
        .child(S.document().schemaType('siteContent').documentId(SITE_CONTENT_ID).title('Edit website')),
    ]);

