import { useContext } from "react";
import { FavoritesContext } from "../store/context/Favorite-context";
import { MealList } from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

export function FavoritesScreen() {
  const favoriteContext = useContext(FavoritesContext);

  const displayedMeals = MEALS.filter((value: any) =>
    favoriteContext.ids.includes(value.id)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealList mealsItens={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
