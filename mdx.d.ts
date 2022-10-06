import { Meta } from "./types/post";

declare module "*.mdx" {
  export const meta: Partial<Meta> | undefined;
}
