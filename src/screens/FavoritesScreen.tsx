import { useContext } from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../store/context/Favorite-context";

interface Props {}

export function FavoritesScreen() {
  const favoriteContext = useContext(FavoritesContext);

  return <Text>{favoriteContext.ids}</Text>;
}
