import { chakra } from "@chakra-ui/react";
import { useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
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

export const Details = ({ summary, children }: { summary?: string; children?: ReactNode }) => {
  const locale = useLocale();

  return (
    <DetailsContainer>
      <Summary>{summary ?? m.details_summary({}, { locale })}</Summary>
      {children}
    </DetailsContainer>
  );
};
