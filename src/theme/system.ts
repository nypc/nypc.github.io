import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { BODY_FONT, DISPLAY_FONT, MONO_FONT } from "./fonts";

/** Carries the current year's accent; set per page by `PostLayout`. */
export const YEAR_ACCENT_VAR = "--nypc-year-accent";

/** Neutral ink used wherever no year accent is in scope. */
const ACCENT_FALLBACK = "#191716";

/**
 * Plain CSS values, not semantic tokens: Chakra declares token variables once on
 * `:root`, where `var(--nypc-year-accent, …)` would freeze at the fallback and
 * inherit that everywhere. Used at the point of use, it resolves per element.
 */
export const accentColor = `var(${YEAR_ACCENT_VAR}, ${ACCENT_FALLBACK})`;
export const accentSubtle = `color-mix(in srgb, ${accentColor} 12%, transparent)`;
export const accentMuted = `color-mix(in srgb, ${accentColor} 40%, transparent)`;

/** Warm neutral ramp; 50/400/500/900 sampled from new.nypc.co.kr. */
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
    // Chakra's reset strips link styling. Nav and card links opt out again via
    // `textDecoration="none"`, which sits in a higher cascade layer.
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
    // KaTeX sizing lives in AppProviders — it must be unlayered to beat KaTeX's
    // own stylesheet. See the note there.
    // Chakra's preflight blockifies `img`, which breaks inline glyphs mid-sentence.
    // `Figure` opts back into `display: block`; recipe styles outrank this.
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
          /** Prose copy, a step softer than headings — matches the official site's ~7.3:1. */
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
