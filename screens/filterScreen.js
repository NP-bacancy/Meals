import React, { useState, useLayoutEffect } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/headerButton";
import MyStyle from "../constants/defaultStyles";
import Color from "../constants/color";
import { toggleGluten } from "../store/redux/glutenFree";
import { toggleLactose } from "../store/redux/lactoseFree";
import { toggleVegan } from "../store/redux/vegan";
import { toggleVegetarian } from "../store/redux/vegetarian";

const FilterScreen = (props) => {
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [filterApplied, setFilterApplied] = useState(false);

  const dispatch = useDispatch();

  function filterHandler() {
    dispatch(toggleGluten({ flag: glutenFree }));
    dispatch(toggleLactose({ flag: lactoseFree }));
    dispatch(toggleVegan({ flag: vegan }));
    dispatch(toggleVegetarian({ flag: vegetarian }));
    setFilterApplied(false);
    console.log("Filter Applied");
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Your Filters",
      headerLeft: () => (
        <HeaderButton
          title="Menu"
          iconName="md-menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      ),
      headerRight: () => (
        <HeaderButton
          title="Save"
          iconName={filterApplied ? "save" : "save-outline"}
          onPress={filterHandler}
        />
      ),
    });
  }, [props.navigation, filterApplied, filterHandler]);

  useLayoutEffect(() => {
    setFilterApplied(true);
    console.log("Something Changed");
  }, [glutenFree, lactoseFree, vegan, vegetarian]);

  return (
    <View style={[MyStyle.screen, { justifyContent: "flex-start" }]}>
      <View style={styles.switchContainer}>
        <Text style={styles.filterText}>Gluten Free</Text>
        <Switch
          trackColor={{ false: Color.tertiary, true: Color.tertiary }}
          thumbColor={glutenFree ? Color.primary : Color.secondary}
          value={glutenFree}
          onValueChange={() => setGlutenFree(!glutenFree)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.filterText}>Lactose Free</Text>
        <Switch
          trackColor={{ false: Color.tertiary, true: Color.tertiary }}
          thumbColor={lactoseFree ? Color.primary : Color.secondary}
          value={lactoseFree}
          onValueChange={() => setLactoseFree(!lactoseFree)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.filterText}>Vegan</Text>
        <Switch
          trackColor={{ false: Color.tertiary, true: Color.tertiary }}
          thumbColor={vegan ? Color.primary : Color.secondary}
          value={vegan}
          onValueChange={() => setVegan(!vegan)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.filterText}>Vegetarian</Text>
        <Switch
          trackColor={{ false: Color.tertiary, true: Color.tertiary }}
          thumbColor={vegetarian ? Color.primary : Color.secondary}
          value={vegetarian}
          onValueChange={() => setVegetarian(!vegetarian)}
        />
      </View>
    </View>
  );
};

FilterScreen.navigationOptions = (navigationData) => {
  return {};
};

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
  },
  filterText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.dark,
  },
});

export default FilterScreen;
