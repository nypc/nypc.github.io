export interface ThemeItem {
  background: string;
  color: string;
  /**
   * Explicit accent, overriding the pick made from `background`/`color`.
   *
   * The poster pair is a background/foreground combination, which usually
   * carries the year's identity. Where it doesn't — a black-and-white poster
   * whose brand colour lives elsewhere — the year states its accent here.
   */
  accent?: string;
  codebattle?: boolean;
}

export const themes: Record<number, ThemeItem> = {
  // 아래 색은 해당 년도 NYPC 포스터를 참고한다.
  // `background`는 포스터의 바탕색, `color`는 포스터의 강조색이다.
  // (2023·2024는 본문 글자색인 흰색이 잘못 들어가 있어 포스터에서 다시 추출했다.)
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
    // Near-black ground with violet and mint 3D pipework; violet dominates.
    background: "#1A1A1A",
    color: "#5D2599",
  },
  2024: {
    // Navy ground with magenta and cyan isometric forms; magenta dominates.
    background: "#181D43",
    color: "#CD3EA6",
  },
  2025: {
    background: "#0086FF",
    color: "#FFFFFF",
    codebattle: true,
  },
  2026: {
    background: "#191716",
    color: "#FFFFFF",
    // The 2026 poster is black on white, so the pair carries no hue. This is
    // the red new.nypc.co.kr uses for its GNB hover state — the site's only
    // interactive brand colour (items rest at #FAFAF9 and hover to this).
    accent: "#F22717",
  },
};
