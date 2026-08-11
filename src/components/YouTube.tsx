import { chakra } from "@chakra-ui/react";

const YouTubeIframe = chakra("iframe", {
  base: {
    width: "560px",
    maxWidth: "100%",
    aspectRatio: "16 / 9",
    borderRadius: "lg",
  },
});

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
      allow="autoplay; encrypted-media"
      allowFullScreen
      {...rest}
    />
  );
};
