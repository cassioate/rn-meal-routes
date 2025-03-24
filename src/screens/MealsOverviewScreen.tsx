import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components/Mealitem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { useLayoutEffect } from "react";

interface Props {
  navigation?: NativeStackNavigationProp<ParamListBase, string, undefined>;
  route?: { params: { categoryId: string } };
}

export function MealsOverviewScreen({ route, navigation }: Props) {
  const catId = route?.params.categoryId || "";

  // Estou apenas verificando se existe pelo menos um catId dentro de um array nos objetos MEALS
  const displayedMeals = MEALS.filter(
    (value) => value.categoryIds.indexOf(catId ? catId : "") >= 0
  );

  useLayoutEffect(() => {
    // This is the best way to use this options in navigation
    navigation?.setOptions({
      title: CATEGORIES.find((category) => category.id === catId)?.title,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData: any) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.title}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
