import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

/**
 * Every post already sits in a directory that names its edition, optionally
 * under a locale prefix:
 *
 *   2025/round1_8.mdx              → year 2025
 *   2025-codebattle/notice/rule    → year 2025, code battle
 *   en/2026/pre_m.mdx              → year 2026
 *
 * So `year` and `codebattle` are derived from that path rather than retyped in
 * every file's frontmatter. Frontmatter still wins if present, which keeps
 * existing files working and leaves an escape hatch for a page that genuinely
 * belongs to a different edition than its folder.
 */
const LOCALE_PREFIXES = ["en"];

const editionFromDirectory = (directory: string) => {
  const segments = directory.split("/").filter(Boolean);
  const withoutLocale = LOCALE_PREFIXES.includes(segments[0] ?? "") ? segments.slice(1) : segments;
  const edition = withoutLocale[0] ?? "";

  const year = Number.parseInt(edition, 10);
  return {
    year: Number.isNaN(year) ? undefined : year,
    codebattle: edition.endsWith("-codebattle") || undefined,
  };
};

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
      bikoId: z.optional(z.number()),
      // Replay writeups only: rendered as a small key/value table under the
      // title when set, labeled per-locale rather than by these field names.
      // Master track competes in teams, rookie track individually, so a given
      // writeup sets one of `teamName`/`nickname`, not both.
      teamName: z.optional(z.string()),
      nickname: z.optional(z.string()),
      llmProvider: z.optional(z.string()),
      llmModel: z.optional(z.string()),
      content: z.string(),
    }),
    z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])),
  ),
  transform: (post) => {
    const { _meta, ...rest } = post;
    // On Windows, _meta.directory can come back with `\` segments (from
    // Node's path.dirname), which would otherwise leak into the slug and
    // break every route lookup nested more than one level deep.
    const directory = _meta.directory.replaceAll("\\", "/");
    const slug = `${directory}/${_meta.fileName.replace(/\.mdx$/, "")}`;
    const derived = editionFromDirectory(directory);

    const resolved = {
      ...rest,
      year: rest.year ?? derived.year,
      codebattle: rest.codebattle ?? derived.codebattle,
      slug,
    };

    return {
      ...resolved,
      // Substituted against the resolved post, so `{meta.year}` in content sees
      // the derived value too rather than an empty string.
      content: post.content.replace(
        /\{meta\.([^}]+)\}/g,
        (_: string, metaKey: string) =>
          `{${JSON.stringify(
            Object.hasOwn(resolved, metaKey) ? resolved[metaKey as keyof typeof resolved] : "",
          )}}`,
      ),
    };
  },
});

export default defineConfig({
  content: [posts],
});
