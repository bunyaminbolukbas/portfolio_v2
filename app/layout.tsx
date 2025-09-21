import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bunyamin Bölükbas',
  description:
    'Landingpage of Bünyamin Bölükbas – Full-Stack Developer in Utrecht. Experienced in Next.js, TypeScript, Supabase, and AI-powered software solutions.',
  keywords: [
    'Bünyamin Bölükbas',
    'Bunyamin Bolukbas',
    'maatwerk software',
    'maatwerk software ontwikkeling',
    'maatwerk software oplossingen',
    'custom software',
    'custom software development',
    'Full-Stack Developer',
    'Next.js',
    'TypeScript',
    'Supabase',
    'Utrecht',
    'AI software',
    'Fleet management software',
    'auto software met ai',
    'auto software',
    'AI solutions',
    'AI-powered applications',
    'custom software solutions',
    'bespoke software development',
    'Performance management software',
    'software developer',
    'web developer',
    'software engineer',
    'software ontwikkelaar nederland',
    'web developer nederland',
    'freelance developer',
    'freelance software developer',
    'freelance web developer',
    'freelance software engineer',
    'freelance software ontwikkelaar',
    'freelance web ontwikkelaar',
    'software development services',
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
