import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import contentCollections from "@content-collections/vite";

export default defineConfig({
  plugins: [
    contentCollections(),
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
    }),
  ],
});
