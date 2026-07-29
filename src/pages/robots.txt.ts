import type { APIRoute } from 'astro';

// robots.txt dinámico:
// - Si se construye con el DOMINIO REAL del cliente → permite rastreo y apunta al sitemap.
// - Si es un host de preview/comparación (pages.dev, workers.dev, netlify, localhost) → bloquea
//   todo el rastreo, para no competir en Google con la web viva del cliente.
// - SITE_INDEXABLE=true fuerza el modo indexable (override manual).
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://barlaschimeneas.com');
  const isPreviewHost = /(netlify\.app|pages\.dev|workers\.dev|localhost|127\.0\.0\.1)/i.test(base.host);
  const indexable = process.env.SITE_INDEXABLE === 'true' || !isPreviewHost;

  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', base).href}\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
