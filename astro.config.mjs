// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL de producción del sitio (para canonical, sitemap y JSON-LD).
export default defineConfig({
  site: 'https://barlaschimeneas.netlify.app',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Formatos modernos por defecto vía <Image>/<Picture> (astro:assets).
    responsiveStyles: true,
  },
});
