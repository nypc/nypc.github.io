import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import { IconArrowRight, IconCornerDownRight } from "@tabler/icons-react";
import { createLink } from "@tanstack/react-router";
import { useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
import { accentColor } from "@/theme";

const ReplayLinkStyles = chakra("a", {
  base: {
    textDecoration: "none",
    _hover: { textDecoration: "none" },
  },
});

const ReplayLink = createLink(ReplayLinkStyles);

/**
 * One featured replay: the identifier of its MDX file under
 * `<year>/replay/`, matching the id of the problem it belongs to; the
 * placement; and whose run it is.
 */
export type Replay = readonly [id: string, rank: number, nickname: string];

interface Props {
  year: number | string;
  replay: Replay;
  to: "/$year/replay/$page" | "/en/$year/replay/$page";
}

/**
 * A featured replay nested directly under its problem's row, rather than
 * pooled into a separate list, so the relationship between a replay and the
 * single problem it belongs to stays unambiguous. Rendered inside the same
 * bordered container as the problem row above it, indented and set off by a
 * top rule so it reads as that row's child, not a sibling.
 */
export const ReplayRow = ({ year, replay, to }: Props) => {
  const locale = useLocale();
  const [id, rank, nickname] = replay;

  return (
    <ReplayLink to={to} params={{ year, page: id }} style={{ display: "block" }}>
      <Flex
        align="center"
        gap="2"
        paddingBlock="2"
        paddingInlineStart="9"
        paddingInlineEnd="3"
        marginInline="-3"
        borderTopWidth="1px"
        borderColor="border"
        transitionProperty="background-color"
        transitionDuration="fast"
        _hover={{ bg: "bg.subtle" }}
      >
        <Box aria-hidden flexShrink={0} color="fg.subtle" display="flex" alignItems="center">
          <IconCornerDownRight size={14} />
        </Box>
        <Text flexShrink={0} fontSize="xs" color="fg.muted">
          {m.replay_featured({}, { locale })}
        </Text>
        <Text
          flexShrink={0}
          color={accentColor}
          fontSize="xs"
          fontFeatureSettings="'tnum' 1"
        >
          {m.replay_rank({ rank }, { locale })}
        </Text>
        <Text flex="1" minWidth="0" fontSize="sm" color="fg">
          {nickname}
        </Text>
        <Box aria-hidden flexShrink={0} color="fg.subtle" display="flex" alignItems="center">
          <IconArrowRight size={14} />
        </Box>
      </Flex>
    </ReplayLink>
  );
};
