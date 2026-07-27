# Dirección visual — Bar Las Chimeneas (Valdemorillo)

> Entregable de `director-arte`. Traduce el brief y la referencia en decisiones concretas
> para que el resto del pack construya sin improvisar. Inspirar, **no** copiar.

## Concepto (una frase)
**"El calor de la lumbre, servido con oficio."** El visitante debe sentir, desde el primer
segundo, el ambiente cálido de una taberna de pueblo con cocina de nivel: apetito inmediato,
tradición española y trato cercano. Premium, pero sin distancia.

## Principio extraído de la referencia
De `barlaschimeneas.netlify.app` tomamos **el ambiente de brasa/ceniza y la paleta cálida sobre
oscuro**, pero lo llevamos a un registro **más serio y clásico**: menos efecto "fuego digital",
más materia noble (madera, dorado bruñido, papel cálido). El fuego se sugiere, no se grita.

## Paleta (roles y hex)
| Rol | Token | Hex |
|---|---|---|
| Fondo base (carbón cálido) | `--ink` | `#17110B` |
| Fondo alterno | `--ink-2` | `#1F160E` |
| Superficie / tarjeta | `--surface` | `#271C12` |
| Papel cálido (secciones claras, texto sobre oscuro) | `--cream` | `#F3E9DA` |
| Texto atenuado | `--cream-dim` | `#CDBBA4` |
| Acento marca (oro bruñido, del logo) | `--gold` | `#C79A4B` |
| Oro claro (brillo, hairlines vivos) | `--gold-bright` | `#E4BE72` |
| Acento cálido / CTA (brasa-terracota) | `--ember` | `#B04A26` |
| Profundidad (vino) | `--wine` | `#5E2A22` |
| Hairline | `--line` | `rgba(199,154,75,.22)` |

Dos acentos con papeles distintos: **oro** = marca, filetes, detalles finos; **brasa/terracota**
= acción (reservar, llamar). Nunca el azul de plantilla. Contraste AA garantizado en todo texto.

## Tipografía
- **Display / títulos:** *Fraunces* (variable, óptica alta). Serif de contraste con alma
  artesanal y clásica — evita el cliché de *Playfair*. Pesos 500–900, cursiva para acentos.
- **Cuerpo / UI:** *Mulish* (variable). Sans humanista, cálido y legible; nada de *Inter* genérico.
- **Escala modular ~1.25.** Interlineado generoso en cuerpo (1.65). Antetítulos ("eyebrow") en
  Mulish, versalitas con `letter-spacing` y en oro.
- Autoalojadas (`@fontsource-variable`) → sin peticiones externas (privacidad + CWV).

## Sistema visual
- **Espaciado:** escala 4/8/12/16/24/32/48/64/96/128. El aire manda; secciones con `padding`
  vertical amplio (96–128px en desktop). Ritmo alternando fondos oscuro ↔ papel.
- **Radios:** 2–4px en botones/inputs, 6–10px en imágenes/tarjetas. Nada "burbuja".
- **Filetes de oro** finos como recurso clásico (separadores, marcos de foto), con criterio.
- **Sombra:** una sola, cálida y profunda (`0 24px 60px -30px rgba(0,0,0,.7)`), no diez.
- **Imagen:** la comida es la protagonista. Fotos a sangre, grandes, con leve viñeteado cálido
  para integrarlas en el fondo oscuro. Todas con `width/height` (cero CLS).
- **Textura:** grano de película muy sutil + un resplandor de brasa tenue en el hero (CSS,
  `transform/opacity`, se apaga con `prefers-reduced-motion`). Sugerir la lumbre, no distraer.
- **Iconografía:** trazo fino, lineal, temática de mesa/hogar. Nunca emojis como iconos.

## Tono emocional — 5 principios que mandan
1. **Apetito primero.** La primera pantalla huele a comida buena. La foto manda.
2. **Cálido pero sobrio.** Elegante y tradicional; el lujo está en la calma, no en el brillo.
3. **De pueblo, con orgullo.** Se tiene que notar que es Valdemorillo y este bar, no cualquiera.
4. **Menos, mejor.** Minimalismo clásico: pocos elementos, muy cuidados.
5. **Confianza tangible.** Datos reales, valoración real, foto real. Cero humo.

## Qué EVITAR (para este negocio)
- El "hero de manual": título centrado + subtítulo gris + dos botones. **No.**
- Degradados morados/azules, glass, sombras suaves en todo, tarjetas idénticas con iconito.
- Stock genérico o ilustraciones tipo *undraw*. Aquí hay fotos reales de sus platos: úsalas.
- Copy de humo ("eleva tu experiencia"). El copy del kit es concreto; respétalo.
- Sobrecargar de "fuego" animado (el defecto de la referencia). Sobriedad.
