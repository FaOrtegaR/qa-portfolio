# Resultados de Pruebas — La boutique d'Evangeline

## Información general

| Campo | Valor |
|---|---|
| **Proyecto** | La boutique d'Evangeline |
| **URL** | https://laboutiquedevangeline.cl |
| **Fecha de ejecución** | Octubre 2026 |
| **Responsable** | Fabián Ortega Rojas |
| **Ambiente** | Producción |
| **Total de casos ejecutados** | 15 |
| **Casos pasados** | 15 |
| **Casos fallidos** | 0 |
| **Tasa de éxito** | 100% |

---

## Resumen de ejecución por módulo

| Módulo | Casos | Pasados | Fallidos | Estado |
|---|---|---|---|---|
| Catálogo | 3 | 3 | 0 | ✅ |
| Carrito | 3 | 3 | 0 | ✅ |
| Checkout | 3 | 3 | 0 | ✅ |
| Navegación | 2 | 2 | 0 | ✅ |
| Responsive | 2 | 2 | 0 | ✅ |
| StickyCart | 1 | 1 | 0 | ✅ |
| Modales legales | 1 | 1 | 0 | ✅ |
| **Total** | **15** | **15** | **0** | **✅** |

---

## Detalle de ejecución

| ID | Módulo | Título | Prioridad | Resultado | Observaciones |
|---|---|---|---|---|---|
| TC-001 | Catálogo | Visualización de productos en desktop | Alta | ✅ Pasó | Grilla de 4 columnas correcta |
| TC-002 | Catálogo | Visualización de productos en móvil | Alta | ✅ Pasó | Grilla de 2 columnas correcta |
| TC-003 | Catálogo | Detalle del producto (modal) | Alta | ✅ Pasó | Modal completo y funcional |
| TC-004 | Carrito | Agregar producto al carrito | Crítica | ✅ Pasó | Contador se actualiza correctamente |
| TC-005 | Carrito | Modificar cantidad de producto | Alta | ✅ Pasó | Cantidades y totales correctos |
| TC-006 | Carrito | Eliminar producto del carrito | Alta | ✅ Pasó | Eliminación correcta |
| TC-007 | Checkout | Validación de campos vacíos | Crítica | ✅ Pasó | Mensajes de error visibles |
| TC-008 | Checkout | Validación de RUT | Alta | ✅ Pasó | Validación correcta |
| TC-009 | Checkout | Envío de pedido por WhatsApp | Crítica | ✅ Pasó | Mensaje completo y correcto |
| TC-010 | Navegación | Header sticky | Media | ✅ Pasó | Header permanece fijo |
| TC-011 | Navegación | Navegación desde el menú | Alta | ✅ Pasó | Todos los links funcionan |
| TC-012 | Responsive | Vista en tablet | Media | ✅ Pasó | Adaptación correcta |
| TC-013 | Responsive | Vista de modales en móvil | Media | ✅ Pasó | Modales ocupan toda la pantalla |
| TC-014 | StickyCart | Aparición y ocultamiento | Alta | ✅ Pasó | Comportamiento correcto |
| TC-015 | Modales legales | Términos y Privacidad | Baja | ✅ Pasó | Ambos modales funcionan |

---

## Bugs detectados y resueltos durante el desarrollo

| ID | Título | Severidad | Estado |
|---|---|---|---|
| BUG-001 | El footer no se pegaba al fondo en contenido corto | Media | ✅ Resuelto |
| BUG-002 | El Checkout no se cerraba correctamente | Alta | ✅ Resuelto |
| BUG-003 | El Checkout requería un setTimeout para cerrarse | Media | ✅ Resuelto |
| BUG-004 | El scroll del StickyCart no funcionaba bien | Media | ✅ Resuelto |
| BUG-005 | El Checkout no se cerraba al hacer scroll al catálogo | Media | ✅ Resuelto |
| BUG-006 | Enlace con href incorrecto | Baja | ✅ Resuelto |
| BUG-007 | Número de WhatsApp incorrecto | Crítica | ✅ Resuelto |

**Total de bugs detectados:** 7
**Total de bugs resueltos:** 7
**Bugs pendientes:** 0

*(El detalle completo de cada bug está en `bugs-reportados.md`)*

---

## Pruebas de regresión

Después de cada corrección de bug, se ejecutaron pruebas de regresión para verificar que los cambios no rompieran funcionalidades existentes.

| Fecha | Bug corregido | Pruebas ejecutadas | Resultado |
|---|---|---|---|
| Durante desarrollo | BUG-001 | TC-001 a TC-015 | ✅ Sin regresiones |
| Durante desarrollo | BUG-002 | TC-007 a TC-009 | ✅ Sin regresiones |
| Durante desarrollo | BUG-004 | TC-004 a TC-006 | ✅ Sin regresiones |
| Durante desarrollo | BUG-007 | TC-009 | ✅ Sin regresiones |

---

## Navegadores y dispositivos probados

### Navegadores

- ✅ Chrome (desktop, última versión)
- ✅ Firefox (desktop, última versión)
- ✅ Edge (desktop, última versión)
- ✅ Chrome DevTools (modo móvil y tablet)

### Dispositivos

- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Móvil (375x667 - iPhone SE)
- ✅ Móvil (390x844 - iPhone 12/13)

---

## Métricas de calidad

| Métrica | Valor |
|---|---|
| Casos ejecutados | 15 |
| Casos pasados | 15 |
| Casos fallidos | 0 |
| Tasa de éxito | 100% |
| Bugs críticos resueltos | 1 |
| Bugs altos resueltos | 1 |
| Bugs medios resueltos | 4 |
| Bugs bajos resueltos | 1 |
| Tiempo total de pruebas | 3 días |
| Cobertura funcional | Alta |

---

## Observaciones

- Todos los casos de prueba fueron ejecutados directamente en producción.
- Al no existir un ambiente de staging o QA, se coordinó con el desarrollador para evitar cambios durante la ejecución de pruebas.
- Los bugs críticos (BUG-002, BUG-007) fueron verificados en múltiples navegadores y dispositivos.
- La web está estable y lista para uso en producción.
- Se recomienda implementar un ambiente de QA en futuras versiones para evitar probar en producción.

---

## Conclusión

El proyecto La boutique d'Evangeline pasó exitosamente las pruebas de QA ejecutadas en octubre de 2026. Se detectaron y resolvieron 7 bugs durante el desarrollo, y los 15 casos de prueba ejecutados sobre la versión final resultaron exitosos. La web está funcionando correctamente en producción, con una tasa de éxito del 100% y sin bugs pendientes conocidos.

---

**Última actualización:** Octubre 2026