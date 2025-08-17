import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2025;

const problems = {
  round1: [
    ["round1_p1", "[연습문제] 순열로 고치기"],
    ["round1_p2", "[연습문제] 1-2-3 퍼즐"],
    ["round1_1", "버튼"],
    ["round1_2", "같이 던전 도실래요?"],
    ["round1_3", "등차수열"],
    ["round1_4", "이모티콘 출력"],
    ["round1_5", "잃어버린 섬 여행"],
    ["round1_6", "같은 자리 같은 값"],
    ["round1_7", "최강 장비 세트"],
    ["round1_8", "최대한 빠르게"],
    ["round1_9", "𝘒주년"],
    ["round1_10", "블루홀 다이빙 챌린지"],
  ],
  round2a: [
    ["round2a_1", "중복"],
    ["round2a_2", "완벽한 음악 연주 시각 찾기"],
    ["round2a_3", "완전한 승리"],
    ["round2a_4", "청소"],
  ],
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
        background: "#0086FF",
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
      </ProblemListContainer>
      <Divider />
    </PostLayout>
  );
};

export default List;
