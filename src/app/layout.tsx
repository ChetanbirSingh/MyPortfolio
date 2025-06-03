import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';

const pressStart2p = Press_Start_2P({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Chetanbir Singh | Frontend Developer Portfolio',
  description:
    'Portfolio of Chetanbir Singh | showcasing projects, skills, and creative frontend experiments built with TypeScript, React, and Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pressStart2p.className} antialiased`}>{children}</body>
    </html>
  );
}