/**
 * Locale is derived purely from the URL path, because this site is prerendered
 * to static HTML and served by GitHub Pages. A cookie- or storage-based
 * strategy cannot work: every locale would share one HTML file, and the served
 * markup (including `<html lang>`) would be wrong until JavaScript ran.
 *
 * The base locale carries no prefix, so existing Korean URLs are unchanged:
 *   /2025/round1_8      → ko
 *   /en/2025/round1_8   → en
 */
export const LOCALES = ["ko", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** The locale served without a path prefix. */
export const BASE_LOCALE: Locale = "ko";

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (LOCALES as readonly string[]).includes(value);

/** Locales that appear as a path segment — every locale but the base one. */
const PREFIXED_LOCALES = LOCALES.filter((locale) => locale !== BASE_LOCALE);

const isPrefixedLocale = (segment: string): segment is Locale =>
  (PREFIXED_LOCALES as readonly string[]).includes(segment);

/** The locale a pathname belongs to. */
export const localeFromPathname = (pathname: string): Locale => {
  const [, first = ""] = pathname.split("/");
  return isPrefixedLocale(first) ? first : BASE_LOCALE;
};

/** A pathname with any locale prefix removed, always starting with `/`. */
export const stripLocale = (pathname: string): string => {
  const [, first = "", ...rest] = pathname.split("/");
  if (!isPrefixedLocale(first)) return pathname;
  const remainder = rest.join("/");
  return remainder ? `/${remainder}` : "/";
};

/** The same page in `target`, e.g. `/2026` + `en` → `/en/2026`. */
export const localizePathname = (pathname: string, target: Locale): string => {
  const base = stripLocale(pathname);
  if (target === BASE_LOCALE) return base;
  return base === "/" ? `/${target}` : `/${target}${base}`;
};

/** The archive index for a locale. */
export const localeHome = (locale: Locale): string => (locale === BASE_LOCALE ? "/" : `/${locale}`);

export const LOCALE_LABELS: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
};

/** `<html lang>` value — BCP 47 tags happen to match our locale codes. */
export const htmlLang = (locale: Locale): string => locale;
