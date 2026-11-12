import { Grid, chakra } from "@chakra-ui/react";
import { FigureCaption } from "./Figure";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** One caption for the whole row, set under it in the same style as a `Figure` caption. */
  caption?: ReactNode;
}

/**
 * Lays out a group of <Figure>s side by side instead of stacked — for
 * before/after or option-A/option-B comparisons. `auto-fit` grows each
 * figure to share the row evenly and wraps on its own if they don't all
 * fit; collapses to one column below the `md` breakpoint, where a
 * multi-up row would otherwise squeeze each figure unreadably small.
 *
 * The row is itself a <figure> so an optional caption can describe the group
 * (nested figures are valid HTML); each child keeps its own caption.
 */
export const FigureRow = ({ children, caption }: Props) => (
  <chakra.figure marginBlock="4" textAlign="center">
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(auto-fit, minmax(220px, 1fr))",
      }}
      gap="4"
      justifyItems="center"
      css={{
        "& > figure": {
          width: "100%",
          maxWidth: "100%",
          marginBlock: "0",
        },
      }}
    >
      {children}
    </Grid>
    {caption && <FigureCaption>{caption}</FigureCaption>}
  </chakra.figure>
);
