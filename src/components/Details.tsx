import styled from "@emotion/styled";
import type { ReactNode } from "react";

const DetailsContainer = styled.details`
  margin: 16px 0;
  padding: 8px 16px;
  border: ${({ theme }) => theme.styles.border()};
  border-radius: 8px;
`;

const Summary = styled.summary`
  cursor: pointer;
  font-weight: bold;
`;

export const Details = ({
  summary = "자세히 보기",
  children,
}: {
  summary?: string;
  children?: ReactNode;
}) => {
  return (
    <DetailsContainer>
      <Summary>{summary}</Summary>
      {children}
    </DetailsContainer>
  );
};
