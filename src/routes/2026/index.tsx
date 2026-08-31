import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList, SectionHeading, themes } from "components";

const year = 2026;

export const problems = {
  rookie: [
    ["pre_1a", "[연습문제] 배찌와 다오의 대청소 (스텝 업)"],
    ["pre_1b", "[연습문제] 배찌와 다오의 대청소 (챌린지)"],
    ["pre_2a", "씨앗 운반 (스텝 업)"],
    ["pre_2b", "씨앗 운반 (챌린지)"],
  ],
  master: [["pre_m", "NEXT NATION"]],
  rookieFinal: [["final_r", "슈퍼루키"]],
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
        루키 트랙 &mdash; Qualification Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.rookie} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        마스터 트랙 &mdash; Qualification Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.master} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        루키 트랙 &mdash; Final Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.rookieFinal} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        마스터 트랙 &mdash; Final Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.masterFinal} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/2026/")({
  component: List,
});
