import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bunyamin Bolukbas',
  description:
    'Ik bouw software en deel wat ik leer — over software, business en alles daartussenin.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${inter.className} bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
