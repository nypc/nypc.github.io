import styled from "@emotion/styled";

const YouTubeIframe = styled.iframe`
  width: 560px;
  max-width: 100%;
  aspect-ratio: 16 / 9;
`;

interface Props extends React.HTMLAttributes<HTMLIFrameElement> {
  /**
   * YouTube video ID.
   *
   * If the video URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, then
   * the video ID should be `dQw4w9WgXcQ`.
   */
  videoId: string;
}

export const YouTube = (props: Props) => {
  const { videoId, ...rest } = props;
  return (
    <YouTubeIframe
      src={`https://www.youtube.com/embed/${videoId}?rel=0`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      {...rest}
    />
  );
};
