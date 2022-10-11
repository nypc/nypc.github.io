/* eslint-disable @next/next/no-img-element */

import styled from "@emotion/styled";

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
  caption?: string;
  width?: string | number;
}

export const Figure: React.FC<Props> = (props) => {
  const { src, alt, caption, width } = props;

  return (
    <>
      <FigureContainer>
        <FigureImg
          src={src}
          alt={alt || caption}
          style={width ? { width } : undefined}
        />
        {caption && <FigureCaption>{caption}</FigureCaption>}
      </FigureContainer>
    </>
  );
};
