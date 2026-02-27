import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { IconCopy } from "@tabler/icons-react";
import { useRef } from "react";

/*
    Examples container
*/

const ExamplesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 16px;
`;

interface ExamplesProps {
  children?: React.ReactNode;
}

export const Examples: React.FC<ExamplesProps> = (props) => {
  return <ExamplesContainer>{props.children}</ExamplesContainer>;
};

/*
    I/O
*/

const Preformatted = styled.pre`
  width: 100%;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.color.background.card.main};
  padding: 0 16px;
  border-radius: 8px;
  & > pre > code {
    padding-left: 0;
    padding-right: 0;
  }
`;

const IOTitle = styled(Typo)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CopyButton = styled.button`
  background: transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.color.text.secondary.main};
  cursor: pointer;
`;

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
      }
    );
  };

  return (
    <div>
      <Space h={8} />
      <IOTitle h3 no-margin>
        {title}
        {children && (
          <CopyButton onClick={handleCopy}>
            <IconCopy />
          </CopyButton>
        )}
      </IOTitle>
      <Space h={8} />
      <Preformatted ref={preRef}>{children}</Preformatted>
    </div>
  );
};

export const Input = (props: IOProps) => {
  return <IO title="입력" {...props} />;
};

export const Output = (props: IOProps) => {
  return <IO title="출력" {...props} />;
};
