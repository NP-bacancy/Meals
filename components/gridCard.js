/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';

import Color from '../constants/color';

const GridCard = props => {
    return (
        <TouchableOpacity onPress={() => {props.onTap();}}>
        <View style={[styles.gridItem, {backgroundColor: props.bgColor}]}>
            <Text style={styles.gridTitle}>
            {props.title}
            </Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
gridItem: {
    flex: 1,
    margin: 10,
    padding:10,
    height: 150,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
},
gridTitle: {
    // fontFamily: 'Hubballi-Regular',
    fontSize: 20,
    fontWeight: 'bold',
},
});

export default GridCard;
