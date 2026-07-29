/**
 * Datos del negocio — FUENTE ÚNICA DE VERDAD.
 *
 * ⚠️ NOTA DE HONESTIDAD (revisor-diseno):
 * El `spec.json` traía una contradicción interna. El copy autogenerado de las páginas
 * (/contacto, /, /carta) mencionaba dirección "Calle Real 15" y teléfono "918 99 88 77".
 * Esos datos NO están corroborados por ninguna fuente y contradicen `local_business`.
 *
 * Se han usado los datos VERIFICADOS, que coinciden en TRES fuentes independientes:
 *   1. `spec.json > local_business` (derivado de la ficha de Google).
 *   2. La web viva del cliente (meta: "+34 639 984 727", "Casa de Cultura de Valdemorillo").
 *   3. El cartel real del menú del día del propio bar (foto): "Calle la paz, Valdemorillo
 *      (Casa de Cultura) — Tel: 639 98 47 27".
 *
 * Por tanto teléfono = 639 98 47 27 y dirección = Calle La Paz 51, Casa de la Cultura,
 * Valdemorillo (número 51 confirmado por el cliente en client_facts de /contacto).
 * Horario y nº de reseñas actualizados a los datos confirmados del kit (client_facts + local_business).
 * No se inventa nada.
 */

export const site = {
  name: 'Bar Las Chimeneas',
  legalName: 'Bar, Restaurante Las Chimeneas',
  owner: 'Danny Barrios',
  relaunchYear: '2025',
  city: 'Valdemorillo',
  region: 'Madrid',
  country: 'ES',
  postalCode: '28210',
  street: 'Calle La Paz 51, Casa de la Cultura',
  streetSchema: 'Calle La Paz 51',
  addressFull: 'Calle La Paz 51, Casa de la Cultura, 28210 Valdemorillo, Madrid',
  phoneDisplay: '639 98 47 27',
  phoneTel: '+34639984727',
  whatsapp: '34639984727',
  // Horario real confirmado por el cliente (client_facts): domingo cerrado.
  hoursDisplay: 'Lun–Vie 9:00–23:00 · Sáb 13:00–17:00 y 19:00–23:00 · Dom cerrado',
  hoursSchema: ['Mo-Fr 09:00-23:00', 'Sa 13:00-17:00', 'Sa 19:00-23:00'],
  rating: 4.8,
  reviews: 83,
  founded: '2018',
  cuisine: 'Cocina casera, menú del día y tapas',
  mapsUri:
    'https://maps.google.com/?cid=5165903861513153668',
  mapsEmbed:
    'https://maps.google.com/maps?q=Bar%20Las%20Chimeneas%20Valdemorillo%20Casa%20de%20la%20Cultura&z=16&output=embed',
  domain: 'https://barlaschimeneas.netlify.app',
} as const;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/carta', label: 'Carta' },
  { href: '/eventos-musica-en-vivo', label: 'Eventos' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const waLink = `https://wa.me/${site.whatsapp}`;
export const telLink = `tel:${site.phoneTel}`;

/**
 * Enlace interno consciente de la `base` del sitio.
 * En GitHub Pages el sitio vive bajo `/nombre-del-repo/`; este helper antepone
 * esa subruta a los enlaces internos para que no rompan. En local/Netlify la
 * base es `/`, así que devuelve la ruta tal cual.
 */
export function link(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) path = `/${path}`;
  return path === '/' ? `${base}/` : `${base}${path}`;
}
