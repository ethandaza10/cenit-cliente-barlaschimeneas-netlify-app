# cenit-design-pack

El pack de diseño de CÉNIT: un equipo de agentes especializados que construye una web profesional a partir del
Kit de Obra. **Es portable**: funciona en cualquier proyecto que abras con Claude Code, no solo en CÉNIT.

## Los agentes (cada uno, una cosa)
En orden de trabajo:
1. **director-arte** — dirección visual desde el brief y las referencias.
2. **arquitecto-ux** — estructura, jerarquía y ruta de conversión de cada página.
3. **disenador-ui** — el acabado visual sobre el esqueleto de UX.
4. **anti-generico** — su único trabajo: que NO parezca hecho por IA.
5. **frontend-seo** — lo implementa en Astro con SEO técnico y CWV impecables.
6. **motion** — microinteracciones con criterio (opcional).
7. **revisor-diseno** — puerta final: brief + criterios premium + contrato del Validador.

Sobre `sistema-diseno/` (tokens y principios base).

## Cómo usarlo
- **En un proyecto de cliente de CÉNIT:** ya viene copiado en `.claude/agents/`. Abre Claude Code y construye.
- **En tus propios proyectos/apps:** copia esta carpeta `.claude/agents/` (y `sistema-diseno/`) al proyecto, o
  ponla en tu `~/.claude/agents/` global para que sea tu diseñador por defecto en todo.
- **Para crear tu propio pack (p. ej. "Picasso"):** forkea este, cambia los agentes, mantén el contrato.

## Contrato
Entrada = `/kit-de-obra`. Salida = una web que pasa el Validador de CÉNIT. Ver `PACK-CONTRATO.md`.
Cualquier pack que respete el contrato es intercambiable y comparable objetivamente.
