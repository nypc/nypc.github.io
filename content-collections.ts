import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "./src/routes",
  include: "**/*.mdx",
  parser: "frontmatter",
  schema: z.intersection(
    z.object({
      title: z.string(),
      subtitle: z.optional(z.string()),
      year: z.optional(z.number()),
      stage: z.optional(z.string()),
      codebattle: z.optional(z.boolean()),
      content: z.string(),
    }),
    z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])),
  ),
  transform: async (post) => {
    return {
      ...post,
      content: post.content.replace(
        /\{meta\.([^}]+)\}/g,
        (_: string, metaKey: string) => `{${JSON.stringify(Object.hasOwn(post, metaKey) ? post[metaKey] : '')}}`,
      ),
    };
  },
});

export default defineConfig({
  content: [posts],
});
