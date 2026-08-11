import { Button } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";

/**
 * Shared control for the header navigation row.
 *
 * Both ends of the row use it so they share a height, padding, and hover box —
 * a bare link on one side and a button on the other centre their text alike but
 * differ in box height, which reads as misalignment.
 */
export const NavButton = (props: ButtonProps) => (
  <Button
    variant="ghost"
    size="sm"
    color="fg.muted"
    gap="1.5"
    paddingInline="2"
    fontWeight="normal"
    // These render as anchors via `asChild`, which would otherwise pick up the
    // global prose-link underline. The button shape already reads as clickable.
    textDecoration="none"
    _hover={{ textDecoration: "none" }}
    {...props}
  />
);
