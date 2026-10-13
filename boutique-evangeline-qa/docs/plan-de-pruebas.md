# Plan de Pruebas — La boutique d'Evangeline

## 1. Información general

| Campo | Valor |
|---|---|
| **Proyecto** | La boutique d'Evangeline |
| **URL** | https://laboutiquedevangeline.cl |
| **Tipo de aplicación** | Tienda online (React + Vite + Tailwind) |
| **Fecha de inicio** | Octubre 2026 |
| **Responsable** | Fabián Ortega Rojas |
| **Rol** | Analista QA |

## 2. Objetivo

Validar el correcto funcionamiento de la tienda online La boutique d'Evangeline, 
identificando bugs funcionales, de usabilidad y de integración, con el fin de 
garantizar una experiencia de usuario óptima en todos los dispositivos.

## 3. Alcance

### 3.1. En alcance

- **Catálogo de productos:** visualización, filtros, carga de imágenes.
- **Detalle de producto:** modal, miniaturas, información completa.
- **Carrito de compras:** agregar, modificar cantidad, eliminar, totales.
- **Checkout:** validación de formulario, cálculo de totales.
- **Envío por WhatsApp:** generación correcta del mensaje con datos del pedido.
- **Navegación:** header sticky, menú, links internos.
- **Diseño responsive:** móvil, tablet, desktop.
- **Barra flotante del carrito (StickyCart):** aparición, ocultamiento, contador.
- **Modales legales:** Términos y Condiciones, Política de Privacidad.
- **Integración con Google Tag Manager:** verificar que los eventos se disparen.

### 3.2. Fuera de alcance

- Pasarela de pago (no implementada).
- Backend o base de datos (no existe).
- Panel de administración (no existe).
- Autenticación de usuarios (no implementada).
- Pruebas de carga o estrés.

## 4. Estrategia de pruebas

Se ejecutarán las siguientes pruebas:

| Tipo | Descripción | Objetivo |
|---|---|---|
| **Funcionales** | Validar que cada funcionalidad opere según lo esperado | Asegurar que todo funcione |
| **Regresión** | Verificar que cambios nuevos no rompan funcionalidades existentes | Mantener estabilidad |
| **Integración** | Validar la interacción entre módulos (carrito → checkout → WhatsApp) | Asegurar flujo completo |
| **Responsive** | Validar visualización en distintos dispositivos y resoluciones | Buena experiencia en móvil |
| **Usabilidad** | Evaluar claridad, navegación y accesibilidad | Facilidad de uso |
| **Exploratorias** | Probar flujos sin casos predefinidos, buscando bugs inesperados | Descubrir bugs ocultos |

## 5. Ambientes de prueba

| Ambiente | URL | Descripción |
|---|---|---|
| **Producción** | https://laboutiquedevangeline.cl | Ambiente real, donde se ejecutan las pruebas |

**Nota:** al no existir ambiente de staging o QA, las pruebas se ejecutan directamente 
sobre producción. Esto implica que los bugs detectados se reportan al desarrollador 
para su corrección.

## 6. Navegadores y dispositivos

### 6.1. Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Edge (última versión)
- Safari (última versión, si es posible)

### 6.2. Dispositivos

- **Desktop:** resolución 1920x1080
- **Tablet:** resolución 768x1024
- **Móvil:** resolución 375x667 (iPhone SE) y 390x844 (iPhone 12/13)

### 6.3. Herramientas de emulación

- Chrome DevTools (modo responsive)

## 7. Criterios de entrada

- La web está desplegada y accesible en producción.
- El catálogo de productos está cargado correctamente.
- El checkout y el envío por WhatsApp están funcionando.
- El desarrollador confirma que la versión a probar es estable.

## 8. Criterios de salida

- Todos los casos de prueba planificados fueron ejecutados.
- Los bugs encontrados fueron reportados con evidencia.
- Los bugs críticos y altos fueron corregidos y re-verificados.
- La documentación QA está completa en el repositorio.

## 9. Riesgos identificados

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| No hay ambiente de QA | Alta | Medio | Probar en producción con precaución |
| Datos de prueba limitados | Media | Bajo | Usar productos reales del catálogo |
| Falta de backend | Alta | Bajo | Validar solo frontend |
| Cambios en producción durante pruebas | Media | Medio | Coordinar con el desarrollador |
| Tiempo limitado | Media | Medio | Priorizar casos críticos primero |

## 10. Cronograma

| Fase | Duración | Fecha estimada |
|---|---|---|
| Planificación | 1 día | Octubre 2026 |
| Diseño de casos de prueba | 2 días | Octubre 2026 |
| Ejecución de pruebas | 3 días | Octubre 2026 |
| Reporte de bugs | 1 día | Octubre 2026 |
| Automatización (Playwright) | 3 días | Octubre 2026 |
| Documentación final | 1 día | Octubre 2026 |
| **Total** | **11 días** | |

## 11. Entregables

- Plan de pruebas (este documento)
- Casos de prueba (`casos-de-prueba.md`)
- Resultados de ejecución (`resultados-de-pruebas.md`)
- Reporte de bugs (`bugs-reportados.md`)
- Scripts de automatización (`automatizacion/`)
- Evidencias (capturas en `evidencias/`)

## 12. Aprobaciones

| Rol | Nombre | Fecha |
|---|---|---|
| Analista QA | Fabián Ortega Rojas | Octubre 2026 |
| Desarrollador | Fabián Ortega Rojas | Octubre 2026 |

---

**Última actualización:** Octubre 2026