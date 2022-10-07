import styled from "@emotion/styled";
import { Enumerate, Itemize, Typo } from "@solved-ac/ui-react";
import Link from "next/link";
import React, { useMemo } from "react";

const ProblemListEnumerate = styled(Enumerate)`
  column-width: 280px;
  column-gap: 16px;
`;

export const ProblemLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  year: number;
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
                <Link href={`/${year}/${id}`} passHref>
                  <ProblemLink>
                    <Typo description>연습문제:</Typo>{" "}
                    {title.replace(/^\[연습문제] */, "")}
                  </ProblemLink>
                </Link>
              </li>
            ))}
          </Itemize>
        </>
      )}
      <ProblemListEnumerate style={{ columnCount: 3 }}>
        {problems.map(([id, title]) => (
          <li key={id}>
            <Link href={`/${year}/${id}`} passHref>
              <ProblemLink>{title}</ProblemLink>
            </Link>
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
