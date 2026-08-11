import { Box, Button, Collapsible } from "@chakra-ui/react";
import { useState } from "react";
import { useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";

interface Props {
  children?: React.ReactNode;
}

export const Solution: React.FC<Props> = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  return (
    <Box>
      <Collapsible.Root open={open}>
        <Collapsible.Content>{children}</Collapsible.Content>
      </Collapsible.Root>
      <Button variant="outline" onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {open ? m.solution_hide({}, { locale }) : m.solution_show({}, { locale })}
      </Button>
    </Box>
  );
};
