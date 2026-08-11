import { chakra } from "@chakra-ui/react";

const listStyles = {
  paddingInlineStart: "6",
  marginBlockEnd: "4",
  marginInline: "0px",
} as const;

export const Itemize = chakra("ul", {
  base: {
    ...listStyles,
    listStyleType: "disc",
  },
});

export const Enumerate = chakra("ol", {
  base: {
    ...listStyles,
    listStyleType: "decimal",
  },
});
