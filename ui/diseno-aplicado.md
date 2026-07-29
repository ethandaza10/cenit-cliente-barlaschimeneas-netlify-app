# Diseño de UI aplicado — «Pizarra & Vermut»

> Entregable de `disenador-ui`. Traduce los blueprints de UX + `direccion-visual.md` en el
> diseño visual, implementado directamente en el código (`src/styles/global.css` + componentes
> y estilos por página). Aquí se documentan las decisiones; el código es la fuente.

## Sistema (en `src/styles/global.css`)
- **Color:** pizarra `#20241a` de fondo; **un solo acento ámbar** `#e0a536` (CTA, cifras,
  antetítulos); vermut `#b04a2f` para la banda de música; papel `#efe7d3` en paneles de respiro.
- **Tipografía:** display `Bebas Neue` (rótulos condensados en mayúsculas), manuscrita `Caveat`
  (anotaciones de tiza, el elemento de firma), cuerpo `Libre Franklin` (legible, 1.7). Escala muy
  contrastada. Auto-alojadas con `@fontsource` (sin CDN → mejor CWV/privacidad).
- **Divisores:** línea de **puntos** (`.rule--dots`, `border: dotted`) = trazo de tiza; nunca gris sólido.
- **Botón:** ámbar sólido, texto oscuro (AA), sin degradado de IA; fantasma con borde tiza.

## Gestos de firma (dónde se VE la idea)
- **Hero (home/eventos/contacto):** anotación manuscrita rotada (`.hand`) + antetítulo condensado
  + titular Bebas grande + foto real a un lado. Nada centrado ni simétrico.
- **Carta → pizarra del menú del día** (`.pizarra`): tarjeta tipo encerado con precio real 13,90 €
  en Bebas gigante y lista con filetes de puntos. Es el "gesto" más claro de la dirección.
- **Etiquetas de foto** (`.frame__cap`): nombre del plato como anotación de tiza (Caveat) al pasar.

## Jerarquía, aire y ritmo
- Un foco por pantalla; secciones alternan pizarra oscura y panel de papel para dar ritmo (no todas
  del mismo alto). Rejillas asimétricas (`1.05fr / 0.95fr`, `0.75fr / 1.25fr`), no tarjetas idénticas.
- Espaciado generoso (escala 4→128). Cifras de prueba (`4,8★`, `2018`) en Bebas ámbar, grandes.

## Imágenes (regla dura cumplida)
- SOLO fotos reales del cliente (mapa en `/assets/manifest.json`), colocadas en su página/hueco.
- Sin foto real para un plato/hueco → NO se inventa: se usa texto (p. ej. la pizarra del menú) o el
  hueco `.photo-pending` marcado. Especialidades sin foto (secreto ibérico, solomillo-romesco) van
  como texto, no como imagen falsa.

## Estados y accesibilidad
- `:focus-visible` ámbar; hover de botones/enlaces/imágenes sutiles (solo transform/opacity).
- Contraste AA (crema sobre pizarra; texto oscuro sobre ámbar/papel). `prefers-reduced-motion` respetado.

## Patrones prohibidos — verificación
Sin hero centrado genérico, sin 3-4 tarjetas idénticas con iconito, sin degradados de IA, sin
tipografía por defecto (Bebas/Caveat/Libre Franklin, no Inter/Arial), sin emojis-icono, sin fotos
inventadas. Pensado para sobrevivir a `anti-generico` y `revisor-diseno`.
