import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'maksym.dev | Full Stack Developer',
  description: "Maksym's Portfolio, an Interface Designer.",
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
