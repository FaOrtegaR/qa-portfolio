# Plan de Pruebas — La Mejor Caserita

## 1. Información general

| Campo | Valor |
|---|---|
| **Proyecto** | La Mejor Caserita (App Android) |
| **Tipo** | Aplicación móvil nativa (Kotlin + Jetpack Compose) |
| **Fecha de inicio** | Octubre 2026 |
| **Responsable** | Fabián Ortega Rojas |

## 2. Objetivo

Validar la estabilidad de la aplicación, la precisión de los cálculos matemáticos (totales) y la correcta interacción del usuario con el reconocimiento de voz.

## 3. Alcance

- **En alcance:** Pruebas funcionales de pedidos, productos, estados, reconocimiento de voz, persistencia y estabilidad.
- **Fuera de alcance:** Pruebas de rendimiento extremo, pruebas de seguridad (pentesting), e integración con APIs externas (no aplica).

## 4. Estrategia de pruebas

| Tipo | Descripción |
|---|---|
| **Funcionales** | Validar CRUD de productos y pedidos. |
| **Regresión** | Verificar que los cambios de precio no rompan los totales. |
| **Integración** | Validar el flujo Producto → Pedido → Base de datos. |
| **Usabilidad/Estabilidad** | Validar que la app no se cierre al usar el micrófono o al navegar rápido. |

## 5. Ambientes de prueba

| Ambiente | Descripción |
|---|---|
| **Dispositivo Real** | Motorola Edge 60 (Android 14) |
| **Dispositivo Real** | Samsung Galaxy A50 (Android 11) |

## 6. Criterios de salida

- 100% de los casos de prueba ejecutados.
- 0 bugs críticos pendientes de resolución.
- Totales matemáticos exactos en todos los escenarios.