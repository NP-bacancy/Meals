import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import DrawerNavigator from "./drawerNavigator";
// import FavouriteContextProvider from "../store/context/favContext";
import { store } from "../store/redux/store";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>
        <DrawerNavigator />
      </Provider>
      {/* </FavouriteContextProvider> */}
    </NavigationContainer>
  );
};

export default MainNavigator;
