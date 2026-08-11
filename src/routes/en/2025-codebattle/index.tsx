import { Link, createFileRoute } from "@tanstack/react-router";
import { Itemize, PostLayout, ProblemList, SectionHeading, themes } from "components";

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
      availableLocales={["ko", "en"]}
      meta={{
        title: `NYPC CODE BATTLE`,
      }}
      theme={themes[2025]}
    >
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        Information
      </SectionHeading>
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
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        Online Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.online} />
      <SectionHeading as="h2" size="2xl" textAlign="center" marginTop="12" marginBottom="4">
        Final Round
      </SectionHeading>
      <ProblemList year={year} problems={problems.finals} />
    </PostLayout>
  );
};

export const Route = createFileRoute("/en/2025-codebattle/")({
  component: List,
});
