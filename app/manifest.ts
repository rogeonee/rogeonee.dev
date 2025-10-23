import type { MetadataRoute } from 'next';

const SITE_NAME = 'rogeonee.dev';
const SHORT_NAME = 'rogeonee';
const THEME_COLOR = '#ffffff';
const BACKGROUND_COLOR = '#ffffff';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SHORT_NAME,
    description:
      'Egor Bezriadin — software developer crafting web and mobile experiences.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    theme_color: THEME_COLOR,
    background_color: BACKGROUND_COLOR,
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
