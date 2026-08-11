import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { BODY_FONT, DISPLAY_FONT, MONO_FONT } from "./fonts";

/**
 * CSS variable carrying the current year's accent colour. Set per-page by
 * `PostLayout` from `themes.tsx`; everything that tints with the year colour
 * (rules, badges, links, markers) reads this one variable.
 */
export const YEAR_ACCENT_VAR = "--nypc-year-accent";

/** Neutral ink used wherever no year accent is in scope. */
const ACCENT_FALLBACK = "#191716";

/**
 * Accent colours are plain CSS values rather than semantic tokens on purpose.
 *
 * A custom property resolves its `var()` references at the element where it is
 * *declared*, and Chakra declares token variables once on `:root`. A token
 * defined as `var(--nypc-year-accent, …)` would therefore freeze at the
 * fallback on `:root` and inherit that frozen value everywhere, ignoring the
 * per-page override. Used directly in a declaration, the same expression
 * resolves against whatever is in scope at that element.
 */
export const accentColor = `var(${YEAR_ACCENT_VAR}, ${ACCENT_FALLBACK})`;
export const accentSubtle = `color-mix(in srgb, ${accentColor} 12%, transparent)`;
export const accentMuted = `color-mix(in srgb, ${accentColor} 40%, transparent)`;

/**
 * Warm neutral ramp. 50/400/500/900 are sampled straight off new.nypc.co.kr
 * (#FAFAF9, #A6A3A0, #767270, #191716 — the last also being this repo's 2026
 * theme colour); the rest fill in the ramp between them.
 */
const stone = {
  50: { value: "#FAFAF9" },
  100: { value: "#F5F5F4" },
  200: { value: "#E7E5E4" },
  300: { value: "#D6D3D1" },
  400: { value: "#A6A3A0" },
  500: { value: "#767270" },
  600: { value: "#57534E" },
  700: { value: "#44403C" },
  800: { value: "#292524" },
  900: { value: "#191716" },
  950: { value: "#0C0A09" },
};

const config = defineConfig({
  globalCss: {
    html: {
      // The site is white-theme only; opt out of UA dark-mode form styling.
      colorScheme: "light",
    },
    body: {
      bg: "bg",
      color: "fg",
      fontFamily: "body",
      lineHeight: "1.7",
    },
    "*::selection": {
      bg: accentSubtle,
    },
    // Chakra's reset strips link styling; prose links need it back. Navigation
    // and card links opt out again via `textDecoration="none"`, which sits in a
    // higher cascade layer than this base rule.
    a: {
      color: "fg",
      textDecoration: "underline",
      textUnderlineOffset: "0.15em",
      // The underline carries the year colour while the label keeps full
      // contrast — accenting the text itself would drop some years' links
      // below the contrast floor for body copy.
      textDecorationColor: accentMuted,
      textDecorationThickness: "2px",
      transitionProperty: "color, text-decoration-color",
      transitionDuration: "fast",
      _hover: {
        color: accentColor,
        textDecorationColor: "currentColor",
      },
    },
    // The `span.katex` / `.hangul_fallback` sizing lives in AppProviders
    // instead — it has to be emitted unlayered to beat KaTeX's own CDN
    // stylesheet. See the note there.
    /**
     * Chakra's preflight blockifies `img`. Statements embed small glyphs — the
     * coloured Connexion tiles, inline icons — mid-sentence, and blockifying
     * those breaks the line apart. Restore the browser default; `Figure` opts
     * back into `display: block` explicitly, and recipe styles outrank this.
     */
    img: {
      display: "inline",
    },
    ".math-display": {
      overflowX: "auto",
      overflowY: "hidden",
    },
    ".tabler-icon": {
      verticalAlign: "middle",
      width: "1.2em",
      height: "1.2em",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: DISPLAY_FONT },
        body: { value: BODY_FONT },
        mono: { value: MONO_FONT },
      },
      colors: {
        stone,
        // Link/interactive blue, sampled from new.nypc.co.kr.
        brand: { value: "#2E90FA" },
      },
      radii: {
        // The official site is built on a 4px radius, with 8px for large
        // surfaces and 2px for chips.
        xs: { value: "2px" },
        sm: { value: "2px" },
        md: { value: "4px" },
        lg: { value: "8px" },
        xl: { value: "8px" },
      },
      sizes: {
        // Content column width, matching the existing archive layout.
        content: { value: "1200px" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "#FFFFFF" },
          subtle: { value: "{colors.stone.50}" },
          muted: { value: "{colors.stone.100}" },
          emphasized: { value: "{colors.stone.200}" },
          inverted: { value: "{colors.stone.900}" },
        },
        fg: {
          DEFAULT: { value: "{colors.stone.900}" },
          /**
           * Prose body copy, a step softer than headings. new.nypc.co.kr sets
           * body text at ~7.3:1 against its dark ground while headings sit at
           * full contrast; stone.600 reproduces that ratio on white (~7.5:1).
           */
          body: { value: "{colors.stone.600}" },
          muted: { value: "{colors.stone.500}" },
          subtle: { value: "{colors.stone.400}" },
          inverted: { value: "{colors.stone.50}" },
          error: { value: "#D6336C" },
        },
        border: {
          DEFAULT: { value: "{colors.stone.200}" },
          muted: { value: "{colors.stone.100}" },
          emphasized: { value: "{colors.stone.300}" },
        },
        link: { value: "{colors.brand}" },
      },
    },
    textStyles: {
      /** Uppercase Latin micro-label used for table headers and eyebrows. */
      eyebrow: {
        value: {
          fontFamily: "body",
          fontSize: "sm",
          fontWeight: "500",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "fg.muted",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
