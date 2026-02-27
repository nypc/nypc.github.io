import {
  Cell,
  Paragraph,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typo,
  solvedThemes,
} from "@solved-ac/ui-react";
import { type UseMdxComponents } from "@mdx-js/mdx";
import { IconCheck, IconTriangle, IconX } from "@tabler/icons-react";
import { Blockquote } from "./Blockquote";
import { Code } from "./Code";
import { Examples, IO, Input, Output } from "./Example";
import { Figure } from "./Figure";
import { LanguageDetails } from "./LanguageDetails";
import { LanguageExample } from "./languageExample";
import { Itemize, Enumerate } from "./List";
import { PostLayout } from "./PostLayout";
import { ProblemList } from "./ProblemList";
import { Simulators } from "./Simulators";
import { Solution } from "./Solution";
import { Subtask } from "./Subtask";
import { YouTube } from "./YouTube";

export const mdxComponents: ReturnType<UseMdxComponents> = {
  h1: ({ ref, ...props }) => (
    <Typo
      h1
      style={{
        padding: "0.5em 0",
        borderBottom: solvedThemes.light.styles.border(),
      }}
      {...props}
    />
  ),
  h2: ({ ref, ...props }) => (
    <Typo
      h2
      style={{
        padding: "0.5em 0",
        borderBottom: solvedThemes.light.styles.border(),
      }}
      {...props}
    />
  ),
  h3: ({ ref, ...props }) => (
    <Typo h3 {...props} />
  ),
  h4: ({ ref, ...props }) => (
    <Typo h4 {...props} />
  ),
  h5: ({ ref, ...props }) => (
    <Typo h5 {...props} />
  ),
  h6: ({ ref, ...props }) => (
    <Typo h6 {...props} />
  ),
  p: ({ ref, ...props }) => (
    <Paragraph {...props} />
  ),
  code: ({ ref, ...props }) => (
    <Code {...props} />
  ),
  ul: ({ ref, ...props }) => (
    <Itemize {...props} />
  ),
  ol: ({ ref, ...props }) => (
    <Enumerate {...props} />
  ),
  table: ({ ref, ...props }) => (
    <TableContainer>
      <Table padding="dense" style={{ margin: "0 auto" }} {...props} />
    </TableContainer>
  ),
  tbody: ({ ref, ...props }) => (
    <TableBody {...props} />
  ),
  thead: ({ ref, ...props }) => (
    <TableHead {...props} />
  ),
  tr: ({ ref, ...props }) => (
    <Row {...props} />
  ),
  td: ({ ref, ...props }) => (
    <Cell {...props} />
  ),
  th: ({ ref, ...props }) => (
    <Cell header {...props} />
  ),
  blockquote: ({ ref, ...props }) => (
    <Blockquote {...props} />
  ),
  Blockquote,
  Code,
  Examples,
  IO,
  Input,
  Output,
  Figure,
  LanguageDetails,
  LanguageExample,
  Itemize,
  Enumerate,
  PostLayout,
  ProblemList,
  Simulators,
  Solution,
  Subtask,
  YouTube,
  IconTriangle,
  IconCheck,
  IconX,
};
