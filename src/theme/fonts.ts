/**
 * new.nypc.co.kr sets its display type in `poster-gothic-excond-atf`, an Adobe
 * Fonts (Typekit) face. This kit serves it in weights 300/400/500/600 — there
 * is no 700, so display headings top out at 600.
 */
export const TYPEKIT_KIT_ID = "tnq6rtz";

export const TYPEKIT_STYLESHEET_HREF = `https://use.typekit.net/${TYPEKIT_KIT_ID}.css`;

/** Heaviest weight the kit actually ships. Going past this fakes a bold. */
export const DISPLAY_FONT_MAX_WEIGHT = 600;

const SYSTEM_SANS =
  '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

/** Body copy. Mirrors new.nypc.co.kr's body stack. */
export const BODY_FONT = `"Pretendard Variable", Pretendard, Inter, ${SYSTEM_SANS}`;

/**
 * Display/headings. Latin glyphs come from the condensed poster gothic; Hangul
 * has no coverage there and falls through to Pretendard, which is exactly how
 * the official site renders mixed headings.
 */
export const DISPLAY_FONT = `"poster-gothic-excond-atf", ${BODY_FONT}`;

export const MONO_FONT = '"IBM Plex Mono", "Pretendard Variable", Pretendard, monospace';
