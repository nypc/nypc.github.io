import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { Code } from "./Code";

const LanguageDetailsContainer = styled.div`
  overflow-x: auto;
`;

const LanguageDetailItem = styled.div`
  display: flex;
  min-width: 640px;
  gap: 8px;
  padding: 8px 0;
  border-bottom: ${({ theme }) => theme.styles.border()};
`;

const LanguageId = styled.div`
  flex: 0 0 180px;
`;

const LanguageMeta = styled.div`
  flex: 1;
  min-width: 0;
`;

const LanguageMetaItem = styled.div`
  display: flex;
  gap: 8px;
  font-size: 80%;
  padding: 2px 0;
`;

const LanguageMetaCaption = styled.div`
  color: ${({ theme }) => theme.color.text.secondary.main};
  flex: 0 0 160px;
`;

const LanguageMetaContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const LanguageMetaCode = styled(Code)`
  display: block;
  flex: 1;
  min-width: 0;
  font-size: 100%;
  padding: 0;
  color: inherit;
  background-color: transparent;
  letter-spacing: -0.05em;
  &:not([class*="language-"]) {
    color: inherit;
    background-color: transparent;
  }
  &.language-text {
    color: inherit;
    background-color: transparent;
  }
`;

interface LanguageDetail {
  name: string;
  code: string;
  version: string;
  libs?: Array<{
    name: string;
    href: string;
  }>;
  compilation?: string;
  execution?: string;
  showExample?: boolean;
}

export const LanguageDetails = ({
  details,
}: {
  details: Array<LanguageDetail>;
}) => {
  return (
    <LanguageDetailsContainer>
      {details.map((detail, index) => (
        <LanguageDetailItem key={index}>
          <LanguageId>
            <b>{detail.name}</b>
            <br />
            <Typo description>{detail.code}</Typo>
          </LanguageId>
          <LanguageMeta>
            {detail.version}
            {detail.showExample !== false && (
              <>
                {" "}
                <Typo description>
                  (<a href={`#language-example-${detail.name}`}>예시 코드</a>)
                </Typo>
              </>
            )}
            <Space h={4} />
            <LanguageMetaItem>
              <LanguageMetaCaption>
                사용 가능 외부 라이브러리
              </LanguageMetaCaption>
              <LanguageMetaContent>
                {detail.libs ? (
                  detail.libs.map((lib, idx) => (
                    <span key={idx}>
                      <a
                        href={lib.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>{lib.name}</b>
                      </a>
                      {idx < detail.libs!.length - 1 ? ", " : ""}
                    </span>
                  ))
                ) : (
                  <Typo description>(없음)</Typo>
                )}
              </LanguageMetaContent>
            </LanguageMetaItem>
            <LanguageMetaItem>
              <LanguageMetaCaption>컴파일 명령어</LanguageMetaCaption>
              {detail.compilation ? (
                <LanguageMetaCode>{detail.compilation}</LanguageMetaCode>
              ) : (
                <Typo description>(컴파일하지 않음)</Typo>
              )}
            </LanguageMetaItem>
            <LanguageMetaItem>
              <LanguageMetaCaption>실행 명령어</LanguageMetaCaption>
              <LanguageMetaCode>{detail.execution}</LanguageMetaCode>
            </LanguageMetaItem>
          </LanguageMeta>
        </LanguageDetailItem>
      ))}
    </LanguageDetailsContainer>
  );
};
