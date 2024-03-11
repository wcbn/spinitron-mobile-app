import { TouchableOpacity } from "react-native";
import * as React from "react";

import { useNavigation } from "@react-navigation/native";
import { StackNav } from "../../nav/types";
import { AppText } from "../../ui/AppText";
import { useTheme } from "../../theme/useTheme";

interface PersonaLinkProps {
  id: number;
  text: string;
}

export function PersonaLink(props: PersonaLinkProps) {
  const theme = useTheme();
  const nav = useNavigation<StackNav>();

  return (
    <TouchableOpacity
      onPress={() =>
        nav.push("Persona", {
          id: props.id,
          name: props.text,
        })
      }
    >
      <AppText style={{ fontStyle: "italic" }}>
        <AppText>with </AppText>
        <AppText style={{ color: theme.nav.colors.primary }}>
          {props.text}
        </AppText>
      </AppText>
    </TouchableOpacity>
  );
}