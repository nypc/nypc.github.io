import { getContrast, parseToHsl } from "polished";
import { YEAR_ACCENT_VAR } from "./system";
import type { ThemeItem } from "@/components/themes";

/** WCAG's 3:1 for non-text UI. Keeps 2025's #0086FF; rejects 2016-18's yellow and teal. */
const MIN_CONTRAST_ON_WHITE = 3;

/** The year colour that survives on a white page, preferring the more chromatic one. */
export const yearAccentColor = (theme: ThemeItem): string => {
  if (theme.accent) return theme.accent;

  const candidates = [theme.background, theme.color];
  const usable = candidates.filter(
    (color) => getContrast(color, "#FFFFFF") >= MIN_CONTRAST_ON_WHITE,
  );

  // Where both halves of the pair read on white, take the more chromatic one:
  // it is the half carrying the year's identity. 2022 pairs black with its
  // brand blue, and the blue is what the poster is remembered for.
  if (usable.length > 0) {
    return usable.reduce((best, color) =>
      parseToHsl(color).saturation > parseToHsl(best).saturation ? color : best,
    );
  }

  // Neither reads on white; keep whichever comes closest.
  return candidates.reduce((best, color) =>
    getContrast(color, "#FFFFFF") > getContrast(best, "#FFFFFF") ? color : best,
  );
};

/**
 * The year's other poster colour, driving the aurora. Falls back to the accent
 * when the pair's second colour is neutral, and to null when neither has chroma
 * — a blurred neutral is just a grey smudge.
 */
export const yearAuroraColor = (theme: ThemeItem): string | null => {
  const accent = yearAccentColor(theme);
  const hasChroma = (color: string) => parseToHsl(color).saturation >= 0.15;

  // Searched rather than "whichever of the pair isn't the accent": an explicit
  // `accent` need not be a member of the pair at all, in which case that
  // shortcut always returns `background` and can miss a usable second colour.
  const other = [theme.background, theme.color].find(
    (color) => color !== accent && hasChroma(color),
  );

  if (other) return other;
  if (hasChroma(accent)) return accent;
  return null;
};

/** Scopes the year's accent to a subtree. */
export const yearAccentVars = (theme: ThemeItem | undefined): React.CSSProperties | undefined => {
  if (!theme) return undefined;
  return { [YEAR_ACCENT_VAR]: yearAccentColor(theme) } as React.CSSProperties;
};
