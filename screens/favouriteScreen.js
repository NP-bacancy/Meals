import React, { useLayoutEffect, useContext } from "react";

import HeaderButton from "../components/headerButton";
import {FavouriteContext} from "../store/context/favContext";

import MealList from "../components/mealList";

import { MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {

  const FavouriteMealsCtx = useContext(FavouriteContext);

  // const ids = FavoriteMealsCtx.ids;

  const displayedMeals = MEALS.filter(
    (meals) => FavouriteMealsCtx.ids.includes(meals.id)
  );

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Your Favourites",
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
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  );
};

export default CategoryMealScreen;
