# Requisitos técnicos

## Stack
- astro — HTML estático → mejor CWV de fábrica, seguro y barato; es código→Git→agente. Next.js solo si el cliente necesita interactividad tipo app.

## Por página
- title <60 car.
- meta description 120-160
- un H1 con la keyword
- canonical autorreferente
- JSON-LD del tipo más específico

## Global
- HTML semántico (un solo H1 por página, jerarquía de encabezados coherente)
- Ficheros SEO: sitemap.xml, robots.txt
- Schema: LocalBusiness (subtipo específico) coherente con lo visible y con la ficha de Google
- Accesibilidad: WCAG 2.2 AA
- Responsive: mobile-first
- Imágenes: componente de imagen del framework (Astro <Image>/<Picture>), NUNCA <img> crudo para fotos: srcset responsive CON densidades 1x y 2x (retina, o se ven borrosas), AVIF+WebP a calidad ~80, servidas al tamaño real de display partiendo del original en máxima resolución (no ampliar), width/height o aspect-ratio (CLS 0), lazy-load fuera del viewport y preload solo en el LCP
- debe cumplir criterios de diseño premium; el revisor lo verifica

## Objetivos de rendimiento (Core Web Vitals, campo (CrUX p75), no laboratorio)
- LCP: bueno ≤ 2500 ms · pobre > 4000 ms
- CLS: bueno ≤ 0.1 · pobre > 0.25
- INP: bueno ≤ 200 ms · pobre > 500 ms
- Fuente: https://web.dev/articles/defining-core-web-vitals-thresholds

## Aceptación
- requisitos SEO por página
- CWV en verde
- WCAG 2.2 AA
- HTML semántico
- contenido = copy del kit
- no look genérico
- La web construida se re-audita con el Auditor de CÉNIT como parte de la aceptación.
