# Bugs Reportados — La boutique d'Evangeline

## Resumen

| Métrica | Valor |
|---|---|
| Total de bugs detectados | 7 |
| Bugs críticos | 1 |
| Bugs altos | 1 |
| Bugs medios | 4 |
| Bugs bajos | 1 |
| Bugs resueltos | 7 |
| Bugs pendientes | 0 |

## Detalle de bugs

### BUG-001 — El footer no se pegaba al fondo en contenido corto

| Campo | Detalle |
|---|---|
| **ID** | BUG-001 |
| **Título** | El footer no se pegaba al fondo en contenido corto |
| **Módulo** | Footer |
| **Severidad** | Media |
| **Prioridad** | Alta |
| **Estado** | ✅ Resuelto |
| **Fecha de detección** | Durante el desarrollo |
| **Fecha de resolución** | Antes del lanzamiento |

**Descripción:** Cuando el contenido de la página era más corto que la altura de la pantalla, el footer quedaba flotando en el medio en lugar de pegarse al fondo.

**Pasos para reproducir:**
1. Abrir la web en un viewport grande (desktop)
2. Reducir el contenido visible (o usar una vista con poco contenido)
3. Hacer scroll hasta el final

**Resultado esperado:** El footer debe quedar pegado al fondo de la pantalla.

**Resultado obtenido:** El footer quedaba flotando en el medio.

**Causa:** El layout raíz no tenía `flex flex-col` ni un `<main>` con `flex-grow`.

**Solución aplicada:** Se agregó `flex flex-col` al contenedor raíz y `flex-grow` al `<main>`.

---

### BUG-002 — El Checkout no se cerraba correctamente

| Campo | Detalle |
|---|---|
| **ID** | BUG-002 |
| **Título** | El Checkout no se cerraba correctamente |
| **Módulo** | Checkout |
| **Severidad** | Alta |
| **Prioridad** | Crítica |
| **Estado** | ✅ Resuelto |

**Descripción:** Al cerrar el Checkout, este no se ocultaba correctamente, dejando la pantalla bloqueada o con elementos residuales visibles.

**Pasos para reproducir:**
1. Agregar un producto al carrito
2. Abrir el Checkout
3. Hacer clic en cerrar

**Resultado esperado:** El Checkout se cierra y vuelve a la vista del catálogo.

**Resultado obtenido:** El Checkout quedaba visible o generaba comportamientos inesperados.

**Causa:** La lógica de cierre no actualizaba correctamente el estado global (`isCheckoutOpen`).

**Solución aplicada:** Se corrigió la función `cerrarCheckout` para actualizar el estado correctamente.

---

### BUG-003 — El Checkout requería un `setTimeout` para cerrarse

| Campo | Detalle |
|---|---|
| **ID** | BUG-003 |
| **Título** | El Checkout requería un `setTimeout` para cerrarse correctamente |
| **Módulo** | Checkout |
| **Severidad** | Media |
| **Estado** | ✅ Resuelto |

**Descripción:** Al cerrar el Checkout, era necesario usar un `setTimeout` para que el estado se actualizara correctamente.

**Causa:** El cierre del Checkout ocurría antes de que el estado global se actualizara.

**Solución aplicada:** Se ajustó la lógica de cierre para que el estado se actualice correctamente.

---

### BUG-004 — El scroll del StickyCart no funcionaba bien

| Campo | Detalle |
|---|---|
| **ID** | BUG-004 |
| **Título** | El scroll del StickyCart no funcionaba correctamente |
| **Módulo** | StickyCart |
| **Severidad** | Media |
| **Estado** | ✅ Resuelto |

**Descripción:** Al hacer scroll en la página, el StickyCart no se comportaba como se esperaba.

**Causa:** La lógica de visibilidad del StickyCart no consideraba correctamente la posición del scroll.

**Solución aplicada:** Se corrigió la lógica de scroll para que el StickyCart aparezca y desaparezca correctamente.

---

### BUG-005 — El Checkout no se cerraba al hacer scroll al catálogo

| Campo | Detalle |
|---|---|
| **ID** | BUG-005 |
| **Título** | El Checkout no se cerraba al hacer scroll al catálogo |
| **Módulo** | Checkout |
| **Severidad** | Media |
| **Estado** | ✅ Resuelto |

**Descripción:** Al hacer scroll hacia el catálogo, el Checkout permanecía abierto en lugar de cerrarse.

**Causa:** No había una lógica que detectara el scroll hacia el catálogo y cerrara el Checkout.

**Solución aplicada:** Se implementó la lógica para cerrar el Checkout al hacer scroll al catálogo.

---

### BUG-006 — Enlace con href incorrecto

| Campo | Detalle |
|---|---|
| **ID** | BUG-006 |
| **Título** | Enlace con href incorrecto |
| **Módulo** | Navegación |
| **Severidad** | Baja |
| **Estado** | ✅ Resuelto |

**Descripción:** Algunos enlaces internos o externos tenían un `href` incorrecto, lo que provocaba navegación a URLs equivocadas.

**Solución aplicada:** Se corrigieron los `href` afectados.

---

### BUG-007 — Número de WhatsApp incorrecto

| Campo | Detalle |
|---|---|
| **ID** | BUG-007 |
| **Título** | Número de WhatsApp incorrecto |
| **Módulo** | Checkout / WhatsApp |
| **Severidad** | Crítica |
| **Estado** | ✅ Resuelto |

**Descripción:** El número de WhatsApp al que se enviaban los pedidos era incorrecto, lo que impedía que la dueña recibiera los pedidos.

**Pasos para reproducir:**
1. Agregar producto al carrito
2. Completar Checkout
3. Hacer clic en "Hacer el pedido"

**Resultado esperado:** WhatsApp se abre con el número correcto del negocio.

**Resultado obtenido:** WhatsApp se abría con un número incorrecto.

**Solución aplicada:** Se actualizó el número de WhatsApp al correcto.

---

## Notas adicionales

- Todos los bugs fueron detectados y resueltos **antes del lanzamiento a producción**.
- Se ejecutaron **pruebas de regresión** después de cada corrección para verificar que no se rompieran otras funcionalidades.
- La versión actual de la web está estable y no presenta bugs conocidos.