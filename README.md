# sms_junio

Landing page móvil para campaña SMS — **Law Offices of Manuel Solis** (junio 2026).

Construida con Next.js 16 + TypeScript + Tailwind CSS v4. Diseño de una sola pantalla (100dvh) optimizado para tráfico móvil desde SMS.

## Contenido

- **Headline:** ROI PROGRAM SIGUE VIGENTE PARA TI
- **Subheadline:** Activa hoy tu representación legal y obtén respaldo profesional durante los próximos 12 meses.
- **Video:** YouTube embed (autoplay silenciado)
- **Badge de confianza:** Más de 50,000 familias ya confiaron en nosotros.
- **CTA:** ACTIVA TU ROI PROGRAM HOY + número telefónico con enlace `tel:`

> ⚠️ **Pendiente:** confirmar el número telefónico final. Se edita en `app/page.tsx`
> (constantes `PHONE_DISPLAY` y `PHONE_TEL` al inicio del archivo).

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de producción
```
