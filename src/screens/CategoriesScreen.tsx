import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import Category from "../models/category";

function renderCategoryItem(
  item: ListRenderItemInfo<Category>,
  navigation: any
) {
  function pressHandler() {
    navigation.navigate("MealsOverviewScreen", { categoryId: item.item.id });
  }

  return (
    <CategoryGridTitle
      title={item.item.title}
      color={item.item.color}
      onPress={pressHandler}
    ></CategoryGridTitle>
  );
}

interface Props {
  navigation: any;
}

export function CategoriesScreen({ navigation }: Props) {
  const numColumns = 2;
  return (
    <FlatList
      key={numColumns.toString()}
      numColumns={numColumns}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item, navigation)}
    ></FlatList>
  );
}
