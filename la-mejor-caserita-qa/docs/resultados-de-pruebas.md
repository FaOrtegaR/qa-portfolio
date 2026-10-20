# Resultados de Pruebas — La Mejor Caserita

## Información general

| Campo | Valor |
|---|---|
| **Proyecto** | La Mejor Caserita (App Android) |
| **Fecha de ejecución** | Octubre 2026 |
| **Responsable** | Fabián Ortega Rojas |
| **Ambiente** | Dispositivo Real (Motorola Edge 60) / Emulador Android Studio |
| **Total de casos ejecutados** | 15 |
| **Casos pasados** | 15 |
| **Tasa de éxito** | 100% (tras resolución de bugs) |

---

## Resumen de ejecución por módulo

| Módulo | Casos | Pasados | Fallidos (inicialmente) | Estado Final |
|---|---|---|---|---|
| Productos | 3 | 3 | 0 | ✅ |
| Pedidos (CRUD y Cálculos) | 5 | 5 | 2 (BUG-001) | ✅ Corregido |
| Estados (Pago y Entrega) | 2 | 2 | 0 | ✅ |
| Reconocimiento de Voz | 3 | 3 | 1 (BUG-002) | ✅ Corregido |
| Estabilidad y UX | 2 | 2 | 1 (BUG-003) | ✅ Corregido |
| **Total** | **15** | **15** | **4** | **✅** |

---

## Detalle de ejecución

| ID | Módulo | Título | Prioridad | Resultado Inicial | Resultado Final |
|---|---|---|---|---|---|
| TC-001 | Productos | Crear un producto nuevo | Alta | ✅ Pasó | ✅ Pasó |
| TC-002 | Productos | Editar el precio de un producto | Alta | ✅ Pasó | ✅ Pasó |
| TC-003 | Productos | Eliminar un producto | Alta | ✅ Pasó | ✅ Pasó |
| TC-004 | Pedidos | Crear pedido con 1 producto | Crítica | ✅ Pasó | ✅ Pasó |
| TC-005 | Pedidos | Crear pedido con múltiples productos | Crítica | ❌ Falló (BUG-001) | ✅ Pasó |
| TC-006 | Pedidos | Editar pedido (agregar cantidad) | Alta | ❌ Falló (BUG-001) | ✅ Pasó |
| TC-007 | Pedidos | Editar pedido (agregar producto nuevo) | Alta | ❌ Falló (BUG-001) | ✅ Pasó |
| TC-008 | Pedidos | Eliminar un pedido | Media | ✅ Pasó | ✅ Pasó |
| TC-009 | Estados | Marcar como pagado / por pagar | Alta | ✅ Pasó | ✅ Pasó |
| TC-010 | Estados | Marcar como entregado | Alta | ✅ Pasó | ✅ Pasó |
| TC-011 | Voz | Agregar producto por voz simple | Alta | ✅ Pasó | ✅ Pasó |
| TC-012 | Voz | Agregar múltiples productos por voz | Media | ✅ Pasó | ✅ Pasó |
| TC-013 | Voz | Cancelar reconocimiento de voz | Media | ❌ Falló (BUG-002) | ✅ Pasó |
| TC-014 | UX | Salir de app con micrófono activo | Alta | ❌ Falló (Crash) | ✅ Pasó |
| TC-015 | UX | Persistencia de datos (Cerrar/Abrir) | Crítica | ✅ Pasó | ✅ Pasó |

---

## Pruebas de regresión

Después de corregir los bugs críticos, se ejecutaron pruebas de regresión para asegurar que los cambios no rompieran otras funcionalidades.

| Fecha | Bug corregido | Pruebas ejecutadas | Resultado |
|---|---|---|---|
| Durante desarrollo | BUG-001 | TC-004 a TC-008 | ✅ Sin regresiones |
| Durante desarrollo | BUG-002 y BUG-003 | TC-011 a TC-015 | ✅ Sin regresiones |

---

## Métricas finales de calidad

| Métrica | Valor |
|---|---|
| Casos ejecutados | 15 |
| Casos pasados (final) | 15 |
| Tasa de éxito final | 100% |
| Bugs críticos resueltos | 1 |
| Bugs altos resueltos | 1 |
| Bugs medios resueltos | 1 |
| Cobertura funcional | Alta |

---

## Conclusión

La aplicación La Mejor Caserita pasó exitosamente las pruebas de QA ejecutadas en octubre de 2026. Se detectaron y resolvieron 3 bugs (uno de cálculo crítico, uno de estabilidad y uno de UI) durante el ciclo de pruebas. 

La versión final está estable, con persistencia de datos verificada, reconocimiento de voz funcional, y una tasa de éxito del 100% en los 15 casos de prueba ejecutados en dispositivos reales.