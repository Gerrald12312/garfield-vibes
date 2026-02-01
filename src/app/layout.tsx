import type { Metadata } from 'next';
import { Comic_Neue } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-comic',
});

export const metadata: Metadata = {
  title: 'Garfield Vibes | Y2K Memes & Comics',
  description: 'A Y2K/vaporwave tribute to the world\'s most relatable cat. Memes, comics, and eternal Monday hatred.',
  keywords: ['Garfield', 'memes', 'comics', 'Y2K', 'vaporwave', 'retro', 'aesthetic'],
  openGraph: {
    title: 'Garfield Vibes',
    description: 'I hate Mondays. You hate Mondays. Let\'s vibe.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${comicNeue.variable} font-comic antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
