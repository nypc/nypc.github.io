import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    window.location.href = "https://www.nypc.co.kr/";
  }, []);

  return null;
};

export default Home;
