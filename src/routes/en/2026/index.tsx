import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList, SectionHeading, themes } from "components";

const year = 2026;

export const problems = {
  master: [["pre_m", "NEXT NATION"]],
  masterFinal: [["final_m", "NEXT VISION"]],
} as const;

const List = () => {
  return (
    <PostLayout
      availableLocales={["ko", "en"]}
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={themes[year]}
    >
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        Master Track &mdash; Qualification Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.master} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        Master Track &mdash; Final Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.masterFinal} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/en/2026/")({
  component: List,
});
