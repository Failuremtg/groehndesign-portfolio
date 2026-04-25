import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, Press_Start_2P } from 'next/font/google';
import './globals.css';
import { HeaderNav } from '@/components/HeaderNav';
import { ContactWidgetAutoHideInStudio } from '@/components/ContactWidgetAutoHideInStudio';
import { getSiteContent } from '@/sanity/queries';

const displayFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const uiFont = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

const pixelFont = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Multimedia Designer',
  description: 'Multimedia designer portfolio — work, about, contact.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSiteContent();

  return (
    <html lang="da" data-theme="ai" className={`${displayFont.variable} ${uiFont.variable} ${pixelFont.variable}`}>
      <body className="min-w-0 overflow-x-hidden bg-background text-[var(--foreground)]">
        <header
          className="fixed top-0 left-0 right-0 z-50 isolate border-b-2"
          style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
        >
          <HeaderNav />
        </header>
        <main className="pt-[92px] md:pt-[104px]">{children}</main>
        <ContactWidgetAutoHideInStudio content={site?.contact} />
        <footer className="border-t-2 border-[var(--border)] py-6 text-center text-sm text-black/60">
          Portfolio — multimedia designer
        </footer>
      </body>
    </html>
  );
}
