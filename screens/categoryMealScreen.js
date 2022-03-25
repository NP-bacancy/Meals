import React, { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import HeaderButton from "../components/headerButton";
import MealList from "../components/mealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const { categoryId } = props.route.params;

  const glutenFlag = useSelector((state) => state.glutenFree.glutenState);
  const lactoseFlag = useSelector((state) => state.lactoseFree.lactoseState);
  const veganFlag = useSelector((state) => state.vegan.veganState);
  const vegetarianFlag = useSelector(
    (state) => state.vegetarian.vegetarianState
  );

  // console.log("Gluten Flag", glutenFlag);

  const categoryType = CATEGORIES.find((c) => c.id === categoryId);

  const [categoryMeals, setCategoryMeals] = useState(
    MEALS.filter((meals) => meals.categoryIds.indexOf(categoryId) >= 0)
  );

  // console.log("Birth: ", categoryMeals);
  useLayoutEffect(() => {
    if (glutenFlag) {
      setCategoryMeals((current) =>
        current.filter((meals) => meals.isGlutenFree == true)
      );
    }
    if (lactoseFlag) {
      setCategoryMeals((current) =>
        current.filter((meals) => meals.isLactoseFree == true)
      );
    }
    if (veganFlag) {
      setCategoryMeals((current) =>
        current.filter((meals) => meals.isVegan == true)
      );
    }
    if (vegetarianFlag) {
      setCategoryMeals((current) =>
        current.filter((meals) => meals.isVegetarian == true)
      );
    }
  }, [glutenFlag, lactoseFlag, veganFlag, vegetarianFlag]);

  // const displayedMeals = () => {
  //   if (glutenFlag) {
  //     categoryMeals = categoryMeals.map(
  //       (meals) => console.log("============Meal: =====================\n", meals)
  //     );
  //   }
  //   return categoryMeals;
  // };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: categoryType.title,
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
    <MealList displayedMeals={categoryMeals} navigation={props.navigation} />
  );
};

export default CategoryMealScreen;
