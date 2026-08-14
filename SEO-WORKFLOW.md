# SEO Workflow — Guey Tours

Este repo es un fork de [grahamjackdesign/guey-tours](https://github.com/grahamjackdesign/guey-tours), mantenido por Draft Studio para el trabajo de SEO del proyecto.

## Flujo de trabajo

1. Todo el trabajo de SEO se hace en la rama `seo-changes` (o ramas derivadas de ella).
2. Cada push a `seo-changes` genera automáticamente un Preview Deployment en Vercel con su propia URL — no se necesita pedir nada a Graham para probar cambios.
3. Cuando los cambios estén validados, se abre un Pull Request desde este fork hacia el repo original (`grahamjackdesign/guey-tours`).
4. Graham revisa, aprueba y hace merge a `main` en su repo, y confirma el deploy a producción en su Vercel.

## Ambiente de pruebas (Vercel — cuenta Draft Studio)

- Producción de este fork: rama `main` → `guey-tours-seven.vercel.app`
- Previews: cualquier otra rama (ej. `seo-changes`) genera su propia URL automáticamente

## Variables de entorno

Ver `env.local.example` para la lista de variables requeridas. `ANTHROPIC_API_KEY` no está disponible en este ambiente (clave personal de Graham) — las funciones de chat/traducción con IA no funcionan aquí, no afecta el trabajo de SEO.
