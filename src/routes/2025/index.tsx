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

const year = 2025;

export const problems = {
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
  round2b: [
    ["round2b_1", "버블"],
    ["round2b_2", "트리의 모든 부분 트리의 크기 합"],
    ["round2b_3", "로봇들의 모험"],
    ["round2b_4", "토벤머리 용사의 스타포스 강화"],
  ],
  finals1214: [
    ["final_1", "기호"],
    ["final_2", "Connexion"],
    ["final_3", "돌 무더기 게임"],
    ["final_4", "개미"],
    ["final_5", "마방진 만들기"],
  ],
  finals1519: [
    ["final_2", "Connexion"],
    ["final_4", "개미"],
    ["final_6", "물 뿌리기"],
    ["final_7", "거래"],
    ["final_8", "편집 거리"],
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

export const Route = createFileRoute("/2025/")({
  component: List,
});
