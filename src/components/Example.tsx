import { Box, Grid, Heading, IconButton } from "@chakra-ui/react";
import { IconCopy } from "@tabler/icons-react";
import { useRef } from "react";
import { useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
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
 * Sample I/O arrives as MDX children — a paragraph, or a nested `pre > code` —
 * each bringing block spacing that would stack on this box's padding.
 *
 * The resets must stay unlayered: `chakra(el, { base })` compiles into the
 * `recipes` layer, and unlayered style props beat it regardless of specificity.
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
  const locale = useLocale();

  const handleCopy = () => {
    if (!preRef.current) return;
    const type = "text/plain";
    const blob = new Blob([preRef.current.innerText], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    // TODO: render this by snackbar
    navigator.clipboard.write(data).then(
      () => {
        alert(m.example_copy_success({}, { locale }));
      },
      () => {
        alert(m.example_copy_failure({}, { locale }));
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
            aria-label={m.example_copy({}, { locale })}
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
  const locale = useLocale();
  return <IO title={m.example_input({}, { locale })} {...props} />;
};

export const Output = (props: IOProps) => {
  const locale = useLocale();
  return <IO title={m.example_output({}, { locale })} {...props} />;
};
