import { CATEGORIES, MEALS } from "../data/dummy-data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { MealList } from "../components/MealList/MealList";

interface Props {
  navigation?: NativeStackNavigationProp<ParamListBase, string, undefined>;
  route?: { params: { categoryId: string } };
}

export function MealsOverviewScreen({ route, navigation }: Props) {
  const catId = route?.params.categoryId || "";

  const displayedMeals = MEALS.filter(
    (value) => value.categoryIds.indexOf(catId ? catId : "") >= 0
  );

  useLayoutEffect(() => {
    navigation?.setOptions({
      title: CATEGORIES.find((category) => category.id === catId)?.title,
    });
  }, [catId, navigation]);

  return <MealList mealsItens={displayedMeals} />;
}
