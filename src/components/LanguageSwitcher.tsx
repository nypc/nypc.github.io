import { Menu, Portal } from "@chakra-ui/react";
import { IconCheck, IconChevronDown, IconLanguage } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { NavButton } from "./NavButton";

const LANGUAGES = [
  { code: "ko", label: "한국어", to: "/" },
  { code: "en", label: "English", to: "/en" },
] as const;

interface Props {
  /** Whether the current page is the English edition. */
  en?: boolean;
}

/**
 * Language picker for the archive index.
 *
 * Items are real anchors (`asChild` + router `Link`) rather than click
 * handlers, so middle-click and open-in-new-tab keep working and the
 * destination shows in the status bar.
 */
export const LanguageSwitcher = ({ en }: Props) => {
  const current = en ? LANGUAGES[1] : LANGUAGES[0];

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <NavButton aria-label={en ? "Change language" : "언어 변경"}>
          <IconLanguage />
          {current.label}
          <IconChevronDown />
        </NavButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minWidth="9rem">
            {LANGUAGES.map((language) => (
              <Menu.Item
                key={language.code}
                value={language.code}
                justifyContent="space-between"
                gap="6"
                asChild
              >
                <Link to={language.to}>
                  {language.label}
                  {language.code === current.code && <IconCheck />}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
