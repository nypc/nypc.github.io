import styled from "@emotion/styled";

export const ProblemListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 8px 16px;
`;
