import styled from "@emotion/styled";
import type { ReactNode } from "react";

const FigureContainer = styled.figure`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const FigureImg = styled.img`
  margin: 0 auto;
  max-width: 100%;
  display: block;
`;

const FigureCaption = styled.figcaption`
  padding: 1em;
  &:before {
    content: "↑";
    margin-right: 0.5ch;
    color: ${({ theme }) => theme.color.text.secondary.main};
  }
`;

interface Props {
  src: string;
  alt?: string;
  caption?: ReactNode;
  width?: string | number;
  style?: React.CSSProperties;
}

export const Figure: React.FC<Props> = (props) => {
  const { src, alt, caption, width, style } = props;

  return (
    <>
      <FigureContainer>
        <FigureImg
          src={src}
          alt={alt || (typeof caption === "string" ? caption : undefined)}
          style={{ width, ...style }}
        />
        {caption && <FigureCaption>{caption}</FigureCaption>}
      </FigureContainer>
    </>
  );
};
