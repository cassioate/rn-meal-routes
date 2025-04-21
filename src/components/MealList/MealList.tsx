import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "../Mealitem";

interface Props {
  mealsItens: any[];
}

export function MealList({ mealsItens }: Props) {
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
        data={mealsItens}
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
