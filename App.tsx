import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./src/screens/CategoriesScreen";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverviewScreen } from "./src/screens/MealsOverviewScreen";
import { MealDetailScreen } from "./src/screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

// interface MealsOverviewScreenProps {
//   navigation: any;
//   route?: {
//     params?: {
//       categoryId?: string;
//     };
//   };
// }

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
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}

            // No need to use options here because i can use this options inside the component <MealsOverviewScreen>
            // options={({ navigation, route }: MealsOverviewScreenProps) => {
            //   // Verificando se params está presente e acessando categoryId
            //   const catId = route?.params?.categoryId ?? "Default Title";
            //   return {
            //     title: catId, // Usando o categoryId como título
            //   };
            // }}
          />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
