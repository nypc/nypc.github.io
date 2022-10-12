import styled from "@emotion/styled";
import { Button, Centering, Space } from "@solved-ac/ui-react";
import { IoGolf } from "react-icons/io5";

const SimulatorButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 8px;
`;

interface Props {
  urlPrefix: string;
  count: number;
}

export const Simulators = (props: Props) => {
  const { urlPrefix, count } = props;

  return (
    <SimulatorButtonsGrid>
      {Array(count)
        .fill(undefined)
        .map((_, index) => (
          <Button
            as="a"
            href={`${urlPrefix}?subtask=${index + 1}`}
            target="_blank"
            rel="noreferrer"
            key={index.toString()}
          >
            <Centering>
              <IoGolf />
              <Space w={4} />
              미션 {index + 1}
            </Centering>
          </Button>
        ))}
    </SimulatorButtonsGrid>
  );
};
