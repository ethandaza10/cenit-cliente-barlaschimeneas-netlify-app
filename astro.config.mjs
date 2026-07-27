// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL del sitio para canonical, sitemap y JSON-LD.
// En Netlify se usa automáticamente la URL del sitio desplegado (env `URL`),
// así cada sitio (comparación, producción…) referencia SU propia dirección.
// Fuera de Netlify cae al dominio del cliente como referencia.
const SITE = process.env.URL || 'https://barlaschimeneas.netlify.app';

export default defineConfig({
  site: SITE,
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
