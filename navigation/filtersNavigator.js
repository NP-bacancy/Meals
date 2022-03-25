import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import FilterScreen from "../screens/filterScreen";
import Color from "../constants/color";

const FilterNavigator = createNativeStackNavigator();

const FiltersNavigator = () => {
  return (
    <FilterNavigator.Navigator
      initialRouteName="Filters"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Color.tertiary,
        },
      }}
    >
      <FilterNavigator.Screen
        name="Filters"
        component={FilterScreen}
        options={{
          headerTitleStyle: {
            fontFamily: "ZillaSlab-Bold",
            fontSize: 30,
            color: Color.primary,
          },
        }}
      />
    </FilterNavigator.Navigator>
  );
};

export default FiltersNavigator;
