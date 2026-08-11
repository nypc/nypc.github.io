import { allPosts } from "content-collections";
import { BASE_LOCALE, LOCALES } from "./locale";
import type { Locale } from "./locale";

/**
 * Slug prefix a locale's content is stored under. The base locale has none, so
 * Korean slugs stay bare (`2025/round1_8`) and English is namespaced
 * (`en/2025/round1_8`).
 */
const slugPrefix = (locale: Locale) => (locale === BASE_LOCALE ? "" : `${locale}/`);

/** The content slug for a page in a given locale. */
export const localizedSlug = (path: string, locale: Locale): string =>
  `${slugPrefix(locale)}${path}`;

/**
 * Which locales actually have this page, derived from the content index rather
 * than a hand-maintained list — so a translation becomes switchable the moment
 * its MDX file lands, with no second place to update.
 */
export const localesWithContent = (path: string): ReadonlyArray<Locale> =>
  LOCALES.filter((locale) => allPosts.some((post) => post.slug === localizedSlug(path, locale)));
