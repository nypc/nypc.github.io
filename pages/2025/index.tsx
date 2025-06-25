import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2025;

const problems = {
  round1: [
  ],
  round2a: [
  ],
  round2b: [
  ],
  finals1214: [
  ],
  finals1519: [
  ],
} as const;

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#181D43",
        color: "#FFFFFF",
      }}
    >
      <Typo h2>안내</Typo>
      <Itemize>
        <li>
          <Link href="/2025/notice/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2025/notice/tool">개발 도구 사용 안내</Link>
        </li>
      </Itemize>
      <Divider />
    </PostLayout>
  );
};

export default List;
