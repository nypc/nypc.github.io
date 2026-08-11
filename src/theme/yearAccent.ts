import { getContrast, parseToHsl } from "polished";
import { YEAR_ACCENT_VAR } from "./system";
import type { ThemeItem } from "@/components/themes";

/**
 * Minimum contrast against white for a colour to carry as an accent. 3:1 is the
 * WCAG threshold for non-text UI (rules, markers, borders) and keeps 2025's
 * #0086FF — a brand colour worth preserving — while rejecting 2016/2017's
 * yellow and 2018's teal, which vanish on a white page.
 */
const MIN_CONTRAST_ON_WHITE = 3;

/**
 * Picks the year colour that survives on a white page.
 *
 * Poster palettes are stored as a background/foreground pair meant to be shown
 * as a filled band. Once the band is gone, whichever of the two reads against
 * white becomes the accent — usually the background, but for the light-poster
 * years (yellow 2016/2017, teal 2018) it is the foreground instead.
 */
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
 * The year's *other* poster colour — the one `yearAccentColor` did not take.
 *
 * Each year stores a background/foreground pair, and the accent-only layout
 * only ever shows one of them, leaving the second unused. It drives the aurora
 * wash instead, which brings the full poster palette back into the page.
 *
 * Some years pair a colour with plain white or near-black (2023-2026). Neither
 * carries a hue, so those fall back to the accent — a wash in the year's own
 * colour rather than nothing at all.
 *
 * Returns null when neither candidate has any chroma (2023 is black on white).
 * A blurred wash of a neutral is just a grey smudge over the header, so those
 * years get no aurora rather than a bad one.
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

/**
 * Inline style declaring the accent variables the theme's `accent.*` tokens
 * read. Spread onto whatever element should scope the year's colour.
 */
export const yearAccentVars = (theme: ThemeItem | undefined): React.CSSProperties | undefined => {
  if (!theme) return undefined;
  return { [YEAR_ACCENT_VAR]: yearAccentColor(theme) } as React.CSSProperties;
};
