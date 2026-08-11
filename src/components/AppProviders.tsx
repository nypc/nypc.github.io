import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BODY_FONT } from "@/theme";
import { system } from "@/theme";
import React from "react";

/**
 * KaTeX ships its own unlayered stylesheet from a CDN, including
 * `.katex { font-size: 1.21em }`. Chakra's `globalCss` compiles into the `base`
 * cascade layer, and unlayered rules beat layered ones no matter how specific
 * the layered selector is — so these overrides have to be emitted unlayered
 * too. Emotion's `Global` does that; from there plain specificity applies and
 * `span.katex` wins.
 */
const katexStyles = css`
  span.katex {
    font-size: 1.1em;
  }
  .katex span.hangul_fallback {
    font-size: 90.9%;
    font-family: ${BODY_FONT};
  }
`;

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={system}>
    <Global styles={katexStyles} />
    {children}
  </ChakraProvider>
);
