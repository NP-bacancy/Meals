import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MealsNavigator from "./mealsNavigator";
import FavsNavigator from "./favsNavigator";
import Color from "../constants/color";
import FavouriteContextProvider from "../store/context/favContext";

const MealsFavTabNavigator = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <FavouriteContextProvider>
      <MealsFavTabNavigator.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (route.name === "Home") {
              <Ionicons
                name="Home"
                color={focused ? Color.primary : Color.secondary}
                size={15}
              />;
            } else if (route.name === "Favourite") {
              <Ionicons
                name="star-half"
                color={focused ? Color.primary : Color.secondary}
                size={15}
              />;
            }
          },
        })}
      >
        <MealsFavTabNavigator.Screen name="Home" component={MealsNavigator} />
        <MealsFavTabNavigator.Screen
          name="Favourite"
          component={FavsNavigator}
        />
      </MealsFavTabNavigator.Navigator>
    </FavouriteContextProvider>
  );
};

export default TabsNavigator;
