import { Button, Collapse } from "@solved-ac/ui-react";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export const Solution: React.FC<Props> = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Collapse shown={open}>{children}</Collapse>
      <Button onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {open ? "닫기" : "풀이 보기"}
      </Button>
    </div>
  );
};
