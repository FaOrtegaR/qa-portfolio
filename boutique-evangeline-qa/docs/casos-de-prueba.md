# Casos de Prueba — La boutique d'Evangeline

## Resumen

| Métrica | Valor |
|---|---|
| Total de casos diseñados | 15 |
| Casos ejecutados | 15 |
| Casos pasados | 15 |
| Casos fallidos | 0 |
| Bugs detectados durante desarrollo | 7 |
| Bugs resueltos | 7 |

## Distribución por módulo

| Módulo | Casos |
|---|---|
| Catálogo | 3 |
| Carrito | 3 |
| Checkout | 3 |
| Navegación | 2 |
| Responsive | 2 |
| StickyCart | 1 |
| Modales legales | 1 |
| **Total** | **15** |

---

## Módulo: Catálogo

### TC-001 — Visualización de productos en desktop

| Campo | Detalle |
|---|---|
| **ID** | TC-001 |
| **Módulo** | Catálogo |
| **Prioridad** | Alta |
| **Tipo** | Funcional |
| **Precondiciones** | La web debe estar accesible |

**Pasos:**
1. Abrir https://laboutiquedevangeline.cl en Chrome desktop
2. Verificar que se carguen los productos en grilla
3. Verificar que cada producto muestre foto, nombre y precio

**Resultado esperado:** Grilla con 4 columnas, productos visibles con foto, nombre y precio.

**Resultado obtenido:** ✅ Pasó. Productos visibles correctamente en 4 columnas.

**Evidencia:** `evidencias/TC-001.png`

---

### TC-002 — Visualización de productos en móvil

| Campo | Detalle |
|---|---|
| **ID** | TC-002 |
| **Módulo** | Catálogo |
| **Prioridad** | Alta |
| **Tipo** | Responsive |
| **Precondiciones** | La web debe estar accesible |

**Pasos:**
1. Abrir https://laboutiquedevangeline.cl en Chrome DevTools (modo móvil 375x667)
2. Verificar que se carguen los productos en grilla
3. Verificar que la grilla se adapte a 2 columnas

**Resultado esperado:** Grilla con 2 columnas, productos visibles y bien distribuidos.

**Resultado obtenido:** ✅ Pasó. Productos visibles correctamente en 2 columnas.

**Evidencia:** `evidencias/TC-002.png`

---

### TC-003 — Detalle del producto (modal)

| Campo | Detalle |
|---|---|
| **ID** | TC-003 |
| **Módulo** | Catálogo |
| **Prioridad** | Alta |
| **Tipo** | Funcional |
| **Precondiciones** | El catálogo debe estar cargado |

**Pasos:**
1. Hacer clic sobre la foto de un producto
2. Verificar que se abra el modal con el detalle
3. Verificar que muestre: foto principal, miniaturas, nombre, precio, descripción

**Resultado esperado:** Modal abierto con toda la información del producto.

**Resultado obtenido:** ✅ Pasó. Modal funciona correctamente.

**Evidencia:** `evidencias/TC-003.png`

---

## Módulo: Carrito

### TC-004 — Agregar producto al carrito

| Campo | Detalle |
|---|---|
| **ID** | TC-004 |
| **Módulo** | Carrito |
| **Prioridad** | Crítica |
| **Tipo** | Funcional |
| **Precondiciones** | El catálogo debe estar cargado |

**Pasos:**
1. Hacer clic en el botón "+" de un producto
2. Verificar que el contador del carrito aumente en 1
3. Verificar que el producto aparezca en el carrito

**Resultado esperado:** Contador actualizado y producto visible en el carrito.

**Resultado obtenido:** ✅ Pasó. Contador y carrito funcionan correctamente.

**Evidencia:** `evidencias/TC-004.png`

---

### TC-005 — Modificar cantidad de un producto

| Campo | Detalle |
|---|---|
| **ID** | TC-005 |
| **Módulo** | Carrito |
| **Prioridad** | Alta |
| **Tipo** | Funcional |
| **Precondiciones** | Debe haber un producto en el carrito |

