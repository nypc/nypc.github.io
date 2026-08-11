import { chakra } from "@chakra-ui/react";
import { accentColor } from "@/theme";

export const Blockquote = chakra("blockquote", {
  base: {
    borderInlineStartWidth: "3px",
    borderInlineStartStyle: "solid",
    borderInlineStartColor: accentColor,
    paddingInlineStart: "4",
    marginBlock: "4",
    opacity: 0.75,
    fontStyle: "italic",
  },
});
