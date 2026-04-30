import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "jsx-a11y"],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "public/",
    ".content-collections/",
    ".tanstack/",
    ".yarn/",
    "**/*.mdx",
    "**/src/routeTree.gen.ts",
    "**/src/styles.css",
  ],
  rules: {
    "no-ex-assign": ["off"],
    "no-unused-vars": [
      "warn",
      {
        args: "none",
        vars: "all",
        varsIgnorePattern: "^_",
        caughtErrors: "none",
      },
    ],
  },
});
