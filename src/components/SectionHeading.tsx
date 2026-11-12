import { Heading } from "@chakra-ui/react";
import { DISPLAY_FONT_MAX_WEIGHT, headingFont } from "@/theme";
import type { DisplayFace } from "@/theme";
import type { HeadingProps } from "@chakra-ui/react";

interface Props extends HeadingProps {
  /** Which poster gothic cut to use for Latin text; defaults to the ExCond brand face. */
  face?: DisplayFace;
}

/**
 * Neither poster gothic cut ships heavier than 600, so a heavier request would
 * only get a synthesized bold. Responsive/object weights pass through untouched.
 */
const capDisplayWeight = (
  weight: HeadingProps["fontWeight"],
): HeadingProps["fontWeight"] => {
  const n =
    typeof weight === "string" || typeof weight === "number"
      ? Number(weight)
      : NaN;
  return Number.isFinite(n) && n > DISPLAY_FONT_MAX_WEIGHT
    ? DISPLAY_FONT_MAX_WEIGHT
    : weight;
};

/**
 * A heading that sets itself in the brand display face only when its text is
 * free of Hangul. See `headingFont` for why.
 */
export const SectionHeading = ({
  children,
  face = "heading",
  fontWeight,
  ...props
}: Props) => {
  const fontFamily = headingFont(children, face);
  return (
    <Heading
      fontFamily={fontFamily}
      fontWeight={
        fontFamily === "body" ? fontWeight : capDisplayWeight(fontWeight)
      }
      {...props}
    >
      {children}
    </Heading>
  );
};
