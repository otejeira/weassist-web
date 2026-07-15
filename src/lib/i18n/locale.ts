/**
 * i18n — capa de contenido tipada.
 *
 * ES está activo hoy. EN se traduce después: cada bloque de contenido se define como
 * `Localized<T>` ({ es, en }); si `en` falta, `pick()` hace fallback a `es`.
 * Esto permite montar el sitio 100% en español ahora y traducir sin reestructurar.
 */
export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";

/** Un valor con traducciones opcionales. `en` es opcional hasta que se traduzca. */
export type Localized<T> = { es: T; en?: T };

/** Devuelve el valor del locale pedido con fallback al español. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return (locale === "en" ? value.en : value.es) ?? value.es;
}

/** Azúcar para strings localizados: `l("Hola", "Hi")`. */
export function l(es: string, en?: string): Localized<string> {
  return { es, en };
}
