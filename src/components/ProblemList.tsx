import styled from "@emotion/styled";
import { Enumerate, Itemize, Typo } from "@solved-ac/ui-react";
import React, { useMemo } from "react";
import { createLink } from '@tanstack/react-router'

const ProblemListEnumerate = styled(Enumerate)`
  column-width: 280px;
  column-gap: 16px;
`;

const ProblemLinkStyles = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProblemLink = createLink(ProblemLinkStyles);

interface Props {
  year: number | string;
  problems:
    | [string, string][]
    | readonly [string, string][]
    | readonly (readonly [string, string])[];
}

export const ProblemList: React.FC<Props> = (props) => {
  const { year, problems: list } = props;

  const practices = useMemo(
    () => list.filter(([, title]) => title.startsWith("[연습문제]")),
    [list]
  );
  const problems = useMemo(
    () => list.filter(([, title]) => !title.startsWith("[연습문제]")),
    [list]
  );

  return (
    <>
      {practices.length > 0 && (
        <>
          <Itemize>
            {practices.map(([id, title]) => (
              <li key={id}>
                <ProblemLink to="/$year/$page" params={{ year, page: id }}>
                  <Typo description>연습문제:</Typo>{" "}
                  {title.replace(/^\[연습문제] */, "")}
                </ProblemLink>
              </li>
            ))}
          </Itemize>
        </>
      )}
      <ProblemListEnumerate style={{ columnCount: 3 }}>
        {problems.map(([id, title]) => (
          <li key={id}>
            <ProblemLink to="/$year/$page" params={{ year, page: id }}>{title}</ProblemLink>
          </li>
        ))}
      </ProblemListEnumerate>
    </>
  );
};

export const ProblemListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 8px 16px;
`;
