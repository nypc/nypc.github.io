import { chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";

const FigureContainer = chakra("figure", {
  base: {
    width: "100%",
    maxWidth: "800px",
    marginInline: "auto",
    // MDX paragraphs carry bottom margin only, so a zero-margin block would sit
    // flush against whatever follows it. Matching the paragraph rhythm keeps
    // figures spaced on both sides.
    marginBlock: "4",
    textAlign: "center",
  },
});

const FigureImg = chakra("img", {
  base: {
    margin: "0 auto",
    maxWidth: "100%",
    display: "block",
  },
});

/** Shared with `FigureRow` so a row-level caption reads the same as a single figure's. */
export const FigureCaption = chakra("figcaption", {
  base: {
    padding: "1em",
    color: "fg.muted",
    fontSize: "sm",
    "&:before": {
      content: '"↑"',
      marginRight: "0.5ch",
      color: "fg.subtle",
    },
  },
});

interface Props {
  src: string;
  alt?: string;
  caption?: ReactNode;
  width?: string | number;
  style?: React.CSSProperties;
  /**
   * Floats the figure beside surrounding paragraphs instead of breaking the
   * flow as a full-width block. Falls back to a normal stacked figure below
   * the `md` breakpoint, where text wrapping around a small image reads
   * poorly. While floating, `width` sizes the whole figure (image included)
   * rather than just the image, since the figure no longer centers itself.
   */
  float?: "left" | "right";
}

export const Figure: React.FC<Props> = (props) => {
  const { src, alt, caption, width, style, float } = props;

  return (
    <FigureContainer
      float={float ? { base: "none", md: float } : undefined}
      width={float ? { base: "100%", md: width ?? "320px" } : "100%"}
      marginInline={float ? "0" : "auto"}
      marginInlineStart={float === "right" ? { base: "0", md: "4" } : undefined}
      marginInlineEnd={float === "left" ? { base: "0", md: "4" } : undefined}
    >
      <FigureImg
        src={src}
        alt={alt || (typeof caption === "string" ? caption : undefined)}
        style={{ width: float ? "100%" : width, ...style }}
      />
      {caption && <FigureCaption>{caption}</FigureCaption>}
    </FigureContainer>
  );
};
