import { createFileRoute, notFound } from "@tanstack/react-router";
import { MDXViewer, PostLayout } from "components";
import { allPosts } from "content-collections";
import { z } from "zod";

const Post = () => {
  const post = Route.useLoaderData();
  return (
    <PostLayout meta={post}>
      <MDXViewer code={post.content} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/$year/notice/$page")({
  params: {
    parse: z.object({
      year: z.union([z.number(), z.string()]),
      page: z.string(),
    }).parse,
  },
  loader: ({ params }) => {
    const post = allPosts.find(
      (p) => p.slug === `${params.year}/notice/${params.page}`,
    );
    if (!post) throw notFound();
    return post;
  },
  component: Post,
});
