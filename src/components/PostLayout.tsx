/* eslint-disable @next/next/no-img-element */
import { Link } from "@tanstack/react-router";
import styled from "@emotion/styled";
import { Container, Divider, Footer, Space, Typo } from "@solved-ac/ui-react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import type { Post } from "content-collections";
import { createLink } from '@tanstack/react-router'

interface Meta {
  title: string;
  subtitle: string;
  year: number;
  stage: string;
  codebattle?: boolean;
}

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

const MetaLinkA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MetaLink = createLink(MetaLinkA);

const FooterContainer = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 0 16px;
`;

const FooterLogo = styled.img`
  height: 24px;
`;

type PostMeta = Omit<Post, '_meta' | 'content'>;

interface Props {
  children: React.ReactNode;
  root?: boolean;
  meta?: PostMeta;
  theme?: {
    background: string;
    color: string;
  };
}

export const PostLayout: React.FC<Props> = (props) => {
  const { root, meta, theme, children } = props;

  const prev = meta?.year
    ? `/${meta.year}${meta.codebattle ? "-codebattle" : ""}`
    : "/";

  const title = meta?.title
    ? `${meta.title}${
        meta.codebattle
          ? " — NYPC CODE BATTLE"
          : meta.year
            ? ` — NYPC ${meta.year}`
            : ""
      }`
    : "NYPC — Nexon Youth Programming Challenge";

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://www.nypc.co.kr" />
      <meta
        name="description"
        content="NEXON YOUTH PROGRAMMING CHALLENGE, 세상을 바꾸는 코딩! 세상을 더 멋지게 바꿀 당신을 만나고 싶습니다."
      />
      <meta
        property="og:descrption"
        content="NEXON YOUTH PROGRAMMING CHALLENGE, 세상을 바꾸는 코딩! 세상을 더 멋지게 바꿀 당신을 만나고 싶습니다."
      />
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
            {root ? (
              <MetaLinkA href="https://www.nypc.co.kr">
                <Navigation description style={theme && { color: theme.color }}>
                  <IconArrowLeft /> NYPC 공식 사이트
                </Navigation>
              </MetaLinkA>
            ) : (
              <MetaLink to={prev}>
                <Navigation
                  description
                  style={theme && { color: theme.color }}
                >
                  <IconArrowLeft /> 이전
                </Navigation>
              </MetaLink>
            )}
          </Container>
        </NavigationContainer>
        {meta && (
          <>
            <MetaContainer>
              <Container>
                {meta.title && <Typo h1>{meta.title}</Typo>}
                {meta.subtitle && <Typo description>{meta.subtitle}</Typo>}
                {meta.year && (
                  <Typo description>
                    <MetaLink to={prev}>
                        NYPC {meta.codebattle ? "CODE BATTLE" : meta.year}
                    </MetaLink>
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
