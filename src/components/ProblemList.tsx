import { Box, Flex, Grid, Text, chakra } from "@chakra-ui/react";
import { IconArrowRight } from "@tabler/icons-react";
import { createLink } from "@tanstack/react-router";
import React, { useMemo } from "react";
import { BASE_LOCALE, useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
import { ReplayList } from "./ReplayList";
import { accentColor } from "@/theme";
import type { GridProps } from "@chakra-ui/react";
import type { Replay } from "./ReplayList";

const ProblemLinkStyles = chakra("a", {
  base: {
    textDecoration: "none",
    _hover: { textDecoration: "none" },
  },
});

export const ProblemLink = createLink(ProblemLinkStyles);

/** Practice marker: `[연습문제]`, `[Practice]`. Matched by shape, not by locale. */
const PRACTICE_TAG = /^\[[^\]]+\]\s*/;

/** `traditional`: dense, up to two columns. `heuristic`: one full-width row each. */
export type ProblemListVariant = "traditional" | "heuristic";

/** Code battles and every edition from 2026 on are heuristic. */
export const problemListVariantFor = (year: number | string): ProblemListVariant => {
  const edition = String(year);
  if (edition.includes("-codebattle")) return "heuristic";
  const parsed = Number.parseInt(edition, 10);
  return Number.isFinite(parsed) && parsed >= 2026 ? "heuristic" : "traditional";
};

interface Props {
  year: number | string;
  problems:
    | Array<[string, string]>
    | ReadonlyArray<[string, string]>
    | ReadonlyArray<readonly [string, string]>;
  /** Overrides the layout implied by the edition. */
  variant?: ProblemListVariant;
  /** Featured replays for this round, listed under its problems. */
  replays?: ReadonlyArray<Replay>;
}

interface RowsProps {
  items: ReadonlyArray<readonly [string, string]>;
  variant: ProblemListVariant;
  year: number | string;
  to: "/$year/$page" | "/en/$year/$page";
  /** Rendered in the number column; practice rows show a label instead. */
  label?: (index: number) => React.ReactNode;
}

const ProblemRows = ({ items, variant, year, to, label }: RowsProps) => {
  const heuristic = variant === "heuristic";

  return (
    <Box
      /**
       * Multi-column, not grid: columns size to the space actually available
       * (these lists are often rendered two-up), and items flow *down* each
       * column. Rules therefore do not align across columns, by design.
       */
      css={
        heuristic
          ? undefined
          : { columnWidth: "360px", columnCount: 2, columnGap: "var(--chakra-spacing-10)" }
      }
    >
      {items.map(([id, title], index) => (
        <ProblemLink
          key={id}
          to={to}
          params={{ year, page: id }}
          // Keeps a row from being split across a column break.
          style={{ display: "block", breakInside: "avoid" }}
        >
          {/* Rule sits outside the negative margin so only the hover wash widens. */}
          <Box borderBottomWidth="1px" borderColor="border">
            <Flex
              align="center"
              gap="3"
              // The archive index's rhythm for heuristic rounds; a compact row
              // for traditional ones, where a round can run to 23 problems.
              paddingBlock={heuristic ? "6" : "2"}
              // Padding cancelled by the negative margin: the wash gets room
              // while the number stays flush with the heading above.
              paddingInline="3"
              marginInline="-3"
              transitionProperty="background-color"
              transitionDuration="fast"
              _hover={{ bg: "bg.subtle" }}
            >
              <Text
                flexShrink={0}
                color={accentColor}
                fontSize={heuristic ? "md" : "sm"}
                fontFeatureSettings="'tnum' 1"
                // Traditional lists reserve width so 1. and 23. align.
                minWidth={label || heuristic ? undefined : "1.5em"}
                textAlign={label || heuristic ? undefined : "end"}
              >
                {label ? label(index) : `${index + 1}.`}
              </Text>
              <Text flex="1" minWidth="0" fontSize={heuristic ? "lg" : "md"} color="fg">
                {title.replace(PRACTICE_TAG, "")}
              </Text>
              {heuristic && (
                <Box
                  aria-hidden
                  flexShrink={0}
                  color="fg.subtle"
                  display={{ base: "none", md: "flex" }}
                  alignItems="center"
                >
                  <IconArrowRight />
                </Box>
              )}
            </Flex>
          </Box>
        </ProblemLink>
      ))}
    </Box>
  );
};

export const ProblemList: React.FC<Props> = (props) => {
  const { year, problems: list, variant, replays } = props;
  const locale = useLocale();
  // Selected as a literal rather than built by concatenation, so the router's
  // route-path union still type-checks the destination.
  const to = locale === BASE_LOCALE ? "/$year/$page" : "/en/$year/$page";
  const resolved = variant ?? problemListVariantFor(year);

  const practices = useMemo(() => list.filter(([, title]) => PRACTICE_TAG.test(title)), [list]);
  const problems = useMemo(() => list.filter(([, title]) => !PRACTICE_TAG.test(title)), [list]);

  return (
    <>
      {practices.length > 0 && (
        <Box marginBottom="6">
          <ProblemRows
            items={practices}
            variant={resolved}
            year={year}
            to={to}
            label={() => m.problem_practice({}, { locale })}
          />
        </Box>
      )}
      <ProblemRows items={problems} variant={resolved} year={year} to={to} />
      {replays && <ReplayList year={year} replays={replays} />}
    </>
  );
};

/**
 * Sibling rounds side by side (1214 / 1519, 2-A / 2-B). Capped at two tracks —
 * `auto-fill` fitted three, leaving each list squeezed with a gap beside it.
 */
export const ProblemListContainer = (props: GridProps) => (
  <Grid
    gridTemplateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
    rowGap="8"
    columnGap="10"
    {...props}
  />
);
