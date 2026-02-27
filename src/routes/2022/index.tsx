import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList, ProblemListContainer } from "components";

const year = 2022;

export const problems = {
  round1: [
    ["round1_p1", "[연습문제] 레이스 기록 검증"],
    ["round1_p2", "[연습문제] 페인트 칠하기"],
    ["round1_1", "인류의 적 모기 퇴치"],
    ["round1_2", "카트라이더 보드게임"],
    ["round1_3", "뒤집기"],
    ["round1_4", "카트 제작"],
    ["round1_5", "달팽이"],
    ["round1_6", "바텐더"],
    ["round1_7", "MBTI 궁합을 이용한 조 구성"],
    ["round1_8", "드리프트 주행"],
  ],
  round2a: [
    ["round2a_1", "사진작가"],
    ["round2a_2", "리본"],
    ["round2a_3", "로봇청소기"],
    ["round2a_4", "물고기 양식장"],
  ],
  round2b: [
    ["round2b_1", "비트문자열"],
    ["round2b_2", "정수 놀이"],
    ["round2b_3", "물풍선 애널리스트"],
    ["round2b_4", "멘토링 시스템"],
  ],
  finals1214: [
    ["final_1", "조약돌 순서"],
    ["final_2", "짝 맞는 문자열"],
    ["final_3", "빙고"],
    ["final_4", "야찌"],
    ["final_5", "삼각"],
  ],
  finals1519: [
    ["final_3", "빙고"],
    ["final_4", "야찌"],
    ["final_6", "덧셈 프로그램"],
    ["final_7", "적절한 점"],
    ["final_8", "지름길"],
  ],
} as const;

const List = () => {
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

export const Route = createFileRoute("/2022/")({
  component: List,
});
