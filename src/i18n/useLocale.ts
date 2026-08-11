import { useRouterState } from "@tanstack/react-router";
import { localeFromPathname } from "./locale";
import type { Locale } from "./locale";

/**
 * The current locale, read from the URL — no provider, no prop threading, which
 * is what lets the MDX components reach it through their component map.
 */
export const useLocale = (): Locale => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return localeFromPathname(pathname);
};
