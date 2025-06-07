import type { Metadata } from 'next';
import { Press_Start_2P, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

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
    'Portfolio of Chetanbir Singh — frontend developer focused on building clean, responsive UIs and solving real-world problems through creative and functional web design.',
  keywords: [
    'Chetanbir Singh',
    'Chetanbir',
    'Frontend Web Developer',
    'React Developer',
    'Next.js Portfolio',
    'TypeScript Developer',
    'Web Developer Portfolio',
  ],
  openGraph: {
    title: 'Chetanbir Singh | Frontend Developer Portfolio',
    description:
      'Portfolio of Chetanbir Singh | showcasing projects, skills, and creative frontend experiments built with TypeScript, JavaScript, HTML, CSS, React, and Next.js.',
    url: 'https://chetanbir.me',
    siteName: 'Chetanbir Singh Portfolio',
    images: [
      {
        url: '/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Chetanbir Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chetanbir Singh | Frontend Developer Portfolio',
    description:
      'Frontend-focused developer crafting responsive UIs and building practical web experiences with React and Next.js.',
    images: ['/banner.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pressStart2p.className} ${spaceMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
