import { css, Global, ThemeProvider, type Theme } from "@emotion/react";
import {
  SolvedGlobalStyles,
  solvedThemes,
} from "@solved-ac/ui-react";
import React from "react";

const theme: Theme = {
  ...solvedThemes.light,
  typography: {
    ...solvedThemes.light.typography,
    code: '"IBM Plex Mono", "Pretendard", monospace',
  },
};

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <>
    <Global
      styles={css`
        span.katex {
          font-size: 1.1em;
        }
        .katex span.hangul_fallback {
          font-size: 90.9%;
          font-family: ${solvedThemes.light.typography.paragraph};
        }
        .math-display {
          overflow-x: auto;
        }
        .tabler-icon {
          vertical-align: middle;
          width: 1.2em;
          height: 1.2em;
        }
      `}
    />
    <ThemeProvider theme={theme}>
      <SolvedGlobalStyles />
      {children}
    </ThemeProvider>
  </>
);