**Pasos:**
1. Abrir el carrito
2. Hacer clic en "+" para aumentar la cantidad
3. Hacer clic en "-" para disminuir la cantidad
4. Verificar que el total se actualice

**Resultado esperado:** La cantidad y el total se actualizan correctamente.

**Resultado obtenido:** ✅ Pasó. Cantidades y totales se actualizan correctamente.

**Evidencia:** `evidencias/TC-005.png`

---

### TC-006 — Eliminar producto del carrito

| Campo | Detalle |
|---|---|
| **ID** | TC-006 |
| **Módulo** | Carrito |
| **Prioridad** | Alta |
| **Tipo** | Funcional |
| **Precondiciones** | Debe haber un producto en el carrito |

**Pasos:**
1. Abrir el carrito
2. Hacer clic en el botón de eliminar (🗑️)
3. Verificar que el producto se elimine y el total se actualice

**Resultado esperado:** Producto eliminado y total actualizado.

**Resultado obtenido:** ✅ Pasó. Producto eliminado correctamente.

**Evidencia:** `evidencias/TC-006.png`

---

## Módulo: Checkout

### TC-007 — Validación de campos vacíos

| Campo | Detalle |
|---|---|
| **ID** | TC-007 |
| **Módulo** | Checkout |
| **Prioridad** | Crítica |
| **Tipo** | Funcional |
| **Precondiciones** | Debe haber un producto en el carrito |

**Pasos:**
1. Abrir el Checkout
2. Dejar los campos vacíos
3. Hacer clic en "Hacer el pedido"

**Resultado esperado:** Se muestran mensajes de error en los campos obligatorios.

**Resultado obtenido:** ✅ Pasó. Validaciones funcionan correctamente.

**Evidencia:** `evidencias/TC-007.png`

---

### TC-008 — Validación de RUT

| Campo | Detalle |
|---|---|
| **ID** | TC-008 |
| **Módulo** | Checkout |
| **Prioridad** | Alta |
| **Tipo** | Funcional |
| **Precondiciones** | Estar en el Checkout con envío por Starken seleccionado |

**Pasos:**
1. Ingresar un RUT inválido (ej: 12345678-9)
2. Hacer clic en "Hacer el pedido"
3. Verificar el mensaje de error

**Resultado esperado:** Se muestra mensaje de error indicando RUT inválido.

**Resultado obtenido:** ✅ Pasó. Validación de RUT funciona correctamente.

**Evidencia:** `evidencias/TC-008.png`

---

### TC-009 — Envío de pedido por WhatsApp

| Campo | Detalle |
|---|---|
| **ID** | TC-009 |
| **Módulo** | Checkout |
| **Prioridad** | Crítica |
| **Tipo** | Integración |
| **Precondiciones** | Debe haber un producto en el carrito |

**Pasos:**
1. Completar todos los campos del Checkout
2. Hacer clic en "Hacer el pedido"
3. Verificar que WhatsApp se abra con el mensaje pre-escrito
4. Verificar que el mensaje incluya: datos del cliente, forma de entrega, método de pago, detalle del pedido, total

**Resultado esperado:** WhatsApp se abre con el mensaje completo del pedido.

**Resultado obtenido:** ✅ Pasó. WhatsApp se abre con el mensaje correcto.

**Evidencia:** `evidencias/TC-009.png`

---

## Módulo: Navegación

### TC-010 — Header sticky

| Campo | Detalle |
|---|---|
| **ID** | TC-010 |
| **Módulo** | Navegación |
| **Prioridad** | Media |
| **Tipo** | Funcional |
| **Precondiciones** | La web debe estar cargada |

**Pasos:**
1. Hacer scroll hacia abajo
2. Verificar que el header se mantenga fijo en la parte superior

**Resultado esperado:** El header permanece visible al hacer scroll.

**Resultado obtenido:** ✅ Pasó. Header sticky funciona correctamente.

**Evidencia:** `evidencias/TC-010.png`

---

### TC-011 — Navegación desde el menú

