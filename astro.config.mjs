// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Nombre del repo (para la subruta de GitHub Pages).
const REPO = 'cenit-cliente-barlaschimeneas-netlify-app';

// El workflow de GitHub Pages define GITHUB_PAGES=true.
const IS_PAGES = process.env.GITHUB_PAGES === 'true';

// URL del sitio para canonical, sitemap y JSON-LD.
// - GitHub Pages → https://ethandaza10.github.io (subruta /REPO/).
// - Netlify → la URL real del deploy (env `URL`).
// - Fuera de eso → dominio del cliente como referencia local.
const SITE = process.env.URL
  || (IS_PAGES ? 'https://ethandaza10.github.io' : 'https://barlaschimeneas.netlify.app');

export default defineConfig({
  site: SITE,
  base: IS_PAGES ? `/${REPO}` : undefined,
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
