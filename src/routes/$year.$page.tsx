import { notFound, createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { MDXViewer, PostLayout } from "components";

const Post = () => {
  const post = Route.useLoaderData();
  return (
    <PostLayout meta={post}>
      <MDXViewer code={post.content} />
    </PostLayout>
  );
};

export const Route = createFileRoute('/$year/$page')({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p._meta.directory === params.year && p._meta.fileName === `${params.page}.mdx`);
    if (!post) throw notFound();
    return post;
  },
  component: Post,
});
