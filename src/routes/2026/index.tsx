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

export const replays = {
  rookie: {
    pre_2b: [
      ["rookie_js7777", 3, "js7777"],
      ["rookie_yeongminb", 4, "yeongminb"],
      ["rookie_circle", 19, "circle"],
      ["rookie_mjkim112358", 33, "mjkim112358"],
      ["rookie_devngho", 111, "devngho"],
    ],
  },
  master: {
    pre_m: [
      ["master_프로그래밍초짜", 29, "프로그래밍 초짜"],
      ["master_원스타", 30, "원스타"],
      ["master_바리바리무샤무샤", 37, "바리바리 무샤무샤"],
      ["master_홍대2팀", 55, "홍대2팀"],
      ["master_BMO", 58, "BMO"],
      ["master_cattype", 62, "cat type"],
      ["master_태웅이와수드라들", 98, "태웅이와 수드라들"],
      ["master_AboutCreative", 160, "About Creative"],
      ["master_누개내머리에똥쌌어", 173, "누가내머리에똥쌌어"],
      ["master_worKing", 183, "worKing"],
    ],
  },
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
      <ProblemList year={year} problems={problems.rookie} replays={replays.rookie} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        마스터 트랙 &mdash; Qualification Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.master} replays={replays.master} />
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
