import * as fs from "fs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import path from "path";

/*
    Catch-all route for *.html to allow redirection from legacy URLs
*/

const CatchAll: NextPage = () => {
  return null;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const url = ctx.params?.url;
  const urlStr = Array.isArray(url) ? url.join("/") : url;

  if (urlStr && urlStr.endsWith(".html")) {
    return {
      redirect: {
        destination: `/${urlStr.slice(0, -5)}`,
        permanent: false,
      },
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const absolutePath = path.join(process.cwd(), "./pages");

  const directories = fs
    .readdirSync(absolutePath, { withFileTypes: true })
    .filter((file) => file.isDirectory());

  const posts: string[] = [];

  const dfs = (dir: string, files: fs.Dirent[]) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        dfs(
          `${dir}/${file.name}`,
          fs.readdirSync(path.join(absolutePath, dir, file.name), {
            withFileTypes: true,
          })
        );
      } else if (file.isFile()) {
        posts.push(path.join(dir, file.name));
      }
    });
  };

  dfs("", directories);

  return {
    paths: posts.map((post) => ({
      params: {
        url: post
          .replace(/^\//, "")
          .replace(/\.mdx?$/, ".html")
          .split("/"),
      },
    })),
    fallback: false,
  };
};

export default CatchAll;
