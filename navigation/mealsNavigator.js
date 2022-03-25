import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import CategoryScreen from "../screens/categoryScreen";
import CategoryMealScreen from "../screens/categoryMealScreen";
import MealDetailScreen from "../screens/mealDetailScreen";
import Color from "../constants/color";

const MealNavigator = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <MealNavigator.Navigator
      initialRouteName="CategoryScreen"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Color.tertiary,
        },
      }}
    >
      <MealNavigator.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerTitleStyle: {
            fontFamily: "ZillaSlab-Bold",
            fontSize: 30,
            color: Color.primary,
          },
        }}
      />
      <MealNavigator.Screen
        name="CategoryMealScreen"
        component={CategoryMealScreen}
        options={{
          headerTitleStyle: {
            fontFamily: "Fredoka-Medium",
            fontSize: 30,
            color: Color.secondary,
          },
        }}
      />
      <MealNavigator.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
      />
    </MealNavigator.Navigator>
  );
};

export default MealsNavigator;
