import { createFileRoute, notFound } from "@tanstack/react-router";
import { MDXViewer, PostLayout } from "components";
import { allPosts } from "content-collections";
import { z } from "zod";
import { localesWithContent } from "@/i18n/content";

const Post = () => {
  const { post, availableLocales } = Route.useLoaderData();
  return (
    <PostLayout meta={post} availableLocales={availableLocales}>
      <MDXViewer code={post.content} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/en/$year/$page")({
  params: {
    parse: z.object({
      year: z.union([z.number(), z.string()]),
      page: z.string(),
    }).parse,
  },
  loader: ({ params }) => {
    const path = `${params.year}/${params.page}`;
    const post = allPosts.find((p) => p.slug === `en/${params.year}/${params.page}`);
    if (!post) throw notFound();
    return { post, availableLocales: localesWithContent(path) };
  },
  component: Post,
});
