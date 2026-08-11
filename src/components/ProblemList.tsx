import { Grid, Text, chakra } from "@chakra-ui/react";
import { createLink } from "@tanstack/react-router";
import React, { useMemo } from "react";
import { Enumerate, Itemize } from "./List";
import { BASE_LOCALE, useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
import { accentColor } from "@/theme";
import type { GridProps } from "@chakra-ui/react";

const ProblemListEnumerate = chakra(Enumerate, {
  base: {
    columnWidth: "280px",
    columnGap: "4",
    "& ::marker": {
      color: accentColor,
    },
  },
});

const ProblemLinkStyles = chakra("a", {
  base: {
    textDecoration: "none",
    _hover: {
      textDecoration: "underline",
    },
  },
});

export const ProblemLink = createLink(ProblemLinkStyles);

/**
 * Practice problems are marked by a bracketed tag on the title — `[연습문제]`
 * in Korean, `[Practice]` in English. Matching the tag shape rather than one
 * locale's literal keeps this working in every language; the tag is the only
 * thing bracketed in the titles, so the pattern is unambiguous.
 */
const PRACTICE_TAG = /^\[[^\]]+\]\s*/;

interface Props {
  year: number | string;
  problems:
    | Array<[string, string]>
    | ReadonlyArray<[string, string]>
    | ReadonlyArray<readonly [string, string]>;
}

export const ProblemList: React.FC<Props> = (props) => {
  const { year, problems: list } = props;
  const locale = useLocale();
  // Selected as a literal rather than built by concatenation, so the router's
  // route-path union still type-checks the destination.
  const to = locale === BASE_LOCALE ? "/$year/$page" : "/en/$year/$page";

  const practices = useMemo(() => list.filter(([, title]) => PRACTICE_TAG.test(title)), [list]);
  const problems = useMemo(() => list.filter(([, title]) => !PRACTICE_TAG.test(title)), [list]);

  return (
    <>
      {practices.length > 0 && (
        <Itemize>
          {practices.map(([id, title]) => (
            <li key={id}>
              <ProblemLink to={to} params={{ year, page: id }}>
                <Text as="span" color="fg.muted">
                  {m.problem_practice({}, { locale })}
                </Text>{" "}
                {title.replace(PRACTICE_TAG, "")}
              </ProblemLink>
            </li>
          ))}
        </Itemize>
      )}
      <ProblemListEnumerate style={{ columnCount: 3 }}>
        {problems.map(([id, title]) => (
          <li key={id}>
            <ProblemLink to={to} params={{ year, page: id }}>
              {title}
            </ProblemLink>
          </li>
        ))}
      </ProblemListEnumerate>
    </>
  );
};

export const ProblemListContainer = (props: GridProps) => (
  <Grid
    gridTemplateColumns="repeat(auto-fill, minmax(min(100%, 320px), 1fr))"
    rowGap="2"
    columnGap="4"
    {...props}
  />
);
