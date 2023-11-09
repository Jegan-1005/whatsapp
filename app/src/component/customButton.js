//import package
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//import helper
import {Colors} from '../helper/colors';
import {Fonts} from '../helper/Fonts';

const CustomButton = props => {
  return (
    <View style={styles.contentContainer}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Fonts.MEDIUM,
    textTransform: 'uppercase',
  },
});
export default CustomButton;
