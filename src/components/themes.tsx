export interface ThemeItem {
  background: string;
  color: string;
  codebattle?: boolean;
}

export const themes: Record<number, ThemeItem> = {
  // 아래 색은 해당 년도 NYPC 포스터를 참고한다.
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
    background: "#1A1A1A",
    color: "#FFFFFF",
  },
  2024: {
    background: "#181D43",
    color: "#FFFFFF",
  },
  2025: {
    background: "#0086FF",
    color: "#FFFFFF",
    codebattle: true,
  },
};
