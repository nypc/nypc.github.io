import * as fs from "fs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

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
  const directories = fs
    .readdirSync("./pages", { withFileTypes: true })
    .filter((file) => file.isDirectory());

  const posts: string[] = [];

  const dfs = (dir: string, files: fs.Dirent[]) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        dfs(
          `${dir}/${file.name}`,
          fs.readdirSync(`./pages/${dir}/${file.name}`, { withFileTypes: true })
        );
      } else if (file.isFile()) {
        posts.push(`${dir}/${file.name}`);
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
