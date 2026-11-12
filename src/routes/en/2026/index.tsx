import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList, SectionHeading, themes } from "components";

const year = 2026;

export const problems = {
  master: [["pre_m", "NEXT NATION"]],
  masterFinal: [["final_m", "NEXT VISION"]],
} as const;

export const replays = {
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
        Master Track &mdash; Qualification Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.master} replays={replays.master} />
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
