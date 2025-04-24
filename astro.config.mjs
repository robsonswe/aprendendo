import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ross1996.github.io/aprendendo/',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [
      tailwindcss(), // ADD THIS PLUGIN to the array
    ],
  }
});