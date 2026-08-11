import { chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";

const DetailsContainer = chakra("details", {
  base: {
    margin: "16px 0",
    padding: "8px 16px",
    borderWidth: "1px",
    borderColor: "border",
    borderRadius: "lg",
  },
});

const Summary = chakra("summary", {
  base: {
    cursor: "pointer",
    fontWeight: "bold",
  },
});

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
