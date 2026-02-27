import styled from "@emotion/styled";
import { Enumerate, Itemize, Typo } from "@solved-ac/ui-react";
import { Link } from "@tanstack/react-router";
import React, { useMemo } from "react";

const ProblemListEnumerate = styled(Enumerate)`
  column-width: 280px;
  column-gap: 16px;
`;

// TODO: 나중에 className 기반으로 바꾸기
// 컴포넌트 기반은 passHref를 못 써서 as={Link}로 해야 한다. to={...}로 하면 타입 오류가 있지만 작동은 한다.
export const ProblemLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

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
                <ProblemLink to={`/${year}/${id}`} as={Link}>
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
            <ProblemLink to={`/${year}/${id}`} as={Link}>{title}</ProblemLink>
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
