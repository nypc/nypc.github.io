import { Heading } from "@chakra-ui/react";
import { headingFont } from "@/theme";
import type { HeadingProps } from "@chakra-ui/react";

/**
 * A heading that sets itself in the brand display face only when its text is
 * free of Hangul. See `headingFont` for why.
 */
export const SectionHeading = ({ children, ...props }: HeadingProps) => (
  <Heading fontFamily={headingFont(children)} {...props}>
    {children}
  </Heading>
);
