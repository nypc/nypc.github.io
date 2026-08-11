import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, YearList, YearRow, themes } from "components";
import { Fragment } from "react";

const byYearDescending = (a: [string, unknown], b: [string, unknown]) => b[0].localeCompare(a[0]);

const Home = () => {
  const years = Object.entries(themes).sort(byYearDescending);

  return (
    <PostLayout
      availableLocales={["ko", "en"]}
      root
      meta={{
        title: `NYPC 아카이브`,
        subtitle: "역대 NYPC 문제들을 모아 두었습니다.",
      }}
      theme={years[0]?.[1]}
    >
      <YearList>
        {years.map(([year, theme]) => (
          <Fragment key={year}>
            <YearRow
              href={`/${year}`}
              title={`NYPC ${year}`}
              description={
                +year >= 2026
                  ? `넥슨 영 프로그래머스 컵`
                  : `제 ${+year - 2015}회 넥슨 청소년 프로그래밍 챌린지`
              }
              theme={theme}
            />
            {theme.codebattle && (
              <YearRow
                nested
                href={`/${year}-codebattle`}
                title="CODE BATTLE"
                description="NYPC 코드 배틀"
                theme={theme}
              />
            )}
          </Fragment>
        ))}
      </YearList>
    </PostLayout>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
