import { Grid, Text, chakra } from "@chakra-ui/react";
import { createLink } from "@tanstack/react-router";
import React, { useMemo } from "react";
import { Enumerate, Itemize } from "./List";
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

interface Props {
  year: number | string;
  problems:
    | Array<[string, string]>
    | ReadonlyArray<[string, string]>
    | ReadonlyArray<readonly [string, string]>;
  en?: boolean;
}

export const ProblemList: React.FC<Props> = (props) => {
  const { year, problems: list, en } = props;

  const practices = useMemo(
    () => list.filter(([, title]) => title.startsWith("[연습문제]")),
    [list],
  );
  const problems = useMemo(
    () => list.filter(([, title]) => !title.startsWith("[연습문제]")),
    [list],
  );

  return (
    <>
      {practices.length > 0 && (
        <Itemize>
          {practices.map(([id, title]) => (
            <li key={id}>
              <ProblemLink to={`${en ? "/en" : ""}/$year/$page`} params={{ year, page: id }}>
                <Text as="span" color="fg.muted">
                  연습문제:
                </Text>{" "}
                {title.replace(/^\[연습문제] */, "")}
              </ProblemLink>
            </li>
          ))}
        </Itemize>
      )}
      <ProblemListEnumerate style={{ columnCount: 3 }}>
        {problems.map(([id, title]) => (
          <li key={id}>
            <ProblemLink to={`${en ? "/en" : ""}/$year/$page`} params={{ year, page: id }}>
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
