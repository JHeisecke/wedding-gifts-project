# Wedding Gifts Project

Sitio estático de regalos para la boda de Javier y Yara. Este repositorio está en su etapa de esqueleto técnico; el contenido visible todavía es temporal.

## Requisitos

- Node.js `22.23.2` (definido en `.nvmrc`).
- npm `10` o posterior.

## Comandos

```sh
npm install
npm run dev
npm run check
npm test
npm run build
npm run preview
```

Astro genera el sitio estático en `dist/`.

## Alcance actual

- Configuración estática de Astro y TypeScript estricto.
- Dominio de regalos y cálculo de progreso probados con Vitest.
- Repositorio estático con ocho regalos temporales.
- Configuración central del sitio, banco y WhatsApp.
- Tokens visuales y estilos globales básicos.
- Portada, explicación en tres pasos, contenedor de regalos y agradecimiento final.
- Página que consume los regalos mediante el repositorio.
- Grilla adaptable con montos en guaraníes, progreso y estado completado.
- Diálogo accesible con datos bancarios, copiado y enlace preparado de WhatsApp.
- Build estático verificable.

Los datos bancarios, el número de WhatsApp y el contenido definitivo siguen pendientes. Sus acciones permanecen deshabilitadas hasta cargar valores reales.
