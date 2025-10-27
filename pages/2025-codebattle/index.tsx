import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = "2025-codebattle";

const problems = {
  online: [
    ["online_p", "[연습문제] 버섯 게임"],
    ["online_1", "Yacht Auction"],
  ],
  finals: [
    ["finals_1", "Connexion"],
  ],
} as const;

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC CODE BATTLE`,
      }}
      theme={{
        background: "#0086FF",
        color: "#FFFFFF",
      }}
    >
      <Typo h2>안내</Typo>
      <Itemize>
        <li>
          <Link href="/2025-codebattle/notice/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2025-codebattle/notice/tool">개발 도구 사용 안내</Link>
        </li>
      </Itemize>
      <Divider />
      <Typo h2 no-margin>
        온라인 라운드
      </Typo>
      <ProblemList year={year} problems={problems.online} />
      <Divider />
      <Typo h2 no-margin>
        파이널 라운드
      </Typo>
      <ProblemList year={year} problems={problems.finals} />
    </PostLayout>
  );
};

export default List;
