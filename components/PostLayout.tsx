import styled from "@emotion/styled";
import { Container, Divider, Space, Typo } from "@solved-ac/ui-react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const NavigationContainer = styled.div`
  padding-top: 32px;
`;

const Navigation = styled(Typo)`
  display: inline-flex;
  align-items: center;
  gap: 0 8px;
`;

const MetaContainer = styled.div`
  text-align: center;
  padding: 32px 0 16px 0;
`;

const MetaLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface Meta {
  title: string;
  year: number;
  stage: string;
}

interface Props {
  children: React.ReactNode;
  meta?: Partial<Meta>;
}

export const PostLayout: React.FC<Props> = (props) => {
  const { meta, children } = props;

  const prev = meta?.year ? `/${meta.year}` : "/";

  return (
    <>
      <Container>
        <NavigationContainer>
          <Link href={prev} passHref>
            <MetaLink>
              <Navigation description>
                <IoArrowBack /> 이전
              </Navigation>
            </MetaLink>
          </Link>
        </NavigationContainer>
        {meta && (
          <MetaContainer>
            {meta.title && <Typo h1>{meta.title}</Typo>}
            {meta.year && (
              <Typo description>
                <Link href={`/${meta.year}`} passHref>
                  <MetaLink>NYPC {meta.year}</MetaLink>
                </Link>
                {meta.stage && <> &middot; {meta.stage}</>}
              </Typo>
            )}
          </MetaContainer>
        )}
        <Divider />
        {children}
        <Space h={32} />
      </Container>
    </>
  );
};
