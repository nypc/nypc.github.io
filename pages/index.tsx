import styled from "@emotion/styled";
import { Card, Typo } from "@solved-ac/ui-react";
import { PostLayout } from "components";
import type { NextPage } from "next";

export const themes = {
  2016: {
    background: "#fff001",
    color: "#1d1d1b",
  },
  2017: {
    background: "#fff100",
    color: "#622d91",
  },
  2018: {
    background: "#56C8C6",
    color: "#613D95",
  },
  2019: {
    background: "#7F3493",
    color: "#7CCCC1",
  },
  2020: {
    background: "#000000",
    color: "#12CE94",
  },
  2021: {
    background: "#0E1F33",
    color: "#31D7C9",
  },
  2022: {
    background: "#000000",
    color: "#0D72E6",
  },
  2023: {
    background: "#000000",
    color: "#0D72E6",
  },  
  2024: {
    background: "#000000",
    color: "#0D72E6",
  },    
};

const YearContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 16px;
`;

const Year = styled(Card)`
  text-align: center;
  padding: 32px 0;
`;

const Home: NextPage = () => {
  return (
    <PostLayout
      root
      meta={{
        title: `NYPC 아카이브`,
        subtitle: "역대 NYPC 문제들을 모아 두었습니다.",
      }}
      theme={
        Object.entries(themes).sort((a, b) => b[0].localeCompare(a[0]))[0][1]
      }
    >
      <YearContainer>
        {Object.entries(themes)
          .sort((a, b) => b[0].localeCompare(a[0]))
          .map(([year, { background, color }]) => (
            <Year
              key={year}
              style={{
                color,
              }}
              as="a"
              clickable
              href={`/${year}`}
              backgroundColor={background}
            >
              <Typo h2 no-margin>
                NYPC {year}
              </Typo>
              <Typo description>
                제 {+year - 2015}회 넥슨 청소년 프로그래밍 챌린지
              </Typo>
            </Year>
          ))}
      </YearContainer>
    </PostLayout>
  );
};

export default Home;
