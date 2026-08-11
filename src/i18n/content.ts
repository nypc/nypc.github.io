import { allPosts } from "content-collections";
import { BASE_LOCALE, LOCALES } from "./locale";
import type { Locale } from "./locale";

/** Base locale is unprefixed: `2025/round1_8` vs `en/2025/round1_8`. */
const slugPrefix = (locale: Locale) => (locale === BASE_LOCALE ? "" : `${locale}/`);

/** The content slug for a page in a given locale. */
export const localizedSlug = (path: string, locale: Locale): string =>
  `${slugPrefix(locale)}${path}`;

/** Locales that have this page, read from the content index — no list to maintain. */
export const localesWithContent = (path: string): ReadonlyArray<Locale> =>
  LOCALES.filter((locale) => allPosts.some((post) => post.slug === localizedSlug(path, locale)));
