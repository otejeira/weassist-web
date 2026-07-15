# We Assist — Sitio web (rediseño) · Handoff

Entrega del sitio público de **We Assist** (asistencia en viaje). Este documento es para el
equipo de **marketing** que seguirá construyendo y puliendo el sitio antes de enviarlo al equipo
técnico para su publicación. **Léelo antes de tocar código:** explica las reglas con las que se
armó el proyecto. Si las respetas, todo se mantiene consistente y no se rompe.

---

## 0. Regla #1 — Componentes, NO un solo archivo CSS gigante

Este proyecto está estructurado como **componentes reutilizables + tokens de diseño**, no como
un archivo CSS monolítico. **Es a propósito y es la regla más importante del handoff. Sígala.**

**Por qué esto es buena práctica:**
- Un cambio de marca (un color, un radio de borde, una sombra) se hace **en un solo lugar**
  (`tailwind.config.ts`) y se propaga a todo el sitio automáticamente.
- Cada pieza de UI (botón, tarjeta, hero, acordeón) vive en su propio componente y se reutiliza.
  Arreglas un bug una vez y queda arreglado en todas las páginas que lo usan.
- No hay estilos duplicados regados en 20 archivos que se desincronizan con el tiempo.

**Por qué un solo CSS gigante es mala práctica (lo que NO hacemos):**
- Todos editan el mismo archivo → conflictos, reglas que se pisan, `!important` por todos lados.
- Cambiar un color obliga a buscar-y-reemplazar decenas de veces y siempre se escapa alguno.
- Nadie sabe qué regla afecta a qué → miedo a borrar → el archivo solo crece.

**En la práctica:** cuando necesites un estilo, usa **clases de utilidad de Tailwind + los tokens
existentes**. Si un patrón se repite, **crea un componente** en `src/components/`. **Nunca**
escribas colores/tamaños hardcodeados sueltos ni agregues un `.css` aparte por página.

---

## 1. Qué es esto

Un sitio web completo hecho con **Next.js 14 + TypeScript + Tailwind CSS**. Incluye 20+
pantallas: home, 4 páginas de producto, beneficios, cómo funciona, preguntas, corporate,
business, asistencia, ingresar, legal y el flujo de compra de 6 pasos.

| Pieza | Herramienta |
|---|---|
| Framework | Next.js 14.2.15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 3.4.7 (tokens en `tailwind.config.ts`) |
| Íconos | lucide-react |
| Fuentes | Poppins (títulos) + Inter (texto) vía `next/font` |
| Animación | Keyframes CSS (sin librerías de animación) |
| Deploy | GitHub (`main`) → Vercel (publica solo en cada push a `main`) |

- **Bilingüe (ES / EN):** hoy el contenido está 100% en español, con el inglés preparado. Todo
  el texto vive en archivos tipados con formato `{ es: "...", en: "..." }`. El toggle ES/EN del
  header ya funciona; donde falte el inglés, muestra el español automáticamente.
- **Sin backend:** pagos, correos y login están **simulados** (ver §5). El equipo técnico
  conecta el sistema de cotización, la pasarela de pago y el envío de correos.

## 2. Cómo verlo en tu computadora

