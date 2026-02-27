import styled from "@emotion/styled";
import { type PropsWithChildren } from "react";
import { LANGUAGE_EXAMPLES, type LANGUAGES } from "./examples";
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
  type?: "stdin" | "data_bin";
  example: LANGUAGES;
}

export const LanguageExample = ({
  name,
  type,
  example: lang,
}: PropsWithChildren<Props>) => {
  return (
    <LanguageExampleContainer id={`language-example-${name}`}>
      <LanguageName>
        <b>{name}</b>
      </LanguageName>
      <LanguageContent>
        <HighlightedCode
          language={lang}
        >
          {LANGUAGE_EXAMPLES[lang][type ?? 'stdin'] || ''}
        </HighlightedCode>
      </LanguageContent>
    </LanguageExampleContainer>
  );
};
