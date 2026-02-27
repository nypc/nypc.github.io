import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { AppProviders } from "components/AppProviders";

const RootDocument = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <head>
      <HeadContent />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
);

const RootComponent = () => (
  <RootDocument>
    <AppProviders>
      <Outlet />
    </AppProviders>
  </RootDocument>
);

const NotFoundComponent = () => (
  <main style={{ padding: "48px 16px", textAlign: "center" }}>
    <h1>404</h1>
    <p>페이지를 찾을 수 없습니다.</p>
  </main>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "NYPC — Nexon Youth Programming Challenge",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
        integrity:
          "sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        as: "style",
        crossOrigin: "anonymous",
        href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css",
      },
    ],
  }),
  shellComponent: RootComponent,
  notFoundComponent: NotFoundComponent,
});
