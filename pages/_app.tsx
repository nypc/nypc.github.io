import { ThemeProvider } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import {
  Paragraph,
  SolvedGlobalStyles,
  solvedThemes,
  Typo
} from "@solved-ac/ui-react";
import { Code } from "components";
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
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
