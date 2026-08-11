import { Separator } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList, SectionHeading, themes } from "components";

const year = 2026;

export const problems = {
  rookie: [
    ["pre_1a", "배찌와 다오의 대청소 (스텝 업)"],
    ["pre_1b", "배찌와 다오의 대청소 (챌린지)"],
    ["pre_2a", "씨앗 운반 (스텝 업)"],
    ["pre_2b", "씨앗 운반 (챌린지)"],
  ],
  master: [["pre_m", "NEXT NATION"]],
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
      <SectionHeading as="h2" size="2xl" marginTop="0" marginBottom="4">
        루키 트랙 &mdash; 예선 라운드
      </SectionHeading>
      <ProblemList year={year} problems={problems.rookie} />
      <Separator marginBlock="8" borderColor="border" />
      <SectionHeading as="h2" size="2xl" marginTop="0" marginBottom="4">
        마스터 트랙 &mdash; 예선 라운드
      </SectionHeading>
      <ProblemList year={year} problems={problems.master} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/2026/")({
  component: List,
});
