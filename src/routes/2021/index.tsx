import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  PostLayout,
  ProblemList,
  ProblemListContainer,
  themes,
} from "components";

const year = 2021;

export const problems = {
  preliminaries: [
    ["2021_online_p1", "[연습문제] 최대구간합"],
    ["2021_online_p2", "[연습문제] 도토리를 주워라"],
    ["2021_online_1", "계단"],
    ["2021_online_2", "레이스 기록 검증"],
    ["2021_online_3", "근무표 짜기"],
    ["2021_online_4", "파티"],
    ["2021_online_5", "페인트 칠하기"],
    ["2021_online_6", "폭탄 터트리기"],
    ["2021_online_7", "루트가 많은 트리?"],
    ["2021_online_8", "영역 나누기"],
    ["2021_online_9", "K-좀비"],
    ["2021_online_10", "다양성이 힘이다"],
    ["2021_online_11", "원룸 구하기"],
    ["2021_online_12", "생존 신호"],
    ["2021_online_13", "선물 상자"],
    ["2021_online_14", "파스칼 삼각형"],
    ["2021_online_15", "낙하 데미지"],
  ],
  finals1214: [
    ["2021_final_1", "7-세그먼트 표시 장치"],
    ["2021_final_2", "게임"],
    ["2021_final_3", "경험과 행운"],
    ["2021_final_4", "하노이 타워"],
    ["2021_final_5", "꿀벌"],
  ],
  finals1519: [
    ["2021_final_2", "게임"],
    ["2021_final_6", "주식 투자"],
    ["2021_final_7", "연속 공격"],
    ["2021_final_8", "수중 정원"],
    ["2021_final_9", "무지성 로봇청소기"],
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

export const Route = createFileRoute("/2021/")({
  component: List,
});
