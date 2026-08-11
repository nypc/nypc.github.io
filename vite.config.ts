import contentCollections from "@content-collections/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    contentCollections(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      // The site is prerendered to static HTML, so the locale has to be a pure
      // function of the URL. Cookie or storage strategies would make every
      // locale share one HTML file and resolve only after hydration.
      strategy: ["url", "baseLocale"],
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            // Base locale last: it is the catch-all, so `/en/...` matches first
            // and every other path falls through to Korean without a prefix.
            ["en", "/en/:path(.*)?"],
            ["ko", "/:path(.*)?"],
          ],
        },
      ],
      emitTsDeclarations: true,
    }),
    tanstackStart({
      router: {
        routesDirectory: "routes",
      },
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        autoStaticPathsDiscovery: true,
        concurrency: 14,
        crawlLinks: true,
        filter: ({ path }) => !/\.[a-z0-9]+$/i.test(path),
        retryCount: 2,
        retryDelay: 1000,
        maxRedirects: 5,
        failOnError: true,
      },
    }),
    viteReact({
      include: /\.(mdx|md|js|jsx|ts|tsx)$/,
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
  ],
});
