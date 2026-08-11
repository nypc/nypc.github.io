import { useRouterState } from "@tanstack/react-router";
import { localeFromPathname } from "./locale";
import type { Locale } from "./locale";

/**
 * The current locale, read from the URL.
 *
 * Locale is a pure function of the path, so this needs no provider and no prop
 * threading — which matters most for the MDX components (`Examples`, `Solution`,
 * `Subtask`, …), rendered through a component map that has nowhere to pass a
 * prop through.
 *
 * Safe during prerendering: the router knows the location it is rendering, so
 * each static file is built with its own locale's strings.
 */
export const useLocale = (): Locale => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return localeFromPathname(pathname);
};
