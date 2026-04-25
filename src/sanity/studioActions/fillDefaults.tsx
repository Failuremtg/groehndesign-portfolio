'use client';

import { useCallback, useMemo, useState } from 'react';
import { useClient } from 'sanity';
import type { DocumentActionComponent, DocumentActionProps } from 'sanity';
import { defaultSiteContent } from '@/sanity/defaultSiteContent';

function isEmpty(value: unknown) {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as object).length === 0;
  return false;
}

function mergeMissing<T extends Record<string, any>>(current: T, defaults: T): Partial<T> {
  const out: Record<string, any> = {};
  for (const key of Object.keys(defaults)) {
    const d = defaults[key];
    const c = current?.[key];

    if (typeof d === 'object' && d && !Array.isArray(d)) {
      if (isEmpty(c)) {
        out[key] = d;
      } else {
        const child = mergeMissing(c, d);
        if (Object.keys(child).length > 0) out[key] = child;
      }
      continue;
    }

    if (isEmpty(c)) out[key] = d;
  }
  return out as Partial<T>;
}

export const FillDefaultsAction: DocumentActionComponent = (props: DocumentActionProps) => {
  const client = useClient({ apiVersion: '2024-06-01' });
  const [isRunning, setIsRunning] = useState(false);

  const label = useMemo(() => (isRunning ? 'Filling…' : 'Fill with current site copy'), [isRunning]);

  const onHandle = useCallback(async () => {
    setIsRunning(true);
    try {
      const doc = (await client.getDocument(props.id)) as Record<string, any> | null;
      const current = doc || {};
      const defaults = {
        title: defaultSiteContent.title,
        hero: defaultSiteContent.hero,
        projects: defaultSiteContent.projects,
        strengths: defaultSiteContent.strengths,
        about: defaultSiteContent.about,
        aiWorkflow: defaultSiteContent.aiWorkflow,
        capabilities: defaultSiteContent.capabilities,
        contact: defaultSiteContent.contact,
      };

      const patch = mergeMissing(current, defaults);
      if (Object.keys(patch).length > 0) {
        await client.patch(props.id).set(patch).commit({ autoGenerateArrayKeys: true });
      }
    } finally {
      setIsRunning(false);
      props.onComplete();
    }
  }, [client, props]);

  return {
    label,
    disabled: isRunning,
    onHandle,
  };
};

