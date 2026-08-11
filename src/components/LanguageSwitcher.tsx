import { Menu, Portal, Span } from "@chakra-ui/react";
import { IconCheck, IconChevronDown, IconLanguage } from "@tabler/icons-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NavButton } from "./NavButton";
import { BASE_LOCALE, LOCALES, LOCALE_LABELS, localizePathname, useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
import type { Locale } from "@/i18n";

interface Props {
  /** Locales this page exists in; anything omitted is listed but disabled. */
  availableLocales?: ReadonlyArray<Locale>;
}

/** Real anchors, pointing at the same page in the other locale. */
export const LanguageSwitcher = ({ availableLocales = [BASE_LOCALE] }: Props) => {
  const locale = useLocale();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <NavButton aria-label={m.language_change({}, { locale })}>
          <IconLanguage />
          {LOCALE_LABELS[locale]}
          <IconChevronDown />
        </NavButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minWidth="11rem">
            {LOCALES.map((candidate) => {
              const available = availableLocales.includes(candidate);
              const current = candidate === locale;

              return (
                <Menu.Item
                  key={candidate}
                  value={candidate}
                  disabled={!available}
                  justifyContent="space-between"
                  gap="6"
                  asChild={available}
                >
                  {available ? (
                    <Link to={localizePathname(pathname, candidate)}>
                      {LOCALE_LABELS[candidate]}
                      {current && <IconCheck />}
                    </Link>
                  ) : (
                    // Two siblings: the item's `space-between` separates them.
                    <>
                      <Span>{LOCALE_LABELS[candidate]}</Span>
                      {/* In the row's own locale, like its label. */}
                      <Span fontSize="xs" color="fg.subtle">
                        {m.language_not_translated({}, { locale: candidate })}
                      </Span>
                    </>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
