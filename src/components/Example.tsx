import { Box, Grid, Heading, IconButton } from "@chakra-ui/react";
import { IconCopy } from "@tabler/icons-react";
import { useRef } from "react";
import type { BoxProps } from "@chakra-ui/react";

/*
    Examples container
*/

interface ExamplesProps {
  children?: React.ReactNode;
}

export const Examples: React.FC<ExamplesProps> = (props) => (
  <Grid
    width="100%"
    templateColumns="repeat(2, minmax(0, 1fr))"
    columnGap="4"
    // MDX paragraphs carry bottom margin only, so without this the following
    // sentence sits flush against the sample-I/O boxes.
    marginBottom="4"
  >
    {props.children}
  </Grid>
);

/*
    I/O
*/

/**
 * Sample I/O arrives as MDX children, which means either a paragraph (plain
 * text, the common case) or a nested `pre > code` (fenced block). Both bring
 * the MDX theme's block spacing with them, which stacks on top of this box's
 * padding and leaves it lopsided — flush at the top, gapped at the bottom.
 *
 * The child resets have to live in the same unlayered context as the styles
 * they override. Chakra compiles `chakra(el, { base })` into the `recipes`
 * cascade layer, while style props and `css` on an element are unlayered — and
 * unlayered rules win over layered ones no matter how specific the layered
 * selector is. A `& > p` reset written as part of a recipe would silently lose
 * to the paragraph's own `marginBottom` style prop.
 */
const Preformatted = ({ ref, ...props }: BoxProps & { ref?: React.Ref<HTMLPreElement> }) => (
  <Box
    as="pre"
    ref={ref}
    width="100%"
    overflowX="auto"
    bg="bg.subtle"
    color="fg"
    borderWidth="1px"
    borderColor="border.muted"
    padding="4"
    borderRadius="lg"
    css={{
      "& > p": { margin: 0, color: "inherit" },
      "& > pre": { margin: 0 },
      "& > pre > code": { paddingInline: 0, paddingBlock: 0 },
    }}
    {...props}
  />
);

interface IOProps {
  children?: React.ReactNode;
  title?: string;
}

export const IO: React.FC<IOProps> = (props) => {
  const { title, children } = props;
  const preRef = useRef<HTMLPreElement | null>(null);

  const handleCopy = () => {
    if (!preRef.current) return;
    const type = "text/plain";
    const blob = new Blob([preRef.current.innerText], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    // TODO: render this by snackbar
    navigator.clipboard.write(data).then(
      () => {
        alert("클립보드에 복사했습니다.");
      },
      () => {
        alert("클립보드에 복사하지 못했습니다.");
      },
    );
  };

  return (
    <Box>
      <Box h="2" />
      <Heading
        as="h3"
        size="md"
        margin="0"
        display="flex"
        alignItems="center"
        gap="2"
        fontFamily="body"
      >
        {title}
        {children && (
          <IconButton
            aria-label="클립보드에 복사"
            variant="ghost"
            size="xs"
            color="fg.muted"
            onClick={handleCopy}
          >
            <IconCopy />
          </IconButton>
        )}
      </Heading>
      <Box h="2" />
      <Preformatted ref={preRef}>{children}</Preformatted>
    </Box>
  );
};

export const Input = (props: IOProps) => {
  return <IO title="입력" {...props} />;
};

export const Output = (props: IOProps) => {
  return <IO title="출력" {...props} />;
};