Necesitas [Node.js](https://nodejs.org) 18+ instalado. En una terminal:

```bash
cd weassist-web
npm install      # solo la primera vez
npm run dev      # abre http://localhost:3000
npm run lint     # revisa el código
npm run build    # genera la versión de producción (la que se publica)
```

> ⚠️ **Nunca corras `npm run build` mientras `npm run dev` está corriendo.** Comparten la carpeta
> `.next` y se corrompe (páginas sin estilo). Si pasa: detén el dev server, borra `.next`
> (`rm -rf .next`) y vuelve a construir.

## 3. Dónde está cada cosa (para editar texto y precios)

Todo el contenido está **centralizado** para que puedas editarlo sin tocar el diseño.
Los textos usan el formato `l("Español", "English")` — cambia el primer texto (español)
y, cuando traduzcan, el segundo (inglés). **No** escribas textos directo en las páginas.

| Quiero cambiar… | Archivo |
|---|---|
| Teléfonos, WhatsApp, correo, dirección, certificaciones | `src/lib/constants.ts` |
| Planes: nombres, precios, coberturas, beneficios, mejoras/upgrades | `src/lib/plans.ts` |
| Textos de las 4 páginas de producto | `src/lib/content/products.ts` |
| Secciones del home (diferenciadores, testimonios, estadísticas) | `src/lib/content/home.ts` |
| Página de beneficios | `src/lib/content/benefits.ts` |
| Preguntas frecuentes | `src/lib/content/faq.ts` |
| Textos legales | `src/lib/content/legal.ts` |
| Tarjetas de asistencia / pasos / "qué esperar" | `src/lib/content/product-template.ts` |
| Menú y enlaces del sitio (header) | `src/lib/nav.ts` |
| Columnas del footer | `src/lib/content/footer.ts` |
| Códigos promocionales de demo | `src/lib/constants.ts` (`PROMO_CODES`) |

**Patrón al agregar contenido nuevo:** crea/edita el archivo en `src/lib/content/`, escribe el
ES (obligatorio; el EN puede quedar para después y cae a ES solo), y en la página renderiza con
`t(...)` usando `useLocale()`. El copy nunca va hardcodeado en el JSX.

## 4. Marca y estilo (los tokens)

Todo el look & feel vive en **`tailwind.config.ts`**: colores, tipografías, sombras y radios.
Para cambiar un color de marca en todo el sitio, se edita **ahí**, no en las páginas.

- Colores: `navy` (800/900/950), `blue-700`, `cyan-500`, `green` (500/700), `ink` (900/600/500/300),
  `line-300`, fondos `surface` (100/blue/cyan/green). Usa **solo estos tonos**, no inventes otros.
- Radios: `rounded-control` (10), `rounded-card` (16), `rounded-panel` (22). Sombras: `shadow-card`,
  `shadow-elevated`.
- Elementos de marca reutilizables en `src/components/brand/`: la línea de puntos animada
  (`RouteLine`), los hexágonos "We" (`HexWe`), el avión de papel (`PaperPlane`) y el sello
  "Aquí cuando importa." (`BrandSeal`). El botón principal (CTA) tiene el degradado animado.
- `src/app/globals.css` es corto a propósito: solo helpers (`.container-max`, `.section-y`,
  `.h1`, `.eyebrow`…), accesibilidad y el bloque que **pausa animaciones** con "reducir
  movimiento". **No** metas estilos de una página aquí.

> ⚠️ **Gotcha:** editar `tailwind.config.ts` (nuevos colores/animaciones) **no recarga en
> caliente** — hay que **reiniciar el dev server**. Editar `.tsx` o `globals.css` sí recompila solo.

### Fotografía
Donde va una foto real verás un recuadro punteado **"Espacio para fotografía"** (componente
`PhotoSlot`). Por decisión del proyecto **no** se generan ilustraciones de personas. El cliente
coloca sus fotos ahí.

## 5. Qué está simulado (lo conecta el equipo técnico)

Todo lo simulado está marcado en el código con `TODO PLACEHOLDER`.

- **Precios y topes de cobertura:** valores de referencia. Vendrán del API de cotización real.
- **Datos de contacto (teléfono, WhatsApp de emergencia, dirección):** placeholders en
  `constants.ts`. Los números reales vienen del API del sitio principal.
- **Pago:** el formulario de tarjeta no cobra; "Pagar" solo avanza a la confirmación.
- **Cotización / total:** se calcula localmente como demostración (`src/lib/pricing.ts`).
- **Correos y "guardar y terminar después":** muestran un aviso en pantalla, no envían nada.
- **Login (`/ingresar`)** y **formulario de contacto (`/asistencia`):** pantallas de demostración.
- **Sofy (agente IA):** enlace de WhatsApp placeholder (`SOFY_WHATSAPP_HREF`).
- **Assist Healthier:** NO forma parte de este sitio. Los enlaces "Healthier ↗" apuntan a la URL
  externa `HEALTHIER_URL` en `constants.ts`.

## 6. El flujo de compra

`/comprar/planes` → `comparar` (opcional) → `mejoras` → `datos` → `pago` → `confirmacion`.
El estado (plan elegido, mejoras por viajero, código promo) se guarda en el navegador, así que
si el usuario recarga o vuelve, no pierde su selección. El total se recalcula en vivo.

## 7. Reglas de redacción — CRÍTICAS (compliance)

We Assist es una **COMPAÑÍA DE ASISTENCIA EN VIAJE, NO una aseguradora.** El copy debe reflejarlo
siempre. Estas reglas ya están aplicadas; **manténlas** en todo contenido nuevo:

| No uses | Usa |
|---|---|
| cobertura | asistencia *(EXCEPTO territorial: "Cobertura global/mundial" sí se mantiene)* |
| póliza / pólizas | voucher / vouchers |
| asegurado | beneficiario |
| suscrita / suscrito *(en copy propio en español)* | respaldada / respaldado |

Además:
- Nunca presentar a We Assist como aseguradora. Habla de **beneficios, montos/límites de
  asistencia, beneficiarios**.
- "mercado asegurador" **describiendo a Lloyd's** sí está bien (Lloyd's es un mercado de seguros).
- Badge en inglés (autorizado, **no cambiar**): *"Underwritten by Koris General Insurance Company
  Limited and certain underwriters at Lloyd's."*
