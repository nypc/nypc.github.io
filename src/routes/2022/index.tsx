import { Separator } from "@chakra-ui/react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Itemize,
  PostLayout,
  ProblemList,
  ProblemListContainer,
  SectionHeading,
  themes,
} from "components";

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
      theme={themes[year]}
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
        Round 1
      </SectionHeading>
      <ProblemList year={year} problems={problems.round1} />
      <Separator marginBlock="8" borderColor="border" />
      <SectionHeading as="h2" size="2xl" marginTop="0" marginBottom="4">
        Round 2
      </SectionHeading>
      <ProblemListContainer>
        <div>
          <SectionHeading as="h3" size="xl" marginTop="8" marginBottom="2">
            2-A
          </SectionHeading>
          <ProblemList year={year} problems={problems.round2a} />
        </div>
        <div>
          <SectionHeading as="h3" size="xl" marginTop="8" marginBottom="2">
            2-B
          </SectionHeading>
          <ProblemList year={year} problems={problems.round2b} />
        </div>
      </ProblemListContainer>
      <Separator marginBlock="8" borderColor="border" />
      <SectionHeading as="h2" size="2xl" marginTop="0" marginBottom="4">
        본선
      </SectionHeading>
      <ProblemListContainer>
        <div>
          <SectionHeading as="h3" size="xl" marginTop="8" marginBottom="2">
            본선 &mdash; 1214
          </SectionHeading>
          <ProblemList year={year} problems={problems.finals1214} />
        </div>
        <div>
          <SectionHeading as="h3" size="xl" marginTop="8" marginBottom="2">
            본선 &mdash; 1519
          </SectionHeading>
          <ProblemList year={year} problems={problems.finals1519} />
        </div>
      </ProblemListContainer>
    </PostLayout>
  );
};

export const Route = createFileRoute("/2022/")({
  component: List,
});
