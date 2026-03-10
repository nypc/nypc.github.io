import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "jsx-a11y"],
  ignorePatterns: [
    ".content-collections/**/*",
    ".tanstack/**/*",
    ".yarn/**/*",
    "dist/**/*",
    "node_modules/**/*",
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
