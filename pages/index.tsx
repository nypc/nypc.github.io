import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    window.location.href = "https://www.nypc.co.kr/";
  }, []);

  return null;
};

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: "https://www.nypc.co.kr/",
      permanent: false,
    },
  };
};

export default Home;
