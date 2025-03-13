import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rogeonee.com',
  output: 'static',
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load'
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ],
});
