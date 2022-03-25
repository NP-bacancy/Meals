import React, { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { LogBox } from "react-native";

import HeaderButton from "../components/headerButton";
import MyStyle from "../constants/defaultStyles";
import GridCard from "../components/gridCard";
// import Color from '../constants/color';

import { CATEGORIES } from "../data/dummy-data";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <GridCard
        onTap={() => {
          props.navigation.navigate("CategoryMealScreen", {
            categoryId: itemData.item.id,
          });
        }}
        title={itemData.item.title}
        bgColor={itemData.item.bgColor}
      />
    );
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Crunchy Cuisine",
      headerLeft: () => (
        <HeaderButton
          title="Menu"
          iconName="md-menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      ),
    });
  }, [props.navigation]);

  return (
    <View style={MyStyle.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    height: 150,
    width: Dimensions.get("window").width * 0.45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryScreen;
