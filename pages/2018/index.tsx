import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2018;

const problems = {
  preliminaries: [
    ["2018_online_1", "[연습문제] 78 89 80 67"],
    ["2018_online_2", "[연습문제] HELLO NEXON"],
    ["2018_online_3", "아이템 구매"],
    ["2018_online_4", "승리팀 찾기"],
    ["2018_online_5", "줄임말"],
    ["2018_online_6", "우물왕 김배찌"],
    ["2018_online_7", "최고의 동접 구간을 찾아라"],
    ["2018_online_8", "버튼 게임"],
    ["2018_online_9", "이진 트리"],
    ["2018_online_10", "캐릭터 경험치"],
    ["2018_online_11", "전염병 역학 조사"],
    ["2018_online_12", "강력한 한방, 필살기"],
    ["2018_online_13", "회전 격자판"],
    ["2018_online_14", "블록숫자"],
    ["2018_online_15", "Flood-it"],
    ["2018_online_16", "쉴드 생성기"],
    ["2018_online_17", "퍼즐 콤보"],
    ["2018_online_18", "피파온라인 드리블 튜토리얼"],
    ["2018_online_19", "종이접기"],
    ["2018_online_20", "봇 탐지"],
    ["2018_online_21", "금 줄 게임"],
    ["2018_online_22", "보라색 영역"],
  ],
  finals1214: [
    ["2018_final_1", "뒤집기"],
    ["2018_final_2", "세 수의 합"],
    ["2018_final_3", "레이저 클레이 사격"],
    ["2018_final_4", "블록 게임"],
    ["2018_final_5", "청소기 로봇"],
  ],
  finals1519: [
    ["2018_final_2", "세 수의 합"],
    ["2018_final_6", "저상 버스 문"],
    ["2018_final_7", "색종이"],
    ["2018_final_5", "청소기 로봇"],
    ["2018_final_8", "울타리"],
  ],
} as const;

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#56C8C6",
        color: "#613D95",
      }}
    >
      <Typo h2>안내</Typo>
      <Itemize>
        <li>
          <Link href="/2018/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2018/tool">개발 도구 사용 안내</Link>
        </li>
      </Itemize>
      <Divider />
      <Typo h2 no-margin>
        예선
      </Typo>
      <ProblemList year={year} problems={problems.preliminaries} />
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
