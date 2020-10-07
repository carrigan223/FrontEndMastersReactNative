import React from 'react';
import { FlatList } from 'react-native';
import styles from '../styles';
import ColorBox from '../components/ColorBox';

//this screen is displaying the selected palkette
//we use flatlist to render this , not map(),
// upon choosing a palette on our home page we are passing
//the data for the flatlist to be rendered is being passed
// by useing navigation props. We then use color box component
//to uniformly display our various colors
const ColorPalette = ({ route }) => {
  return (
    <FlatList
      style={styles.container}
      data={route.params.colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};

export default ColorPalette;
