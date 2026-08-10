import { Divider, Typo } from "@solved-ac/ui-react";
import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList } from "components";

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
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#191716",
        color: "#FFFFFF",
      }}
    >
      <Typo h2 no-margin>
        루키 트랙 &mdash; 예선 라운드
      </Typo>
      <ProblemList year={year} problems={problems.rookie} />
      <Divider />
      <Typo h2 no-margin>
        마스터 트랙 &mdash; 예선 라운드
      </Typo>
      <ProblemList year={year} problems={problems.master} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/2026/")({
  component: List,
});
