import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep in step with src/site.config.ts (url).
export default defineConfig({
  site: 'https://manticwise.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
