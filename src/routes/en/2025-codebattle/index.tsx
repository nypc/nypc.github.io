import { Divider, Itemize, Typo } from "@solved-ac/ui-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PostLayout, ProblemList } from "components";

const year = "2025-codebattle";

export const problems = {
  online: [
    ["online_p", "[Practice] Mushroom Game"],
    ["online_1", "Yacht Auction"],
  ],
  finals: [["finals_1", "Connexion"]],
} as const;

const List = () => {
  return (
    <PostLayout
      en={true}
      meta={{
        title: `NYPC CODE BATTLE`,
        codebattle: true,
      }}
      theme={{
        background: "#0086FF",
        color: "#FFFFFF",
      }}
    >
      <Typo h2>Information</Typo>
      <Itemize>
        <li>
          <Link to="/en/$year/notice/$page" params={{ year, page: "rule" }}>
            Contest Rules
          </Link>
        </li>
        <li>
          <Link to="/en/$year/notice/$page" params={{ year, page: "tool" }}>
            Development Tools Guide
          </Link>
        </li>
      </Itemize>
      <Divider />
      <Typo h2 no-margin>
        Online Round
      </Typo>
      <ProblemList en={true} year={year} problems={problems.online} />
      <Divider />
      <Typo h2 no-margin>
        Final Round
      </Typo>
      <ProblemList en={true} year={year} problems={problems.finals} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/en/2025-codebattle/")({
  component: List,
});
