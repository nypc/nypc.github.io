/* eslint-disable @next/next/no-img-element */

import styled from "@emotion/styled";

export const Code = styled.code`
  background-color: ${({ theme }) => theme.color.background.card.main};
  color: ${({ theme }) => theme.color.status.error};
  padding: 0 0.25em;
  border-radius: 0.25em;
  font-size: 95%;
`;