- **Reembolsos:** "normalmente en **5 a 7 días hábiles**" (no digas "máximo").
- **Pago directo:** usa *"En la gran mayoría de los casos coordinados no adelantas dinero"*
  (no "menos del 1%").
- **IA de pre-triage (Binah):** "una **amplia gama de indicadores**" (no un número exacto).
- **Escaneo facial con IA:** solo ilustración estática, nunca funcional (biométricos/consentimiento).
- La palabra **triage** se usa en *cursiva*.

**Datos oficiales confirmados** (son reales, cítalos con su fuente — NO son placeholders):
- **98.5% de pago directo** — cifra del equipo de Calidad de We Assist.
- **98% de las llamadas contestadas dentro de 8 segundos** y **WhatsApp 2–5 min** para primer
  contacto — validado por el DP de Calidad.
- Respaldo **Lloyd's / Koris** — real (Cover Note oficial).

## 8. Estructura del proyecto (resumen)

```
weassist-web/
  tailwind.config.ts  # colores y estilos de marca (los tokens)
  src/
    app/              # las páginas (rutas del sitio)
      (site)/         # páginas con header + footer normal
      comprar/        # el flujo de compra (header de checkout + pasos)
      globals.css     # solo helpers pequeños + accesibilidad (NO estilos de página)
    components/       # piezas reutilizables (brand, ui, quote, checkout, product, layout)
    lib/              # contenido, datos, precios, navegación, i18n  ← AQUÍ SE EDITA EL TEXTO
  public/brand/       # logos
```

## 9. Antes de publicar (checklist)

1. `npm run lint` → limpio.
2. `npm run build` → build de producción limpio (con el dev server **detenido**).
3. Revisa en desktop **y móvil** (el sitio es responsive).
4. Revisa con "reducir movimiento" activo: las animaciones deben pausarse.
5. Navega con teclado el menú, acordeones y tabs (accesibilidad).

## 10. Publicación (equipo técnico)

Proyecto listo para **GitHub + Vercel**: cada push a `main` publica automáticamente, así que
**confirma con el responsable antes de hacer push** — publica en vivo. Antes de salir a producción:
reemplazar los `TODO PLACEHOLDER`, conectar el API de cotización, la pasarela de pago y el envío
de correos, y completar las traducciones al inglés.

---

### Reglas de oro (resumen)

1. **Componentes + tokens, nunca un CSS monolítico ni estilos hardcodeados.**
2. **Todo el copy va tipado en `src/lib/content/`** con `l()`, renderizado con `t()` — ES ahora, EN después.
3. **Tokens de marca solo en `tailwind.config.ts`** (reinicia el dev server al cambiarlos).
4. **Lenguaje de asistencia, no de seguro** (asistencia, voucher, beneficiario…).
5. **Verifica (lint + build) y confirma antes de push** — `main` publica en vivo.
