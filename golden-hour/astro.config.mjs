// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Public site URL. Update this to your production domain (used for sitemap,
// canonical URL, Open Graph and JSON-LD absolute links).
const SITE = 'https://thegoldenhour.co.il';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
