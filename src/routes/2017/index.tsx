import { Link, createFileRoute } from "@tanstack/react-router";
import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer, themes } from "components";

const year = 2017;

export const problems = {
  stage1: [
    ["2017_online_1-1", "파리의 이동 거리"],
    ["2017_online_1-2", "캠프파이어"],
    ["2017_online_1-3", "은는이가을를: 조사 처리"],
    ["2017_online_1-4", "로드러너 1 경비로봇 인공지능 제작"],
    ["2017_online_1-5", "기숙사 방 배정"],
  ],
  stage2: [
    ["2017_online_2-1", "알사탕"],
    ["2017_online_2-2", "아이템 거래"],
    ["2017_online_2-3", "벽돌깨기"],
    ["2017_online_2-4", "개구리 점프"],
    ["2017_online_2-5", "대포"],
  ],
  stage3: [
    ["2017_online_3-1", "파란색 영역"],
    ["2017_online_3-2", "타일 맞추기"],
    ["2017_online_3-3", "알사탕 2"],
    ["2017_online_3-4", "개미와 보도 블록"],
    ["2017_online_3-5", "한꺼번에 길 찾기"],
  ],
  finals1214: [
    ["2017_final_a", "정사각형"],
    ["2017_final_b", "모자뜨기"],
    ["2017_final_c", "물풍선"],
    ["2017_final_d", "선 맞춤"],
    ["2017_final_f", "테트리스"],
  ],
  finals1519: [
    ["2017_final_b", "모자뜨기"],
    ["2017_final_c", "물풍선"],
    ["2017_final_e", "돌도끼 만들기"],
    ["2017_final_f", "테트리스"],
    ["2017_final_g", "길드"],
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
          <Link to="/2017/notice/rule">대회 규칙</Link>
        </li>
        <li>
          <Link to="/2017/notice/tool">개발 도구 사용 안내</Link>
        </li>
      </Itemize>
      <Divider />
      <Typo h2 no-margin>
        예선
      </Typo>
      <ProblemListContainer>
        <div>
          <Typo h3>예선 스테이지 1</Typo>
          <ProblemList year={year} problems={problems.stage1} />
        </div>
        <div>
          <Typo h3>예선 스테이지 2</Typo>
          <ProblemList year={year} problems={problems.stage2} />
        </div>
        <div>
          <Typo h3>예선 스테이지 3</Typo>
          <ProblemList year={year} problems={problems.stage3} />
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

export const Route = createFileRoute('/2017/')({
  component: List,
});
