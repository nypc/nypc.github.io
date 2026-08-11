import { Box } from "@chakra-ui/react";
import { yearAuroraColor } from "@/theme";
import type { ThemeItem } from "./themes";

interface Props {
  theme: ThemeItem;
}

/**
 * Decorative wash behind the page header, tinted with the year's second poster
 * colour. Mirrors the problem-detail aurora in solved.ac v4.
 */
export const YearAurora = ({ theme }: Props) => {
  const color = yearAuroraColor(theme);
  // Years whose palette carries no chroma get no wash at all — see
  // `yearAuroraColor`.
  if (!color) return null;

  return (
    <Box
      aria-hidden
      position="absolute"
      insetInline={0}
      top={0}
      height="300px"
      zIndex={0}
      pointerEvents="none"
      overflow="hidden"
      css={{
        maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
      }}
    >
      {/* Widths are relative and overlap heavily; fixed pixel sizes leave visible gaps. */}
      <Box
        position="absolute"
        top="-160px"
        insetStart="-20%"
        width="70%"
        height="340px"
        borderRadius="full"
        filter="blur(110px)"
        opacity={0.24}
        style={{ background: color }}
      />
      <Box
        position="absolute"
        top="-130px"
        insetStart="15%"
        width="70%"
        height="300px"
        borderRadius="full"
        filter="blur(120px)"
        opacity={0.17}
        style={{ background: color }}
      />
      <Box
        position="absolute"
        top="-170px"
        insetEnd="-20%"
        width="70%"
        height="320px"
        borderRadius="full"
        filter="blur(110px)"
        opacity={0.2}
        style={{ background: color }}
      />
    </Box>
  );
};
