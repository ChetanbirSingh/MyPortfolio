import type { Metadata } from 'next';
import { Press_Start_2P, Space_Mono } from 'next/font/google';
import './globals.css';

const pressStart2p = Press_Start_2P({
  variable: '--font-press-start-2p',
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['sans-serif', 'Arial', 'Helvetica'],
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
      <body className={`${pressStart2p.className} ${spaceMono.variable} antialiased`}>{children}</body>
    </html>
  );
}