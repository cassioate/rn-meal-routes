import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { IconButton } from "../components/IconButton";
import { FavoritesContext } from "../store/context/Favorite-context";

interface Props {
  mealId?: string;
  route?: { params?: { mealId?: string } } | undefined;
  navigation?: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

export function MealDetailScreen({ route, navigation }: Props) {
  const favoriteContext = useContext(FavoritesContext);

  const mealId = route?.params?.mealId || "";

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteContext.ids.includes(mealId);

  function headerButtonPressHandler() {
    mealIsFavorite
      ? favoriteContext.removeFavorite(mealId)
      : favoriteContext.addFavorite(mealId);
  }

  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => {
        return (
          <IconButton
            iconName={mealIsFavorite ? "star" : "star-outline"}
            iconColor="white"
            iconSize={24}
            onPress={headerButtonPressHandler}
          ></IconButton>
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
