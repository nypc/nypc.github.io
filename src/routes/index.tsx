import styled from "@emotion/styled";
import { Card, Typo } from "@solved-ac/ui-react";
import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, themes } from "components";
import { readableColor } from "polished";

const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Year = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px;
  flex: 1;
  min-width: 0;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 16px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const Home = () => {
  return (
    <PostLayout
      root
      meta={{
        title: `NYPC 아카이브`,
        subtitle: "역대 NYPC 문제들을 모아 두었습니다.",
      }}
      theme={
        Object.entries(themes).sort((a, b) => b[0].localeCompare(a[0]))[0]?.[1]
      }
    >
      <YearContainer>
        {Object.entries(themes)
          .sort((a, b) => b[0].localeCompare(a[0]))
          .map(([year, { background, color, codebattle }]) => (
            <Row key={year}>
              <Year
                style={{
                  color,
                }}
                as="a"
                clickable
                href={`/${year}`}
                backgroundColor={background}
              >
                <Typo h2 no-margin>
                  NYPC {year}
                </Typo>
                <Typo
                  style={{
                    color: readableColor(background),
                    opacity: 0.8,
                  }}
                >
                  제 {+year - 2015}회 넥슨 청소년 프로그래밍 챌린지
                </Typo>
              </Year>
              {codebattle && (
                <Year
                  style={{
                    color,
                  }}
                  as="a"
                  clickable
                  href={`/${year}-codebattle`}
                  backgroundColor={background}
                >
                  <Typo h2 no-margin>
                    CODE BATTLE
                  </Typo>
                  <Typo
                    style={{
                      color: readableColor(background),
                      opacity: 0.8,
                    }}
                  >
                    NYPC 코드 배틀
                  </Typo>
                </Year>
              )}
            </Row>
          ))}
      </YearContainer>
    </PostLayout>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
