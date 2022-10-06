import { Itemize, Typo } from "@solved-ac/ui-react";
import { Enumerate, PostLayout } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2017;

const problems = {
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
  finals: [],
};

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#fff100",
        color: "#622d91",
      }}
    >
      <Typo h2>안내</Typo>
      <Itemize>
        <li>
          <Link href="/2017/rule">대회 규칙</Link>
        </li>
        <li>
          <Link href="/2017/tool">개발 도구 사용 안내</Link>
        </li>
      </Itemize>
      <Typo h2>예선 스테이지 1</Typo>
      <Enumerate>
        {problems.stage1.map(([id, title]) => (
          <li key={id}>
            <Link href={`/${year}/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Enumerate>
      <Typo h2>예선 스테이지 2</Typo>
      <Enumerate>
        {problems.stage2.map(([id, title]) => (
          <li key={id}>
            <Link href={`/${year}/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Enumerate>
      <Typo h2>예선 스테이지 3</Typo>
      <Enumerate>
        {problems.stage3.map(([id, title]) => (
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
