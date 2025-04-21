import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: "Favoritos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size}></Ionicons>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
