import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Color from "../constants/color";

const customHeaderButton = (props) => {
  return (
    <TouchableOpacity style={styles.btn} {...props} onPress={props.onPress}>
      <Ionicons name={props.iconName} size={25} color={Color.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 2,
  },
});

export default customHeaderButton;
