import { Typo } from "@solved-ac/ui-react";
import { createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList } from "components";

const year = 2026;

export const problems = {
  master: [["pre_m", "NEXT NATION"]],
} as const;

const List = () => {
  return (
    <PostLayout
      en={true}
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#191716",
        color: "#FFFFFF",
      }}
    >
      <Typo h2 no-margin>
        Master Track &mdash; Qualification Round
      </Typo>
      <ProblemList en={true} year={year} problems={problems.master} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/en/2026/")({
  component: List,
});
