import styled from "@emotion/styled";

export const Itemize = styled.ul`
  padding-inline-start: 4ch;
  margin-block: 1em;
  margin-inline: 0px;
  list-style-type: square;
  & ::marker {
    color: ${({ theme }) => theme.color.text.secondary.main};
  }
`;

export const Enumerate = styled.ol`
  padding-inline-start: 4ch;
  margin-block: 1em;
  margin-inline: 0px;
  list-style-type: decimal;
  & ::marker {
    color: ${({ theme }) => theme.color.text.secondary.main};
  }
`;
