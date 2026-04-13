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
      en={true}
      root
      meta={{
        title: `NYPC Archive`,
        subtitle: "A collection of past NYPC problems.",
      }}
      theme={Object.entries(themes).sort((a, b) => b[0].localeCompare(a[0]))[0]?.[1]}
    >
      <YearContainer>
        {Object.entries(themes)
          .filter(([year]) => year === "2025")
          .sort((a, b) => b[0].localeCompare(a[0]))
          .map(([year, { background, color, codebattle }]) => (
            <Row key={year}>
              {codebattle && (
                <Year
                  style={{
                    color,
                  }}
                  as="a"
                  clickable
                  href={`/en/${year}-codebattle`}
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
                    NYPC Code Battle
                  </Typo>
                </Year>
              )}
            </Row>
          ))}
      </YearContainer>
    </PostLayout>
  );
};

export const Route = createFileRoute("/en/")({
  component: Home,
});
