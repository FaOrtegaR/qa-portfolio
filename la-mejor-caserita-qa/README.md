# Proyecto QA — La Mejor Caserita (App Android)

## Descripción

Proyecto de aseguramiento de calidad (QA) realizado sobre la aplicación Android nativa "La Mejor Caserita", desarrollada en Kotlin + Jetpack Compose.

Esta app fue creada para la gestión de pedidos de un negocio familiar de comida casera, e incluye reconocimiento de voz, base de datos local (Room) y gestión de estados.

## Objetivo

Validar el correcto funcionamiento de la aplicación móvil, enfocándose en la integridad de los datos (cálculos de totales), la estabilidad de la app (prevención de crashes) y la usabilidad en dispositivos reales.

## Alcance

- Gestión de Productos (CRUD).
- Gestión de Pedidos (Creación, edición, estados de pago/entrega).
- Cálculo automático de totales.
- Reconocimiento de voz para agregar productos.
- Persistencia de datos con Room.
- Comportamiento responsive (orientación vertical).

## Tecnologías evaluadas

- **Dispositivo:** Android (Motorola Edge 60 / Galaxy A50)
- **Base de datos:** Room (SQLite)
- **Voz:** SpeechRecognizer
- **UI:** Jetpack Compose

## Resultados del QA

- **Casos de prueba diseñados:** 15
- **Casos ejecutados:** 15
- **Bugs críticos encontrados y resueltos:** 3
- **Estado final:** Aplicación estable, sin bugs conocidos pendientes.

## Estructura del repositorio

- `docs/` — Plan de pruebas, casos, resultados y bugs.
- `evidencias/` — Capturas de pantalla de la app.

## Autor

Fabián Ortega Rojas — QA Analyst Junior