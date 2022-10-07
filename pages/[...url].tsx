import type { NextPage } from "next";
import { useEffect } from "react";

/*
    Catch-all route for *.html to allow redirection from legacy URLs
*/

const CatchAll: NextPage = () => {
  // `redirect` can not be returned from getStaticProps during prerendering
  // so we resort to useEffect redirects
  // https://nextjs.org/docs/messages/gsp-redirect-during-prerender
  useEffect(() => {
    if (/[^.]+\.html$/.exec(window.location.href)) {
      window.location.href = window.location.href.replace(/\.html$/, "");
    } else {
      window.location.href = "https://www.nypc.co.kr/";
    }
  }, []);

  return null;
};

export default CatchAll;