| Campo | Detalle |
|---|---|
| **ID** | TC-011 |
| **Módulo** | Navegación |
| **Prioridad** | Alta |
| **Tipo** | Funcional |
| **Precondiciones** | La web debe estar cargada |

**Pasos:**
1. Hacer clic en cada link del menú (Inicio, Catálogo, Nosotros, Envíos)
2. Verificar que cada uno lleve a la sección correcta

**Resultado esperado:** Todos los links funcionan correctamente.

**Resultado obtenido:** ✅ Pasó. Navegación correcta.

**Evidencia:** `evidencias/TC-011.png`

---

## Módulo: Responsive

### TC-012 — Vista en tablet

| Campo | Detalle |
|---|---|
| **ID** | TC-012 |
| **Módulo** | Responsive |
| **Prioridad** | Media |
| **Tipo** | Responsive |
| **Precondiciones** | La web debe estar cargada |

**Pasos:**
1. Abrir la web en Chrome DevTools (modo tablet 768x1024)
2. Verificar que todos los elementos se adapten correctamente
3. Verificar que la grilla de productos se adapte

**Resultado esperado:** Todo se ve correctamente en tablet.

**Resultado obtenido:** ✅ Pasó. Vista de tablet correcta.

**Evidencia:** `evidencias/TC-012.png`

---

### TC-013 — Vista de modales en móvil

| Campo | Detalle |
|---|---|
| **ID** | TC-013 |
| **Módulo** | Responsive |
| **Prioridad** | Media |
| **Tipo** | Responsive |
| **Precondiciones** | La web debe estar cargada |

**Pasos:**
1. Abrir la web en móvil
2. Abrir el modal del carrito
3. Verificar que ocupe toda la pantalla

**Resultado esperado:** El modal ocupa toda la pantalla en móvil.

**Resultado obtenido:** ✅ Pasó. Modal responsive correcto.

**Evidencia:** `evidencias/TC-013.png`

---

## Módulo: StickyCart

### TC-014 — Aparición y ocultamiento del StickyCart

| Campo | Detalle |
|---|---|
| **ID** | TC-014 |
| **Módulo** | StickyCart |
| **Prioridad** | Alta |
| **Tipo** | Funcional |
| **Precondiciones** | Debe haber un producto en el carrito |

**Pasos:**
1. Agregar un producto al carrito
2. Hacer scroll hacia arriba y abajo
3. Verificar que el StickyCart aparezca cuando hay productos
4. Verificar que se oculte al llegar al Footer o al Checkout

**Resultado esperado:** El StickyCart aparece y se oculta según la posición del scroll.

**Resultado obtenido:** ✅ Pasó. Comportamiento correcto.

**Evidencia:** `evidencias/TC-014.png`

---

## Módulo: Modales legales

### TC-015 — Modales de Términos y Privacidad

| Campo | Detalle |
|---|---|
| **ID** | TC-015 |
| **Módulo** | Modales legales |
| **Prioridad** | Baja |
| **Tipo** | Funcional |
| **Precondiciones** | La web debe estar cargada |

**Pasos:**
1. Hacer scroll hasta el Footer
2. Hacer clic en "Términos y Condiciones"
3. Verificar que se abra el modal
4. Cerrar con la X
5. Hacer clic en "Privacidad"
6. Verificar que se abra el modal correspondiente

**Resultado esperado:** Ambos modales se abren y cierran correctamente.

**Resultado obtenido:** ✅ Pasó. Modales funcionan correctamente.

**Evidencia:** `evidencias/TC-015.png`, `evidencias/TC-015-b.png`

---

## Notas

- Todos los casos de prueba fueron ejecutados en producción (https://laboutiquedevangeline.cl).
- Los casos con estado ✅ Pasó fueron verificados por el desarrollador y QA (misma persona).
- Los bugs detectados durante el desarrollo están documentados en `bugs-reportados.md`.
- Los casos críticos (TC-004, TC-007, TC-009) fueron verificados en múltiples navegadores.

---

**Última actualización:** Octubre 2026