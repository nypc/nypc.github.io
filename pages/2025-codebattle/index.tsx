import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";


const problems = {
  online: [
  ],
  finals: [
  ],
} as const;

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC CODE BATTLE`,
      }}
      theme={{
        background: "#181D43",
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
    </PostLayout>
  );
};

export default List;
