import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

const SITE_TITLE = 'Egor Bezriadin - Software Developer';
const SITE_DESCRIPTION =
  'An aspiring web and mobile developer proficient in React.js, React Native, TypeScript, JavaScript, and other frontend-focused tools and frameworks.';
export const SITE_URL = 'https://www.rogeonee.com/';
const OG_IMAGE_URL = `${SITE_URL}og-image.png`;
const KEYWORDS = [
  'egor bezriadin',
  'rogeonee',
  'roge_one_',
  'canada',
  'web developer',
  'mobile developer',
  'konvert',
] as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [...KEYWORDS],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: 'rogeonee',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE_URL,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@roge_one_',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: ['/favicon.ico'],
    apple: ['/apple-icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5S5P7SKF8E"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5S5P7SKF8E');`}
        </Script>
      </body>
    </html>
  );
}
