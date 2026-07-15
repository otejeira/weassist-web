# We Assist — Sitio web (rediseño) · Handoff

Entrega del sitio público de **We Assist** (asistencia en viaje), construido según el
handoff de diseño. Este documento es para el equipo de **marketing** que pulirá el contenido
antes de enviarlo al equipo técnico para su publicación.

---

## 1. Qué es esto

Un sitio web completo hecho con **Next.js 14 + TypeScript + Tailwind CSS**. Incluye 20+
pantallas: home, 4 páginas de producto, beneficios, cómo funciona, preguntas, corporate,
business, asistencia, ingresar, legal y el flujo de compra de 6 pasos.

- **Bilingüe (ES / EN):** hoy el contenido está 100% en español y con el inglés preparado.
  Todo el texto vive en archivos tipados con formato `{ es: "...", en: "..." }`. El toggle
  ES/EN del header ya funciona; donde falte el inglés, muestra el español automáticamente.
- **Sin backend:** pagos, correos y login están **simulados** (ver §5). El equipo técnico
  conecta el sistema de cotización, la pasarela de pago y el envío de correos.

## 2. Cómo verlo en tu computadora

Necesitas [Node.js](https://nodejs.org) 18+ instalado. En una terminal:

```bash
cd weassist-web
npm install      # solo la primera vez
npm run dev      # abre http://localhost:3000
```

Para generar la versión de producción (la que se publica):

```bash
npm run build
```

## 3. Dónde está cada cosa (para editar texto y precios)

Todo el contenido está **centralizado** para que puedas editarlo sin tocar el diseño.
Los textos usan el formato `l("Español", "English")` — cambia el primer texto (español)
y, cuando traduzcan, el segundo (inglés).

| Quiero cambiar… | Archivo |
|---|---|
| Teléfonos, WhatsApp, correo, dirección, certificaciones | `src/lib/constants.ts` |
| Planes: nombres, precios, coberturas, beneficios | `src/lib/plans.ts` |
| Mejoras/upgrades (precios y descripciones) | `src/lib/plans.ts` |
| Textos de las 4 páginas de producto | `src/lib/content/products.ts` |
| Secciones del home (diferenciadores, testimonios, estadísticas) | `src/lib/content/home.ts` |
| Página de beneficios | `src/lib/content/benefits.ts` |
| Preguntas frecuentes | `src/lib/content/faq.ts` |
| Textos legales | `src/lib/content/legal.ts` |
| Tarjetas de asistencia / pasos / "qué esperar" | `src/lib/content/product-template.ts` |
| Menú y enlaces del sitio (header) | `src/lib/nav.ts` |
| Columnas del footer | `src/lib/content/footer.ts` |
| Códigos promocionales de demo | `src/lib/constants.ts` (`PROMO_CODES`) |

## 4. Marca y estilo

- **Colores, tipografías, sombras, radios** están en `tailwind.config.ts` (tokens del handoff).
- Tipografías: **Poppins** (títulos) + **Inter** (texto).
- Elementos de marca reutilizables en `src/components/brand/`: la línea de puntos animada
  (`RouteLine`), los hexágonos "We" (`HexWe`), el avión de papel (`PaperPlane`) y el sello
  "Aquí cuando importa." (`BrandSeal`).
- El botón principal (CTA) tiene el degradado animado de marca.
- Las animaciones se **pausan** automáticamente si el usuario activa "reducir movimiento"
  en su sistema (accesibilidad).

### Fotografía
Donde va una foto real, verás un recuadro punteado que dice **"Espacio para fotografía"**
(componente `PhotoSlot`). Por decisión del proyecto **no** se generan ilustraciones de
personas. El cliente coloca sus fotos ahí.

## 5. Qué está simulado (lo conecta el equipo técnico)

Todo lo simulado está marcado en el código con `TODO PLACEHOLDER`.

- **Precios y topes de cobertura:** valores de referencia. Vendrán del API de cotización real.
- **Pago:** el formulario de tarjeta no cobra nada; "Pagar" solo avanza a la confirmación.
- **Cotización / total:** se calcula localmente como demostración (`src/lib/pricing.ts`).
- **Correos y "guardar y terminar después":** muestran un aviso en pantalla, no envían nada.
- **Login (`/ingresar`):** pantalla de demostración, sin autenticación real.
- **Formulario de contacto (`/asistencia`):** no envía; muestra un aviso.
- **Datos de contacto (teléfono, WhatsApp, dirección):** placeholders en `constants.ts`.
- **Assist Healthier:** NO forma parte de este sitio. Todos los enlaces "Healthier ↗"
  apuntan a la URL externa definida en `constants.ts` (`HEALTHIER_URL`).

## 6. El flujo de compra

`/comprar/planes` → `comparar` (opcional) → `mejoras` → `datos` → `pago` → `confirmacion`.
El estado (plan elegido, mejoras por viajero, código promo) se guarda en el navegador, así
que si el usuario recarga o vuelve, no pierde su selección. El total se recalcula en vivo.

## 7. Estructura del proyecto (resumen)

```
weassist-web/
  src/
    app/              # las páginas (rutas del sitio)
      (site)/         # páginas con header + footer normal
      comprar/        # el flujo de compra (header de checkout + pasos)
    components/       # piezas reutilizables (marca, ui, quote, checkout, product, layout)
    lib/              # contenido, datos, precios, navegación, i18n  ← AQUÍ SE EDITA EL TEXTO
  public/brand/       # logos
  tailwind.config.ts  # colores y estilos de marca
```

## 8. Publicación (equipo técnico)

Proyecto listo para **GitHub + Vercel**. `npm run build` compila sin errores. Antes de
publicar: reemplazar los `TODO PLACEHOLDER`, conectar el API de cotización, la pasarela de
pago y el envío de correos, y completar las traducciones al inglés.
