import styled from "@emotion/styled";

export const Blockquote = styled.blockquote`
  background-color: ${({ theme }) => theme.color.background.card.main};
  color: ${({ theme }) => theme.color.text.secondary.main};
  padding: 0.25em 1em;
  border-left: 0.25em solid ${({ theme }) => theme.color.background.card.dark};
`;
