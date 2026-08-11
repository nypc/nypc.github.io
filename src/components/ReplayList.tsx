import { Box, Flex, Text } from "@chakra-ui/react";
import { IconArrowRight } from "@tabler/icons-react";
import { createLink } from "@tanstack/react-router";
import { chakra } from "@chakra-ui/react";
import { BASE_LOCALE, useLocale } from "@/i18n";
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
 * `<year>/replay/`, the placement, and whose run it is.
 */
export type Replay = readonly [id: string, rank: number, nickname: string];

interface Props {
  year: number | string;
  replays: ReadonlyArray<Replay>;
}

/**
 * Featured replays for a round, listed under its problems. Label on the left,
 * entries on the right, matching the row rhythm of the heuristic problem list.
 */
export const ReplayList = ({ year, replays }: Props) => {
  const locale = useLocale();
  // Literal rather than concatenated, so the router still type-checks it.
  const to = locale === BASE_LOCALE ? "/$year/replay/$page" : "/en/$year/replay/$page";

  if (replays.length === 0) return null;

  return (
    <Box borderBottomWidth="1px" borderColor="border">
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: "2", md: "6" }}
        paddingBlock="6"
        // Matches the problem rows: padding cancelled by the negative margin so
        // the label stays flush while each entry's hover wash has room.
        paddingInline="3"
        marginInline="-3"
      >
        <Text flexShrink={0} width={{ md: "280px" }} fontSize="lg" color="fg">
          {m.replay_featured({}, { locale })}
        </Text>

        <Box flex="1" minWidth="0">
          {replays.map(([id, rank, nickname]) => (
            <Flex
              key={id}
              asChild
              align="center"
              gap="3"
              paddingBlock="1"
              paddingInline="2"
              marginInline="-2"
              borderRadius="md"
              transitionProperty="background-color"
              transitionDuration="fast"
              _hover={{ bg: "bg.subtle" }}
            >
              <ReplayLink to={to} params={{ year, page: id }}>
                <Text
                  flexShrink={0}
                  minWidth="3.5em"
                  textAlign="end"
                  color={accentColor}
                  fontSize="sm"
                  fontFeatureSettings="'tnum' 1"
                >
                  {m.replay_rank({ rank }, { locale })}
                </Text>
                <Text flex="1" minWidth="0" color="fg">
                  {nickname}
                </Text>
                <Box
                  aria-hidden
                  flexShrink={0}
                  color="fg.subtle"
                  display="flex"
                  alignItems="center"
                >
                  <IconArrowRight />
                </Box>
              </ReplayLink>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};
