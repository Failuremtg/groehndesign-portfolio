'use client';

import { usePathname } from 'next/navigation';
import { ContactWidget } from '@/components/ContactWidget';

export function ContactWidgetAutoHideInStudio({
  content,
}: {
  content?: React.ComponentProps<typeof ContactWidget>['content'];
}) {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;
  return <ContactWidget content={content} />;
}

