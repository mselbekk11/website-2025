import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.mselbekk.com/'),
  title: 'Morgan Selbekk',
  description: 'Morgan Selbekk | Full Stack Developer & Designer',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Morgan Selbekk',
    description: 'Morgan Selbekk | Full Stack Developer & Designer',
    images: [{ url: 'https://www.mselbekk.com/og-image.png' }],
    url: 'https://www.mselbekk.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morgan Selbekk',
    description: 'Morgan Selbekk | Full Stack Developer & Designer',
    images: [{ url: 'https://www.mselbekk.com/og-image-twitter.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
