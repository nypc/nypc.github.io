import styled from "@emotion/styled";
import { Typo } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";
import { LANGUAGE_EXAMPLES } from "./examples";
import { Code } from "components/Code";
import { HighlightedCode } from "components/hilightedCode/HighligtedCode";

const LanguageExampleContainer = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: ${({ theme }) => theme.styles.border()};
`;

const LanguageName = styled.div`
  flex: 0 0 180px;
`;

const LanguageContent = styled.div`
  flex: 1;
  min-width: 0;
`;

interface Props {
  name: string;
  example: keyof typeof LANGUAGE_EXAMPLES;
}

export const LanguageExample = ({
  name,
  example,
}: PropsWithChildren<Props>) => {
  return (
    <LanguageExampleContainer id={`language-example-${name}`}>
      <LanguageName>
        <b>{name}</b>
      </LanguageName>
      <LanguageContent>
        <HighlightedCode
          language={LANGUAGE_EXAMPLES[example]?.language || "text"}
        >
          {LANGUAGE_EXAMPLES[example]?.code || ""}
        </HighlightedCode>
      </LanguageContent>
    </LanguageExampleContainer>
  );
};
