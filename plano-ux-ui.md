# Plano UX + UI — Bar Las Chimeneas

> Entregables de `arquitecto-ux` (esqueleto) y `disenador-ui` (acabado) combinados.
> Una intención por página · móvil primero · el contenido del kit manda.

## Sistema común
- **Header** translúcido oscuro, sticky: logo (emblema oro) + nav (Inicio · Carta · Eventos ·
  Contacto) + CTA brasa **"Reservar"** (tel/WhatsApp). En móvil: logo + botón llamar + menú.
- **Footer**: datos reales (dirección, teléfono, horario), valoración Google 4,8 (82 reseñas),
  enlaces, aviso de datos pendientes. Un solo mensaje de confianza.
- **CTA principal global:** llamar / WhatsApp al **639 98 47 27** (dato verificado). Se repite
  con criterio: hero, cierre de página y header.
- **Ritmo:** alternar fondo carbón ↔ papel cálido para dar respiración y jerarquía.

## `/` Home — intención transaccional/marca (prioridad 1)
Acción principal: **reservar mesa**. Un mensaje dominante por pantalla.
1. **Hero a sangre**: foto premium (solomillo laqueado sobre romesco) a la derecha/fondo, H1 y
   claim a la izquierda (no centrado), 1 CTA brasa "Reservar mesa" + tel. Resplandor de brasa sutil.
   Barra de confianza fina bajo el hero: 4,8★ Google · Desde 2018 · Terraza con vistas · Música en vivo.
2. **Qué ofrecemos** (raciones, tapas, cócteles, bodega) — texto del kit + carrusel horizontal de
   fotos reales de platos (scroll-snap, sin librería).
3. **Terraza, música y ambiente** — bloque a dos columnas texto/imagen, foto de plato/ambiente.
4. **Por qué elegirnos** — 3-4 pruebas reales (4,8★, terraza con vistas, música en directo,
   trato cercano) como filas con filete de oro, NO tarjetas idénticas con iconito.
5. **Dónde estamos / reservar** — dirección real + mapa + CTA. Cierre.
6. **FAQ** (acordeón accesible, `<details>`), con el JSON-LD FAQ.

## `/carta` — informativa/decisión (prioridad 2)
Acción: ver qué se come y reservar. 
1. Encabezado editorial + intro del kit.
2. **Menú del día**: bloque destacado con la foto real del cartel (menú miércoles 13,90 €) como
   ejemplo + texto del kit (marcando lo pendiente de confirmar).
3. **Raciones y tapas** + **galería** de platos reales (grid asimétrico, no rejilla plana).
4. **Opciones para todos** (veg/sin gluten/niños) y **Para llevar** — texto del kit, pendientes marcados.
5. Cierre "Reserva tu mesa".

## `/eventos-musica-en-vivo` — fidelización (prioridad 4)
Acción: consultar agenda y reservar grupo/evento.
1. Hero editorial "Música en vivo en Valdemorillo" + foto.
2. **Qué encontrarás cada semana** (sábados directo + vermut dominical).
3. **Agenda** (pendiente cliente, claramente señalado, con CTA "consúltanos por WhatsApp").
4. **¿Ponéis el fútbol?** (pendiente) · **Celebraciones y eventos privados** (pendiente).
5. **Cómo reservar** grupo/evento + fotos.

## `/contacto` — transaccional local (prioridad 3)
Acción: ubicación, teléfono, reservar, cómo llegar.
1. Encabezado + bloque de datos reales grande (dirección, tel/WhatsApp, horario) — lo primero visible.
2. **Cómo reservar** (llamar/WhatsApp) · **Cómo llegar** (mapa embebido, aparcamiento pendiente).
3. **Horario** (08:00–23:00; cierre semanal pendiente).
4. FAQ contacto + cierre.

## Decisiones de UI clave (disenador-ui)
- **Jerarquía:** un H1 grande en Fraunces por página; eyebrow en oro; cuerpo Mulish generoso.
- **Composición con carácter:** hero asimétrico, galerías con tamaños variables, filetes de oro;
  evitar simetría y rejillas de 3 tarjetas iguales.
- **Foto:** protagonista, a sangre, con viñeteado cálido; `<Image>` de Astro (webp, width/height).
- **Estados:** foco visible en oro, hover con `transform`/color, transición 150–250ms.
- **Datos pendientes:** se muestran como nota discreta con estilo propio (filete brasa + cursiva),
  nunca inventados. Honestidad = requisito del revisor.
