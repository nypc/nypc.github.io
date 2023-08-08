import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2023;


const problems = {
  round1: [
    ["round1_p1", "[연습문제] 인류의 적 모기 퇴치"],
    ["round1_p2", "[연습문제] 카트라이더 보드게임"],
    ["round1_1", "메이플스토리 새로운 직업 고르기"],
    ["round1_2", "게임 안에서 책을 읽을 수 있다구요?"],
    ["round1_3", "더하기와 곱하기"],
    ["round1_4", "언제까지 기다려야"],
    ["round1_5", "짠돌이 구단주"],
    ["round1_6", "몬스터 격퇴 원정단"],
    ["round1_7", "욕심 많은 신년 운세"],
    ["round1_8", "별자리 그리기"],
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
        background: "#000000",
        color: "#0D72E6",
      }}
    >
      <Typo h2>안내</Typo>
      <Itemize>
        <li>
          <Link href="/2023/notice/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2023/notice/tool">개발 도구 사용 안내</Link>
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
