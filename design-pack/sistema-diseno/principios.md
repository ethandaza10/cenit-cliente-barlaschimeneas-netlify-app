# Sistema de diseño — base del pack CÉNIT

La base sobre la que trabajan todos los agentes. Evita el "look genérico" dando estructura, no recortando libertad.

## Tokens (punto de partida, el Director de Arte los concreta por proyecto)
- **Color**: define fondo, superficie, texto, texto-atenuado, acento y acento-suave. Un acento con carácter, no el
  azul por defecto. Contraste AA siempre.
- **Tipografía**: una familia de display con personalidad para títulos + una legible para cuerpo. Escala modular
  (p. ej. 1.25). Interlineado generoso en cuerpo.
- **Espaciado**: escala coherente (4/8/12/16/24/32/48/64…). El aire es diseño; peca de generoso.
- **Radios y sombras**: con criterio, no en todo. Una sombra sutil y consistente, no diez.

## Principios innegociables
1. **Un foco por pantalla.** Jerarquía visual real: el ojo sabe dónde mirar primero.
2. **Aire intencional.** Nada apretado; el espacio en blanco comunica calidad.
3. **Identidad, no plantilla.** Debe notarse que es ESTE negocio y esta ciudad, no cualquiera.
4. **Contenido primero.** El copy real manda; el diseño lo sirve, no lo tapa.
5. **Coherencia total.** Todo sale de estos tokens; no hay estilos sueltos por sección.
6. **Rendimiento y accesibilidad no son opcionales.** CWV en verde y WCAG AA forman parte del diseño.

## Qué separa "experto" de "amateur" (el 20% que da el 80% — regla dura)
Lo amateur no suele ser "feo": es **genérico y sin detalle**. Para que se note el estudio de diseño de 20 años:
- **UNA idea visual distintiva.** Cada web debe tener **un gesto memorable** (hero editorial a sangre, un display con
  carácter, un tratamiento de foto propio, un detalle recurrente). Sin idea fuerte = plantilla, por muy limpia que sea.
- **Layout EDITORIAL, no de plantilla.** Prohibido "todo centrado". Usa asimetría, alineación a la izquierda,
  composición a dos columnas, imagen a sangre, solapamientos con criterio. Piensa revista, no folleto.
- **Tipografía con voz.** Un display de verdad (NO Inter/Arial/system por defecto), escala muy contrastada (títulos
  GRANDES de verdad), tracking y line-height cuidados. La tipografía es el 50% del carácter.
- **Un acento, usado con avaricia.** Un solo color de acento, en pocos sitios y con intención. Nada de arcoíris ni
  degradados morados/azules "de IA".
- **Foto real como protagonista.** Fotografía real del negocio, bien tratada y consistente, a buen tamaño (el otro 50%
  de "premium"). Nunca fotos inventadas; hueco marcado si faltan.
- **Ritmo y detalle.** Secciones que respiran DISTINTO (no todas del mismo alto), divisores/bordes finos, estados hover
  cuidados, alineaciones perfectas. El detalle es lo único que no se puede fingir.

## Patrones PROHIBIDOS (tells de amateur — si aparece UNO, está mal, a rehacer)
- Hero centrado + subtítulo gris + dos botones (uno relleno + uno "outline").
- Degradado morado/azul "de IA"; "glass"/sombras suaves en todo porque sí.
- Tres o cuatro **tarjetas idénticas** con un iconito arriba.
- **Todo centrado** y simétrico; secciones todas del mismo alto y ritmo.
- Emojis como iconos; iconos genéricos sin relación.
- Tipografía del sistema sin personalidad (Inter/Roboto por defecto).
- Copy de humo ("Bienvenidos", "Calidad y confianza", "Soluciones a tu medida").
- Fotos de stock / genéricas / inventadas.

## Vara de medir
Linear, Stripe, productos premium. Si parece un tema por defecto de shadcn/Tailwind o una plantilla de mercado,
está mal. Dos preguntas finales, ambas deben ser SÍ: **¿lo firmaría un estudio de diseño de verdad?** y
**¿tiene una idea que hace que NO pueda ser la web de cualquier otro negocio?**
