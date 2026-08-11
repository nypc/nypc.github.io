import { Box, Button, Collapsible } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export const Solution: React.FC<Props> = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Collapsible.Root open={open}>
        <Collapsible.Content>{children}</Collapsible.Content>
      </Collapsible.Root>
      <Button variant="outline" onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {open ? "닫기" : "풀이 보기"}
      </Button>
    </Box>
  );
};
