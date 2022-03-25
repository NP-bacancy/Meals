import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainNavigator from "./navigation/mainNavigator";
import MyStyle from "./constants/defaultStyles";

enableScreens();

const App = () => {
  const [fontLoaded] = useFonts({
    "Kanit-Medium": require("./assets/fonts/Kanit-Medium.ttf"),
    "Fredoka-Medium": require("./assets/fonts/Fredoka-Medium.ttf"),
    "ZillaSlab-Bold": require("./assets/fonts/ZillaSlab-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <MainNavigator />;
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "ZillaSlab-Bold",
    fontSize: 30,
  },
});

export default App;
