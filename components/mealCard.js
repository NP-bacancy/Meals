import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import Color from "../constants/color";
import MyStyle from "../constants/defaultStyles";

const MealCard = (props) => {
  return (
    <TouchableOpacity
      style={[MyStyle.screen, { backgroundColor: "transparent" }]}
      onPress={() => {
        props.onTap();
      }}
    >
      <View style={styles.gridItem}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: props.item.imageUrl }}
            // blurRadius={3}
            style={styles.img}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.gridTitle}>{props.item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.primary,
    width: Dimensions.get("window").width * 0.9,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Color.secondary,
  },
  titleContainer: {
    padding: 10,
    paddingTop: 0,
    // borderWidth: 3,
    // borderWidth: 1,
  },
  gridTitle: {
    // fontFamily: 'Hubballi-Regular',
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    color: Color.tertiary,
    borderBottomWidth: 2,
    borderColor: Color.primary,
  },
  imgContainer: {
    overflow: "hidden",
    width: "90%",
    height: "50%",
    borderWidth: 1,
    borderColor: Color.light,
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: Color.tertiary,
  },
});

export default MealCard;
