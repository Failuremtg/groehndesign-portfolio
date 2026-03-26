import type { Metadata } from 'next';
import { Permanent_Marker } from 'next/font/google';
import './globals.css';
import { ContactWidget } from '@/components/ContactWidget';
import { HeaderNav } from '@/components/HeaderNav';

const brushFont = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brush',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Multimedia Designer',
  description: 'Multimedia designer portfolio — work, about, contact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${brushFont.variable}`}>
      <body className="bg-background text-[var(--foreground)]">
        <header
          className="sticky top-0 z-20 isolate"
          style={{ backgroundColor: '#0f0a14', borderBottom: '1px solid #0f0a14' }}
        >
          <HeaderNav />
        </header>
        {/* Content fades out as it hits the top (below the nav) */}
        <div
          className="fixed left-0 right-0 top-16 z-[15] h-36 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, var(--background) 0%, transparent 100%)',
          }}
          aria-hidden
        />
        <main>{children}</main>
        <ContactWidget />
        <footer className="border-t border-[var(--border)] py-6 text-center text-sm text-secondary/80">
          Portfolio — multimedia designer
        </footer>
      </body>
    </html>
  );
}
