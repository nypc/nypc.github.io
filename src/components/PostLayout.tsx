import { Box, Container, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import { IconArrowLeft } from "@tabler/icons-react";
import { createLink } from "@tanstack/react-router";
import { isAsciiOnly, yearAccentVars } from "@/theme";
import { BASE_LOCALE, useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavButton } from "./NavButton";
import { YearAurora } from "./YearAurora";
import { themes } from "./themes";
import type { Locale } from "@/i18n";
import type { ThemeItem } from "./themes";
import type { Post } from "content-collections";
import "./styles.css";

const PageContainer = chakra(Container, {
  base: {
    maxWidth: "content",
    paddingInline: "4",
  },
});

const MetaLinkA = chakra("a", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25em",
    textDecoration: "none",
    _hover: {
      textDecoration: "underline",
    },
  },
});

const MetaLink = createLink(MetaLinkA);

/**
 * Partial because index routes synthesise a header from a title alone — they
 * are not backed by an MDX file, so they have no year, stage or edition. Every
 * field is already read defensively below.
 */
type PostMetaLike = Partial<Omit<Post, "_meta" | "content" | "slug">>;

interface Props {
  children: React.ReactNode;
  root?: boolean;
  meta?: PostMetaLike;
  theme?: ThemeItem;
  /**
   * Locales this page exists in. Defaults to Korean only, which is true of
   * every page that has not been translated.
   */
  availableLocales?: ReadonlyArray<Locale>;
}

export const PostLayout: React.FC<Props> = (props) => {
  const { root, meta, theme, availableLocales, children } = props;
  const locale = useLocale();
  const localePrefix = locale === BASE_LOCALE ? "" : `/${locale}`;

  // Problem and notice pages don't pass a theme, but they know their year — so
  // each one still carries its edition's accent.
  const resolvedTheme = theme ?? (meta?.year ? themes[Number(meta.year)] : undefined);

  const prev = `${localePrefix}${meta?.year ? `/${meta.year}${meta.codebattle ? "-codebattle" : ""}` : "/"}`;

  const title = meta?.title
    ? `${meta.title}${
        meta.codebattle ? " — NYPC CODE BATTLE" : meta.year ? ` — NYPC ${meta.year}` : ""
      }`
    : "NYPC — NEXON Young Programmers Cup";

  return (
    <Box
      style={yearAccentVars(resolvedTheme)}
      display="flex"
      flexDirection="column"
      minHeight="100dvh"
      position="relative"
    >
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://www.nypc.co.kr" />
      <meta name="description" content={m.site_description({}, { locale })} />
      <meta property="og:description" content={m.site_tagline({}, { locale })} />

      {resolvedTheme && <YearAurora theme={resolvedTheme} />}

      <Box as="nav" paddingTop="10" position="relative" zIndex={1}>
        <PageContainer>
          <Flex align="center" justify="space-between" gap="4">
            <NavButton asChild>
              {root ? (
                <a href="https://www.nypc.co.kr">
                  <IconArrowLeft />
                  {m.nav_official_site({}, { locale })}
                </a>
              ) : (
                <MetaLink to={prev}>
                  <IconArrowLeft />
                  {m.nav_back({}, { locale })}
                </MetaLink>
              )}
            </NavButton>
            <LanguageSwitcher availableLocales={availableLocales} />
          </Flex>
        </PageContainer>
      </Box>

      {meta && (
        <Box
          as="header"
          paddingTop="20"
          paddingBottom="12"
          position="relative"
          zIndex={1}
          textAlign="center"
        >
          <PageContainer>
            {meta.title &&
              // A pure-ASCII title is set in the condensed brand face at full
              // size. Anything else goes to Pretendard a step smaller: the
              // brand face covers no Hangul, so a mixed title would otherwise
              // set only its Latin run in it, and Pretendard needs slightly
              // less size (and a little more leading) to carry the same weight.
              (isAsciiOnly(meta.title) ? (
                <Heading
                  as="h1"
                  size={{ base: "4xl", md: "6xl" }}
                  fontFamily="heading"
                  lineHeight="1.15"
                  letterSpacing="-0.01em"
                >
                  {meta.title}
                </Heading>
              ) : (
                <Heading
                  as="h1"
                  size={{ base: "3xl", md: "5xl" }}
                  fontFamily="body"
                  lineHeight="1.25"
                  letterSpacing="-0.02em"
                >
                  {meta.title}
                </Heading>
              ))}
            {meta.subtitle && (
              <Text color="fg.muted" marginTop="3" fontSize="lg">
                {meta.subtitle}
              </Text>
            )}
            {meta.year && (
              <Text color="fg.muted" marginTop="2" fontSize="sm">
                <MetaLink to={prev}>NYPC {meta.codebattle ? "CODE BATTLE" : meta.year}</MetaLink>
                {meta.stage && <> &middot; {meta.stage}</>}
              </Text>
            )}
          </PageContainer>
        </Box>
      )}

      <Box as="main" flex="1" paddingTop="12">
        <PageContainer>
          {children}
          <Box h="24" />
        </PageContainer>
      </Box>

      <Box as="footer" borderTopWidth="1px" borderColor="border" bg="bg.subtle">
        <PageContainer>
          <Flex
            align="center"
            gap="4"
            paddingTop="6"
            paddingBottom="12"
            color="fg.muted"
            fontSize="sm"
          >
            <a href="https://www.nexon.com">
              <chakra.img src="/nexon.svg" alt="Nexon" height="24px" />
            </a>
            Copyright © NEXON Korea Corporation. All Rights Reserved.
          </Flex>
        </PageContainer>
      </Box>
    </Box>
  );
};
