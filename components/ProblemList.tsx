import styled from "@emotion/styled";
import { Enumerate } from "@solved-ac/ui-react";
import Link from "next/link";
import React from "react";

interface Props {
  year: number;
  problems:
    | [string, string][]
    | readonly [string, string][]
    | readonly (readonly [string, string])[];
}

export const ProblemList: React.FC<Props> = (props) => {
  const { year, problems } = props;
  return (
    <Enumerate>
      {problems.map(([id, title]) => (
        <li key={id}>
          <Link href={`/${year}/${id}`} passHref>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </Enumerate>
  );
};

export const ProblemListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 8px 16px;
`;
