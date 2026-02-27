import "katex/dist/katex.min.css";
import { useMemo } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { evaluateSync, nodeTypes, type UseMdxComponents } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "./components";
 
const REMARK_PLUGINS = [remarkGfm, remarkMath];
const REHYPE_PLUGINS = [rehypeKatex];

export const MDXViewer = ({ code }: {
  code: string;
}) => {
  const module = useMemo(() => evaluateSync(code, {
    rehypePlugins: REHYPE_PLUGINS,
    remarkPlugins: REMARK_PLUGINS,
    Fragment,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jsx,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jsxs,
  }), [code]);

  const Result = module?.default;
  return <Result components={mdxComponents} />;
};
