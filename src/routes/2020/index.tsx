import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  PostLayout,
  ProblemList,
  ProblemListContainer,
  themes,
} from "components";

const year = 2020;

export const problems = {
  preliminaries: [
    ["2020_online_1", "[연습문제] 최대구간합"],
    ["2020_online_2", "[연습문제] 돌 밀기"],
    ["2020_online_3", "[연습문제] UP & DOWN"],
    ["2020_online_4", "S OR T"],
    ["2020_online_5", "카트라이더 별 모으기"],
    ["2020_online_6", "스피드전 할까 아이템전 할까"],
    ["2020_online_7", "실력별 매칭"],
    ["2020_online_8", "우승자 찾기"],
    ["2020_online_9", "도토리를 주워라"],
    ["2020_online_10", "난센스 퀴즈"],
    ["2020_online_11", "이어달리기"],
    ["2020_online_12", "몰이 사냥"],
    ["2020_online_13", "탐험 로봇"],
    ["2020_online_14", "격자 게임"],
    ["2020_online_15", "사회적 거리두기"],
    ["2020_online_16", "물풍선 아티스트"],
    ["2020_online_17", "공격 상황 시뮬레이션"],
    ["2020_online_18", "메이플 월드 라이딩 여행"],
    ["2020_online_19", "덕분에 챌린지"],
    ["2020_online_20", "좋은 카트 만들기"],
    ["2020_online_21", "유저 그룹 나누기"],
    ["2020_online_22", "서비스 센터"],
    ["2020_online_23", "물풍선 테러리스트"],
  ],
  finals1214: [
    ["2020_final_1", "오델로"],
    ["2020_final_2", "잠꾸러기"],
    ["2020_final_3", "몰이 사냥 2"],
    ["2020_final_4", "책 정리 로봇"],
    ["2020_final_6", "물풍선 테스트"],
  ],
  finals1519: [
    ["2020_final_3", "몰이 사냥 2"],
    ["2020_final_4", "책 정리 로봇"],
    ["2020_final_5", "숨겨진 층"],
    ["2020_final_7", "매그너스의 고민"],
    ["2020_final_6", "물풍선 테스트"],
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

export const Route = createFileRoute("/2020/")({
  component: List,
});
