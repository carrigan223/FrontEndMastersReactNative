import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// This component is the colorboxes, it is being passed props
// so we have the ability dynamicly assign the colors while utililizing
const ColorBox = (props) => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };
  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={styles.text}>
        {props.colorName}
        {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: 'white',
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
