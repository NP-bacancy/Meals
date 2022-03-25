import React from "react";
import { FlatList, StyleSheet } from "react-native";

import MealCard from "./mealCard";
import Color from "../constants/color";

const MealList = (props) => {
  const renderMealGrid = (itemData) => {
    return (
      <MealCard
        onTap={() => {
          props.navigation.navigate("MealDetailScreen", {
            mealId: itemData.item.id,
          });
        }}
        item={itemData.item}
      />
    );
  };

  return <FlatList data={props.displayedMeals} renderItem={renderMealGrid} />;
};

const styles = StyleSheet.create({});

export default MealList;
