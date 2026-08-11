import { Menu, Portal, Span } from "@chakra-ui/react";
import { IconCheck, IconChevronDown, IconLanguage } from "@tabler/icons-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NavButton } from "./NavButton";
import { BASE_LOCALE, LOCALES, LOCALE_LABELS, localizePathname, useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";
import type { Locale } from "@/i18n";

interface Props {
  /**
   * Locales this page exists in. Anything omitted is listed but disabled —
   * only 6 of 288 pages are translated, so silently dropping the option would
   * hide that the archive is mostly Korean, and linking anyway would 404.
   */
  availableLocales?: ReadonlyArray<Locale>;
}

/**
 * Language picker.
 *
 * Entries are real anchors (`asChild` + router `Link`) so middle-click and
 * open-in-new-tab keep working, and each points at the *same page* in the
 * other locale rather than at that locale's home.
 */
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
                    // Two siblings rather than one wrapper: the item's own
                    // `space-between` is what separates the label from the note.
                    <>
                      <Span>{LOCALE_LABELS[candidate]}</Span>
                      {/*
                        In the row's own locale, not the page's — the row speaks
                        for that language, which is why its label is "English"
                        rather than "영어".
                      */}
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
