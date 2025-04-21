import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./src/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverviewScreen } from "./src/screens/MealsOverviewScreen";
import { MealDetailScreen } from "./src/screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoritesScreen } from "./src/screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

interface MealsOverviewScreenProps {
  navigation: any;
  route?: {
    params?: {
      mealId?: string;
    };
  };
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: "FavoritesScreen",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        translucent={true}
        hidden={false}
        // backgroundColor="white"
      ></StatusBar>
      <NavigationContainer>
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
      </NavigationContainer>
    </>
  );
}
