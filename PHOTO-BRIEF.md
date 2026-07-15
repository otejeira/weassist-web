# PHOTO-BRIEF — We Assist Website

Dirección de arte para la fotografía del sitio. Este documento le dice a
marketing **exactamente qué foto va en cada espacio**, con qué encuadre, tono y
tratamiento, para que el sitio quede "casi al 100 %" solo conectando las
imágenes reales.

> El sitio ya está maquetado con estos espacios como **componentes `<PhotoSlot>`**
> (no huecos grises: cada uno lleva su propio brief impreso en pantalla).
> Sustituir un espacio = reemplazar el `<PhotoSlot>` por la foto, **conservando
> el mismo ratio y tono**.

---

## 1. El look de la marca (aplica a TODAS las fotos)

- **Rostros y escenas reales, nunca stock corporativo.** Personas genuinas
  siendo asistidas mientras viajan — no ejecutivos posando con laptops.
- **El cian (`#10ade4`) es la "luz" de la marca.** Busca imágenes donde una luz
  fría/cian entre naturalmente (ventana, pantalla, cielo) o donde el color grade
  pueda empujarse hacia ese cian sobre las sombras navy.
- **El navy (`#003366` / `#041a33`) es la base.** Sobre fondos oscuros la foto
  debe tener contraste alto y un punto de luz claro (el rostro).
- **Cálido pero premium.** Emoción real (alivio, tranquilidad, cuidado), no
  sonrisas de catálogo. Es "aquí cuando importa", no "compra ya".
- **Nada de ilustraciones de personas** (decisión del cliente). Solo fotografía.
- **Sin texto quemado en la imagen.** Los titulares los pone el sitio.

---

## 2. Cómo se reemplaza un espacio (para el equipo técnico)

Cada espacio es un `<PhotoSlot>` con estas props, que definen el brief:

| Prop | Qué significa |
|------|---------------|
| `subject` | Qué muestra la foto (rostro, escena, primer plano). |
| `direction` | Nota de encuadre/luz para el fotógrafo o banco de imágenes. |
| `ratio` | Encuadre: `16/9`, `4/3`, `1/1`, `3/4`. **Respetar al recortar.** |
| `tone` | `dark` (vive sobre navy) o `light` (sobre fondo claro). |

Al reemplazar: usar `next/image` con el **mismo `ratio`** (para no romper el
layout) y, si el bloque es `tone="dark"`, cuidar que la foto tenga suficiente
contraste sobre navy.

---

## 3. Inventario de espacios de foto (los que ya existen en el sitio)

### A · Hero de producto — 4 páginas (Travel / All-Ways / Student / Long Stay)
- **Ubicación:** columna derecha del hero navy de cada página de producto.
- **Sujeto:** Viajero real en su destino.
- **Dirección:** Primer plano cálido de una persona asistida durante su viaje.
  El cian entra como luz sobre el navy. Rostro genuino, nada de stock corporativo.
- **Ratio:** `4/3` · **Tono:** `dark` (sobre navy).
- **Cantidad:** 4 (una por página; pueden ser 4 fotos distintas para diferenciar
  cada línea, o variaciones de una misma sesión).
- **Nota:** solo visible en desktop (`lg`+). En móvil el hero es solo texto.

### B · Home — "Casos reales / Aquí cuando importó"
- **Ubicación:** sección navy de casos reales, arriba de cada una de las 3 tarjetas.
- **Sujeto:** Rostro del cliente asistido.
- **Dirección:** el `direction` de cada tarjeta usa su propio *badge* como guía
  (p. ej. "COVID en México", "Estudiante EE. UU.", "Equipaje en Europa") —
  la foto debe evocar ese caso concreto y anonimizar al cliente (los casos son
  reales, anonimizados).
- **Ratio:** `16/9` · **Tono:** `dark` (sobre navy).
- **Cantidad:** 3 (una por caso). Deben sentirse documentales, no publicitarias.

---

## 4. Oportunidades adicionales de fotografía (recomendadas, aún no maquetadas)

Estos bloques hoy son solo navy + línea animada. Añadir foto los elevaría, pero
**es opcional** y debe validarse antes de tocar el layout:

- **Home hero:** hoy la columna derecha es el cotizador (correcto — no lleva
  foto). Se puede añadir una foto de fondo sutil detrás del cotizador si se desea
  más calidez, con overlay navy fuerte para legibilidad.
- **Heroes de Corporate / Business / Asistencia:** hoy son navy sólido. Una foto
  de fondo (equipo de operaciones, centro de asistencia, viajero) con overlay
  navy `~70%` reforzaría cada una.

Si marketing quiere activar estos, avisar al equipo técnico para insertar los
`<PhotoSlot>` correspondientes con el ratio/tono adecuado.

---

## 5. Specs de exportación

- **Formato:** WebP (o JPG de alta calidad como respaldo). Sin PNG para fotos.
- **Resolución:** exportar a **2×** el tamaño renderizado para pantallas retina.
  - Hero de producto (`4/3`): ~1200×900 px.
  - Casos reales (`16/9`): ~800×450 px cada una.
- **Peso:** comprimir a < 200 KB por imagen cuando sea posible.
- **Color:** perfil sRGB. Empujar sombras hacia el navy y luces hacia el cian en
  el color grade para coherencia de marca.
- **Recorte:** respetar el ratio del espacio; el sujeto (rostro) centrado o en el
  tercio superior para que no lo tape el texto/badge.

---

## 6. Checklist rápido antes de entregar cada foto

- [ ] ¿Es una persona/escena real, no stock corporativo?
- [ ] ¿Transmite alivio/cuidado genuino (no venta agresiva)?
- [ ] ¿El color grade respeta navy (base) + cian (luz)?
- [ ] ¿Coincide con el `ratio` y `tono` del espacio?
- [ ] ¿Sin texto quemado en la imagen?
- [ ] ¿Anonimizada si es un caso real de cliente?
- [ ] ¿Exportada en WebP, sRGB, < 200 KB?
