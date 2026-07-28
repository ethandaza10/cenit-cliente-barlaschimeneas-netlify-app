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

## Cómo se ejecuta (importante — léelo antes de construir)
El flujo tiene **dos fases**; no construyas todo de golpe:

**Fase 1 — Conceptos (para elegir estilo):** lanza `director-arte` en modo conceptos → **3 direcciones distintas**,
maquetadas como **3 HTML autocontenidos de la home** (`concepto-a/b/c.html`) que se abren con doble clic. El cliente
elige uno (+ notas). NO construyas el resto hasta que haya elegido.

**Fase 2 — Construcción (con el concepto aprobado):** en orden `director-arte` (fija la dirección elegida) →
`arquitecto-ux` → `disenador-ui` → `frontend-seo` → `motion`. **Cada rol deja su ENTREGABLE** en disco
(`direccion-visual.md`, `ux/*.md`, `ui/*.md`…): es la prueba de que se aplicó su criterio.

**Revisión (innegociable):** `revisor-diseno` y `anti-generico` se ejecutan **como subagentes INDEPENDIENTES**
(Task tool, contexto limpio) — NO encarnados por quien construyó, o la revisión no vale (te autoapruebas). Si dan
`rehacer`, itera hasta `apto`. La garantía de calidad = entregables por rol + revisión independiente + Validador de CÉNIT.

## Contrato
Entrada = `/kit-de-obra`. Salida = una web que pasa el Validador de CÉNIT. Ver `PACK-CONTRATO.md`.
Cualquier pack que respete el contrato es intercambiable y comparable objetivamente.
