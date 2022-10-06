/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { Container, Divider, Footer, Space, Typo } from "@solved-ac/ui-react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { Meta, PostTheme } from "types/post";

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

const FooterContainer = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 0 16px;
`;

const FooterLogo = styled.img`
  height: 24px;
`;

interface Props {
  children: React.ReactNode;
  meta?: Partial<Meta>;
  theme?: PostTheme;
}

export const PostLayout: React.FC<Props> = (props) => {
  const { meta, theme, children } = props;

  const prev = meta?.year ? `/${meta.year}` : "/";

  return (
    <>
      <div
        style={
          theme && {
            background: theme.background,
            color: theme.color,
          }
        }
      >
        <NavigationContainer>
          <Container>
            <Link href={prev} passHref>
              <MetaLink>
                <Navigation description style={theme && { color: theme.color }}>
                  <IoArrowBack /> 이전
                </Navigation>
              </MetaLink>
            </Link>
          </Container>
        </NavigationContainer>
        {meta && (
          <>
            <MetaContainer>
              <Container>
                {meta.title && <Typo h1>{meta.title}</Typo>}
                {meta.year && (
                  <Typo description>
                    <Link href={`/${meta.year}`} passHref>
                      <MetaLink>NYPC {meta.year}</MetaLink>
                    </Link>
                    {meta.stage && <> &middot; {meta.stage}</>}
                  </Typo>
                )}
              </Container>
            </MetaContainer>
            {theme ? (
              <Space h={48} />
            ) : (
              <Container>
                <Divider />
              </Container>
            )}
          </>
        )}
      </div>
      {theme && <Space h={32} />}
      <Container>
        {children}
        <Space h={32} />
      </Container>
      <Footer>
        <Container>
          <FooterContainer>
            <a href="https://www.nexon.com">
              <FooterLogo src="/nexon.svg" alt="Nexon" />
            </a>
            Copyright © NEXON Korea Corporation. All Rights Reserved.
          </FooterContainer>
        </Container>
      </Footer>
    </>
  );
};