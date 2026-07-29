# cenit-cliente-barlaschimeneas-netlify-app

Proyecto web de **Bar las chimeneas** (barlaschimeneas.netlify.app) generado por CÉNIT.

## Qué es esto
Un **Kit de Obra**: todo lo necesario para construir la web, listo para un agente (el de CÉNIT o el tuyo).
CÉNIT decide *qué* construir; la obra se levanta aquí, desde la consola con Claude Code.

## Cómo construir
1. Clona este repo.
2. Revisa `/kit-de-obra` (spec.json, copy por página, requisitos, brief de diseño).
3. Asegúrate de tener el pack de agentes en `.claude/agents/` (o ajústalo en `cenit.build.json`).
4. Ejecuta Claude Code y construye cada página respetando `requisitos.md` y los objetivos de rendimiento.
5. No inventes datos del negocio: usa el copy y `client_facts`; lo listado como *pendiente* lo aporta el cliente.

## Stack
astro — HTML estático → mejor CWV de fábrica, seguro y barato; es código→Git→agente. Next.js solo si el cliente necesita interactividad tipo app.

## Aceptación
La web construida debe pasar el Validador de CÉNIT: requisitos SEO por página, CWV en verde, WCAG 2.2 AA, HTML semántico, contenido = copy del kit, no look genérico.
