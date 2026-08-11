import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import { Code } from "./Code";

const LanguageDetailItem = chakra(Flex, {
  base: {
    minWidth: "640px",
    gap: "2",
    padding: "8px 0",
    borderBottomWidth: "1px",
    borderBottomColor: "border",
  },
});

const LanguageMetaItem = chakra(Flex, {
  base: {
    gap: "2",
    fontSize: "80%",
    padding: "2px 0",
  },
});

const LanguageMetaCode = chakra(Code, {
  base: {
    display: "block",
    flex: 1,
    minWidth: 0,
    fontSize: "100%",
    paddingInline: 0,
    paddingBlock: 0,
    letterSpacing: "-0.05em",
    color: "inherit",
    bg: "transparent",
    "&:not([class*='language-'])": {
      color: "inherit",
      bg: "transparent",
    },
    "&.language-text": {
      color: "inherit",
      bg: "transparent",
    },
  },
});

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

export const LanguageDetails = ({ details }: { details: Array<LanguageDetail> }) => {
  return (
    <Box overflowX="auto">
      {details.map((detail, index) => (
        <LanguageDetailItem key={index}>
          <Box flex="0 0 180px">
            <b>{detail.name}</b>
            <br />
            <Text as="span" color="fg.muted">
              {detail.code}
            </Text>
          </Box>
          <Box flex="1" minWidth="0">
            {detail.version}
            {detail.showExample !== false && (
              <>
                {" "}
                <Text as="span" color="fg.muted">
                  (<a href={`#language-example-${detail.name}`}>예시 코드</a>)
                </Text>
              </>
            )}
            <Box h="1" />
            <LanguageMetaItem>
              <Box flex="0 0 160px" color="fg.muted">
                사용 가능 외부 라이브러리
              </Box>
              <Box flex="1" minWidth="0">
                {detail.libs ? (
                  detail.libs.map((lib, idx) => (
                    <span key={idx}>
                      <a href={lib.href} target="_blank" rel="noopener noreferrer">
                        <b>{lib.name}</b>
                      </a>
                      {idx < detail.libs!.length - 1 ? ", " : ""}
                    </span>
                  ))
                ) : (
                  <Text as="span" color="fg.muted">
                    (없음)
                  </Text>
                )}
              </Box>
            </LanguageMetaItem>
            <LanguageMetaItem>
              <Box flex="0 0 160px" color="fg.muted">
                컴파일 명령어
              </Box>
              {detail.compilation ? (
                <LanguageMetaCode>{detail.compilation}</LanguageMetaCode>
              ) : (
                <Text as="span" color="fg.muted">
                  (컴파일하지 않음)
                </Text>
              )}
            </LanguageMetaItem>
            <LanguageMetaItem>
              <Box flex="0 0 160px" color="fg.muted">
                실행 명령어
              </Box>
              <LanguageMetaCode>{detail.execution}</LanguageMetaCode>
            </LanguageMetaItem>
          </Box>
        </LanguageDetailItem>
      ))}
    </Box>
  );
};
