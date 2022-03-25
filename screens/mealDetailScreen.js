import React, { useLayoutEffect, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import HeaderButton from "../components/headerButton";

import MyStyle from "../constants/defaultStyles";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/mealDetail";
import Color from "../constants/color";
import {FavouriteContext} from "../store/context/favContext";

const MealDetailScreen = (props) => {
  const FavouriteMealCtx = useContext(FavouriteContext);

  const { mealId } = props.route.params;

  const mealType = MEALS.find((m) => m.id === mealId);

  const mealIsFavorite = FavouriteMealCtx.ids.includes(mealId);

  function favToggleHandler() {
    if(mealIsFavorite) {
      FavouriteMealCtx.removeFavourite(mealId);
    } else {
      FavouriteMealCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: mealType.title,
      headerTitleStyle: {
        fontSize:
          mealType.title.length > 30
            ? 16
            : mealType.title.length > 20
            ? 22
            : 30,
        fontFamily: "ZillaSlab-Bold",
        color: Color.accent,
      },
      headerLeft: () => (
        <HeaderButton
          title="Menu"
          iconName="md-menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      ),
      headerRight: () => (
        <HeaderButton
          title="Favorite"
          iconName={mealIsFavorite ? "ios-star" : "ios-star-outline"}
          onPress={favToggleHandler}
        />
      ),
    });
  }, [props.navigation, favToggleHandler]);

  return <MealDetail item={mealType} />;
};

const styles = StyleSheet.create({});

export default MealDetailScreen;
