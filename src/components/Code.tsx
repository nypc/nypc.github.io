import { chakra } from "@chakra-ui/react";

export const Code = chakra("code", {
  base: {
    fontFamily: "mono",
    display: "inline-block",
    maxWidth: "100%",
    overflowX: "auto",
    tabSize: 4,
    verticalAlign: "top",
    paddingInline: "1.5",
    paddingBlock: "0.5",
    borderRadius: "sm",
    fontSize: "0.875em",
    // `.hljs` blocks bring their own palette from the highlight.js stylesheet;
    // only unhighlighted inline code gets the neutral chip treatment.
    "&:not([class*='language-'])": {
      bg: "bg.emphasized",
      color: "fg",
    },
    "&.language-text": {
      bg: "bg.emphasized",
      color: "inherit",
    },
  },
});
