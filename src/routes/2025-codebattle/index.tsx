import { Separator } from "@chakra-ui/react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Itemize, PostLayout, ProblemList, SectionHeading, themes } from "components";

const year = "2025-codebattle";

export const problems = {
  online: [
    ["online_p", "[연습문제] 버섯 게임"],
    ["online_1", "Yacht Auction"],
  ],
  finals: [["finals_1", "Connexion"]],
} as const;

const List = () => {
  return (
    <PostLayout
      availableLocales={["ko", "en"]}
      meta={{
        title: `NYPC CODE BATTLE`,
        year: 2025,
        codebattle: true,
      }}
      theme={themes[2025]}
    >
      <SectionHeading as="h2" size="2xl" marginTop="8" marginBottom="4">
        안내
      </SectionHeading>
      <Itemize>
        <li>
          <Link to="/$year/notice/$page" params={{ year, page: "rule" }}>
            대회 규칙
          </Link>
        </li>
        <li>
          <Link to="/$year/notice/$page" params={{ year, page: "tool" }}>
            개발 도구 사용 안내
          </Link>
        </li>
      </Itemize>
      <Separator marginBlock="8" borderColor="border" />
      <SectionHeading as="h2" size="2xl" marginTop="0" marginBottom="4">
        온라인 라운드
      </SectionHeading>
      <ProblemList year={year} problems={problems.online} />
      <Separator marginBlock="8" borderColor="border" />
      <SectionHeading as="h2" size="2xl" marginTop="0" marginBottom="4">
        파이널 라운드
      </SectionHeading>
      <ProblemList year={year} problems={problems.finals} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/2025-codebattle/")({
  component: List,
});
