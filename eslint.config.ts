import { tanstackConfig } from "@tanstack/eslint-config";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  globalIgnores([".content-collections", "dist", "node_modules"]),
  reactHooks.configs.flat["recommended-latest"],
  ...tanstackConfig,
  {
    rules: {
      // "sort-imports": "off",
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
      },
    },
  },
]);
