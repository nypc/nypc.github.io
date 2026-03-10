import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList, ProblemListContainer } from "components";

const year = 2024;

export const problems = {
  round1: [
    ["round1_p1", "[연습문제] 메이플스토리 새로운 직업 고르기"],
    ["round1_p2", "[연습문제] 별자리 그리기"],
    ["round1_1", "초밥"],
    ["round1_2", "무한 길이 물풍선"],
    ["round1_3", "커닝시티 헤어샵"],
    ["round1_4", "오르락 내리락"],
    ["round1_5", "게임"],
    ["round1_6", "어디로 피해야하지?"],
    ["round1_7", "골드리치의 비밀 금고"],
    ["round1_8", "브레이크가 고장난 카트"],
    ["round1_9", "1-2-3 퍼즐"],
  ],
  round2a: [
    ["round2a_1", "장비 교체"],
    ["round2a_2", "루시드의 레이저 공격을 피해라!"],
    ["round2a_3", "기차 여행"],
    ["round2a_4", "트리 읽기"],
  ],
  round2b: [
    ["round2b_1", "순열로 고치기"],
    ["round2b_2", "계단"],
    ["round2b_3", "점 짝짓기"],
    ["round2b_4", "합주 공연"],
  ],
  finals1214: [
    ["final_1", "하이퍼 버닝"],
    ["final_2", "마법의 룬 패턴 찾기"],
    ["final_3", "라운드 기록 복원하기"],
    ["final_4", "훈련 프로그램 I"],
    ["final_5", "엘리니아 재건"],
  ],
  finals1519: [
    ["final_3", "라운드 기록 복원하기"],
    ["final_6", "던전 디자인"],
    ["final_7", "붐힐 마을 경비 활동"],
    ["final_8", "훈련 프로그램 II"],
    ["final_9", "타일 마스터의 시련"],
  ],
} as const;

const List = () => {
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

export const Route = createFileRoute("/2024/")({
  component: List,
});
