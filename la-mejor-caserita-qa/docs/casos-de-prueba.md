# Casos de Prueba — La Mejor Caserita

## Módulo: Productos
- **TC-001:** Crear un producto nuevo (Nombre y Precio).
- **TC-002:** Editar el precio de un producto existente.
- **TC-003:** Eliminar un producto.

## Módulo: Pedidos (CRUD y Cálculos)
- **TC-004:** Crear un pedido nuevo con 1 producto.
- **TC-005:** Crear un pedido nuevo con múltiples productos distintos (Validar suma total).
- **TC-006:** Editar un pedido, agregando más cantidad de un producto existente.
- **TC-007:** Editar un pedido, agregando un producto nuevo a la lista.
- **TC-008:** Eliminar un pedido.

## Módulo: Estados (Pago y Entrega)
- **TC-009:** Marcar un pedido como "Pagado" y luego como "Por pagar".
- **TC-010:** Marcar un pedido como "Entregado" (debe moverse a la lista de entregados).

## Módulo: Reconocimiento de Voz
- **TC-011:** Agregar producto por voz (ej: "3 empanadas").
- **TC-012:** Agregar múltiples productos por voz (ej: "2 aceitunas y 1 acelga").
- **TC-013:** Cancelar reconocimiento de voz tocando el botón rojo.

## Módulo: Estabilidad y UX
- **TC-014:** Salir de la pantalla mientras el micrófono está escuchando (Validar que no haga crash).
- **TC-015:** Cerrar y abrir la app (Validar persistencia de datos en Room).