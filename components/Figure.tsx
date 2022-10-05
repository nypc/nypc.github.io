/* eslint-disable @next/next/no-img-element */

import styled from "@emotion/styled";

const FigureContainer = styled.figure`
  width: 100%;
  text-align: center;
`;

const FigureImg = styled.img`
  margin: 0 auto;
  max-width: 100%;
  display: block;
`;

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export const Figure: React.FC<Props> = (props) => {
  const { src, alt, caption } = props;

  return (
    <>
      <FigureContainer>
        <FigureImg src={src} alt={alt} />
        {caption && <figcaption>{caption}</figcaption>}
      </FigureContainer>
    </>
  );
};
