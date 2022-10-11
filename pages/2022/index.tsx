import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import {
  PostLayout,
  ProblemList,
  ProblemListContainer
} from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2022;

const problems = {
  round1: [],
  round2a: [],
  round2b: [],
  finals1214: [],
  finals1519: [],
} as const;

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#000000",
        color: "#0D72E6",
      }}
    >
      <Typo h2>안내</Typo>
      <Itemize>
        <li>
          <Link href="/2022/notice/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2022/notice/tool">개발 도구 사용 안내</Link>
        </li>
      </Itemize>
      <Divider />
      <Typo h2 no-margin>
        Round 1
      </Typo>
      <ProblemList year={year} problems={problems.round1} />
      <Divider />
      <Typo h2 no-margin>
        Round 2
      </Typo>
      <ProblemListContainer>
        <div>
          <Typo h3>2-A</Typo>
          <ProblemList year={year} problems={problems.round2a} />
        </div>
        <div>
          <Typo h3>2-B</Typo>
          <ProblemList year={year} problems={problems.round2b} />
        </div>
      </ProblemListContainer>
      <Divider />
      <Typo h2 no-margin>
        본선
      </Typo>
      <ProblemListContainer>
        <div>
          <Typo h3>본선 &mdash; 1214</Typo>
          <ProblemList year={year} problems={problems.finals1214} />
        </div>
        <div>
          <Typo h3>본선 &mdash; 1519</Typo>
          <ProblemList year={year} problems={problems.finals1519} />
        </div>
      </ProblemListContainer>
    </PostLayout>
  );
};

export default List;