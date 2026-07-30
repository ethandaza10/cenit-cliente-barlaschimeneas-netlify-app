// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Nombre del repo (para la subruta de GitHub Pages).
const REPO = 'cenit-cliente-barlaschimeneas-netlify-app';

// El workflow de GitHub Pages define GITHUB_PAGES=true.
const IS_PAGES = process.env.GITHUB_PAGES === 'true';

// DOMINIO FINAL del cliente (kit: client.site_url). De aquí salen el canonical
// autorreferente y el sitemap.xml, EXACTAMENTE este dominio (no el de pruebas),
// para que Google indexe la web real y no la de preview.
const SITE = 'https://barlaschimeneas.com';

export default defineConfig({
  site: SITE,
  // La subruta /REPO/ solo aplica a la preview de GitHub Pages; en el dominio
  // real (Netlify/producción) la base es "/". Los enlaces internos son relativos.
  base: IS_PAGES ? `/${REPO}` : undefined,
  // El sitemap solo debe listar páginas indexables → fuera las legales (van en noindex).
  integrations: [sitemap({ filter: (page) => !/\/(privacidad|cookies|aviso-legal)\/?$/.test(page) })],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Formatos modernos por defecto vía <Image>/<Picture> (astro:assets).
    responsiveStyles: true,
  },
});
