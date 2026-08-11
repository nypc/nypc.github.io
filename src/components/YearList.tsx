import { Box, Flex, Text } from "@chakra-ui/react";
import { IconArrowRight } from "@tabler/icons-react";
import { headingFont, yearAccentColor } from "@/theme";
import type { ThemeItem } from "./themes";
import type { ReactNode } from "react";

/**
 * The archive index, styled after the schedule and notice lists on
 * new.nypc.co.kr: an uppercase column header, then rows separated by hairlines
 * rather than standalone cards. Rows are still links — they just no longer look
 * like tiles.
 */
export const YearList = ({ children }: { children: ReactNode }) => (
  <Box>
    <Flex
      textStyle="eyebrow"
      // Same gap as the rows below, or the Edition label sits a gap-width left
      // of the column it labels.
      gap={{ base: "1", md: "4" }}
      paddingBlock="3"
      // Flush left, so the year wordmarks line up with the rest of the page.
      // Only the nested Code Battle row is inset, from inside its own cell.
      paddingInlineStart="0"
      paddingInlineEnd={{ base: "2", md: "6" }}
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Box flex={{ base: "1", md: "0 0 280px" }}>Year</Box>
      <Box flex="1" display={{ base: "none", md: "block" }}>
        Edition
      </Box>
    </Flex>
    {children}
  </Box>
);

interface YearRowProps {
  href: string;
  title: string;
  description: string;
  theme: ThemeItem;
  /** Renders inset under the preceding row, for entries belonging to that year. */
  nested?: boolean;
}

export const YearRow = ({ href, title, description, theme, nested }: YearRowProps) => {
  const accent = yearAccentColor(theme);

  return (
    <Flex
      asChild
      align={{ base: "flex-start", md: "center" }}
      direction={{ base: "column", md: "row" }}
      gap={{ base: "1", md: "4" }}
      paddingBlock="6"
      paddingInlineStart="0"
      paddingInlineEnd={{ base: "2", md: "6" }}
      borderBottomWidth="1px"
      borderColor="border"
      textDecoration="none"
      transitionProperty="background-color"
      transitionDuration="fast"
      // Mixed from this row's own accent rather than the page-level variable,
      // since every row on the index shows a different year.
      _hover={{ bg: `color-mix(in srgb, ${accent} 8%, transparent)` }}
    >
      <a href={href}>
        {/*
          The indent lives inside the year cell rather than on the row, so the
          cell keeps its width and the Edition column stays aligned across
          nested and top-level rows alike.
        */}
        <Flex
          align="center"
          gap="3"
          flex={{ base: "0 0 auto", md: "0 0 280px" }}
          minWidth="0"
          paddingInlineStart={nested ? "8" : "0"}
        >
          {nested && (
            // Drawn rather than a glyph so it lines up with the row's baseline
            // at any font size.
            <Box
              aria-hidden
              flexShrink={0}
              width="12px"
              height="10px"
              marginBottom="2"
              marginInlineStart="-5"
              borderInlineStartWidth="1px"
              borderBottomWidth="1px"
              borderColor="border.emphasized"
            />
          )}
          <Box
            aria-hidden
            flexShrink={0}
            width="10px"
            height="10px"
            borderRadius="full"
            style={{ background: accent }}
          />
          <Text fontFamily={headingFont(title)} fontWeight="600" fontSize="3xl" color="fg">
            {title}
          </Text>
        </Flex>
        <Text flex="1" minWidth="0" color="fg.muted" fontSize="sm">
          {description}
        </Text>
        <Box
          aria-hidden
          flexShrink={0}
          color="fg.subtle"
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <IconArrowRight />
        </Box>
      </a>
    </Flex>
  );
};
