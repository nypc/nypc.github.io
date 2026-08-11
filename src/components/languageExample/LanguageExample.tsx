import { Box, Flex } from "@chakra-ui/react";
import { LANGUAGE_EXAMPLES } from "./examples";
import type { PropsWithChildren } from "react";
import type { LANGUAGES } from "./examples";
import { HighlightedCode } from "@/components/highlightedCode/HighligtedCode";

interface Props {
  name: string;
  type?: "stdin" | "data_bin";
  example: LANGUAGES;
}

export const LanguageExample = ({ name, type, example: lang }: PropsWithChildren<Props>) => {
  return (
    <Flex
      id={`language-example-${name}`}
      paddingBlock="4"
      borderBottomWidth="1px"
      borderBottomColor="border"
    >
      <Box flex="0 0 180px">
        <b>{name}</b>
      </Box>
      <Box flex="1" minWidth="0">
        <HighlightedCode language={lang}>
          {LANGUAGE_EXAMPLES[lang][type ?? "stdin"] || ""}
        </HighlightedCode>
      </Box>
    </Flex>
  );
};
