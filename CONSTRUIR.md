# Construir la web de Bar las chimeneas

Tres pasos. La construcción corre aquí, en la consola (Claude Code), no en el SaaS.

## 1. Clona y entra
```bash
git clone git@github.com:ethandaza10/cenit-cliente-barlaschimeneas-netlify-app.git
cd cenit-cliente-barlaschimeneas-netlify-app
```

## 2. Fase de CONCEPTOS (elige el estilo antes de construir)
No construyas todo de golpe. Primero, 3 propuestas de la HOME para elegir:
```bash
claude "Lanza director-arte en modo conceptos: genera 3 direcciones visuales DISTINTAS y maqueta solo la home de cada una como HTML autocontenido (concepto-a.html, concepto-b.html, concepto-c.html) siguiendo /kit-de-obra/diseño/brief.md. Usa el copy real y las fotos de /assets/manifest.json (hueco sin foto = 'Foto real pendiente'). No construyas nada más."
```
Abre los 3 `.html` con doble clic, elígelos con el cliente.

## 3. Fase de CONSTRUCCIÓN (con el concepto aprobado)
```bash
claude "Me quedo con el concepto <A/B/C> [+ ajustes que quieras]. Construye AHORA todo el sitio con esa dirección, siguiendo /kit-de-obra y .claude/agents. Orden: director-arte (fija la dirección elegida como direccion-visual.md) → arquitecto-ux → disenador-ui → frontend-seo → motion. CADA rol deja su entregable en disco. Coloca las fotos según /assets/manifest.json; nunca inventes fotos. Al terminar, lanza revisor-diseno y anti-generico como SUBAGENTES INDEPENDIENTES (Task tool, contexto limpio); si dan 'rehacer', ITERA hasta 'apto'. No inventes datos del negocio."
```
Clave: los revisores (`revisor-diseno`, `anti-generico`) corren como subagentes **INDEPENDIENTES**, no encarnados por
el mismo que construye — así la revisión es adversarial de verdad y no se autoaprueba un diseño genérico. La garantía
de calidad = entregable por rol + revisión independiente + Validador de CÉNIT.
Para construir con OTRO pack (p. ej. Picasso), sustituye `.claude/agents` por los tuyos y ajusta `cenit.build.json`.

## 4. Despliega y valida
Despliega el sitio y vuelve al SaaS → pestaña Producción → **Validador**: pega la URL desplegada.
Obtendrás la puntuación objetiva (SEO, CWV, semántica…). Si sale "apto", entregable al cliente.
