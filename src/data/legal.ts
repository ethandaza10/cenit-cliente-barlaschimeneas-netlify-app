/**
 * Datos legales — de `spec.json > pages[/privacidad|/cookies|/aviso-legal].client_facts`.
 * Datos reales aportados por el cliente. No se inventa nada.
 */
export const legal = {
  responsable: 'Emperatriz Parucha Camacho',
  nif: '14049542S',
  domicilio: 'Calle Balconcillos 8, 28210 Valdemorillo (Madrid)',
  email: 'emperatriz.parucha@gmail.com',
  nombreComercial: 'Bar Las Chimeneas',
  usaAnalytics: true, // Google Analytics + Google Search Console
} as const;

/** Google Analytics 4 (spec.json > analytics). Se carga SOLO tras consentimiento. */
export const analytics = {
  ga4: 'G-1R1H5F8B6X',
  gsc: null as string | null,
} as const;

export const legalNav = [
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/aviso-legal', label: 'Aviso legal' },
] as const;
