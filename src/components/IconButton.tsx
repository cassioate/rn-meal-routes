import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  iconName: any;
  iconSize: number;
  iconColor: string;
  onPress: () => void;
}

export function IconButton({ iconName, iconSize, iconColor, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedStyle}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor}></Ionicons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.5,
  },
});
