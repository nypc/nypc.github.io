import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, YearList, YearRow, themes } from "components";
import { Fragment } from "react";

/** Only these years have English translations. */
const TRANSLATED_YEARS = ["2025", "2026"];

const byYearDescending = (a: [string, unknown], b: [string, unknown]) => b[0].localeCompare(a[0]);

const Home = () => {
  const years = Object.entries(themes)
    .filter(([year]) => TRANSLATED_YEARS.includes(year))
    .sort(byYearDescending);

  return (
    <PostLayout
      availableLocales={["ko", "en"]}
      root
      meta={{
        title: `NYPC Archive`,
        subtitle: "A collection of past NYPC problems.",
      }}
      theme={Object.entries(themes).sort(byYearDescending)[0]?.[1]}
    >
      <YearList>
        {years.map(([year, theme]) => (
          <Fragment key={year}>
            {year === "2026" && (
              <YearRow
                href={`/en/${year}`}
                title={`NYPC ${year}`}
                description="NEXON Young Programmers Cup"
                theme={theme}
              />
            )}
            {/*
              Not nested: 2025 itself has no English archive, so Code Battle has
              no parent row here and stands on its own.
            */}
            {theme.codebattle && (
              <YearRow
                href={`/en/${year}-codebattle`}
                title="CODE BATTLE"
                description="NYPC Code Battle"
                theme={theme}
              />
            )}
          </Fragment>
        ))}
      </YearList>
    </PostLayout>
  );
};

export const Route = createFileRoute("/en/")({
  component: Home,
});
