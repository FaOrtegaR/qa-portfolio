# Proyecto QA — La boutique d'Evangeline

## Descripción

Proyecto de aseguramiento de calidad (QA) realizado sobre la tienda online 
[La boutique d'Evangeline](https://laboutiquedevangeline.cl), una web de productos 
virales desarrollada en React + Vite + Tailwind y desplegada en Vercel.

Este repositorio documenta el proceso completo de QA: planificación, diseño de casos, 
ejecución de pruebas, reporte de bugs, y automatización.

## Objetivo

Validar el correcto funcionamiento de la tienda online, identificando bugs 
funcionales, de usabilidad y de integración, con el fin de garantizar una 
experiencia de usuario óptima.

## Resultados

| Métrica | Valor |
|---|---|
| Casos de prueba diseñados | 15 |
| Casos ejecutados | 15 |
| Casos pasados | 15 |
| Tasa de éxito | 100% |
| Bugs detectados durante desarrollo | 7 |
| Bugs resueltos | 7 |
| Bugs pendientes | 0 |
| Mejoras implementadas | 8 |
| Tests automatizados | 3 |

## Documentación

- [Plan de pruebas](./docs/plan-de-pruebas.md)
- [Casos de prueba](./docs/casos-de-prueba.md)
- [Resultados de pruebas](./docs/resultados-de-pruebas.md)
- [Bugs reportados](./docs/bugs-reportados.md)
- [Mejoras implementadas](./docs/mejoras-implementadas.md)

## Evidencias

Capturas de pantalla de cada caso de prueba en la carpeta [`evidencias/`](./evidencias/).

## Automatización

3 casos de prueba automatizados con Playwright:

| ID | Caso | Archivo |
|---|---|---|
| TC-001 | Visualización de productos | `tests/catalogo.spec.js` |
| TC-004 | Agregar producto al carrito | `tests/carrito.spec.js` |
| TC-010 | Header sticky | `tests/navegacion.spec.js` |

Ver [`automatizacion/README.md`](./automatizacion/README.md) para instrucciones.

## Alcance

- Catálogo de productos
- Carrito de compras
- Checkout y envío por WhatsApp
- Diseño responsive (móvil, tablet, desktop)
- Navegación y usabilidad
- Integración con Google Tag Manager

## Herramientas utilizadas

- **Jira + Xray** — Gestión de casos de prueba y ejecuciones
- **Postman** — Pruebas de API (Google Tag Manager)
- **SQL** — Validación de datos (si aplica)
- **Playwright** — Automatización de pruebas
- **Chrome DevTools** — Análisis de consola y red

## Autor

Fabián Ortega Rojas — Analista QA Junior
linkedin.com/in/fabianortegarojas | fabortegarojas@gmail.com