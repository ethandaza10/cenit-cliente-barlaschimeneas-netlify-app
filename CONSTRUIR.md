# Construir la web de barlaschimeneas.netlify.app

Tres pasos. La construcción corre aquí, en la consola (Claude Code), no en el SaaS.

## 1. Clona y entra
```bash
git clone git@github.com:ethandaza10/cenit-cliente-barlaschimeneas-netlify-app.git
cd cenit-cliente-barlaschimeneas-netlify-app
```

## 2. Lanza la construcción
```bash
claude "Construye la web siguiendo /kit-de-obra con el pack de .claude/agents. Empieza por director-arte, sigue el orden del pack y termina pasando el revisor-diseno. No inventes datos del negocio: usa el copy y lo marcado como pendiente déjalo señalado."
```
Los 7 agentes leen el kit (`/kit-de-obra`) y levantan el sitio (astro).
Para construir con OTRO pack (p. ej. Picasso), sustituye `.claude/agents` por los tuyos y ajusta `cenit.build.json`.

## 3. Despliega y valida
Despliega el sitio y vuelve al SaaS → pestaña Producción → **Validador**: pega la URL desplegada.
Obtendrás la puntuación objetiva (SEO, CWV, semántica…). Si sale "apto", entregable al cliente.
