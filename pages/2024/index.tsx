import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2024;


const problems = {
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
  round2a: [ /*
    ["round2a_1", "오솔길"],
    ["round2a_2", "주사위 대체"],
    ["round2a_3", "창수의 고민"],
    ["round2a_4", "편지"],
  */ ],
  round2b: [ /*
    ["round2b_1", "괄호"],
    ["round2b_2", "반복"],
    ["round2b_3", "장로 스탄의 부탁"],
    ["round2b_4", "쓸어담기"],
  */ ],
  finals1214: [ /*
    ["final_1", "영국 우편번호"],
    ["final_2", "폭죽"],
    ["final_3", "단조"],
    ["final_4", "오름차순"],
    ["final_5", "레이저"],
  */ ],
  finals1519: [ /*
    ["final_6", "포탈"],
    ["final_3", "단조"],
    ["final_4", "오름차순"],
    ["final_5", "레이저"],
    ["final_7", "도로망 건설"],
  */ ],
} as const;

const List: NextPage = (props) => {
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
          <Link href="/2024/notice/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2024/notice/tool">개발 도구 사용 안내</Link>
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

export default List;