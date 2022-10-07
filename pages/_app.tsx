import { css, Global, ThemeProvider } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import {
  Cell,
  Paragraph,
  Row,
  SolvedGlobalStyles,
  solvedThemes,
  Table,
  TableBody,
  TableHead,
  Typo
} from "@solved-ac/ui-react";
import { Blockquote, Code, Enumerate, Itemize } from "components";
import { MDXComponents } from "mdx/types";
import type { AppProps } from "next/app";

const components: MDXComponents = {
  h1: ({ ref, ...props }) => <Typo h1 {...props} />,
  h2: ({ ref, ...props }) => <Typo h2 {...props} />,
  h3: ({ ref, ...props }) => <Typo h3 {...props} />,
  h4: ({ ref, ...props }) => <Typo h4 {...props} />,
  h5: ({ ref, ...props }) => <Typo h5 {...props} />,
  h6: ({ ref, ...props }) => <Typo h6 {...props} />,
  p: ({ ref, ...props }) => <Paragraph {...props} />,
  code: ({ ref, ...props }) => <Code {...props} />,
  ul: ({ ref, ...props }) => <Itemize {...props} />,
  ol: ({ ref, ...props }) => <Enumerate {...props} />,
  table: ({ ref, ...props }) => <Table {...props} />,
  tbody: ({ ref, ...props }) => <TableBody {...props} />,
  thead: ({ ref, ...props }) => <TableHead {...props} />,
  tr: ({ ref, ...props }) => <Row {...props} />,
  td: ({ ref, ...props }) => <Cell {...props} />,
  th: ({ ref, ...props }) => <Cell header {...props} />,
  blockquote: ({ ref, ...props }) => <Blockquote {...props} />,
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
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
        `}
      />
      <MDXProvider components={components}>
        <ThemeProvider theme={solvedThemes.light}>
          <SolvedGlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    </>
  );
};

export default MyApp;
