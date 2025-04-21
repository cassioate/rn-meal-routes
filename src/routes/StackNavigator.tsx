import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigator } from "./DrawerNavigator";
import { MealsOverviewScreen } from "../screens/MealsOverviewScreen";
import { MealDetailScreen } from "../screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

interface MealsOverviewScreenProps {
  navigation: any;
  route?: {
    params?: {
      mealId?: string;
    };
  };
}

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          title: "All Categories",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MealsOverviewScreen"
        component={MealsOverviewScreen}
      />
      <Stack.Screen
        name="MealDetailScreen"
        options={{ title: "About the Meal" }}
      >
        {({ navigation, route }: MealsOverviewScreenProps) => (
          <MealDetailScreen navigation={navigation} route={route} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
