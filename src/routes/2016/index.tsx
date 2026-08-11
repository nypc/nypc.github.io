import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList, SectionHeading, themes } from "components";

const year = 2016;

export const problems = {
  preliminaries: [
    ["daramg", "넥슨은 다람쥐를 뿌려라"],
    ["validdeck", "마비노기 듀얼: 올바른 덱인가요?"],
    ["laserlamp", "전등 켜기"],
  ],
  finals: [
    ["spinandslide", "돌리고 밀고"],
    ["matchstick1", "성냥개비로 그린 수식: 하나만"],
    ["matchstick2", "성냥개비로 그린 수식: 도전"],
    ["farmgame1_easy", "나만의 농장 운영하기: 심고 수확하기"],
    ["farmgame2_easy", "나만의 농장 운영하기: 밭 업그레이드"],
  ],
} as const;

const List = () => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={themes[year]}
    >
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        예선
      </SectionHeading>
      <ProblemList year={year} problems={problems.preliminaries} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        본선
      </SectionHeading>
      <ProblemList year={year} problems={problems.finals} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/2016/")({
  component: List,
});
