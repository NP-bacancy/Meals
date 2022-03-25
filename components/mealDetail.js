/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

import Color from "../constants/color";

const MealCard = (props) => {
  return (
    <ScrollView>
      <View style={styles.gridItem}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: props.item.imageUrl }}
            style={styles.img}
            resizeMode="cover"
          />
          {/* <Text style={styles.gridTitle}>{props.item.title}</Text> */}
        </View>
        <View style={styles.subContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.gridSubTitle}>{props.item.affordability}</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.gridSubTitle}>{props.item.duration}min</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.gridSubTitle}>{props.item.complexity}</Text>
          </View>
        </View>
        <View>
            <View>
                <Text>Ingredients</Text>
            </View>
            <View>
                {props.item.ingredients.map((ingredient) => <Text key={ingredient} >{ingredient}</Text>)}
            </View>
        </View>
        <View>
            <View>
                <Text>Step To Proceed</Text>
            </View>
            <View>
                {props.item.steps.map((steps) => <Text key={steps} >{steps}</Text>)}
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: "center",
    // margin: 10,
    padding: 10,
    width: Dimensions.get("window").width,
    backgroundColor: Color.secondary,
    // borderWidth: 1,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    // borderWidth: 1,
  },
  subTitleContainer: {
    flex: 1,
    alignItems: "center",
    padding: 2,
    borderWidth: 1,
    borderColor: Color.primary,
    backgroundColor: "rgba(0, 255, 255, 0.2)",
  },
  gridTitle: {
    // fontFamily: 'Hubballi-Regular',
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    color: Color.tertiary,
  },
  gridSubTitle: {
    // fontWeight: "bold",
    alignItems: "center",
    color: Color.tertiary,
    fontSize: 12,
    textTransform: "uppercase",
  },
  imgContainer: {
    overflow: "hidden",
    width: Dimensions.get("window").width * 0.945,
    height: Dimensions.get("window").height * 0.3,
    borderWidth: 1,
    borderColor: Color.primary,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default MealCard;
