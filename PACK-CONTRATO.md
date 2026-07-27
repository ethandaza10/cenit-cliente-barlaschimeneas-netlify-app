# Contrato del pack de agentes

Este proyecto se puede construir con CUALQUIER pack de agentes que respete este contrato.
Así se puede usar el de CÉNIT, el tuyo, o el de un tercero ("Picasso") y compararlos de forma objetiva.

## Entrada (lo que recibe el pack)
- `/kit-de-obra/spec.json` — el contrato completo (cliente, páginas, copy, requisitos).
- `/kit-de-obra/copy/*.md` — el copy por página (ya redactado y revisado).
- `/kit-de-obra/requisitos.md` — técnica, SEO, CWV, accesibilidad.
- `/kit-de-obra/diseño/brief.md` — dirección visual y referencias (inspirar, no copiar).

## Salida (lo que debe entregar)
Una web (stack por defecto: astro) que PASE EL VALIDADOR de CÉNIT:
- requisitos SEO por página
- CWV en verde
- WCAG 2.2 AA
- HTML semántico
- contenido = copy del kit
- no look genérico

## Reglas
- No inventar datos del negocio: usar el copy y `client_facts`; lo marcado como pendiente lo aporta el cliente.
- Respetar los objetivos de rendimiento (Core Web Vitals) de requisitos.md.
- Una página por intención (no mezclar, no duplicar).

## Cómo se mide (comparación objetiva entre packs)
CÉNIT re-audita la web construida y ejecuta su Validador → produce una puntuación 0-100 y un veredicto.
Dos packs distintos sobre el mismo kit → dos puntuaciones comparables. Gana el que mejor cumple el contrato.
