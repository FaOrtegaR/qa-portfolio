# Automatización — La boutique d'Evangeline

Pruebas automatizadas con Playwright para la tienda online.

## Casos automatizados

| ID | Caso | Archivo |
|---|---|---|
| TC-001 | Visualización de productos | `tests/catalogo.spec.js` |
| TC-004 | Agregar producto al carrito | `tests/carrito.spec.js` |
| TC-010 | Header sticky | `tests/navegacion.spec.js` |

## Cómo ejecutar los tests

### Instalación

```bash
npm install
npx playwright install