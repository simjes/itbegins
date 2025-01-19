import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  site: 'https://itbegins.no',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: '2024-06-11',
      studioBasePath: '/admin',
    }),
    sitemap(),
  ],
});
