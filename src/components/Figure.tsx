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

const FigureCaption = chakra("figcaption", {
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
}

export const Figure: React.FC<Props> = (props) => {
  const { src, alt, caption, width, style } = props;

  return (
    <FigureContainer>
      <FigureImg
        src={src}
        alt={alt || (typeof caption === "string" ? caption : undefined)}
        style={{ width, ...style }}
      />
      {caption && <FigureCaption>{caption}</FigureCaption>}
    </FigureContainer>
  );
};
