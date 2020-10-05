import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// This component is the colorboxes, it is being passed props
// so we have the ability dynamicly assign the colors while utililizing
const ColorBox = (props) => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };

  //textColor has the property color deciding on black orwhite
  //for the text depending on the hexcode of the background color
  //we are using parseint() turn the hexcode into an interger and compare the contrast
  //against the setting of 1.1 to decide if displayed in black or
  //white, if divided by a higher number the result is more likely to be black
  const textColor = {
    color:
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={[styles.text, textColor]}>
        {props.colorName}
        {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  box: {
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorBox;
