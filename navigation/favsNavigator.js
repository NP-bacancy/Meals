import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";

import MealDetailScreen from "../screens/mealDetailScreen";
import FavouriteScreen from "../screens/favouriteScreen";
import Color from "../constants/color";

const FavNavigator = createNativeStackNavigator();

const FavsNavigator = () => {
  return (
    <FavNavigator.Navigator
      initialRouteName="Your Favourite"
      screenOptions={{
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: Color.tertiary,
      }
    }}>
      <FavNavigator.Screen 
        name="Your Favourite"
        component={FavouriteScreen}
        options={{
          headerTitleStyle: {
            fontFamily: "Fredoka-Medium",
            fontSize: 30,
            color: Color.secondary
          }
        }}
      />
      <FavNavigator.Screen 
        name="MealDetailScreen"
        component={MealDetailScreen}
      />
    </FavNavigator.Navigator>
  )
}

export default FavsNavigator;
