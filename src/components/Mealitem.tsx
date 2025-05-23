import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

interface NavigationPropMealDetailScreen {
  MealDetailScreen: { mealId: string };
}

export function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Props) {
  // Todos os navigation abaixo funcionam
  // const navigation = useNavigation<any>();
  // const navigation = useNavigation<NavigationProp<any>>();
  const navigation =
    useNavigation<NavigationProp<NavigationPropMealDetailScreen>>();

  function selectMealItemHandler() {
    navigation.navigate("MealDetailScreen", { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
