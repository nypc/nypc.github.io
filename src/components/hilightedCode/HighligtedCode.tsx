import { useTheme } from "@emotion/react";
import { common, createLowlight } from "lowlight";
import { useMemo } from "react";
import { Code } from "../Code";
import { mapWithDepth } from "./utils";

interface Props {
  language?: string;
  children: string;
}

export const HighlightedCode = ({ children, language }: Props) => {
  const theme = useTheme();

  const tree = useMemo(() => {
    const lowlight = createLowlight(common);
    return lowlight.highlight(language || "text", children.trim());
  }, [children, language]);

  return (
    <pre>
      <Code className={["hljs", `language-${language || "text"}`].join(" ")}>
        {tree.children.map(mapWithDepth(0))}
      </Code>
    </pre>
  );
};
