import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { PostLayout, ProblemList, ProblemListContainer } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2019;

const problems = {
  preliminaries: [
    ["2019_online_1", "[연습문제] 비밀번호 검사"],
    ["2019_online_2", "[연습문제] 숫자 인식하기"],
    ["2019_online_3", "최대 HP"],
    ["2019_online_4", "요리 제작"],
    ["2019_online_5", "ID 확인"],
    ["2019_online_6", "우산"],
    ["2019_online_7", "달팽이 게임"],
    ["2019_online_8", "마비노기 색상표"],
    ["2019_online_9", "약수"],
    ["2019_online_10", "마비노기 인벤토리"],
    ["2019_online_11", "수도관"],
    ["2019_online_12", "메이플스토리 연주회"],
    ["2019_online_13", "넥슨 사진관"],
    ["2019_online_14", "카트라이더 경험치"],
    ["2019_online_15", "가위 바위 보"],
    ["2019_online_16", "신호등"],
    ["2019_online_17", "돌 밀기"],
    ["2019_online_18", "빨간, 파란 점 연결"],
    ["2019_online_19", "회 문화의 회문화"],
    ["2019_online_20", "VIP 쿠폰"],
    ["2019_online_21", "메이플스토리 파티 구성"],
    ["2019_online_22", "카트 발사"],
  ],
  finals1214: [
    ["2019_final_1", "암호 해독 (1214)"],
    ["2019_final_2", "소수의 합"],
    ["2019_final_3", "차고"],
    ["2019_final_5", "회의"],
    ["2019_final_4", "배찌의 대청소"],
  ],
  finals1519: [
    ["2019_final_6", "팔씨름"],
    ["2019_final_7", "암호 해독 (1519)"],
    ["2019_final_8", "강화"],
    ["2019_final_9", "칠하기"],
    ["2019_final_4", "배찌의 대청소"],
  ],
} as const;

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#7F3493",
        color: "#7CCCC1",
      }}
    >
      <Typo h2>안내</Typo>
      <Itemize>
        <li>
          <Link href="/2019/notice/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2019/notice/tool">개발 도구 사용 안내</Link>
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
