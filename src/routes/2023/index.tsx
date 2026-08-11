import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Itemize,
  PostLayout,
  ProblemList,
  ProblemListContainer,
  SectionHeading,
  themes,
} from "components";

const year = 2023;

export const problems = {
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
    ["round2a_1", "오솔길"],
    ["round2a_2", "주사위 대체"],
    ["round2a_3", "창수의 고민"],
    ["round2a_4", "편지"],
  ],
  round2b: [
    ["round2b_1", "괄호"],
    ["round2b_2", "반복"],
    ["round2b_3", "장로 스탄의 부탁"],
    ["round2b_4", "쓸어담기"],
  ],
  finals1214: [
    ["final_1", "영국 우편번호"],
    ["final_2", "폭죽"],
    ["final_3", "단조"],
    ["final_4", "오름차순"],
    ["final_5", "레이저"],
  ],
  finals1519: [
    ["final_6", "포탈"],
    ["final_3", "단조"],
    ["final_4", "오름차순"],
    ["final_5", "레이저"],
    ["final_7", "도로망 건설"],
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
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
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
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        Round 1
      </SectionHeading>
      <ProblemList year={year} problems={problems.round1} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        Round 2
      </SectionHeading>
      <ProblemListContainer>
        <div>
          <SectionHeading as="h3" size="xl" textAlign="center" marginTop="8" marginBottom="2">
            2-A
          </SectionHeading>
          <ProblemList year={year} problems={problems.round2a} />
        </div>
        <div>
          <SectionHeading as="h3" size="xl" textAlign="center" marginTop="8" marginBottom="2">
            2-B
          </SectionHeading>
          <ProblemList year={year} problems={problems.round2b} />
        </div>
      </ProblemListContainer>
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        본선
      </SectionHeading>
      <ProblemListContainer>
        <div>
          <SectionHeading as="h3" size="xl" textAlign="center" marginTop="8" marginBottom="2">
            본선 &mdash; 1214
          </SectionHeading>
          <ProblemList year={year} problems={problems.finals1214} />
        </div>
        <div>
          <SectionHeading as="h3" size="xl" textAlign="center" marginTop="8" marginBottom="2">
            본선 &mdash; 1519
          </SectionHeading>
          <ProblemList year={year} problems={problems.finals1519} />
        </div>
      </ProblemListContainer>
    </PostLayout>
  );
};

export const Route = createFileRoute("/2023/")({
  component: List,
});
