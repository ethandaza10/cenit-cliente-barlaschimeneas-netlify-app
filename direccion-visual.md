# Dirección visual — Bar Las Chimeneas

> **Dirección aprobada por el cliente: «Concepto C — Pizarra & Vermut».**
> Fijada el 2026-07-28 tras revisar los 3 conceptos. Este documento es la fuente única
> de verdad estética; todo el equipo (UX, UI, frontend, motion) construye a partir de aquí.

## Concepto en una frase
El bar de pueblo contado **desde su pizarra de raciones y el vermut de los domingos**: un
bistró contemporáneo, cálido y táctil, donde el visitante siente que entra a un sitio con
carácter y con gente que le va a conocer por su nombre —no a una plantilla de restaurante.

## La idea grande (el "gesto")
La web se compone como una **pizarra de bar**: fondo verde oliva profundo (pizarra), rótulos
en **mayúsculas condensadas** (como la tiza rotulada del local) y un **acento manuscrito** que
aparece como anotaciones a mano (vermut, findes, "te guardamos sitio"). La **carta se trata
como la pizarra de raciones** —líneas con puntos de guía y precio a la derecha—, no como una
rejilla de tarjetas. Ese contraste "rótulo impreso + tiza a mano" es lo que hace que sea ESTE
bar y no cualquiera.

## Elemento de firma (se repite en todo el sitio)
1. **Acento manuscrito (Caveat)** en ámbar claro, ligeramente rotado, para anotaciones cortas.
2. **Filete/divisor de puntos (dashed)** color tiza — el trazo de la pizarra.
3. **Antetítulos condensados** (Bebas Neue) con tracking amplio en ámbar.

## Paleta (hex y papel)
| Rol | Token | Hex | Uso |
|---|---|---|---|
| Fondo pizarra | `--ink` | `#20241a` | Fondo dominante (verde oliva muy oscuro) |
| Superficie | `--surface` | `#2b3123` | Tarjetas, cabecera, footer |
| Superficie 2 | `--surface-2` | `#333a29` | Hover / capas |
| Texto | `--cream` | `#efe9db` | Texto principal sobre pizarra |
| Texto atenuado | `--cream-dim` | `#b7b2a2` | Cuerpo secundario |
| **Acento** | `--amber` | `#e0a536` | **Un solo acento**, con avaricia: CTA, cifras, antetítulos |
| Acento claro | `--amber-bright` | `#f0c877` | Manuscrito, hovers |
| Vermut | `--vermut` | `#b04a2f` | Banda de música/vermut, énfasis puntual |
| Tiza / líneas | `--line` | `rgba(234,228,212,.16)` | Divisores de puntos, bordes |
| Papel (break) | `--paper` | `#efe7d3` | Paneles claros de respiro (carta/menú) |

Contraste AA garantizado: ámbar `#e0a536` sobre pizarra `#20241a` (texto grande y cifras);
CTA = texto `#241d0c` sobre ámbar (ratio alto). Cuerpo = crema sobre pizarra.

## Tipografía
- **Display / rótulos:** `Bebas Neue` (condensada, mayúsculas, mucho carácter). Titulares GRANDES.
  Alternativa web-safe: Oswald / Anton.
- **Manuscrita (firma):** `Caveat` (variable). SOLO para anotaciones cortas, nunca párrafos.
- **Cuerpo:** `Libre Franklin` (variable, humanista, legible). Interlineado generoso (~1.7).
- Escala muy contrastada: héroes 56–120px; el salto rótulo↔cuerpo es parte del estilo.

## Sistema visual
- **Espaciado** generoso (escala 4/8/12/16/24/32/48/64/96). El aire comunica calidad.
- **Radios** discretos (4–8px); nada de "todo redondeado".
- **Sombras** mínimas; la profundidad la dan el color y el contraste, no diez sombras.
- **Tratamiento de foto:** foto real a buen tamaño, cálida, con leve saturación; en el hero
  entra a sangre por un lado con velo lateral hacia la pizarra (no foto centrada de catálogo).
- **Divisores:** línea de **puntos** (dashed) color tiza; nunca líneas sólidas grises.
- **Iconografía:** mínima; el carácter lo dan la tipografía y el manuscrito, no iconitos.

## Tono emocional y principios
1. **Cercano con carácter** — de barrio, pero cuidado. Ni frío ni cursi.
2. **La pizarra manda** — rótulo condensado + anotación a mano en todo.
3. **Un acento (ámbar), con avaricia** — nada de arcoíris ni degradados de IA.
4. **Foto real como protagonista** — solo lo que es de ESTE bar; hueco marcado si falta.
5. **Ritmo, no uniformidad** — secciones de distinto alto y peso; la carta respira distinto.

## Qué EVITAR (para este negocio)
- Hero centrado + subtítulo gris + dos botones (uno relleno, uno "outline").
- Rejilla de 3–4 tarjetas idénticas con iconito; todo centrado y del mismo alto.
- Degradados morado/azul "de IA"; "glass" y sombras suaves por todas partes.
- Tipografía por defecto (Inter/Arial/system) sin voz.
- **Fotos inventadas / de stock / de "platos parecidos".** SOLO fotos reales del cliente
  (mapa en `/assets/manifest.json`); si falta un hueco → "Foto real pendiente", nunca inventar.
- Copy de humo ("Bienvenidos", "calidad y confianza").

## Mapa de fotos reales (de `/assets/manifest.json`) → dónde van
- `home` fondo → interior del local (hero home).
- `/eventos-musica-en-vivo` sección → foto de música/directo.
- `/carta` galería → huevos rotos + platos reales (croquetas, rabo de toro, tortilla,
  hamburguesa, tarta de queso). Especialidades sin foto (secreto ibérico, solomillo-romesco)
  → van en la pizarra SIN foto (texto), no se inventa imagen.
- Ambiente (IMG globales) → home / respiro.
