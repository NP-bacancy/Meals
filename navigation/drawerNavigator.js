import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabsNavigator from "./tabsNavigator";
import FiltersNavigator from "./filtersNavigator";
import Color from "../constants/color";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Meals" component={TabsNavigator} />
      <Drawer.Screen name="Filter" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
