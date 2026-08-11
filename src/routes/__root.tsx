import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { AppProviders } from "components/AppProviders";
import { htmlLang, localeFromPathname } from "@/i18n/locale";
import * as m from "@/paraglide/messages";
import { TYPEKIT_STYLESHEET_HREF } from "@/theme";

const RootDocument = ({ children }: { children: React.ReactNode }) => {
  // From the router, not a prop: each prerendered file must carry its own
  // language before any JavaScript runs.
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <html lang={htmlLang(localeFromPathname(pathname))}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

const RootComponent = () => (
  <RootDocument>
    <AppProviders>
      <Outlet />
    </AppProviders>
  </RootDocument>
);

const NotFoundComponent = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const locale = localeFromPathname(pathname);

  return (
    <main style={{ padding: "48px 16px", textAlign: "center" }}>
      <title>{`${m.not_found_title({}, { locale })} — NYPC`}</title>
      <h1>{m.not_found_title({}, { locale })}</h1>
      <p>{m.not_found_body({}, { locale })}</p>
    </main>
  );
};

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
      // No `title` here: `PostLayout` renders one that React hoists into <head>,
      // and a root title would be emitted first — browsers honour the first.
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
        rel: "preconnect",
        href: "https://use.typekit.net",
        crossOrigin: "anonymous",
      },
      {
        // poster-gothic-excond-atf — the NYPC display face.
        rel: "stylesheet",
        href: TYPEKIT_STYLESHEET_HREF,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
        integrity: "sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        as: "style",
        crossOrigin: "anonymous",
        href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.css",
      },
      {
        // One Dark — the palette @nypc-home/mdx ships for highlighted code.
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/atom-one-dark.min.css",
      },
    ],
  }),
  shellComponent: RootComponent,
  notFoundComponent: NotFoundComponent,
});
