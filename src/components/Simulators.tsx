import { Button, Grid } from "@chakra-ui/react";
import { IconPlayerPlay } from "@tabler/icons-react";

interface Props {
  urlPrefix: string;
  count: number;
  param?: string;
}

export const Simulators = (props: Props) => {
  const { urlPrefix, count, param = "subtask" } = props;

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap="2"
      // As with `Examples`: MDX paragraphs have no top margin to space this off.
      marginBottom="4"
    >
      {Array(count)
        .fill(undefined)
        .map((_, index) => (
          <Button
            key={index.toString()}
            asChild
            variant="outline"
            justifyContent="center"
            gap="1"
            // The anchor inside would otherwise take the global link underline.
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            <a href={`${urlPrefix}?${param}=${index + 1}`} target="_blank" rel="noreferrer">
              <IconPlayerPlay />
              미션 {index + 1}
            </a>
          </Button>
        ))}
    </Grid>
  );
};
