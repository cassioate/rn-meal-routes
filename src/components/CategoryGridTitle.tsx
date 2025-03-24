import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

export default function CategoryGridTitle({ title, color, onPress }: Props) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // Usei o gridItem dessa forma apenas para mostrar o uso do Platform.select(), pois elevation so funciona em android e o shadowOffset, shadowRadius, shadowOpacity funcionam apenas no IOS
  gridItem:
    Platform.select({
      android: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "#fff",
        shadowColor: "#000",
        overflow: "hidden",
      },
      ios: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }) || {},
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
