import { Grid, Text, chakra } from "@chakra-ui/react";
import { IconCube } from "@tabler/icons-react";
import { useLocale } from "@/i18n";
import * as m from "@/paraglide/messages";

const SubtaskContainer = chakra(Grid, {
  base: {
    gridTemplateColumns: "120px 1fr",
    columnGap: "4",
    padding: "8px 0",
    "& p:first-of-type": {
      marginTop: 0,
    },
    "& p:last-of-type": {
      marginBottom: 0,
    },
  },
});

interface Props {
  children?: React.ReactNode;
  index: number;
  score: number;
}

export const Subtask: React.FC<Props> = (props) => {
  const { score, index, children } = props;
  const locale = useLocale();

  return (
    <SubtaskContainer as="dd">
      <chakra.span>
        <Text fontFeatureSettings="'tnum' 1" display="flex" alignItems="center" gap="1">
          <chakra.span color="fg.muted" display="inline-flex">
            <IconCube />
          </chakra.span>
          <span>
            <b>{m.subtask_label({ index }, { locale })}</b>:{" "}
            {m.subtask_score({ score }, { locale })}
          </span>
        </Text>
      </chakra.span>
      <chakra.span>{children}</chakra.span>
    </SubtaskContainer>
  );
};
