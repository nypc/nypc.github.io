import { Typo } from "@solved-ac/ui-react";
import { Enumerate, PostLayout } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2016;

const problems = {
  preliminaries: [
    ["daramg", "넥슨은 다람쥐를 뿌려라"],
    ["validdeck", "마비노기 듀얼: 올바른 덱인가요?"],
    ["laserlamp", "전등 켜기"],
  ],
  finals: [
    ["spinandslide", "돌리고 밀고"],
    ["matchstick1", "성냥개비로 그린 수식: 하나만"],
    ["matchstick2", "성냥개비로 그린 수식: 도전"],
    ["farmgame1_easy", "나만의 농장 운영하기: 심고 수확하기"],
    ["farmgame2_easy", "나만의 농장 운영하기: 밭 업그레이드"],
  ],
};

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#fff001",
        color: "#1d1d1b",
      }}
    >
      <Typo h2>예선</Typo>
      <Enumerate>
        {problems.preliminaries.map(([id, title]) => (
          <li key={id}>
            <Link href={`/${year}/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Enumerate>
      <Typo h2>본선</Typo>
      <Enumerate>
        {problems.finals.map(([id, title]) => (
          <li key={id}>
            <Link href={`/${year}/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Enumerate>
    </PostLayout>
  );
};

export default List;
