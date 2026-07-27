import type { APIRoute } from 'astro';

// robots.txt dinámico:
// - Si SITE_INDEXABLE=true → permite rastreo y apunta al sitemap del sitio actual.
// - Si no (por defecto, sitios de comparación/preview) → bloquea todo el rastreo,
//   para no competir en Google con la web viva del cliente.
export const GET: APIRoute = ({ site }) => {
  const indexable = process.env.SITE_INDEXABLE === 'true';
  const base = site ?? new URL('https://barlaschimeneas.netlify.app');

  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', base).href}\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
