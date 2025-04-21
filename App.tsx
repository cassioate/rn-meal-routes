import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesContextProvider } from "./src/store/context/Favorite-context";
import StackNavigator from "./src/routes/StackNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        translucent={true}
        hidden={false}
        // backgroundColor="white"
      ></StatusBar>
      <FavoritesContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
