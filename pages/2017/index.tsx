import { Typo } from "@solved-ac/ui-react";
import { Enumerate, PostLayout } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const year = 2017;

const problems = {
  preliminaries: [],
  finals: [],
};

const List: NextPage = (props) => {
  return (
    <PostLayout
      meta={{
        title: `NYPC ${year}`,
      }}
      theme={{
        background: "#fff100",
        color: "#622d91",
      }}
    >
      <Typo h2>예선</Typo>
      <Enumerate>
        {problems.preliminaries.map(([id, title]) => (
          <li key={id}>
            <Link href={`/${year}/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Enumerate>
      <Typo h2>본선</Typo>
      <Enumerate>
        {problems.finals.map(([id, title]) => (
          <li key={id}>
            <Link href={`/${year}/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Enumerate>
    </PostLayout>
  );
};

export default List;
