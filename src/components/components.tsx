import { Box } from "@chakra-ui/react";
import { IconCheck, IconTriangle, IconX } from "@tabler/icons-react";
import { accentSubtle } from "@/theme";
import { Blockquote } from "./Blockquote";
import { Code } from "./Code";
import { Details } from "./Details";
import { Examples, IO, Input, Output } from "./Example";
import { Figure } from "./Figure";
import { LanguageDetails } from "./LanguageDetails";
import { Enumerate, Itemize } from "./List";
import { LanguageExample } from "./languageExample";
import { PostLayout } from "./PostLayout";
import { ProblemList } from "./ProblemList";
import { SectionHeading } from "./SectionHeading";
import { Simulators } from "./Simulators";
import { Solution } from "./Solution";
import { Subtask } from "./Subtask";
import { YouTube } from "./YouTube";
import type { UseMdxComponents } from "@mdx-js/mdx";

/**
 * Typography follows the @nypc-home/mdx theme used by new.nypc.co.kr: 24/20px
 * bold top-level headings separated by a rule, 16px semibold sub-headings, and
 * 16px/1.5 body copy set a step softer than the headings.
 *
 * Two pieces of that package are deliberately not carried over, because they
 * serve a different kind of page:
 *
 * - Counter-based heading numbers. The archive's statements already number
 *   their own sections (`## 예제 1`, `## 예제 2`), so automatic numbering would
 *   double up and renumber every problem's sections.
 * - The TOC/scroll-margin machinery, which offsets anchors under a fixed GNB
 *   that this site does not have.
 */

/**
 * Top-level sections are separated by a rule; sub-headings stay plain. The rule
 * matches the neutral hairline under the page header — tinting it with the year
 * accent put a coloured line under every section, which read as noise.
 */
const ruledHeading = {
  fontWeight: "700",
  lineHeight: "1.5",
  color: "fg",
  marginTop: "11",
  marginBottom: "4",
  paddingBottom: "3",
  borderBottomWidth: "1px",
  borderBottomColor: "border",
} as const;

const subHeading = {
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "1.5",
  color: "fg",
} as const;

export const mdxComponents: ReturnType<UseMdxComponents> = {
  h1: ({ ref, ...props }) => (
    <SectionHeading as="h1" fontSize="24px" {...ruledHeading} {...props} />
  ),
  h2: ({ ref, ...props }) => (
    <SectionHeading as="h2" fontSize="20px" {...ruledHeading} {...props} />
  ),
  h3: ({ ref, ...props }) => (
    <SectionHeading as="h3" {...subHeading} marginTop="7" marginBottom="4" {...props} />
  ),
  h4: ({ ref, ...props }) => (
    <SectionHeading as="h4" {...subHeading} marginTop="4" marginBottom="2" {...props} />
  ),
  h5: ({ ref, ...props }) => (
    <SectionHeading
      as="h5"
      {...subHeading}
      fontSize="15px"
      marginTop="4"
      marginBottom="2"
      {...props}
    />
  ),
  h6: ({ ref, ...props }) => (
    <SectionHeading
      as="h6"
      {...subHeading}
      fontSize="15px"
      marginTop="4"
      marginBottom="2"
      {...props}
    />
  ),

  p: ({ ref, ...props }) => (
    <Box as="p" fontSize="16px" lineHeight="1.5" color="fg.body" marginBottom="5" {...props} />
  ),
  strong: ({ ref, ...props }) => (
    <Box as="strong" display="inline" fontWeight="700" color="fg" {...props} />
  ),
  hr: ({ ref, ...props }) => (
    <Box
      as="hr"
      marginBlock="6"
      border="none"
      borderTopWidth="1px"
      borderTopColor="border.emphasized"
      {...props}
    />
  ),
  a: ({ ref, href, children, ...props }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
  // No `img` override. The official theme styles images as centred blocks, but
  // this archive uses `Figure` for block imagery (241 uses) and reserves bare
  // `<img>` for inline glyphs inside prose — coloured tiles, small icons — that
  // carry their own `vertical-align` and pixel widths. Forcing `display: block`
  // on those tears the sentence apart.

  code: ({ ref, ...props }) => <Code {...props} />,
  ul: ({ ref, ...props }) => <Itemize {...props} />,
  ol: ({ ref, ...props }) => <Enumerate {...props} />,
  li: ({ ref, ...props }) => (
    <Box as="li" fontSize="16px" lineHeight="1.5" color="fg.body" marginBottom="1" {...props} />
  ),

  // Tables keep the archive's centred, content-width layout — most statements
  // use small lookup tables that full-bleed stretching would distort — with the
  // official theme's bordered cell styling.
  table: ({ ref, ...props }) => (
    <Box overflowX="auto" marginBlock="4">
      <Box
        as="table"
        margin="0 auto"
        width="auto"
        fontSize="15px"
        lineHeight="1.6"
        borderCollapse="collapse"
        {...props}
      />
    </Box>
  ),
  th: ({ ref, ...props }) => (
    <Box
      as="th"
      paddingInline="3"
      paddingBlock="2"
      borderWidth="1px"
      borderColor="border.emphasized"
      bg={accentSubtle}
      fontWeight="400"
      fontSize="16px"
      lineHeight="1.5"
      color="fg.muted"
      textAlign="left"
      {...props}
    />
  ),
  td: ({ ref, ...props }) => (
    <Box
      as="td"
      paddingInline="3"
      paddingBlock="2"
      borderWidth="1px"
      borderColor="border.emphasized"
      fontSize="16px"
      lineHeight="1.5"
      color="fg"
      {...props}
    />
  ),
  blockquote: ({ ref, ...props }) => <Blockquote {...props} />,
  Blockquote,
  Code,
  Examples,
  IO,
  Input,
  Output,
  Details,
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
